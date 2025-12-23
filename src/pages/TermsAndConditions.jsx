import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import ContactSection from "../components/ContactSection";

const Section = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow p-6 space-y-3">
    <h3 className="text-xl font-bold text-[#1a89e5]">{title}</h3>
    <div className="text-gray-700 text-sm leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

export const Terms = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1a89e5] via-[#0083edff] to-blue-900 text-white pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-20 pb-20 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-6"
        >
          {/* INTRO */}
          <div className="bg-white rounded-xl shadow p-6 text-sm text-gray-700 leading-relaxed">
            <p>
              These Terms and Conditions (“Terms”) govern your access to and use
              of the website of <strong>CoThamizhaga Cable TV Communication Pvt. Ltd</strong>{" "}
              (“TCCL”). By accessing or using this Website, including its online
              payment facilities, you agree to be bound by these Terms.
            </p>
          </div>

          <Section title="1. Company Information">
            <p><strong>CoThamizhaga Cable TV Communication Pvt. Ltd (TCCL)</strong></p>
            <p>
              9A, 5, Club Rd, M.S. Nagar,<br />
              Mukta Gardens, Chetpet,<br />
              Chennai, Tamil Nadu – 600031<br />
              Country of Domicile: India
            </p>
            <p>Email: customercare@tccl.co.in</p>
          </Section>

          <Section title="2. Use of Website">
            <ul className="list-disc pl-5 space-y-1">
              <li>The Website is intended for lawful use only.</li>
              <li>You agree not to misuse the Website or attempt unauthorized access.</li>
              <li>Website content may be updated or removed without notice.</li>
            </ul>
          </Section>

          <Section title="3. Online Payments">
            <ul className="list-disc pl-5 space-y-1">
              <li>Payments are generally required in advance.</li>
              <li>All prices are quoted in Indian Rupees (INR).</li>
              <li>TCCL may modify pricing without prior notice.</li>
              <li>Payments are processed through secure third-party gateways.</li>
              <li>Payment confirmation may take up to two working days.</li>
            </ul>

            <p className="font-semibold mt-3">Payment Failures</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>TCCL is not responsible for failed payments due to incorrect user details.</li>
              <li>Payments declined by banks or gateways are not TCCL’s liability.</li>
              <li>Users should verify transaction status with their bank.</li>
            </ul>
          </Section>

          <Section title="4. Refund Policy">
            <ul className="list-disc pl-5 space-y-1">
              <li>Refunds are issued solely at the discretion of TCCL.</li>
              <li>Approved refunds are processed to the original payment method.</li>
              <li>No obligation exists unless payment was successfully received.</li>
              <li>Refund timelines depend on the payment provider or bank.</li>
            </ul>
          </Section>

          <Section title="5. User Information & Privacy">
            <ul className="list-disc pl-5 space-y-1">
              <li>Website use is governed by our Privacy Policy.</li>
              <li>You consent to the collection and use of information.</li>
              <li>TCCL does not store sensitive payment details.</li>
            </ul>
          </Section>

          <Section title="6. Communication & DND">
            <ul className="list-disc pl-5 space-y-1">
              <li>You consent to receive transactional SMS or email communications.</li>
              <li>
                You may opt out of promotional messages by emailing{" "}
                <strong>customercare@tccl.co.in</strong>.
              </li>
            </ul>
          </Section>

          <Section title="7. Third-Party Links">
            <p>
              The Website may contain links to third-party websites. TCCL does not
              control or endorse their content, policies, or practices.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, TCCL shall not be liable for
              any direct, indirect, incidental, or consequential damages arising
              from:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use or inability to use the Website</li>
              <li>Payment failures or delays</li>
              <li>Errors or interruptions on the Website</li>
            </ul>
          </Section>

          <Section title="9. Indemnification">
            <p>
              You agree to indemnify and hold harmless TCCL, its directors,
              employees, and affiliates from any claims arising from your use of
              the Website or violation of these Terms.
            </p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>
              TCCL may modify these Terms at any time. Changes take effect
              immediately upon posting. Continued use of the Website constitutes
              acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="11. Governing Law & Jurisdiction">
            <p>
              These Terms are governed by the laws of India. Courts located in
              Chennai, Tamil Nadu shall have exclusive jurisdiction.
            </p>
          </Section>

          <Section title="12. Contact Information">
            <p>
              For questions regarding these Terms and Conditions, contact:
            </p>
            <p className="font-semibold">📧 customercare@tccl.co.in</p>
          </Section>
        </motion.div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Terms;
