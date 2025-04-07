'use client';

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Welcome from "../_components/welcome";

const courses = [
  { image: "/d1.jpg", title: "Graphics Full Course", detail: "Learn graphic design from basics to advanced." },
  { image: "/d2.jpg", title: "Video Editing Full Course", detail: "Master video editing with professional tools." },
  { image: "/d3.jpg", title: "Computer Vision Full Course", detail: "Explore machine learning and AI with vision." },
  { image: "/d4.jpg", title: "English Language", detail: "Improve your English communication skills." },
  { image: "/d5.jpg", title: "Web Development Full Course", detail: "Become a full-stack web developer." },
  { image: "/d6.jpg", title: "Rocket Science", detail: "Dive into the world of space exploration." },
  { image: "/d7.jpg", title: "Python Full Course", detail: "Dive into the world of Python exploration." },
  { image: "/d8.jpg", title: "Javascript", detail: "Dive into the world of Javascript exploration." },

];
const Course = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const isInView = useInView(containerRef, { once: false, margin: "-20%" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Welcome title="Our Course" url="/d1.jpg" button="Get Course"/>
      
      <motion.div 
        className="bg-white p-4 md:p-16"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
          scale: useTransform(scrollYProgress, [0, 1], [1, 0.98])
        }}
      >
        <motion.h1 
          variants={textVariants}
          className="text-3xl text-gray-800 font-bold mt-10"
        >
          Our Courses
        </motion.h1>

        {/* Animated Search Bar */}
        <motion.div
          variants={fadeInVariants}
          className="relative my-10 mx-auto w-full max-w-lg"
        >
          <input
            type="text"
            placeholder="Search courses..."
            className="rounded-full w-full h-12 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-200 shadow-md focus:ring-teal-200 focus:border-teal-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-2.5 bg-teal-600 text-white px-4 py-1.5 rounded-full hover:bg-teal-700"
          >
            Search
          </button>
        </motion.div>

        {/* Animated Course Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="p-4 border rounded-lg shadow-lg hover:shadow-md hover:border-orange-300 transition-all duration-500 bg-opacity-50 shadow-gray-600/10"
            >
         <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-md" />
       <h1 className="text-gray-900 font-semibold text-lg" id="name">
                         {course.title}
                       </h1>
                       <h3 className="text-gray-500 my-3">Description</h3>
                       <p className="text-gray-500 my-3" id="description">
                         {course.detail}
                       </p>
                       <div className="my-2 text-center">
                         <a
                           href="/documents/full.pdf"  // Updated path
                           target="_blank"
 
                           rel="noopener noreferrer"
                           className="text-blue-500 hover:text-blue-600 font-medium"
                         >
                           Read the Curriculum
                           <span className="ml-2">&#8594;</span>
                         </a>
                       </div>
                       <h3 className="text-gray-500 my-3">Topics</h3>
                       <div className="flex flex-wrap gap-3 my-2 mb-5">
                         <button className=" text-gray-600 rounded-full border-2 border-gray-200  px-5">
                           adobe
                         </button>
                         <button className="text-gray-600 rounded-full border-2 border-gray-200  px-5">
                           Capcut
                         </button>
                         <button className="text-gray-600 rounded-full border-2 border-gray-200  px-5">
                           Design
                         </button>
                         <button className="text-gray-600 rounded-full border-2 border-gray-200  px-5">
                           Design
                         </button>
                       </div>
                       <button className="w-full bg-orange-600 text-white py-3  shadow-lg hover:bg-white hover:text-gray-900 transition-colors duration-1000 hover:border-blue-300 border-2">
                         Register
                       </button>
             </motion.div>
          ))}
        </motion.div>

        {/* Animated Location Cards */}
        <motion.div 
          className="bg-white mt-20"
          variants={containerVariants}
        >
          <motion.h1 
            variants={textVariants}
            className="text-3xl text-gray-800 font-bold mt-10"
          >
            Where Do You Get and Take Our Course?
          </motion.h1>

          <motion.div 
            className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 sm:p-12 rounded-3xl bg-white border hover:shadow-md hover:border-orange-300 transition-all duration-500 bg-opacity-50 shadow-2xl shadow-gray-600/10"
              >
                {/* ... (keep your existing location card content) */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Learning Path Section */}
        <motion.div 
          className="bg-white mt-20"
          variants={fadeInVariants}
        >
          <motion.h1 
            variants={textVariants}
            className="text-3xl text-gray-800 font-bold mt-10"
          >
            Learning Path
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Course;