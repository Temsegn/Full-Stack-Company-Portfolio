"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  BookOpenIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LightBulbIcon,
  UserGroupIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline"

const careerSteps = [
  {
    title: "Foundation Building",
    description: "Master essential concepts through structured learning paths and interactive tutorials",
    icon: <BookOpenIcon className="w-6 h-6" />,
    color: "bg-blue-50",
    border: "border-blue-500",
    textColor: "text-blue-700",
    achievements: ["Core programming concepts", "Problem-solving skills", "Technical fundamentals"],
  },
  {
    title: "Applied Learning",
    description: "Develop practical skills through hands-on projects and real-world applications",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    color: "bg-purple-50",
    border: "border-purple-500",
    textColor: "text-purple-700",
    achievements: ["Portfolio development", "Collaborative coding", "Technical documentation"],
  },
  {
    title: "Professional Experience",
    description: "Gain industry exposure through mentored internships and team collaborations",
    icon: <BriefcaseIcon className="w-6 h-6" />,
    color: "bg-amber-50",
    border: "border-amber-500",
    textColor: "text-amber-700",
    achievements: ["Professional workflows", "Team collaboration", "Client communication"],
  },
  {
    title: "Career Advancement",
    description: "Excel in your professional journey with specialized expertise and leadership skills",
    icon: <ChartBarIcon className="w-6 h-6" />,
    color: "bg-emerald-50",
    border: "border-emerald-500",
    textColor: "text-emerald-700",
    achievements: ["Technical leadership", "Specialized expertise", "Mentoring abilities"],
  },
]

const learningLevels = [
  {
    title: "Beginner",
    description: "Start your journey with foundational concepts and guided learning paths",
    icon: <LightBulbIcon className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
    features: [
      "Structured curriculum for beginners",
      "Interactive coding exercises",
      "Fundamentals of programming",
      "Guided project walkthroughs",
    ],
    cta: "Begin Your Journey",
  },
  {
    title: "Intermediate",
    description: "Expand your skills with advanced concepts and specialized technologies",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    color: "from-violet-500 to-purple-500",
    features: [
      "Advanced programming techniques",
      "Specialized technology tracks",
      "Complex project development",
      "Code optimization strategies",
    ],
    cta: "Level Up Your Skills",
  },
  {
    title: "Advanced",
    description: "Master professional techniques and become an industry-ready expert",
    icon: <UserGroupIcon className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
    features: [
      "Expert-level specializations",
      "System architecture design",
      "Enterprise application development",
      "Technical leadership training",
    ],
    cta: "Master Your Craft",
  },
]

const learningMethods = [
  {
    title: "Immersive Campus Experience",
    description: "Accelerate your growth through in-person instruction and collaborative learning environments",
    location: "Bahir Dar Tech Campus, Innovation Center",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    title: "Interactive Online Learning",
    description: "Access expert instruction and community support through our digital platforms",
    location: "Live sessions via Zoom, Discord, and Learning Portal",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    title: "Hybrid Learning Experience",
    description: "Combine self-paced online modules with scheduled mentorship and in-person workshops",
    location: "Digital platform with scheduled campus workshops",
    image: "/placeholder.svg?height=400&width=600",
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
]

function LearningPath() {
  const [activeTab, setActiveTab] = useState(0)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-purple-100 mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-amber-100 mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      {/* Hero Section */}
   

      {/* Learning Levels Section */}
      <section id="learning-levels" className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Learning Paths for Every Stage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Tailored educational journeys designed to meet you where you are and take you where you want to go.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {learningLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${level.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">{level.icon}</div>
                    <span className="text-white text-sm font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                      Level {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">{level.title}</h3>
                  <p className="mt-2 text-white/90">{level.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="mt-8 w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300"
                  >
                    {level.cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth Path */}
      <section ref={containerRef} className="relative z-10 px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              Your Career Growth Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              A structured progression that transforms beginners into industry professionals through guided development
              stages.
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline progress bar */}
            <motion.div
              className="absolute left-1/2 w-1 bg-gray-200 transform -translate-x-1/2 h-full"
              style={{
                background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, #f59e0b, #10b981)",
                clipPath: `polygon(0 0, 100% 0, 100% ${timelineProgress}%, 0 ${timelineProgress}%)`,
              }}
            />
            <div className="absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2" />

            {careerSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-24 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
              >
                {/* Content */}
                <div className="w-1/2 pr-12">
                  <div
                    className={`p-6 rounded-xl shadow-lg ${step.color} border border-gray-100 hover:shadow-xl transition-all duration-500`}
                  >
                    <div className={`inline-block p-3 rounded-lg ${step.textColor} bg-white mb-4`}>{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {step.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Icon container */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-12 h-12 ${step.border} border-4 rounded-full flex items-center justify-center bg-white z-10 shadow-md`}
                  >
                    <span className="text-lg font-bold">{index + 1}</span>
                  </motion.div>
                  <span
                    className={`mt-2 px-3 py-1 rounded-full text-xs font-semibold ${step.textColor} bg-white shadow-sm`}
                  >
                    Phase {index + 1}
                  </span>
                </div>

                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methods Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 sm:text-4xl"
            >
              How We Deliver Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Choose the learning experience that fits your lifestyle and learning preferences.
            </motion.p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {learningMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`rounded-xl overflow-hidden shadow-lg group cursor-pointer ${
                    activeTab === index ? "ring-2 ring-offset-2 ring-purple-500" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={`${method.color} h-3`}></div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">{method.description}</p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {method.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <Image
                    src={learningMethods[activeTab].image || "/placeholder.svg"}
                    alt={learningMethods[activeTab].title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${activeTab === 0 ? "bg-emerald-100 text-emerald-800" : activeTab === 1 ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}
                  >
                    Featured Program
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900">{learningMethods[activeTab].title}</h3>
                  <p className="mt-3 text-gray-600">{learningMethods[activeTab].description}</p>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Personalized learning experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Expert instructors and mentors</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Industry-aligned curriculum</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                    >
                      Explore This Program
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Ready to start your journey?</span>
                <span className="block text-indigo-200">Join thousands of successful graduates.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-100">
                Take the first step toward your new career today. Our admissions team is ready to guide you.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 bg-opacity-60 hover:bg-opacity-70 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default LearningPath
