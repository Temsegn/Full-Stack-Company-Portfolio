import GlobalApi from "../../_utils/GlobalApi.tsx";
import Welcome from "../../_components/welcome";
import Link from "next/link";
import BeadCumb from "../../_components/beadcumb";

export default async function BlogDetail({ params }) {
  const { id } = await params; // Extract ID from params

  // Fetch blog details
  const response = await GlobalApi.getBlog();
  const post = response?.data?.data.find((p) => p.id.toString() === id);

  // Fetch all blogs for "Recent News"
  const blogs = response?.data?.data || [];

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-2xl font-semibold">Post not found</h2>
      </div>
    );
  }

  return (
    <>
      {/* Welcome Banner */}
      <Welcome
        title="Explore Our News"
        url="/d1.jpg"
        button="Get News"
        link="/blog"
      />
      <BeadCumb main="blog" name={post.title} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto py-10 ">
        {/* Main Blog Content */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden md:col-span-2">
          <img
            src={post.cover.url}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
            <p className="text-gray-500 mt-2">{post.date} | By Dream More</p>
            <p className="text-gray-700 mt-4">{post.Description}</p>
          </div>
        </div>

        {/* Sidebar - Recent Blogs */}
        <div className="w-full h-full">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-600">
              Recent News
            </h3>
            {blogs.map((recentPost) => (
              <Link
                key={recentPost.id}
                href={`/blog/${recentPost.id}`}
                className="block mb-3 text-blue-600 hover:text-blue-800"
              >
                {recentPost.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
