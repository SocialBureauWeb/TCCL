import React, { useState } from 'react'

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const eobj = validate()
    setErrors(eobj)
    if (Object.keys(eobj).length > 0) return

    // Simulate submit
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', phone: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    }, 1200)
  }

  function copyToClipboard(text) {
    if (!navigator.clipboard) return
    navigator.clipboard.writeText(text)
    setStatus('copied')
    setTimeout(() => setStatus(null), 1500)
  }

  const address = '9A, 5, Club Rd, M.S. Nagar,Mukta Gardens, Chetpet, Chennai, Tamil Nadu 600031'
  const email = 'customercare@tccl.co.in'
  const phones = ['044 - 4060 6666', '1800-102-9845']

  return (
    <section className="py-12 bg-[#1187e6] text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Contact Details</h2>

          <div className="text-sm text-white space-y-3">
            <div>
              <div className="font-semibold">Address</div>
              <div>{address}</div>
            </div>

            <div>
              <div className="font-semibold">Email</div>
              <div className="flex items-center gap-3">
                <a href={`mailto:${email}`} className="text-white">{email}</a>
              </div>
            </div>

            <div>
              <div className="font-semibold">Phone</div>
              <div className="flex flex-col ">
                {phones.map((p) => (
                  <div key={p} className="flex items-center">
                    <a href={`tel:${p.replace(/[^0-9]/g, '')}`} className="text-white">{p}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="font-semibold">Office Hours</div>
              <div className="text-sm text-white">Mon - Sat, 9:00 AM - 6:00 PM</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-semibold mb-2">Location</div>
            <div className="w-full h-64 border rounded-md overflow-hidden">
              <iframe
                title="TCCL Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/20 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">BOOK YOUR CONNECTION</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
              {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium">Your Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
              {errors.phone && <div className="text-sm text-red-600 mt-1">{errors.phone}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
              {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium">Your Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} className="mt-1 w-full rounded-md border px-3 py-2" />
              {errors.subject && <div className="text-sm text-red-600 mt-1">{errors.subject}</div>}
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border px-3 py-2" />
              {errors.message && <div className="text-sm text-red-600 mt-1">{errors.message}</div>}
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" className="bg-[#1187e6] text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition">
                {status === 'sending' ? 'Sending...' : 'Send Request'}
              </button>
              {status === 'sent' && <div className="text-sm text-green-600">Sent — we will call you back soon.</div>}
              {status === 'copied' && <div className="text-sm text-white">Copied to clipboard</div>}
            </div>
          </form>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center md:items-stretch gap-1">
        <img src="/assets/footer1.jpg" alt="footer-1" className="w-full md:w-1/2 h-28 md:h-full object-cover rounded-md" />
        <img src="/assets/footer2.jpg" alt="footer-2" className="w-full md:w-1/2 h-28 md:h-full object-cover rounded-md" />
      </div>
    </section>
  )
}

export default ContactSection
