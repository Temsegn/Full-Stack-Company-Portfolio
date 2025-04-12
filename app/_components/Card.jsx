"use client"

import { useState } from "react"

const values = [
  { title: "Visionary", detail: "Crafting solutions that shape the future." },
  { title: "Clarity", detail: "Simplifying the complex with elegance." },
  { title: "Reliability", detail: "Trusted performance, every time." },  { title: "Creativity", detail: "Innovating beyond the ordinary." },
  { title: "Trust", detail: "Building reliability you can feel." },
]

export default function FeatureCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage("")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const result = await response.json()
      setMessage(result.success ? "Message sent successfully!" : "Failed to send message.")
      if (result.success) setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setMessage("Failed to send message.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl animate-pulse [animation-delay:-1s]"></div>

        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Column - Creative Visuals */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-6">
                <div className="relative group">
                  <img
                    src="/tech.svg"
                    alt="Technology"
                    className="rounded-xl shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                </div>
                <div className="relative group">
                  <img
                    src="/education.svg"
                    alt="Education"
                    className="rounded-xl shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative group">
                  <img
                    src="/colab.svg"
                    alt="Collaboration"
                    className="rounded-xl shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-xl transform rotate-2 hover:rotate-0 transition-transform">
                  <h3 className="text-xl font-semibold">Bold Impact</h3>
                  <p className="mt-2 text-sm leading-relaxed">Where simplicity meets transformation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="relative z-10">
            <span className="text-orange-500 font-medium tracking-wider uppercase">Our Promise</span>
            <h2 className="mt-3 text-5xl font-extrabold text-gray-800 leading-tight">
              Why <span className="text-orange-500">Choose Us?</span>
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
              We blend creativity and precision to deliver solutions that inspire, empower, and endure—crafted for a world that’s always evolving.
            </p>
            <ul className="mt-10 space-y-5">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <span className="mt-1 text-orange-500 transition-transform group-hover:scale-125">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5l-3-3 1.5-1.5L9 10l4.5-4.5L15 7l-6 6z" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-800 text-lg group-hover:text-orange-500 transition-colors">
                      {value.title}
                    </span>
                    <p className="text-gray-600">{value.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpen(true)}
              className="mt-12 bg-orange-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
            >
              Connect with Experts
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800/60 backdrop-blur-md">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 mx-4 relative overflow-hidden">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none"></div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-orange-500 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative z-10">Let’s Collaborate</h2>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition bg-white/80"
              />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition bg-white/80"
              />
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition bg-white/80"
              />
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us your vision..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition bg-white/80"
              />
              {message && (
                <p className={`text-sm font-medium ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    Sending
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 12a8 8 0 0116 0 8 8 0 01-16 0"
                      />
                    </svg>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}