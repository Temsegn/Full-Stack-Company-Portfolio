"use client";

import { useState } from "react";
import React from "react";

const faqs = [
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
  },
  {
    question: "What is the pricing structure?",
    answer:
      "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Explore Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-gray-500">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div> 
          ))}
        </div>

        <div className="flex justify-center mt-10 space-x-4">
          <span className="text-gray-700 text-lg">
            Have more questions?
          </span>
          <a href="#" className="text-blue-600">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition-all hover:bg-gray-700">
              Ask a Question
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
