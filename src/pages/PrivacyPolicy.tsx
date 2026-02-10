import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl md:text-6xl font-light text-architectural mb-4">
              Privacy Policy
            </h1>
            <div className="text-muted-foreground mb-2">
              <p className="font-medium text-foreground">SwissCoast AG</p>
              <p>Schindellegistrasse 73, 8808 Pfäffikon SZ, Switzerland</p>
              <p>UID: CHE-110.173.134</p>
            </div>
            <p className="text-minimal text-muted-foreground mb-12">LAST UPDATED: FEBRUARY 2026</p>

            <div className="space-y-16 text-muted-foreground leading-relaxed">
              {/* 1 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">1. Introduction</h2>
                <p className="mb-4">
                  SwissCoast AG ("SwissCoast", "we", "us", or "our") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website (swisscoast.ch), use our services, or interact with us.
                </p>
                <p>
                  This Privacy Policy is governed by the Swiss Federal Act on Data Protection (FADP/DSG), as revised and effective since September 1, 2023, and, where applicable, the European General Data Protection Regulation (GDPR). We process personal data lawfully, in good faith, and in a proportionate manner.
                </p>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">2. Controller</h2>
                <p className="mb-4">The controller responsible for data processing is:</p>
                <address className="not-italic border-l-2 border-border pl-6 space-y-1">
                  <p className="font-medium text-foreground">SwissCoast AG</p>
                  <p>Schindellegistrasse 73</p>
                  <p>8808 Pfäffikon SZ</p>
                  <p>Switzerland</p>
                  <p className="mt-3">Email: <a href="mailto:privacy@swisscoast.ch" className="text-foreground hover:text-muted-foreground transition-colors">privacy@swisscoast.ch</a></p>
                  <p>Website: <a href="https://www.swisscoast.ch" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">swisscoast.ch</a></p>
                </address>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">3. Data We Collect</h2>
                <p className="mb-6">We may collect and process the following categories of personal data:</p>

                <h3 className="text-xl font-medium text-foreground mb-3">3.1 Data You Provide to Us</h3>
                <ul className="list-disc ml-6 space-y-2 mb-8">
                  <li><strong className="text-foreground">Contact information:</strong> name, email address, phone number, and any message content you submit through our contact form or direct correspondence.</li>
                  <li><strong className="text-foreground">Business information:</strong> company name, role, and professional details when engaging with us for business purposes.</li>
                  <li><strong className="text-foreground">Application data:</strong> CV, cover letter, and related documents if you apply for a position with us.</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">3.2 Data Collected Automatically</h3>
                <p className="mb-3">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc ml-6 space-y-2 mb-8">
                  <li><strong className="text-foreground">Technical data:</strong> IP address (anonymized where possible), browser type and version, operating system, device type, screen resolution, and language preferences.</li>
                  <li><strong className="text-foreground">Usage data:</strong> pages visited, time and date of access, duration of visit, referral source, click behavior, and scroll depth.</li>
                  <li><strong className="text-foreground">Cookies and similar technologies:</strong> see Section 8 below for our Cookie Policy.</li>
                </ul>

                <h3 className="text-xl font-medium text-foreground mb-3">3.3 Data from Third Parties</h3>
                <p className="mb-8">We may receive data from third-party platforms if you interact with us through social media channels (LinkedIn, X/Twitter) or if you are referred to us by a business partner.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">3.4 Blockchain-Related Data</h3>
                <p className="mb-3">SwissCoast develops decentralized protocols (such as HLiquity) that operate on public blockchain networks. Please note:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Transactions on public blockchains (e.g., Hedera) are publicly visible and immutable by design. Wallet addresses and transaction data recorded on-chain are not controlled by SwissCoast.</li>
                  <li>SwissCoast does not collect, store, or process wallet addresses or on-chain transaction data through its corporate website. Interactions with decentralized protocols are governed by the respective protocol's terms and disclaimers.</li>
                </ul>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">4. Purposes and Legal Basis for Processing</h2>
                <p className="mb-6">We process your personal data for the following purposes:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-3 border-b border-border text-foreground font-medium">Purpose</th>
                        <th className="text-left p-3 border-b border-border text-foreground font-medium">Legal Basis (FADP)</th>
                        <th className="text-left p-3 border-b border-border text-foreground font-medium">Legal Basis (GDPR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="p-3">Responding to your inquiries and providing information</td><td className="p-3">Consent / Legitimate interest</td><td className="p-3">Art. 6(1)(b) and (f) GDPR</td></tr>
                      <tr><td className="p-3">Providing and improving our website and services</td><td className="p-3">Legitimate interest</td><td className="p-3">Art. 6(1)(f) GDPR</td></tr>
                      <tr><td className="p-3">Sending relevant communications (only with your consent)</td><td className="p-3">Consent</td><td className="p-3">Art. 6(1)(a) GDPR</td></tr>
                      <tr><td className="p-3">Analyzing website usage and improving user experience</td><td className="p-3">Legitimate interest</td><td className="p-3">Art. 6(1)(f) GDPR</td></tr>
                      <tr><td className="p-3">Complying with legal obligations</td><td className="p-3">Legal obligation</td><td className="p-3">Art. 6(1)(c) GDPR</td></tr>
                      <tr><td className="p-3">Protecting our rights and preventing misuse</td><td className="p-3">Legitimate interest</td><td className="p-3">Art. 6(1)(f) GDPR</td></tr>
                      <tr><td className="p-3">Recruitment and talent management</td><td className="p-3">Consent / Pre-contractual measures</td><td className="p-3">Art. 6(1)(a) and (b) GDPR</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">We do not use your personal data for automated individual decision-making or profiling that produces legal effects.</p>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">5. Data Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell, rent, or trade your personal data to third parties. We may share your data with the following categories of recipients, only to the extent necessary:</p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li><strong className="text-foreground">Service providers:</strong> hosting providers, email services, analytics platforms, and IT support providers acting on our behalf and under contractual data processing agreements.</li>
                  <li><strong className="text-foreground">Professional advisors:</strong> legal counsel, auditors, and tax advisors bound by professional confidentiality obligations.</li>
                  <li><strong className="text-foreground">Authorities:</strong> government bodies, regulatory authorities, or law enforcement agencies where disclosure is required by applicable Swiss or EU law.</li>
                  <li><strong className="text-foreground">Business partners:</strong> with your consent, in the context of joint projects or collaborations.</li>
                </ul>
                <p>All service providers are carefully selected and contractually obligated to process data in accordance with applicable data protection laws.</p>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">6. International Data Transfers</h2>
                <p className="mb-4">SwissCoast is based in Switzerland. Switzerland benefits from an adequacy decision by the European Commission, meaning data transfers from the EU/EEA to Switzerland are permitted without additional safeguards.</p>
                <p className="mb-3">If we transfer personal data to countries outside Switzerland or the EU/EEA that do not provide an adequate level of data protection, we ensure appropriate safeguards are in place, such as:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Standard Contractual Clauses (SCCs) approved by the European Commission or the Swiss FDPIC.</li>
                  <li>Other legally recognized transfer mechanisms under the FADP or GDPR.</li>
                </ul>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">7. Data Retention</h2>
                <p className="mb-4">We retain your personal data only for as long as necessary to fulfill the purposes described in this Privacy Policy, or as required by applicable law. Specifically:</p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li><strong className="text-foreground">Contact form inquiries:</strong> retained for 12 months after the last interaction, unless an ongoing business relationship is established.</li>
                  <li><strong className="text-foreground">Contractual data:</strong> retained for the duration of the business relationship and for 10 years thereafter in accordance with Swiss commercial law (Art. 958f CO).</li>
                  <li><strong className="text-foreground">Website analytics data:</strong> anonymized or deleted within 26 months.</li>
                  <li><strong className="text-foreground">Application data:</strong> retained for 6 months after the completion of the recruitment process, unless you consent to longer retention.</li>
                </ul>
                <p>When data is no longer needed, it is securely deleted or anonymized.</p>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">8. Cookies and Tracking Technologies</h2>

                <h3 className="text-xl font-medium text-foreground mb-3">8.1 What Are Cookies?</h3>
                <p className="mb-6">Cookies are small text files stored on your device when you visit a website. They help us understand how you interact with our website and allow us to improve your experience.</p>

                <h3 className="text-xl font-medium text-foreground mb-3">8.2 Types of Cookies We Use</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-3 border-b border-border text-foreground font-medium">Category</th>
                        <th className="text-left p-3 border-b border-border text-foreground font-medium">Purpose</th>
                        <th className="text-left p-3 border-b border-border text-foreground font-medium">Duration</th>
                        <th className="text-left p-3 border-b border-border text-foreground font-medium">Consent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="p-3 font-medium text-foreground">Strictly Necessary</td><td className="p-3">Essential for website functionality</td><td className="p-3">Session / up to 12 months</td><td className="p-3">No</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Analytics</td><td className="p-3">Understanding visitor behavior and traffic sources</td><td className="p-3">Up to 26 months</td><td className="p-3">Yes</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Functional</td><td className="p-3">Remembering your preferences</td><td className="p-3">Up to 12 months</td><td className="p-3">Yes</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-medium text-foreground mb-3">8.3 Managing Cookies</h3>
                <p>Upon your first visit, you will be presented with a cookie consent banner. You can accept or reject non-essential cookies at any time. You may also manage cookies through your browser settings. Please note that blocking certain cookies may affect the functionality of our website. We do not use advertising or marketing cookies.</p>
              </section>

              {/* 9 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">9. Your Rights</h2>
                <p className="mb-4">Under the Swiss FADP and, where applicable, the GDPR, you have the following rights regarding your personal data:</p>
                <ul className="list-disc ml-6 space-y-3 mb-4">
                  <li><strong className="text-foreground">Right of access:</strong> You have the right to request confirmation as to whether we process your personal data and to obtain a copy of such data.</li>
                  <li><strong className="text-foreground">Right to rectification:</strong> You have the right to request the correction of inaccurate or incomplete personal data.</li>
                  <li><strong className="text-foreground">Right to erasure:</strong> You have the right to request the deletion of your personal data, subject to legal retention obligations.</li>
                  <li><strong className="text-foreground">Right to restriction:</strong> You have the right to request the restriction of processing under certain circumstances.</li>
                  <li><strong className="text-foreground">Right to data portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format (where applicable under GDPR).</li>
                  <li><strong className="text-foreground">Right to object:</strong> You have the right to object to the processing of your personal data based on legitimate interests.</li>
                  <li><strong className="text-foreground">Right to withdraw consent:</strong> Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of processing prior to withdrawal.</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@swisscoast.ch" className="text-foreground hover:text-muted-foreground transition-colors font-medium">privacy@swisscoast.ch</a>. We will respond to your request within 30 days.</p>
              </section>

              {/* 10 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">10. Data Security</h2>
                <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, misuse, alteration, or destruction. These measures include:</p>
                <ul className="list-disc ml-6 space-y-2 mb-4">
                  <li>Encryption of data in transit (TLS/SSL) and at rest where appropriate.</li>
                  <li>Access controls and authentication mechanisms for internal systems.</li>
                  <li>Regular security assessments and updates.</li>
                  <li>Contractual obligations imposed on service providers regarding data security.</li>
                </ul>
                <p>While we strive to protect your personal data, no method of transmission or storage is 100% secure. We encourage you to take appropriate measures to protect your own data, particularly when interacting with blockchain-based applications.</p>
              </section>

              {/* 11 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">11. Third-Party Websites and Protocols</h2>
                <p className="mb-4">Our website may contain links to third-party websites, services, or decentralized protocols (such as HLiquity at hliquity.org). This Privacy Policy does not apply to those third-party services. We encourage you to review the privacy policies and disclaimers of any third-party service before providing personal data or interacting with decentralized applications.</p>
                <p>Decentralized protocols operate autonomously on public blockchain networks. Interactions with such protocols are at your own risk and are not governed by this Privacy Policy.</p>
              </section>

              {/* 12 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">12. Children's Privacy</h2>
                <p>Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have inadvertently collected data from a person under 18, we will take steps to delete such data promptly.</p>
              </section>

              {/* 13 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">13. Supervisory Authority</h2>
                <p className="mb-4">If you believe that our processing of your personal data violates applicable data protection law, you have the right to lodge a complaint with the competent supervisory authority.</p>
                <div className="space-y-6">
                  <div className="border-l-2 border-border pl-6">
                    <p className="text-minimal text-muted-foreground mb-2">FOR SWITZERLAND</p>
                    <p className="text-foreground font-medium">Federal Data Protection and Information Commissioner (FDPIC)</p>
                    <p>Feldeggweg 1, 3003 Bern, Switzerland</p>
                    <p><a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">edoeb.admin.ch</a></p>
                  </div>
                  <div className="border-l-2 border-border pl-6">
                    <p className="text-minimal text-muted-foreground mb-2">FOR EU/EEA RESIDENTS</p>
                    <p>You may also contact the data protection authority in your country of residence.</p>
                  </div>
                </div>
              </section>

              {/* 14 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">14. Changes to This Privacy Policy</h2>
                <p>We reserve the right to update this Privacy Policy from time to time to reflect changes in our data processing practices, legal requirements, or business operations. The date of the most recent revision is indicated at the top of this document. We encourage you to review this Privacy Policy periodically. Material changes will be communicated through our website.</p>
              </section>

              {/* 15 */}
              <section>
                <h2 className="text-2xl md:text-3xl font-light text-architectural mb-6">15. Contact Us</h2>
                <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data processing practices, please contact us:</p>
                <address className="not-italic border-l-2 border-border pl-6 space-y-1">
                  <p className="font-medium text-foreground">SwissCoast AG</p>
                  <p>Schindellegistrasse 73</p>
                  <p>8808 Pfäffikon SZ, Switzerland</p>
                  <p className="mt-3">Email: <a href="mailto:privacy@swisscoast.ch" className="text-foreground hover:text-muted-foreground transition-colors">privacy@swisscoast.ch</a></p>
                  <p>Website: <a href="https://www.swisscoast.ch" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">swisscoast.ch</a></p>
                </address>
              </section>

              {/* Disclaimer */}
              <p className="text-sm italic border-t border-border pt-8">
                This Privacy Policy is provided in English. In the event of any discrepancy between different language versions, the English version shall prevail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
