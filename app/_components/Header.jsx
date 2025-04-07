"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Common link style function
  const getLinkClass = (href) => 
    `transition hover:text-gray-500/75 ${pathname === href ? 'text-orange-600' : 'text-gray-500'}`;
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/services", text: "Our Services" },
    { href: "/course", text: "Course" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <img src="/logo.png" className="w-16 h-16 rounded-lg" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-md items-center space-x-6 mr-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClass(link.href)}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden block p-2.5 text-gray-600 transition hover:text-gray-600/75"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu - Side Slide */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <ul className="flex flex-col gap-6 mt-16">
            {navLinks.map((link, index) => (
              <li
                key={link.text}
                className="opacity-0 transform -translate-x-4"
                style={{
                  animation: menuOpen 
                    ? `slideIn 0.3s ease forwards ${index * 0.1}s`
                    : "none"
                }}
              >
                <Link
                  href={link.href}
                  className={`text-lg ${getLinkClass(link.href)} hover:text-gray-900 transition-colors`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}

export default Header;