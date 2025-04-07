"use client";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage("Email sent successfully!");
      } else {
        setMessage("Failed to send email.");
      }
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setMessage("Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="bg-white py-12 px-4 grid grid-cols-2 relative">
      {/* Image with animation */}
      <div>
        <img
          src="/phone.jpg"
          alt="Contact illustration"
          className="transform transition-transform duration-1000 ease-in-out hover:translate-x-16 hover:translate-y-8 hover:rotate-10"
        />
      </div>

      {/* Form */}
      <div className="mx-10 shadow-xl p-3 relative">
        <h2 className="text-2xl font-bold text-center text-orange-600">
          Send Us A Message
        </h2>
        <form
          className="max-w-2xl mx-auto mt-8 space-y-8"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-800 font-bold">
              Name 
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-800"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-800 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-800"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-800 font-bold">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-800"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-800 font-bold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-200 text-gray-900"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 "
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Success Message Box */}
        {message && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
            {message}
          </div>
        )}
      </div>

      {/* Full-Screen Loader */}
      {submitting && (
        <div className="fixed z-30 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex space-x-2">
            <span className="dot bg-orange-500"></span>
            <span className="dot bg-orange-500"></span>
            <span className="dot bg-orange-500"></span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Form;
