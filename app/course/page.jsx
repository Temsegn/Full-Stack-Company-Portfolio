"use client"
import { useEffect, useState, useRef } from "react"
import Welcome from "../_components/welcome"
import GlobalApi from "../_utils/GlobalApi"
import Link from "next/link"

function Course() {
  const [searchQuery, setSearchQuery] = useState("")
  const [courses, setCourses] = useState([])
  const [isVisible, setIsVisible] = useState({
    heading: false,
    search: false,
    courses: false,
    cta: false,
  })

  // Refs for scroll observation
  const headingRef = useRef(null)
  const searchRef = useRef(null)
  const coursesRef = useRef(null)
  const ctaRef = useRef(null)

  // Fetch courses initially and refresh every 10 seconds to update when new courses are added
  useEffect(() => {
    fetchCourses()
    const interval = setInterval(fetchCourses, 10000) // Auto-refresh every 10 seconds
    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  // Set up intersection observers for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id
          setIsVisible((prev) => ({ ...prev, [targetId]: true }))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (headingRef.current) observer.observe(headingRef.current)
    if (searchRef.current) observer.observe(searchRef.current)
    if (coursesRef.current) observer.observe(coursesRef.current)
    if (ctaRef.current) observer.observe(ctaRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const fetchCourses = async () => {
    try {
      const response = await GlobalApi.getCourse()
      if (response?.data?.data) {
        setCourses(response.data.data)
        console.log(response.data.data)
      }
    } catch (error) {
      console.error("Error fetching courses:", error)
    }
  }

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) => course.Name?.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <Welcome title="Our Course" url="/d1.jpg" button="Get Course" link="/course" />

      <div className="bg-gradient-to-b from-white to-gray-50 p-4 md:p-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-transparent opacity-70"></div>
        <div className="absolute top-40 right-10 w-40 h-40 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 left-10 w-60 h-60 bg-orange-500 rounded-full filter blur-3xl opacity-10"></div>

        <div
          id="heading"
          ref={headingRef}
          className={`transition-all duration-1000 transform ${isVisible.heading ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} relative z-10`}
        >
          <h1 className="text-3xl md:text-4xl text-gray-800 font-bold mt-10 relative inline-block">
            Our Courses
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Explore our comprehensive selection of courses designed to help you master new skills and advance your
            career.
          </p>
        </div>

        {/* Search Input */}
        <div
          id="search"
          ref={searchRef}
          className={`relative my-10 mx-auto w-full max-w-lg transition-all duration-1000 delay-300 transform ${isVisible.search ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
            <input
              type="text"
              placeholder="Search courses..."
              className="relative rounded-full w-full h-12 bg-white py-2 pl-12 pr-32 outline-none border border-gray-200 shadow-md focus:ring-2 focus:ring-teal-200 focus:border-transparent transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute left-4 top-3.5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <button
              type="button"
              className="absolute right-1 top-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-sm"
            >
              Search
            </button>
          </div>
        </div>

        {/* Courses List */}
        <div
          id="courses"
          ref={coursesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 transform ${isVisible.courses ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} relative z-10`}
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => <CourseCard key={index} course={course} index={index} />)
          ) : (
            <div className="text-gray-500 text-center col-span-3 py-16 bg-white bg-opacity-50 rounded-xl border border-gray-100 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <p className="text-lg font-medium">No courses available</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div
        id="cta"
        ref={ctaRef}
        className={`w-full bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 text-white py-20 flex flex-col items-center justify-center transition-all duration-1000 transform ${isVisible.cta ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} relative overflow-hidden`}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-white rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full filter blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white relative z-10 text-center px-4">
          Work and Learn With Us
        </h1>
        <div className="h-1 w-20 bg-white opacity-50 rounded-full mt-6 mb-6"></div>
        <p className="text-white text-opacity-90 max-w-lg text-center px-4 mb-8">
          Join our community of learners and professionals to advance your skills and career opportunities.
        </p>
        <button className="px-8 py-3 bg-white text-purple-700 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Get Started Today
        </button>
      </div>
    </>
  )
}

function CourseCard({ course, index }) {
  return (
    <div
      className="group flex flex-col h-full rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms`, transitionDelay: `${index * 50}ms` }}
    >
      {course.cover?.url ? (
        <div className="relative overflow-hidden h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img
            src={course.cover.url || "/placeholder.svg"}
            alt={course.Name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
          <h1 className="text-gray-900 font-semibold text-xl mb-2 line-clamp-1 group-hover:text-teal-600 transition-colors duration-300">
            {course.Name}
          </h1>
          <div className="w-10 h-0.5 bg-teal-500 rounded-full"></div>
        </div>

        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Description</p>
        <p className="text-gray-700 flex-grow line-clamp-3 text-sm">{course.Description}</p>

        <div className="mt-4 flex justify-end">
          <Link
            href={`/course/${course.id}`}
            className="text-teal-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Display Curriculum PDFs */}
      <div className="px-6 pb-4">
        {course.Curriculum?.length > 0 ? (
          <div className="text-sm">
            {course.Curriculum.map((file, index) => (
              <div key={index} className="inline-block">
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 rounded-full transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                  Get Curriculum
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm italic">No curriculum available</p>
        )}
      </div>

      {/* Register Button - Always at Bottom */}
      <div className="px-6 pb-6 mt-auto">
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium relative overflow-hidden group">
          <span className="relative z-10">Register</span>
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </button>
      </div>
    </div>
  )
}

export default Course

