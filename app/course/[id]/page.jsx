import { courses } from "../../data/courses"; // Adjust the path to your data
import Welcome from "../../_components/welcome";
import BeadCumb from "../../_components/beadcumb";
import LearningPath from "../../_components/learningPath";
import GlobalApi from "../../_utils/GlobalApi";

export default async function CourseDetail({ params }) {
  // Await params before using it
  const { id } = await params; // This ensures params are resolved properly

  const response = await GlobalApi.getCourse();
  const course = response?.data?.data.find((p) => p.id.toString() === id);

  // If no course is found, display a message

  return (
    <div className="bg-white mb-20">
      <Welcome
        title="Our Course"
        url="/d1.jpg"
        button="Get Course"
        link="/course"
      />
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
