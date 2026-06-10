import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { Mail, MapPin, Facebook, Send, RotateCcw } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)

    const encode = (data) =>
      Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      })
      setSubmitted(true)
    } catch (err) {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  const inputClass = (field) =>
    `w-full bg-primary-900 border ${errors[field] ? 'border-red-500 focus:border-red-400' : 'border-primary-600 focus:border-accent-500'
    } text-white font-body text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder-primary-500`

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent-600/10"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-block bg-accent-600 text-white font-display text-xs tracking-[0.2em] px-4 py-2 mb-4 uppercase">
            Reach Out
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-wide mb-4">
            Contact Us
          </h1>
          <p className="text-blue-200 font-body text-lg max-w-2xl">
            Have a question or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SectionHeader tag="Get In Touch" title="We're Here to Help" />
              <p className="text-blue-200 font-body text-base leading-relaxed mb-10">
                Whether you have questions about registration, want to volunteer, or just want to learn more about the HPMBA, don't hesitate to reach out.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase mb-1">Address</h4>
                    <p className="text-blue-200 font-body text-sm leading-relaxed">
                      PO Box 2411<br />
                      High Prairie, AB T0G 1E0
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase mb-1">Email</h4>
                    <a href="mailto:hpminorball@gmail.com" className="text-blue-200 hover:text-white font-body text-sm transition-colors">
                      hpminorball@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Facebook buttons */}
              <div className="mt-10">
                <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://www.facebook.com/profile.php?id=61560489947569`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-body text-sm px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <Facebook size={16} /> Follow Our Page
                  </a>
                  <a
                    href="https://www.facebook.com/groups/162547079983081/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 text-white font-body text-sm px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <Facebook size={16} /> Join Facebook Group
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-primary-800 border border-primary-600 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-accent-600/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send size={28} className="text-accent-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-blue-200 font-body text-sm mb-8">
                    Thanks for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 border border-primary-500 hover:border-primary-400 text-white font-display font-semibold text-xs px-6 py-3 uppercase tracking-wider transition-all"
                  >
                    <RotateCcw size={14} /> Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-white text-xl mb-6 pb-4 border-b border-primary-600">
                    Send Us a Message
                  </h3>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">
                          Name <span className="text-accent-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass('name')}
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-400 font-body text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">
                          Email <span className="text-accent-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass('email')}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-400 font-body text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">
                        Subject <span className="text-accent-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputClass('subject')}
                        placeholder="What's this about?"
                      />
                      {errors.subject && <p className="text-red-400 font-body text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">
                        Message <span className="text-accent-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className={inputClass('message') + ' resize-none'}
                        placeholder="Your message here..."
                      />
                      {errors.message && <p className="text-red-400 font-body text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-500 disabled:opacity-60 text-white font-display font-semibold text-sm px-6 py-4 uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-accent-600/30"
                    >
                      <Send size={16} /> {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}