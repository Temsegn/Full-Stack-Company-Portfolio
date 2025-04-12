"use client";

import { useState, useEffect } from "react";
import { teamMembers } from "../../data/team";
import Welcome from "../../_components/welcome";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeamDetail({ params }) {
  const { id } = params;
  const [isLoaded, setIsLoaded] = useState(false);

  const team = teamMembers.find((team) => team.id === id);

  const sampleBio = `${team?.name} is a dedicated professional with over 4 years of experience in the industry. They have led numerous successful projects and are known for their innovative approach to problem-solving.`;

  const sampleExperience = [
    {
      company: "Dream More",
      position: "Senior Specialist",
      period: "2020 - Present",
      description:
        "Leading strategic initiatives and mentoring junior team members.",
    },
    {
      company: "Bit Campus",
      position: "Innovator of Ethiothickner ",
      period: "2017 - 2020",
      description:
        "Developed and implemented cutting-edge solutions for clients across various industries.",
    },
    {
      company: "Hyper Juice ",
      position: "Production Manager",
      period: "2015 - 2017",
      description:
        "Collaborated with cross-functional teams to deliver high-quality projects on time.",
    },
  ];

  const sampleEducation = [
    {
      degree: "Master's in Chemical Engineering",
      institution: "University of Bahr Dar University",
      year: "2015",
    },
    {
      degree: "Bachelor's in Chemical Engineering",
      institution: "Tech Institute",
      year: "2013",
    },
  ];

  const sampleSkills = [
    "Leadership",
    "Project Management",
    "Strategic Planning",
    "Team Building",
    "Problem Solving",
    "Communication",
    "Graphics Designer",
    "Chemical Engineering",
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle 404 case
  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Team Member Not Found</p>
          <Link
            href="/about"
            className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
          >
            Back to Team
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Welcome
        title={`Meet ${team.name}`}
        url="/d1.jpg"
        button="Contact Us"
        link="/contact"
      />

      <motion.div
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <motion.div className="lg:col-span-2 space-y-10" variants={fadeIn}>
            {/* Profile Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img
                  src={team.image || "/placeholder.svg"}
                  alt={team.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {team.name}
                  </h1>
                  <p className="text-orange-300 text-lg mt-2">{team.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>{team.email || "dreammore2122@gmail.com"}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>{team.phone || "+251 (993) 13-2122"}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-orange-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{team.location || "San Francisco, CA"}</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-8">
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  About
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {sampleBio}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With a passion for excellence and a commitment to continuous
                  learning, {team.name} brings valuable insights and expertise
                  to every project. Their collaborative approach and attention
                  to detail have earned them recognition among peers and clients
                  alike.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              variants={fadeIn}
            >
              <div className="flex items-center mb-6">
                <svg
                  className="w-6 h-6 text-orange-500 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Experience
                </h2>
              </div>

              <div className="space-y-6">
                {sampleExperience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-orange-200 pb-6"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, delay: index * 0.1 },
                      },
                    }}
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500"></div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-orange-600 text-sm font-medium mb-2">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education & Skills Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                variants={fadeIn}
              >
                <div className="flex items-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Education
                  </h2>
                </div>

                <div className="space-y-4">
                  {sampleEducation.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="border-l-2 border-orange-200 pl-4 py-2"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.5, delay: index * 0.1 },
                        },
                      }}
                    >
                      <h3 className="text-lg font-medium text-gray-800">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.year}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                variants={fadeIn}
              >
                <div className="flex items-center mb-6">
                  <svg
                    className="w-6 h-6 text-orange-500 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Skills
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {sampleSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.3, delay: index * 0.05 },
                        },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div className="lg:col-span-1 space-y-6" variants={fadeIn}>
            {/* Team Members Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-orange-600 text-white p-4">
                <h3 className="text-lg font-semibold">Our Team Members</h3>
              </div>
              <div className="divide-y">
                {teamMembers.map((member) => (
                  <Link
                    key={member.id}
                    href={`/about/${member.id}`}
                    className={`flex items-center p-4 hover:bg-orange-50 transition-colors ${
                      member.id === Number(id) ? "bg-orange-50" : ""
                    }`}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4
                        className={`font-medium ${
                          member.id === Number(id)
                            ? "text-orange-600"
                            : "text-gray-800"
                        }`}
                      >
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="text-lg font-semibold">Get In Touch</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Interested in working with {team.name}? Reach out directly or
                  schedule a consultation.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-3 px-4 bg-orange-600 text-white text-center rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Contact Now
                </Link>
              </div>
            </div>

            {/* Calendar Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4 flex items-center">
                <svg
                  className="w-5 h-5 text-orange-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">
                  Upcoming Events
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
