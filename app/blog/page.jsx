"use client"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import GlobalApi from "../_utils/GlobalApi.tsx"

function Blogs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
    const interval = setInterval(fetchBlogs, 10000) // Auto-refresh every 10s
    return () => clearInterval(interval)
  }, [])

  const fetchBlogs = async () => {
    try {
      setIsLoading(true)
      const response = await GlobalApi.getBlog()
      if (response?.data?.data) {
        setBlogs(response.data.data)
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredBlogs = blogs.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-10 scroll-smooth">
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-[url('/d2.jpg')] bg-fixed bg-cover bg-center h-96 text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">Explore Our Latest Blogs</h1>
          <p className="mt-2 text-xl mb-8 max-w-2xl mx-auto">Stay updated with the latest trends and insights.</p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full p-4 pl-12 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
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
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Blogs */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <BlogCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredBlogs.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xl text-gray-600">No posts found matching "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Sidebar - Recent News */}
          <div className="lg:w-full w-full">
            <div className="bg-white p-8 rounded-xl shadow-md sticky top-8 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-4 mb-6 text-gray-800">Recent News</h3>
              <div className="space-y-4">
                {isLoading
                  ? Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      ))
                  : blogs.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="block py-2 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                      >
                        {post.title}
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogCard = ({ post, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-md overflow-hidden opacity-0 transform translate-y-8 transition-all duration-700 hover:shadow-xl"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={post.cover.url || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-110"
          priority={index < 2} // Only prioritize the first two images
        />
      </div>
      <div className="p-6">
        <Link
          href={`/blog/${post.id}`}
          className="text-2xl text-gray-800 font-bold mt-2 hover:text-blue-600 transition-colors duration-300 line-clamp-2"
        >
          {post.title}
        </Link>
        <p className="text-gray-600 mt-3 line-clamp-3">{post.Description}</p>
        <div className="flex justify-between items-center mt-6 text-gray-500 text-sm">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {post.date}
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Dream More
          </span>
        </div>
        <Link
          href={`/blog/${post.id}`}
          className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:translate-x-2"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}

const BlogCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
    <div className="h-60 bg-gray-200"></div>
    <div className="p-6">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="flex justify-between items-center mt-6">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded-full w-32 mt-6"></div>
    </div>
  </div>
)

export default Blogs

