import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import { ADDRESS_ONE_LINE, BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Asbestos Remove (Asbestos Removal Environmental Ltd, Glasgow) collects, uses and protects personal information when you browse or request a quote.",
  path: "/privacy-policy",
});

const updated = "11 July 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains what personal information we collect, why we use it, who we share it with and the rights available to you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <article className="legal-copy rounded-2xl border border-line bg-white p-6 shadow-card sm:p-10">
            <p><strong>Last updated:</strong> {updated}</p>
            <h2>1. Who we are</h2>
            <p>Asbestos Remove is the trading name of {BUSINESS.legalName}, a company registered in Scotland under company number {BUSINESS.companyNumber}. Our registered business address is {ADDRESS_ONE_LINE}. For UK data-protection law, we are the controller of personal information described in this policy.</p>
            <p>Questions or requests can be sent to <a href={`mailto:${BUSINESS.emailGeneral}`}>{BUSINESS.emailGeneral}</a>, by telephone on <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>, or by post to the address above.</p>

            <h2>2. Information we collect</h2>
            <p>We may collect your name, telephone number, email address, postcode, property type, service requirements, messages, and details about the property or suspected material. If you become a customer, we may also keep quotations, contracts, site records, correspondence, invoices, payment records and compliance documentation.</p>
            <p>Our website may collect technical information such as your IP address, browser, device, pages visited, referral source and approximate location through server logs and privacy-conscious website analytics. We do not intentionally collect special-category information through the quote form. Please do not include unnecessary personal or sensitive information in messages.</p>

            <h2>3. How and why we use information</h2>
            <ul>
              <li>To respond to enquiries, assess requested work and provide quotations. Our lawful basis is taking steps at your request before a contract and our legitimate interest in operating our business.</li>
              <li>To arrange and deliver services, manage projects, communicate with customers and take payment. Our lawful basis is performance of a contract.</li>
              <li>To maintain safety, waste, tax, accounting and other legally required records. Our lawful basis is compliance with legal obligations.</li>
              <li>To establish, exercise or defend legal claims and manage complaints. Our lawful basis is our legitimate interests and, where applicable, legal obligations.</li>
              <li>To secure, maintain and understand use of the website. Our lawful basis is our legitimate interest in providing a secure and effective service. Where non-essential cookies or similar technologies require consent, we will request it first.</li>
            </ul>
            <p>We do not use your information for automated decisions that produce legal or similarly significant effects. We do not sell personal information.</p>

            <h2>4. Where information comes from</h2>
            <p>Most information comes directly from you through the website, telephone, email, site visits or project communications. We may also receive information from a landlord, managing agent, contractor, surveyor, insurer or another person involved in a property or project. If you give us another person&rsquo;s information, please ensure you are entitled to do so.</p>

            <h2>5. Who we share information with</h2>
            <p>We share information only where reasonably necessary with service providers supporting website hosting, analytics, email delivery, file storage, accounting and professional advice; with surveyors, laboratories, waste facilities, subcontractors or other project participants where relevant; and with regulators, law-enforcement bodies, insurers, courts or advisers where required by law or necessary to protect legal rights.</p>
            <p>These recipients must handle information lawfully and securely. We remain responsible for selecting appropriate processors and putting required contracts in place.</p>

            <h2>6. International transfers</h2>
            <p>Some technology providers may process information outside the UK. Where this happens, we use an adequacy regulation, the UK International Data Transfer Agreement or Addendum, or another safeguard permitted by UK data-protection law. You may contact us for more information about safeguards relevant to your data.</p>

            <h2>7. How long we keep information</h2>
            <p>We keep unsuccessful enquiry and quotation records for up to 24 months after the last contact. Customer, contract, invoice and core project records are normally retained for up to 7 years after completion to meet tax, contractual and legal requirements. Safety, exposure, health-surveillance, waste or other regulated records may need to be retained for longer where legislation or applicable guidance requires it. Website security logs are normally kept for a shorter operational period.</p>
            <p>We may retain information longer where a complaint, investigation or legal claim is active. We delete or anonymise information when it is no longer required.</p>

            <h2>8. Security</h2>
            <p>We use proportionate technical and organisational measures to protect information against loss, misuse, unauthorised access, alteration and disclosure. No internet transmission is completely secure, so please avoid sending unnecessary sensitive information through the quote form.</p>

            <h2>9. Your rights</h2>
            <p>Depending on the circumstances, you may have rights to access, correct or erase your information; restrict or object to its use; receive information you provided in a portable format; and withdraw consent where processing relies on consent. These rights are not absolute and lawful exemptions may apply.</p>
            <p>To exercise a right, contact us using the details in section 1. We may ask for information needed to confirm your identity. You also have the right to complain to the Information Commissioner&rsquo;s Office at <a href="https://ico.org.uk/make-a-complaint/" rel="external">ico.org.uk/make-a-complaint</a>. We would appreciate the opportunity to address your concern first.</p>

            <h2>10. Cookies and links</h2>
            <p>The site may use essential storage required for security and operation and analytics supplied by our service providers. A separate cookie notice or consent control will be provided if non-essential cookies are enabled. Links to other websites are governed by those organisations&rsquo; own privacy policies.</p>

            <h2>11. Changes to this policy</h2>
            <p>We may update this policy when our services, providers or legal obligations change. The latest version will be published here with a revised update date. We will provide a more prominent notice if a change materially affects how we use personal information.</p>
          </article>
        </Container>
      </section>
    </>
  );
}
