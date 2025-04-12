"use client";

import { courses } from "../../data/courses"; // Adjust the path to your data
import Welcome from "../../_components/welcome";
import BeadCumb from "../../_components/beadcumb";
import LearningPath from "../../_components/learningPath";
import GlobalApi from "../../_utils/GlobalApi";
import { motion } from "framer-motion";
import Link from "next/link";
export default async function CourseDetail({ params }) {
  // Await params before using it
  const { id } = await params; // This ensures params are resolved properly

  const response = await GlobalApi.getCourse();
  const course = response?.data?.data.find((p) => p.id.toString() === id);

  // If no course is found, display a message

  return (
    <div className="bg-white mb-20">
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-800 uppercase rounded-full bg-purple-100">
              Transformative Education
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Your Path to Tech Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A structured journey from beginner to professional, designed to
            transform your potential into expertise through guided learning and
            real-world application.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <Link
              href="#learning-levels"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Explore Paths
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white border-purple-200 hover:bg-purple-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Watch Demo
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <BeadCumb main="course" name={course.Name} />
      <div className="bg-white p-4 md:p-16">
        {/* Course Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <img
            src={course.cover.url}
            alt={course.title}
            className="w-full h-80 object-cover rounded-md mt-5"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mt-10">
              {course.Name}
            </h1>
            {/* Topics */}
            <h3 className="text-gray-500 my-3">Topics</h3>

            <div className="flex flex-wrap gap-3 my-2 mb-5"></div>
            <h3 className="text-gray-500 my-3">Description</h3>
            <p className="text-gray-700"> {course.Description} </p>
            <h3 className="text-gray-500 my-3">Hour - {course.hour} hr</h3>

            <div className="my-2 text-center">
              <a
                href="/documents/full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Read the Curriculum
                <span className="ml-2">&#8594;</span>
              </a>
            </div>

            <button className="w-full bg-orange-600 text-white py-3 shadow-lg hover:bg-white hover:text-gray-900 transition-colors duration-1000 hover:border-blue-300 border-2 mt-5">
              Register
            </button>
          </div>
        </div>
      </div>
      <LearningPath />
    </div>
  );
}
