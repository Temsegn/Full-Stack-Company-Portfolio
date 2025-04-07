import React from "react";

import Services from "../_components/service_home";

import Card from "../_components/Card";
import Indusrty from "../_components/industry";
import Carousel from "../_components/Carousel";
import Question from "../_components/Question";
import Link from 'next/link';

function Home() {
  return (
    <>
      {/* Section 2 - Hero */}
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Useful Tools to</span>
                  <span className="block text-indigo-600 xl:inline">
                    Help You Build Faster.
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to build beautiful websites that convey
                  your message and tell your story.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    href="/contact"
                    className="relative inline-flex items-center px-4 py-2 text-md text-white bg-orange-600 rounded-lg  overflow-hidden group transition-all duration-300 w-fit"
                  >
                    <span className="absolute inset-0 bg-gray-800 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Consult Our Experts
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1 relative z-10 transition-colors duration-300 group-hover:text-white"
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
                  </Link>
                  <Link
                    href="/course"
                    className="relative inline-flex items-center px-4 py-2 text-md text-gray-700 bg-white rounded-full overflow-hidden group transition-all duration-300 w-fit"
                  >
                    <span className="absolute inset-0 bg-gray-800 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Get Course 
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1 relative z-10 transition-colors duration-300 group-hover:text-white"
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
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-96 overflow-hidden rounded-md shadow-xl sm:rounded-xl hidden md:block">
                <img
                  src="d4.jpg"
                  alt="Hero"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Card />
      <Services />
      <Indusrty />
      <Question />
    </>
  );
}

export default Home;
