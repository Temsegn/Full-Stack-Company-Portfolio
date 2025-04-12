import Link from "next/link";
import Image from "next/image";
import Services from "../_components/service_home";
import Card from "../_components/Card";
import Industry from "../_components/industry";
import Question from "../_components/Question";
import ScrollToTop from "../_components/ScrollToTop";
import Testimonial from "../_components/testimonial-carousel";
import {
  ArrowRight,
  ChevronRight,
  ArrowDown,
  ExternalLink,
  Play,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50">
          <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-70 blur-[100px]"></div>
          <div className="absolute -left-20 top-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-50 to-cyan-50 rounded-full opacity-60 blur-[80px]"></div>

          <div
            className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-gradient-to-r from-purple-50 to-pink-50 rounded-full opacity-60 blur-[80px] animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>

          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.015]"></div>

          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute left-0 top-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="diagonalLines"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(45)"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="40"
                    stroke="rgba(99, 102, 241, 0.03)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-10">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                  <span className="block mb-2">Right Work</span>
                  <span className="relative">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-700 to-orange-600 bg-size-200 animate-gradient-x">
                      At Right Time
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-indigo-200"
                      viewBox="0 0 400 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C100 -4 200 16 400 8"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <br />
                  <span className="text-2xl text-orange-500">
                    Accelarate your digital litegracy with Dream More
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Our enterprise-ready toolkit empowers development teams to
                  build scalable, secure, and high-performance applications with
                  40% less development time.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">40%</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Faster Development
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Expert Support
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-gray-700 text-white font-medium transition-all duration-1000 hover:from-gray-700 hover:to-orange-800 shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:-translate-y-1"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/blog"
                  className="group inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transform hover:-translate-y-1"
                >
                  <Play className="mr-2 h-4 w-4" />
                  <span>Get News</span>
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl transform -rotate-1"></div>
              <div className="absolute -inset-4 bg-gradient-to-l from-indigo-500/5 to-purple-500/5 rounded-2xl transform rotate-1"></div>

              {/* Code snippet floating element */}
              <div className="absolute -top-10 -left-10 md:-left-20 w-64 bg-white rounded-lg shadow-xl p-4 transform -rotate-2 z-20 border border-gray-100">
                <div className="flex items-center space-x-1 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                </div>
                <div className="bg-gray-800 rounded-md p-3 text-xs text-gray-100 font-mono">
                  <div>
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-blue-400">
                      {"{"} DevTools {"}"}
                    </span>{" "}
                    <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">'@enterprise/tools'</span>;
                  </div>
                  <div className="mt-1">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">app</span> ={" "}
                    <span className="text-yellow-400">DevTools</span>.
                    <span className="text-blue-400">initialize</span>
                    ();
                  </div>
                  <div className="mt-1 text-gray-500">
                    // 40% faster development
                  </div>
                </div>
              </div>

              {/* Analytics floating element */}
              <div className="absolute -bottom-10 -right-10 md:-right-20 w-64 bg-white rounded-lg shadow-xl p-4 transform rotate-2 z-20 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-gray-800">
                    Performance
                  </div>
                  <div className="text-xs text-green-600 font-medium">+27%</div>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3">
                  <div className="h-1 bg-orange-500 rounded-full"></div>
                  <div className="h-1 bg-gray-800 rounded-full"></div>
                  <div className="h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-indigo-500/20 group z-10">
                <div className="aspect-[4/3] w-full relative">
                  <Image
                    src="/d4.jpg"
                    alt="Enterprise development platform dashboard"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent mix-blend-overlay"></div>

                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg flex items-center space-x-2 transform transition-transform hover:scale-105">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">
                    Enterprise Ready
                  </span>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/20 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-orange-500 font-medium">
                        Dream More Company
                      </h3>
                      <p className="text-white text-sm">
                        right work at right time
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-full p-2 backdrop-blur-sm">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-full opacity-80 z-[-1] animate-float"></div>
              <div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-50 rounded-full opacity-80 z-[-1] animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-12 -right-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full opacity-80 z-[-1] animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-50 blur-[80px]"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.015]"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-4">
              <span> why dream more ?</span>
            </div>
          </div>
          <Card />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/3 w-1/4 h-1/4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full opacity-50 blur-[80px]"></div>
          <div className="absolute right-0 bottom-1/3 w-1/4 h-1/4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-50 blur-[80px]"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.015]"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-4">
              <span>Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored services designed to meet your specific business needs.
            </p>
          </div>
          <Services />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full opacity-50 blur-[80px]"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.015]"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-4">
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <Testimonial />
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/4 bottom-0 w-1/3 h-1/3 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full opacity-50 blur-[80px]"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.015]"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-4">
              <span>Industries</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions for various industry sectors.
            </p>
          </div>
          <Industry />
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-gray-800">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-orange-500 rounded-full opacity-20 blur-[80px]"></div>
          <div className="absolute -left-20 bottom-0 w-80 h-80 bg-orange-400 rounded-full opacity-20 blur-[80px]"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.05]"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/30 text-white font-medium text-sm mb-6 backdrop-blur-sm">
              <span>Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Join thousands of professionals who have already enhanced their
              productivity with our tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/course"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-gray-700 font-medium transition-all duration-300 hover:bg-gray-100 shadow-lg hover:shadow-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transform hover:-translate-y-1"
              >
                <span>Get Started </span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-indigo-500/30 backdrop-blur-sm text-white border border-indigo-400/30 font-medium transition-all duration-300 hover:bg-indigo-500/40 shadow-lg hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transform hover:-translate-y-1"
              >
                <span>Contact Us</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full opacity-50 blur-[80px]"></div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:40px_40px] opacity-[0.015]"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-4">
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our tools and services.
            </p>
          </div>
          <Question />
        </div>
      </section>

      {/* CTA Section */}
      <ScrollToTop />
    </main>
  );
}
