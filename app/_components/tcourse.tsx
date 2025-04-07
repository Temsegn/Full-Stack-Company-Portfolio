"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import Welcome from "../_components/welcome";
import { courses } from "../data/courses";
import GlobalApi from "../_utils/GlobalApi";

function Course() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cour, setCourse] = useState([]);
  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    GlobalApi.getCourse().then((res) => {
      console.log(res.data);
      setCourse(res.data.ObjectData);
    });
  };


   return (
    <>
      <Welcome
        title="Our Course"
        url="/d1.jpg"
        button="Get Course"
        link="/course"
      />

      <div className="bg-white p-4 md:p-16">
        <h1 className="text-3xl text-gray-800 font-bold mt-10">Our Courses</h1>

        {/* Search Input */}
        <div className="relative my-10 mx-auto w-full max-w-lg">
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
        </div>

        {/* Courses List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <div className="p-4 border rounded-lg shadow-lg hover:shadow-md hover:border-orange-300 transition-all duration-500 bg-opacity-50 shadow-gray-600/10 cursor-pointer">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h1 className="text-gray-900 font-semibold text-lg my-2">
                    {course.title}
                  </h1>
                  <p className="text-gray-500 mb-1">description</p>
                  <p className="text-gray-700"> {course.detail} </p>
                  <div className="block mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 col-span-3 text-center">
              No courses found.
            </p>
          )}
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 flex justify-center items-center">
        <h1 className="text-4xl font-bold uppercase tracking-wide">
          Work and Learn With Us
        </h1>
      </div>
    </>
  );
}

export default Course;
