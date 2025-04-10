
import { NavBar } from "@/components/NavBar";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: April 10, 2023</p>
            
            <ScrollArea className="h-[60vh] pr-4">
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                  <p className="text-gray-700 mb-3">
                    Welcome to Sellmate ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at sellmate.com (together or individually "Service") operated by Sellmate.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
                  </p>
                  <p className="text-gray-700">
                    Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">2. User Accounts</h2>
                  <p className="text-gray-700 mb-3">
                    When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                  </p>
                  <p className="text-gray-700 mb-3">
                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                  </p>
                  <p className="text-gray-700">
                    You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Middleman Services</h2>
                  <p className="text-gray-700 mb-3">
                    Sellmate provides a platform that connects buyers, sellers, and middlemen to facilitate secure transactions. Middlemen on our platform are independent contractors and not employees of Sellmate.
                  </p>
                  <p className="text-gray-700 mb-3">
                    While we verify the identity of middlemen on our platform, we do not guarantee the quality of their services. Users are encouraged to review middlemen's ratings and reviews before engaging their services.
                  </p>
                  <p className="text-gray-700">
                    Sellmate is not responsible for any transaction disputes between buyers, sellers, and middlemen. However, we provide dispute resolution tools to help resolve issues that may arise.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Fees and Payment</h2>
                  <p className="text-gray-700 mb-3">
                    Sellmate charges a service fee for transactions facilitated through our platform. The fee structure is clearly displayed before you confirm a transaction.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Payment processing is handled by our third-party payment processors. By using our Service, you agree to be bound by their terms of service.
                  </p>
                  <p className="text-gray-700">
                    Refunds are processed according to our Refund Policy, which is available on our website.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Prohibited Uses</h2>
                  <p className="text-gray-700 mb-3">
                    You may use our Service only for lawful purposes and in accordance with Terms. You agree not to use our Service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-3">
                    <li>For any illegal purpose or to solicit others to perform or participate in any unlawful acts.</li>
                    <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances.</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate.</li>
                    <li>To submit false or misleading information.</li>
                    <li>To upload or transmit viruses or any other type of malicious code.</li>
                    <li>To interfere with or circumvent the security features of our Service.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
                  <p className="text-gray-700 mb-3">
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  <p className="text-gray-700">
                    Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                  <p className="text-gray-700 mb-3">
                    In no event shall Sellmate, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
                  <p className="text-gray-700 mb-3">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p className="text-gray-700">
                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms, please contact us at legal@sellmate.com.
                  </p>
                </section>
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sellmate. All rights reserved.
      </footer>
    </div>
  );
};

export default TermsOfServicePage;
