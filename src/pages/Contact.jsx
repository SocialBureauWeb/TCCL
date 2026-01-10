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

    const mailBody = `
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}
  `;

    const mailtoLink = `mailto:customercare@tccl.co.in
    ?subject=${encodeURIComponent(form.subject)}
    &body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoLink;

    setStatus("sent");
    setForm({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  }


  const address =
    "9A, 5, Club Rd, M.S. Nagar, Mukta Gardens, Chetpet, Chennai, Tamil Nadu 600031";
  const email = "customercare@tccl.co.in";
  const phones = ["044 - 4060 6666", "1800-102-9845"];

  return (
    <div className="font-sans bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white pt-28 pb-24 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Contact <span className="text-blue-500">TCCL</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-400">
            Book a new connection or get support from our team
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pt-20 pb-12 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Reach Us</h2>

            <div className="bg-gray-900 p-5 rounded-xl border border-white/10 flex gap-4">
              <MapPin className="text-blue-500" />
              <div>
                <div className="font-semibold text-white">Office Address</div>
                <div className="text-sm text-gray-400">{address}</div>
              </div>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-white/10 flex gap-4">
              <Mail className="text-blue-500" />
              <div>
                <div className="font-semibold text-white">Email</div>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-blue-500 hover:text-blue-400"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-white/10 flex gap-4">
              <Phone className="text-blue-500" />
              <div>
                <div className="font-semibold text-white">Phone</div>
                {phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/[^0-9]/g, "")}`}
                    className="block text-sm text-blue-500 hover:text-blue-400"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-5 rounded-xl border border-white/10 flex gap-4">
              <Clock className="text-blue-500" />
              <div>
                <div className="font-semibold text-white">Office Hours</div>
                <div className="text-sm text-gray-400">
                  Mon – Sat, 9:00 AM – 6:00 PM
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden h-64 shadow-2xl">
              <iframe
                title="TCCL Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address
                )}&output=embed`}
                className="w-full h-full border-0 grayscale opacity-80"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-6 font-display">
              Book Your Connection
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "phone", "email", "subject"].map((field) => (
                <div key={field}>
                  <input
                    name={field}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    value={form[field]}
                    onChange={handleChange}
                    className="w-full bg-black rounded-lg border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-display"
                  />
                  {errors[field] && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-black rounded-lg border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-display"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-[0.98]"
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
