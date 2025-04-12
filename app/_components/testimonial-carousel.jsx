"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "BlueNova's enterprise platform has revolutionized our operations, resulting in a 42% increase in efficiency and significant cost savings.",
    name: "Abebe Bekele",
    title: "Student at Bahr dar university",
  },
  {
    quote:
      "The security framework provided by BlueNova gives us confidence that our sensitive data is protected to the highest standards in the industry.",
    name: "Tigist Mengistu",
    title: "High School student",
  },
  {
    quote:
      "We've been able to scale our operations globally with BlueNova's infrastructure, maintaining consistent performance across all regions.",
    name: "Tigst ",
    title: "Parents of a student",
  },
  {
    quote:
      "The implementation of BlueNova's analytics platform has transformed how we make strategic decisions, providing real-time insights.",
    name: "Meron Haile",
    title: " CEO of a startup",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl bg-orange-300  shadow-md border border-slate-100 p-8 md:p-12">
        <div
          className="transition-all duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4 md:px-8"
                style={{ minWidth: "100%" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <div className="flex justify-center space-x-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-yellow-300  "
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium text-slate-700 mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-900">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -mt-6">
          <button
            onClick={() => {
              prev();
              setAutoplay(false);
            }}
            className="p-2 rounded-full bg-white shadow-md hover:bg-slate-50 transition-colors duration-300 border border-slate-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-slate-700" />
          </button>
          <button
            onClick={() => {
              next();
              setAutoplay(false);
            }}
            className="p-2 rounded-full bg-white shadow-md hover:bg-slate-50 transition-colors duration-300 border border-slate-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-slate-700" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setAutoplay(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? "w-8 bg-orangered" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
