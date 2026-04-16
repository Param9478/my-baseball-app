import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
                Whether you have questions about registration, want to volunteer, or just want to learn more about the GPMBA, don't hesitate to reach out.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase mb-1">Address</h4>
                    <p className="text-blue-200 font-body text-sm leading-relaxed">
                      PO Box 1388<br />High Prairie, AB T8V 4Z2
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase mb-1">Phone</h4>
                    <a href="tel:7802961550" className="text-blue-200 hover:text-white font-body text-sm transition-colors">
                      780.296.1550
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm tracking-wide uppercase mb-1">Email</h4>
                    <a href="mailto:execdirector@gpmba.ca" className="text-blue-200 hover:text-white font-body text-sm transition-colors">
                      execdirector@gpmba.ca
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-display font-semibold text-white text-sm tracking-widest uppercase mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/groups/162547079983081/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-body text-sm px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <Facebook size={16} /> Facebook Group
                  </a>
                  <a
                    href="https://www.instagram.com/grandeprairieminorbaseball/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-body text-sm px-4 py-2.5 rounded-lg transition-all"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-primary-800 border border-primary-600 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-white text-2xl mb-2">Message Sent!</h3>
                  <p className="text-blue-200 font-body text-sm">
                    Thanks for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-white text-xl mb-6 pb-4 border-b border-primary-600">
                    Send Us a Message
                  </h3>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-primary-900 border border-primary-600 focus:border-accent-500 text-white font-body text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder-primary-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-primary-900 border border-primary-600 focus:border-accent-500 text-white font-body text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder-primary-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full bg-primary-900 border border-primary-600 focus:border-accent-500 text-white font-body text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder-primary-500"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-blue-300 uppercase tracking-widest mb-1.5">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-primary-900 border border-primary-600 focus:border-accent-500 text-white font-body text-sm px-4 py-3 rounded-lg outline-none transition-colors placeholder-primary-500 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-display font-semibold text-sm px-6 py-4 uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-accent-600/30"
                    >
                      <Send size={16} /> Send Message
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
