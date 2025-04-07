"use client"
import { useState, useEffect, useRef } from "react"
import Welcome from "../_components/welcome"
import Core from "../_components/coreValue"
import Card from "../_components/Card"
import Vision from "../_components/vision"
import Mission from "../_components/mission"
import { teamMembers } from "../data/team"
import Link from "next/link"
import { motion } from "framer-motion"

// Reusable Button Component with improved animations
const Button = ({ href, text, bgColor, hoverBgColor }) => (
  <a
    href={href}
    className={`relative inline-flex items-center px-6 py-3 text-md font-medium text-${
      bgColor === "white" ? "gray-700" : "white"
    } bg-${bgColor} rounded-full overflow-hidden group transition-all duration-300 w-fit shadow-md hover:shadow-lg`}
  >
    <span
      className={`absolute inset-0 bg-${hoverBgColor} scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100`}
    ></span>
    <span
      className={`relative z-10 group-hover:text-${
        bgColor === "white" ? "white" : "gray-950"
      } transition-colors duration-300`}
    >
      {text}
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ml-2 relative z-10 transition-colors duration-300 group-hover:text-${
        bgColor === "white" ? "white" : "gray-950"
      } group-hover:translate-x-1 transition-transform`}
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
  </a>
)

// Enhanced Card Component with animations
const Car = ({ icon, title, description, isActive, onClick }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    onClick={onClick}
    className={`cursor-pointer block h-full transition-all duration-300 bg-white border ${
      isActive ? "border-orange-500 shadow-lg ring-2 ring-orange-500/20" : "border-gray-200"
    } rounded-lg hover:shadow-lg hover:border-orange-500 hover:ring-1 hover:ring-orange-500/20`}
  >
    <div className="flex items-center p-6">
      <div
        className={`flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-300 rounded ${
          isActive ? "bg-orange-100" : "bg-orange-50"
        } group-hover:bg-orange-100`}
      >
        <img src={icon || "/placeholder.svg"} alt={title} className="w-10 h-10" />
      </div>
      <div className="flex-grow ml-6">
        <h3
          className={`text-lg font-semibold transition-colors duration-300 line-clamp-1 ${
            isActive ? "text-orange-600" : "text-gray-900"
          } group-hover:text-orange-600`}
        >
          {title}
        </h3>
        <div className="inline-flex items-center mt-1">
          <span className="text-gray-600 rounded">{description}</span>
        </div>
      </div>
      <div className="flex-shrink-0 ml-4">
        <svg
          className={`w-5 h-5 transition-colors duration-300 ${
            isActive ? "text-orange-500" : "text-gray-400"
          } group-hover:text-orange-500`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
        </svg>
      </div>
    </div>
  </motion.div>
)

// Custom hook for scroll animations
function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

function About() {
  const [selectedSection, setSelectedSection] = useState("vision")
  const scrollY = useScrollAnimation()
  const aboutRef = useRef(null)
  const mvcRef = useRef(null)
  const teamRef = useRef(null)

  // Function to handle button click and update the selected section
  const handleButtonClick = (section) => {
    setSelectedSection(section)
  }

  // Animation variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <>
      <Welcome title="About Dream More" url="d4.jpg" button="Ask Us" link="/contact" />

      {/* About Us Section with enhanced animations */}
      <motion.section
        ref={aboutRef}
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <motion.div className="max-w-lg" variants={fadeInUp}>
              <motion.span
                className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full mb-4"
                variants={fadeInUp}
              >
                Our Story
              </motion.span>
              <motion.h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6" variants={fadeInUp}>
                About <span className="text-orange-600">Dream More</span>
              </motion.h2>
              <motion.p className="mt-4 text-gray-600 text-lg leading-relaxed" variants={fadeInUp}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut
                tortor. Suspendisse et magna quis elit efficitur consequat.
              </motion.p>
              <motion.div className="relative flex flex-col sm:flex-row sm:space-x-4 mt-8" variants={fadeInUp}>
                <Button href="#" text="Our Services" bgColor="orange-600" hoverBgColor="white" />
                <Button href="#" text="Get Course" bgColor="white" hoverBgColor="gray-800" />
              </motion.div>
            </motion.div>
            <motion.div className="relative group w-full h-auto" variants={fadeInUp}>
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/d4.jpg"
                  alt="About Us Image"
                  className="object-cover w-full h-96 transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Core Values Section with enhanced animations */}
      <motion.section
        ref={mvcRef}
        className="bg-gray-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeInUp}>
            <motion.span
              className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full mb-4"
              variants={fadeInUp}
            >
              Our Foundation
            </motion.span>
            <motion.h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" variants={fadeInUp}>
              What Drives <span className="text-orange-600">Us Forward</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={fadeInUp}>
              <Car
                icon="/mission.svg"
                title="Mission"
                description="Dream More Company"
                isActive={selectedSection === "mission"}
                onClick={() => handleButtonClick("mission")}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Car
                icon="/vision.svg"
                title="Vision"
                description="Dream More Company"
                isActive={selectedSection === "vision"}
                onClick={() => handleButtonClick("vision")}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Car
                icon="/core.svg"
                title="Core Values"
                description="Dream More Company"
                isActive={selectedSection === "core"}
                onClick={() => handleButtonClick("core")}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            key={selectedSection}
          >
            {selectedSection === "vision" && <Vision />}
            {selectedSection === "mission" && <Mission />}
            {selectedSection === "core" && <Core />}
          </motion.div>
        </div>
      </motion.section>

      {/* Card Section */}
      <section className="bg-white py-16">
        <Card />
      </section>

      {/* Team Section with enhanced animations */}
      <motion.section
        ref={teamRef}
        className="bg-gray-50 px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="container mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <motion.span
              className="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full mb-4"
              variants={fadeInUp}
            >
              THE TEAM
            </motion.span>
            <motion.h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900" variants={fadeInUp}>
              Meet Our <span className="text-orange-600">Experts</span>
            </motion.h3>
            <motion.p className="text-gray-600 mt-4 max-w-2xl mx-auto" variants={fadeInUp}>
              "We are a team of <span className="text-orange-600 font-medium">talented, innovative, dedicated</span>{" "}
              professionals"
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <Link href={`/about/${index}`} className="block group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden h-72">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition duration-300">
                        {member.name}
                      </h3>
                      <p className="text-orange-500 uppercase text-sm font-medium mt-1">{member.role}</p>
                      <p className="text-gray-600 mt-3 text-sm line-clamp-2">
                        {member.bio || "Team member at Dream More with expertise in their field."}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default About

