import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import ContactSection from "../components/ContactSection";
import { Navbar } from "../components/Navbar";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length > 0) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setStatus(null), 3000);
    }, 1200);
  }

  const address =
    "9A, 5, Club Rd, M.S. Nagar, Mukta Gardens, Chetpet, Chennai, Tamil Nadu 600031";
  const email = "customercare@tccl.co.in";
  const phones = ["044 - 4060 6666", "1800-102-9845"];

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1a89e5] via-[#0083edff] to-blue-900 text-white pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact TCCL
          </h1>
          <p className="text-lg md:text-xl opacity-95">
            Book a new connection or get support from our team
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-20 pb-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Reach Us</h2>

            <div className="bg-white p-5 rounded-xl shadow flex gap-4">
              <MapPin className="text-[#1a89e5]" />
              <div>
                <div className="font-semibold">Office Address</div>
                <div className="text-sm text-gray-600">{address}</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex gap-4">
              <Mail className="text-[#1a89e5]" />
              <div>
                <div className="font-semibold">Email</div>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-[#1a89e5] hover:underline"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex gap-4">
              <Phone className="text-[#1a89e5]" />
              <div>
                <div className="font-semibold">Phone</div>
                {phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/[^0-9]/g, "")}`}
                    className="block text-sm text-[#1a89e5] hover:underline"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex gap-4">
              <Clock className="text-[#1a89e5]" />
              <div>
                <div className="font-semibold">Office Hours</div>
                <div className="text-sm text-gray-600">
                  Mon – Sat, 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden h-64">
              <iframe
                title="TCCL Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address
                )}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            <h3 className="text-2xl font-bold text-[#1a89e5] mb-6">
              Book Your Connection
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "phone", "email", "subject"].map((field) => (
                <div key={field}>
                  <input
                    name={field}
                    placeholder={`Your ${field}`}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a89e5]"
                  />
                  {errors[field] && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a89e5]"
              />

              <button
                type="submit"
                className="w-full bg-[#1a89e5] text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition"
              >
                <Send size={18} />
                {status === "sending" ? "Sending..." : "Send Request"}
              </button>

              {status === "sent" && (
                <p className="text-green-600 text-sm text-center">
                  Sent successfully — we will contact you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Contact;
