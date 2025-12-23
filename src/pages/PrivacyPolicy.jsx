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

export const Privacy = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1a89e5] via-[#0083edff] to-blue-900 text-white pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Privacy Policy
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
              This Privacy Policy describes how <strong>TCCL</strong> collects,
              uses, stores, and discloses Your information when You use our
              Website and services. By using the Service, You agree to the
              collection and use of information in accordance with this Privacy
              Policy.
            </p>
          </div>

          <Section title="Interpretation and Definitions">
            <p>
              Words with capitalized initial letters have meanings defined below
              and apply whether used in singular or plural.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Account</strong> – A unique account created for You.</li>
              <li><strong>Affiliate</strong> – An entity under common control.</li>
              <li>
                <strong>Company</strong> – TCCL, 9A, 5, Club Rd, M.S. Nagar, Mukta
                Gardens, Chetpet, Chennai, Tamil Nadu – 600031.
              </li>
              <li><strong>Cookies</strong> – Small files placed on Your device.</li>
              <li><strong>Country</strong> – India.</li>
              <li><strong>Device</strong> – Any device that accesses the Service.</li>
              <li><strong>Personal Data</strong> – Information identifying an individual.</li>
              <li><strong>Service</strong> – The Website.</li>
              <li><strong>Service Provider</strong> – Third parties processing data.</li>
              <li><strong>Usage Data</strong> – Data collected automatically.</li>
              <li><strong>You</strong> – The individual or legal entity using the Service.</li>
            </ul>
          </Section>

          <Section title="Types of Data Collected">
            <p className="font-semibold">Personal Data</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>First name and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Information submitted through forms or communication</li>
            </ul>

            <p className="font-semibold mt-3">Usage Data</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Device identifiers and diagnostics</li>
            </ul>
          </Section>

          <Section title="Tracking Technologies and Cookies">
            <p>We use Cookies and similar technologies to improve the Service.</p>

            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Essential Cookies</strong> – Required for functionality</li>
              <li><strong>Consent Cookies</strong> – Store cookie preferences</li>
              <li><strong>Functionality Cookies</strong> – Remember user settings</li>
            </ul>

            <p>
              You may disable cookies via browser settings, but parts of the
              Service may not function correctly.
            </p>
          </Section>

          <Section title="Use of Your Personal Data">
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and maintain the Service</li>
              <li>Manage user requests and accounts</li>
              <li>Communicate via email, SMS, or phone</li>
              <li>Send promotional communications (unless opted out)</li>
              <li>Improve security and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="Marketing Communication & DND Policy">
            <p>
              You may receive service-related or promotional communications from
              TCCL.
            </p>

            <p className="font-semibold mt-2">Opt-Out / DND</p>
            <p>
              To stop receiving promotional messages, email{" "}
              <strong>customercare@tccl.co.in</strong> mentioning your registered
              email or mobile number. Requests are processed within a reasonable
              timeframe.
            </p>
          </Section>

          <Section title="Payment-Related Data Handling">
            <ul className="list-disc pl-5 space-y-1">
              <li>Payments are processed via secure third-party gateways</li>
              <li>TCCL does not store card or banking credentials</li>
              <li>Limited transaction references may be retained for compliance</li>
            </ul>
            <p className="italic text-sm">
              Detailed payment and refund rules are governed by separate policies.
            </p>
          </Section>

          <Section title="Sharing of Your Personal Data">
            <ul className="list-disc pl-5 space-y-1">
              <li>With service providers and partners</li>
              <li>During mergers or acquisitions</li>
              <li>With affiliates under confidentiality</li>
              <li>When required by law</li>
              <li>With your explicit consent</li>
            </ul>
          </Section>

          <Section title="Retention of Data">
            <p>
              Personal Data is retained only as long as necessary for service,
              legal compliance, dispute resolution, and enforcement.
            </p>
          </Section>

          <Section title="Your Rights">
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your Personal Data</li>
              <li>Correct or update inaccurate data</li>
              <li>Request deletion of your data</li>
            </ul>
            <p>
              Requests can be made via{" "}
              <strong>customercare@tccl.co.in</strong>. Certain data may be
              retained if required by law.
            </p>
          </Section>

          <Section title="Security of Your Personal Data">
            <p>
              We use commercially reasonable security measures. However, no
              digital system is 100% secure, and absolute security cannot be
              guaranteed.
            </p>
          </Section>

          <Section title="Children’s Privacy">
            <p>
              Our Service does not target children under 13 years. If such data
              is discovered, it will be deleted promptly.
            </p>
          </Section>

          <Section title="Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy periodically. Updates will be
              posted on this page with a revised “Last updated” date.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              For privacy-related questions or requests, contact:
            </p>
            <p className="font-semibold">📧 customercare@tccl.co.in</p>
          </Section>
        </motion.div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Privacy;
