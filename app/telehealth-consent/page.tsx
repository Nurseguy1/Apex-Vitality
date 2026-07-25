import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export default function TelehealthConsentPage() {
  return (
    <main>
      <SiteHeader />
      <article className="legal-page">
        <p className="eyebrow">Telehealth informed consent</p>
        <h1>Consent to receive care through telehealth</h1>
        <p>
          This notice explains telehealth care through Apex Vitality. California law requires a health care provider to explain the use of telehealth, obtain the patient&apos;s verbal or written consent before delivering telehealth services, and document that consent. Your consent may be recorded through CharmHealth or documented by your clinician.
        </p>

        <h2>What telehealth means</h2>
        <p>
          Telehealth uses electronic communication to provide health care when you and the clinician are in different locations. Apex Vitality may use live video, telephone, secure messages, electronic questionnaires, photographs you submit, record review, remote monitoring information, or asynchronous store-and-forward communication when legally permitted.
        </p>

        <h2>Potential benefits</h2>
        <p>
          Telehealth can make care easier to access, reduce travel, support timely communication, and allow your clinician to review information and develop a plan with you from a convenient location.
        </p>

        <h2>Potential risks and limitations</h2>
        <p>
          Telehealth has limitations. Technology may fail or be interrupted. Electronic communications can carry privacy or security risks. A remote clinician may not have the same information available from a hands-on examination, and some conditions cannot be adequately assessed through telehealth alone. Delays can occur if information is incomplete, technology fails, testing is needed, or in-person care is more suitable. No method of care can guarantee a particular result.
        </p>

        <h2>Alternatives and choice</h2>
        <p>
          You may ask questions, decline telehealth, or withdraw this consent at any time without losing the right to seek future care. You may request in-person care from another available provider. Withdrawing consent does not affect care already provided, and Apex Vitality may be unable to continue a service that is offered only through telehealth.
        </p>

        <h2>Your responsibilities</h2>
        <p>
          You agree to provide complete and accurate health, medication, allergy, identity, and location information; update information when it changes; participate from a reasonably private and safe place; avoid driving during a visit; follow agreed monitoring and testing; and tell your clinician if another person is present. At the beginning of care, your clinician may confirm your identity, physical location, and emergency contact information.
        </p>

        <h2>Clinical decisions, prescriptions, and testing</h2>
        <p>
          Your clinician will consider your history, symptoms, lifestyle, goals, available records, and clinical findings holistically. Telehealth may include education, assessment, a care plan, laboratory orders, prescriptions, monitoring, referrals, or follow-up. Prescriptions are issued only when clinically appropriate and legally permitted. A clinician may recommend an in-person examination, additional records, testing, urgent evaluation, or care from another professional.
        </p>

        <h2>Compounded medication</h2>
        <p>
          If your plan includes compounded medication, it will be prepared by an independent licensed pharmacy pursuant to a patient-specific prescription. Compounded drugs are not FDA-approved, and the FDA does not review their safety, effectiveness, or quality before marketing. Your clinician will provide material treatment information and answer your questions as part of your care.
        </p>

        <h2>Privacy and recording</h2>
        <p>
          Apex Vitality uses reasonable safeguards and patient technology intended for health care communication. Even with safeguards, electronic communication has privacy and security risks. Participate from a private location when possible and use the secure Charm patient portal for medical information. Neither you nor Apex Vitality may record a telehealth interaction without the consent of everyone involved.
        </p>

        <h2>Emergencies and technical interruptions</h2>
        <p>
          Telehealth and secure messages are not emergency services. Call 911 or seek immediate in-person care for urgent or life-threatening concerns. If a visit disconnects, try to reconnect and follow the clinician&apos;s instructions. If you believe the situation has become urgent, do not wait for the connection to be restored.
        </p>

        <h2>Fees and third-party services</h2>
        <p>
          You are responsible for fees disclosed before purchase and for separate pharmacy, laboratory, shipping, or other third-party charges unless expressly listed as included. Apex Vitality does not guarantee insurance reimbursement. Independent platforms, pharmacies, laboratories, and carriers have their own terms and privacy practices.
        </p>

        <h2>Your acknowledgment</h2>
        <p>
          By selecting an electronic consent option, signing an assigned consent, or verbally consenting after this information is explained, you acknowledge that you are an adult patient; have read or had the opportunity to review this notice; understand the nature, benefits, risks, limitations, and alternatives of telehealth; have had an opportunity to ask questions; consent to receive telehealth services from Apex Vitality; and authorize your clinician to document this consent in your health record.
        </p>
        <p>
          This consent works together with the <Link href="/terms">Terms of Service</Link> and <Link href="/privacy">Privacy Notice</Link>.
        </p>
        <p className="legal-updated">Effective July 25, 2026.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
