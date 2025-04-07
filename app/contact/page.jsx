"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react"
import Form from "../_components/form"
import Card from "../_components/Card"
import Welcome from "../_components/welcome"

// Simple utility function for conditional class names
const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const questions = [
  {
    question: "What are your operating hours?",
    answer: "We operate from 9 AM to 5 PM, Monday to Friday.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our website or by calling our office.",
  },
  {
    question: "Do you offer Consultation services?",
    answer: "Yes, we offer consultations in a variety of aspects.",
  },
  {
    question: "Where can I learn Your Course?",
    answer: "You can take our course either online or in person.",
  },
]

function Contact() {
  const [activeQuestion, setActiveQuestion] = useState(null)

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  return (
    <div className="bg-white mt-16">
      <Welcome title="WE ARE HERE FOR YOU" url="/d8.jpg" button="Contact Us" link="/contact" />

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-16 h-0.5 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Our team is available to assist you with any inquiries. Please reach out through any of the following
              channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Call Us</h3>
              </div>
              <p className="text-gray-600 font-light">Our support team is available during business hours.</p>
              <p className="text-gray-800 mt-4 font-medium">+251 992 32 72 07</p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Email Us</h3>
              </div>
              <p className="text-gray-600 font-light">Send us an email and we'll respond within 24 hours.</p>
              <p className="text-gray-800 mt-4 font-medium">dreammore2122@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">Visit Us</h3>
              </div>
              <p className="text-gray-600 font-light">Our office is centrally located and easily accessible.</p>
              <p className="text-gray-800 mt-4 font-medium">101 Lemlemitu Building, Bahir Dar City</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Form />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-0.5 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Find answers to common questions about our services and operations.
            </p>
          </div>

          <div className="space-y-4">
            {questions.map((q, index) => (
              <div key={index} className="border border-gray-200 rounded-sm overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-medium text-gray-800">{q.question}</h3>
                  {activeQuestion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                <div
                  className={classNames(
                    "bg-gray-50 overflow-hidden transition-all duration-200",
                    activeQuestion === index ? "max-h-40 py-5 px-5" : "max-h-0",
                  )}
                >
                  <p className="text-gray-600 font-light">{q.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Location</h2>
            <div className="w-16 h-0.5 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto font-light">
              Visit our office in Bahir Dar, conveniently located in the city center.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="rounded-sm overflow-hidden shadow-sm border border-gray-200 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62624.79239147401!2d37.35889842167969!3d11.596996300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cf59f63bc805%3A0x7a2ab18d8f3e93eb!2sBahir%20Dar%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1712444440000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm border border-gray-200 shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-6">Bahir Dar Papyrus</h3>

              <div className="space-y-6">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="text-base font-medium text-gray-700">Address</h4>
                    <p className="text-gray-600 mt-1 font-light">
                      101 Lemlemitu Building
                      <br />
                      Bahir Dar City, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <Phone className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="text-base font-medium text-gray-700">Phone</h4>
                    <p className="text-gray-600 mt-1 font-light">+251 992 32 72 07</p>
                  </div>
                </div>

                <div className="flex">
                  <Mail className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1 mr-3" />
                  <div>
                    <h4 className="text-base font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600 mt-1 font-light">dreammore2122@gmail.com</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-base font-medium text-gray-700 mb-2">Business Hours</h4>
                  <p className="text-gray-600 font-light">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Card />
    </div>
  )
}

export default Contact

