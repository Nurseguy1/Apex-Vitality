export const functionalMemberships = {
 gold: { name:'Gold Plan', monthly:49900, setup:50000 },
 platinum: { name:'Platinum Plan', monthly:79900, setup:300000 },
} as const;
export type FunctionalTier=keyof typeof functionalMemberships;
export function functionalTier(value:unknown):FunctionalTier|null{return typeof value==='string'&&Object.hasOwn(functionalMemberships,value)?value as FunctionalTier:null;}
export const dollars=(amount:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(amount/100);

export async function createFunctionalCheckout(tier:FunctionalTier,requestId:string,secret:string){
 const offer=functionalMemberships[tier];
 const headers={Authorization:`Bearer ${secret}`,'Content-Type':'application/x-www-form-urlencoded'};
 async function stripe(path:string,body?:URLSearchParams,key?:string){
  const response=await fetch(`https://api.stripe.com/v1/${path}`,{method:body?'POST':'GET',headers:{...headers,...(key?{'Idempotency-Key':key}:{})},body,cache:'no-store',signal:AbortSignal.timeout(15000)});
  if(!response.ok)throw new Error('Checkout unavailable');return response.json();
 }
 async function price(kind:'monthly'|'setup',amount:number){
  const lookup=`apex_fm_${tier}_${kind}_v1`;
  const listed=await stripe(`prices?lookup_keys[]=${lookup}&active=true&limit=2&expand[]=data.product`);
  if(listed.data?.length>1)throw new Error('Duplicate price');
  let found=listed.data?.[0];
  if(!found){
   const productId=`apex_fm_${tier}_${kind}_v1`;
   const check=await fetch(`https://api.stripe.com/v1/products/${productId}`,{headers,cache:'no-store',signal:AbortSignal.timeout(15000)});
   let product;
   if(check.status===404){product=await stripe('products',new URLSearchParams({id:productId,name:`Apex ${offer.name}${kind==='setup'?' — One-time Setup':''}`,'metadata[apex_fm_tier]':tier,'metadata[apex_fm_kind]':kind}),`apex-product-${lookup}`);}
   else if(check.ok){product=await check.json();}else throw new Error('Product unavailable');
   if(product.id!==productId||product.metadata?.apex_fm_tier!==tier||product.metadata?.apex_fm_kind!==kind||!product.active)throw new Error('Product mismatch');
   const data=new URLSearchParams({product:product.id,currency:'usd',unit_amount:String(amount),lookup_key:lookup});
   if(kind==='monthly'){data.set('recurring[interval]','month');}
   found=await stripe('prices',data,`apex-price-${lookup}`);
  }
  const product=found.product;
  if(found.unit_amount!==amount||found.currency!=='usd'||!found.active||found.livemode!==secret.startsWith('sk_live_')||found.lookup_key!==lookup||
    (kind==='monthly'?(found.type!=='recurring'||found.recurring?.interval!=='month'||found.recurring?.interval_count!==1):found.type!=='one_time')||
    (typeof product==='string'?product!==`apex_fm_${tier}_${kind}_v1`:product.id!==`apex_fm_${tier}_${kind}_v1`||product.metadata?.apex_fm_tier!==tier||product.metadata?.apex_fm_kind!==kind))throw new Error('Price mismatch');
  return found.id as string;
 }
 const monthly=await price('monthly',offer.monthly);
 const setup=offer.setup?await price('setup',offer.setup):null;
 const body=new URLSearchParams({mode:'subscription','line_items[0][price]':monthly,'line_items[0][quantity]':'1',billing_address_collection:'required',success_url:'https://www.goapexvitality.com/functional-medicine/welcome?session_id={CHECKOUT_SESSION_ID}',cancel_url:`https://www.goapexvitality.com/functional-medicine/checkout?tier=${tier}`,'metadata[apex_fm_tier]':tier,'metadata[apex_renewal_authorized]':'true','metadata[apex_agreement_accepted_at]':new Date().toISOString(),'subscription_data[metadata][apex_fm_tier]':tier});
 if(setup){body.set('line_items[1][price]',setup);body.set('line_items[1][quantity]','1');}
 const session=await stripe('checkout/sessions',body,`apex-fm-checkout-${requestId}`);
 const url=new URL(session.url);if(url.protocol!=='https:'||url.hostname!=='checkout.stripe.com')throw new Error('Invalid checkout');return url.toString();
}
