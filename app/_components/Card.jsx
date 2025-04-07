"use client"

import { useState } from "react"

const values = [
  {
    title: "Future-Ready",
    detail: "Clear, confident solutions for tomorrow.",
  },
  {
    title: "Simplicity",
    detail: "Intuitive solutions that simplify complexity.",
  },
  {
    title: "Efficiency Matters",
    detail: "Tools that amplify productivity.",
  },
  {
    title: "Innovation",
    detail: "Cutting-edge approaches to business challenges.",
  },
  {
    title: "Reliability",
    detail: "Consistent performance you can count on.",
  },
]

export default function FeatureCard() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
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
      if (result.success) {
        setMessage("Email sent successfully!")
      } else {
        setMessage("Failed to send email.")
      }
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setMessage("Failed to send message.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column with images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg p-2 transform transition-all duration-500 hover:translate-x-4 hover:translate-y-4 hover:shadow-xl">
                  <img src="/tech.svg" alt="Technology" className="rounded-lg w-full h-auto" />
                </div>
                <div className="bg-white rounded-xl shadow-lg p-2 transform transition-all duration-500 hover:translate-x-3 hover:-translate-y-3 hover:shadow-xl">
                  <img src="/education.svg" alt="Education" className="rounded-lg w-full h-auto" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-xl shadow-lg p-2 transform transition-all duration-500 hover:-translate-x-4 hover:translate-y-4 hover:shadow-xl">
                  <img src="/colab.svg" alt="Collaboration" className="rounded-lg w-full h-auto" />
                </div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">Simple</h3>
                  <p className="text-gray-600">
                    <span className="text-gray-900 text-4xl">_</span>solutions, big impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column with content */}
          <div className="flex flex-col justify-center">
            <div className="max-w-lg">
              <p className="text-gray-600 text-lg">Transforming Business with innovation.</p>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight">
                <span className="text-gray-900">Why </span>
                <span className="text-orange-600">Choose Us?</span>
              </h2>

              <ul className="mt-8 space-y-5">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-orange-600"
                      >
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="10" cy="10" r="3" fill="currentColor" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900">{value.title}: </span>
                      <span className="text-gray-600">{value.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsOpen(true)}
                className="mt-8 group relative overflow-hidden bg-white text-gray-900 border border-gray-300 hover:text-white px-6 py-3 rounded-full flex items-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gray-900 group-hover:translate-x-0"></span>
                <span className="relative flex items-center gap-2">
                  Consult Our Experts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md mx-4 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="relative p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 className="text-2xl font-bold text-center mb-6 text-orange-600">Consult Our Experts</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                />

                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                />

                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>

                {message && (
                  <div
                    className={`p-3 rounded-md ${message.includes("success") ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                  >
                    {message}
                  </div>
                )}

                <div className="flex gap-3 mt-6">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Loading overlay */}
          {submitting && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
              <div className="flex space-x-2">
                <div className="h-3 w-3 animate-bounce rounded-full bg-orange-600 [animation-delay:-0.3s]"></div>
                <div className="h-3 w-3 animate-bounce rounded-full bg-orange-600 [animation-delay:-0.15s]"></div>
                <div className="h-3 w-3 animate-bounce rounded-full bg-orange-600"></div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

