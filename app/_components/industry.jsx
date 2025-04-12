"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Industry() {
  const industryCardsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (industryCardsRef.current) {
      const cards = industryCardsRef.current.querySelectorAll(".industry-card");
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="mx-auto p-4 grid grid-cols-1 gap-y-4 mt-10 bg-white">
      <div className="text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 w-24 bg-indigo-600 mx-auto my-6 origin-left"
        />
      </div>

      <motion.ul
        ref={industryCardsRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <motion.li
          variants={itemVariants}
          className="industry-card opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <a
            href="#business"
            data-clickable="Category:5:category-card"
            className="block h-full transition-all duration-300 bg-white border border-gray-200 rounded-lg group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20 hover:-translate-y-2"
          >
            <div className="flex items-center p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Business category"
                >
                  💼
                </span>
              </div>

              <div className="flex-grow ml-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                  Business
                </h3>

                <div className="inline-flex items-center mt-1">
                  <span className="text-gray-600 rounded">Build Solution for your business</span>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.li>
        

        <motion.li
          variants={itemVariants}
          className="industry-card opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <a
            href="#marketing"
            data-clickable="Category:17:category-card"
            className="block h-full transition-all duration-300 bg-white border border-gray-200 rounded-lg group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20 hover:-translate-y-2"
          >
            <div className="flex items-center p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Marketing category"
                >
                  📣
                </span>
              </div>

              <div className="flex-grow ml-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                  Marketing
                </h3>

                <div className="inline-flex items-center mt-1">
                  <span className="text-gray-600 rounded">Elevate Your Market With Us</span>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="industry-card opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <a
            href="#marketing"
            data-clickable="Category:17:category-card"
            className="block h-full transition-all duration-300 bg-white border border-gray-200 rounded-lg group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20 hover:-translate-y-2"
          >
            <div className="flex items-center p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Marketing category"
                >
                  📣
                </span>
              </div>

              <div className="flex-grow ml-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                  Training and Courses
                </h3>

                <div className="inline-flex items-center mt-1">
                  <span className="text-gray-600 rounded">409 tools</span>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="industry-card opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <a
            href="#education"
            data-clickable="Category:11:category-card"
            className="block h-full transition-all duration-300 bg-white border border-gray-200 rounded-lg group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20 hover:-translate-y-2"
          >
            <div className="flex items-center p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Education category"
                >
                  🎓
                </span>
              </div>

              <div className="flex-grow ml-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                  Education
                </h3>

                <div className="inline-flex items-center mt-1">
                  <span className="text-gray-600 rounded">School Manngement Solution</span>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="industry-card opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <a
            href="#education"
            data-clickable="Category:11:category-card"
            className="block h-full transition-all duration-300 bg-white border border-gray-200 rounded-lg group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20 hover:-translate-y-2"
          >
            <div className="flex items-center p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Education category"
                >
                  🎓
                </span>
              </div>

              <div className="flex-grow ml-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                  Home Tutor
                </h3>

                <div className="inline-flex items-center mt-1">
                  <span className="text-gray-600 rounded">Make Education Easy For Student</span>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="industry-card opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <a
            href="#design"
            data-clickable="Category:9:category-card"
            className="block h-full transition-all duration-300 bg-white border border-gray-200 rounded-lg group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20 hover:-translate-y-2"
          >
            <div className="flex items-center p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Design category"
                >
                  🎨
                </span>
              </div>

              <div className="flex-grow ml-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                  Design 
                </h3>

                <div className="inline-flex items-center mt-1">
                  <span className="text-gray-600 rounded">Beatiful Design </span>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="industry-card opacity-0 transform translate-y-8 transition-all duration-700"
        >
          <a
            href="#customer-support"
            data-clickable="Category:55:category-card"
            className="block h-full transition-all duration-300 bg-white border border-gray-200 rounded-lg group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20 hover:-translate-y-2"
          >
            <div className="flex items-center p-6">
              <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Customer Support category"
                >
                  🙋
                </span>
              </div>

              <div className="flex-grow ml-6">
                <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
                  Customer Support
                </h3>

                <div className="inline-flex items-center mt-1">
                  <span className="text-gray-600 rounded"> 24/7 support </span>
                </div>
              </div>

              <div className="flex-shrink-0 ml-4 transition-transform duration-300 group-hover:translate-x-2">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </motion.li>
      </motion.ul>

      <style jsx global>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Industry;
