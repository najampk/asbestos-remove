import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { ADDRESS_ONE_LINE, BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms governing use of the Asbestos Remove website and our quotations and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="These terms cover use of this website and the basis on which we quote for and provide asbestos-related services."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions", href: "/terms" }]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <article className="legal-copy rounded-2xl border border-line bg-white p-6 shadow-card sm:p-10">
            <p><strong>Last updated:</strong> 11 July 2026</p>
            <h2>1. About us and these terms</h2>
            <p>Asbestos Remove is the trading name of {BUSINESS.legalName}, registered in Scotland under company number {BUSINESS.companyNumber}, with its business address at {ADDRESS_ONE_LINE}. You can contact us at <a href={`mailto:${BUSINESS.emailGeneral}`}>{BUSINESS.emailGeneral}</a> or <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>.</p>
            <p>These terms apply to this website and, together with our written quotation and any agreed scope or project documents, to services we provide. If a written quotation expressly conflicts with these general terms, the quotation takes priority for that project. Nothing in these terms limits rights that cannot lawfully be excluded, including statutory consumer rights.</p>

            <h2>2. Website information and enquiries</h2>
            <p>Website content is general information and is not a survey, laboratory result, legal opinion or site-specific safety advice. Asbestos cannot be reliably identified from a photograph alone. Do not disturb suspected material; where there is immediate danger, leave the area and contact an appropriate emergency or competent authority.</p>
            <p>Submitting an enquiry does not create a contract and does not guarantee that we can undertake the work. A contract begins only when you accept our written quotation or we otherwise confirm acceptance in writing.</p>

            <h2>3. Quotations and scope</h2>
            <p>Unless stated otherwise, quotations are valid for 30 days and are based on the information and access available when prepared. The quotation will describe the included work, price, assumptions and any exclusions. Testing, laboratory analysis, air monitoring, scaffolding, electrical isolation, reinstatement, licensed asbestos work and third-party fees are included only where expressly stated.</p>
            <p>If concealed conditions, inaccurate information, additional materials, unsafe access or work outside the agreed scope becomes apparent, we will explain the issue and seek agreement to a revised price or variation before proceeding, except where immediate action is reasonably required to make the site safe.</p>

            <h2>4. Your responsibilities</h2>
            <p>You must provide accurate information, disclose known surveys and hazards, confirm that you are authorised to instruct the work, and provide safe and timely access to the property. You must keep occupants, visitors, pets and other contractors outside agreed exclusion areas and follow safety instructions.</p>
            <p>Unless agreed otherwise, you are responsible for arranging access, parking, utilities and permissions from owners, landlords, factors, neighbours or other relevant parties. Delays or additional costs caused by missing access, undisclosed hazards or inaccurate information may be charged where reasonable and evidenced.</p>

            <h2>5. How we provide services</h2>
            <p>We will perform services with reasonable care and skill, in accordance with the agreed scope and applicable law. Dates are estimates unless expressly agreed as fixed. We may use appropriately competent employees, laboratories, waste carriers, consultants or subcontractors.</p>
            <p>Our advertised scope includes non-licensed and notifiable non-licensed work. If licensable material or work outside our competence or authorisation is identified, we may pause or decline that part and recommend an appropriately licensed contractor.</p>

            <h2>6. Price and payment</h2>
            <p>Prices and any applicable VAT treatment will be stated in the quotation. Payment stages, deposits and due dates will also be stated there. You must raise genuine invoice queries promptly so that undisputed amounts can still be paid on time.</p>
            <p>For business customers, we may charge statutory interest and recovery costs on overdue commercial debts where legally permitted. For consumers, any interest or recovery cost must be reasonable, proportionate and stated in the quotation or invoice. We will not use these terms to impose a disproportionate penalty.</p>

            <h2>7. Consumer cancellation rights</h2>
            <p>If you are a consumer and make the contract online, by telephone or away from our business premises, you will usually have 14 days from the day after the contract is made to cancel without giving a reason, subject to statutory exceptions. You may cancel by a clear statement sent to our email or postal address; no special wording is required.</p>
            <p>If you ask us in writing to begin during the cancellation period and then cancel before completion, you may have to pay a reasonable amount proportionate to work already supplied. If the service is fully performed during that period following your express request and acknowledgement, the statutory cancellation right may end. We will provide any legally required cancellation information and model form with the contract documentation.</p>

            <h2>8. Other cancellations and postponements</h2>
            <p>After any statutory cancellation period, either party may ask to postpone or cancel. Where you cancel, we may retain or charge only reasonable, evidenced losses that we cannot avoid, such as committed third-party costs or work already completed. We will take reasonable steps to reduce those losses.</p>
            <p>We may suspend or cancel work for non-payment, unsafe conditions, abusive conduct, lack of access, inaccurate material information, legal restrictions or circumstances beyond reasonable control. Except in an urgent safety situation or serious breach, we will give reasonable notice and an opportunity to resolve the issue. If we cancel when you are not at fault, we will refund advance payments for work not supplied.</p>

            <h2>9. Completion, concerns and complaints</h2>
            <p>Please inspect the work when reasonably possible and tell us promptly about concerns. We will investigate and, where the service did not meet the contract or the required standard, seek to put it right within a reasonable time and without significant inconvenience.</p>
            <p>Complaints should be sent to {BUSINESS.emailGeneral} or our postal address with the project address and relevant details. Nothing in this section reduces remedies available under the Consumer Rights Act 2015 or other applicable law.</p>

            <h2>10. Responsibility when things go wrong</h2>
            <p>We are responsible for foreseeable loss or damage caused by our breach of contract or failure to use reasonable care and skill. We do not exclude or limit liability where doing so would be unlawful, including liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or breach of statutory consumer rights.</p>
            <p>We are not responsible for loss caused by inaccurate information, failure to follow safety instructions, pre-existing defects, concealed contamination outside the agreed scope, or events beyond our reasonable control, except to the extent that we caused or should reasonably have prevented the loss. Consumers are not liable under these terms for business losses. Any limitation applying to a business customer will be stated in its project contract and remain subject to law.</p>

            <h2>11. Intellectual property and acceptable website use</h2>
            <p>Website text, graphics, branding and original materials belong to us or our licensors. You may view and print pages for personal or internal business use, but must not republish, sell, scrape or misuse them without permission. You must not interfere with the website, attempt unauthorised access, upload harmful material or use the enquiry form unlawfully.</p>

            <h2>12. Personal information</h2>
            <p>We process personal information as described in our <a href="/privacy-policy">Privacy Policy</a>. Project documents may contain personal or property information and should be stored and shared securely by both parties.</p>

            <h2>13. General</h2>
            <p>If part of these terms is found unenforceable, the remainder continues to apply. A delay in enforcing a right does not waive it. You may not transfer your contract without our written agreement; we may transfer it only where this does not reduce a consumer&rsquo;s rights. No person other than the parties has a right to enforce the contract, except where legislation provides otherwise.</p>

            <h2>14. Scottish law and courts</h2>
            <p>These terms and contracts are governed by Scots law. The Scottish courts will have jurisdiction, but if you are a consumer resident elsewhere in the UK you may also bring proceedings in the courts where you live and retain any mandatory protections available there.</p>
          </article>
        </Container>
      </section>
    </>
  );
}
