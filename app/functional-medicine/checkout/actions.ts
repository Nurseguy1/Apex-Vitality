'use server';
import {redirect} from 'next/navigation';
import {functionalTier,createFunctionalCheckout} from '../../lib/functional-memberships';
export async function beginFunctionalCheckout(form:FormData):Promise<void>{
 const tier=functionalTier(form.get('tier'));if(!tier)redirect('/functional-medicine/services');
 const back=`/functional-medicine/checkout?tier=${tier}`;
 if(form.get('renewal')!=='yes'||form.get('terms')!=='yes')redirect(`${back}&error=acknowledgments`);
 const requestId=form.get('requestId');const secret=process.env.STRIPE_SECRET_KEY;
 if(typeof requestId!=='string'||! /^[a-f0-9-]{36}$/.test(requestId)||!secret)redirect(`${back}&error=unavailable`);
 let url:string;try{url=await createFunctionalCheckout(tier,requestId,secret);}catch{redirect(`${back}&error=unavailable`);}
 redirect(url);
}
