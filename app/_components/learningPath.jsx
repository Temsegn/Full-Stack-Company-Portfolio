import react from "react";
import Link from "next/link";

import {
  BookOpenIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Training & Learning",
    description:
      "Master core concepts through interactive courses and tutorials",
    icon: <BookOpenIcon className="w-6 h-6" />,
    color: "bg-blue-100",
    border: "border-blue-500",
  },
  {
    title: "Project-Based Work",
    description:
      "Apply knowledge in real-world scenarios through guided projects",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    color: "bg-purple-100",
    border: "border-purple-500",
  },
  {
    title: "Internship Phase",
    description:
      "Gain professional experience in a structured team environment",
    icon: <BriefcaseIcon className="w-6 h-6" />,
    color: "bg-orange-100",
    border: "border-orange-500",
  },
  {
    title: "Full-Time Position",
    description: "Take on complex challenges as a professional developer",
    icon: <ChartBarIcon className="w-6 h-6" />,
    color: "bg-green-100",
    border: "border-green-500",
  },
];

function LearningPath() {
  return (
    <div className="bg-white mx-auto px-5">
      {/* Learning Path Section */}
      <div className="my-16">
        <h1 className="text-3xl text-gray-800 font-bold">Learning Path</h1>
        <p className="text-gray-500 mt-5">
          Our learning path is designed to guide you step-by-step through the
          various courses and tools you need to become an expert.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6  bg-gray-100 rounded-xl shadow-lg ">
            <h2 className="text-xl font-semibold text-gray-800">Beginner</h2>
            <p className="text-gray-600 mt-3">
              Start with the basics and build a solid foundation of knowledge.
            </p>
            <Link
              href=""
              className="text-teal-600 hover:text-teal-700 mt-4 block"
            >
              Start Learning
            </Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">
              Intermediate
            </h2>
            <p className="text-gray-600 mt-3">
              Dive deeper into more complex topics and enhance your skills.
            </p>
            <Link
              href=""
              className="text-teal-600 hover:text-teal-700 mt-4 block"
            >
              Start Learning
            </Link>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Advanced</h2>
            <p className="text-gray-600 mt-3">
              Master advanced techniques and become an expert in your field.
            </p>
            <Link
              href=""
              className="text-teal-600 hover:text-teal-700 mt-4 block"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl  px-4 py-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Career Growth Path
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center`}
            >
              {/* Content */}
              <div
                className={`w-1/2 p-6 rounded-lg shadow-lg ${step.color} transition-transform hover:translate-x-5 duration-1000`}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Icon container */}
              <div className="w-1/2 flex justify-center">
                <div
                  className={`w-14 h-14 ${step.border} border-4 rounded-full flex items-center justify-center text-gray-900 bg-white hover:w-20  hover:h-20 duration-1000`}
                >
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Continuous learning and growth throughout your career journey</p>
        </div>
      </div>
      {/* Where Do You Learn Section */}
      <div className="bg-white mb-20">
        <h1 className="text-3xl text-gray-800 font-bold mt-10">
          Where Do You Get and Take Our Course?
        </h1>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* In Person Training */}
          <div className="p-4   sm:p-12 rounded-3xl bg-white border hover:shadow-md hover:border-orange-300 transition-all duration-500 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-12">
              <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <span className="font-bold text-xl text-green-600">1</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition">
                  In Person Training
                </h3>
                <p className="text-gray-600">
                  "Empowering growth through hands-on learning and personal
                  connection—because real progress happens in person."
                </p>
                <h3 className="text-gray-500 my-3">Location</h3>
                <p className="text-gray-500 my-3">
                  Bahr dar, Lemlemitu Building, 101
                </p>
              </div>
            </div>
          </div>

          {/* Live Training */}
          <div className="p-4 p-6 sm:p-12 rounded-3xl bg-white border hover:shadow-md hover:border-orange-300 transition-all duration-500 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-12">
              <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <span className="font-bold text-xl text-green-600">2</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition">
                  Live Training
                </h3>
                <p className="text-gray-600">
                  "Unlock real-time learning and interactive growth with live
                  training on Telegram, YouTube, and Google Classroom."
                </p>
                <h3 className="text-gray-500 my-3">Location</h3>
                <p className="text-gray-500 my-3">
                  YouTube, Telegram, Google Classroom
                </p>
              </div>
            </div>
          </div>

          {/* Dream More Website */}
          <div className="p-4 sm:p-12 rounded-3xl bg-white border hover:shadow-xl hover:border-orange-300 transition-all duration-500 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="space-y-12">
              <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                <span className="font-bold text-xl text-green-600">3</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition">
                  Dream More Website
                </h3>
                <p className="text-gray-600">
                  "Empowering growth through hands-on learning and personal
                  connection—because real progress happens online."
                </p>
                <h3 className="text-gray-500 my-3">Location</h3>
                <p className="text-gray-500 my-3">Dream More Website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPath;


