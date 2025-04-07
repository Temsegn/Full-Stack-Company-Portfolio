'use client'
import React from 'react';
import { useState } from 'react';
function About() {

    return (
        <section className="bg-white">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-y-4">
                {/* About Us Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-orange-600 sm:text-4xl">About Us</h2>
                        <p className="mt-4 text-gray-600 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                        </p>
                        <div className="relative flex flex-col sm:flex-row sm:space-x-4 mt-8">
                            <Button href="#" text="Services" bgColor="orange-600" hoverBgColor="white" />
                            <Button href="#" text="Get Course" bgColor="white" hoverBgColor="gray-800" />
                        </div>
                    </div>
                    <div className="relative group w-full h-auto">
                        <div className="mt-12 md:mt-0 overflow-hidden rounded-lg shadow-md">
                            <img src="/d4.jpg" alt="About Us Image" className="object-cover w-full h-96" />
                        </div>
                    </div>
                </div>

                {/* Mission, Vision, Core Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card icon="/mission.svg" title="Mission" description="Dream More Company" />
                    <Card icon="/vision.svg" title="Vision" description="Dream More Company" />
                    <Card icon="/core.svg" title="Core Values" description="Dream More Company" />
                </div>
            </div>
        </section>
    );
}

// Reusable Button Component
const Button = ({ href, text, bgColor, hoverBgColor }) => (
    <a href={href} className={`relative inline-flex items-center px-4 py-2 text-md text-${bgColor === 'white' ? 'gray-700' : 'white'} bg-${bgColor} rounded-full overflow-hidden group transition-all duration-300 w-fit`}>
        <span className={`absolute inset-0 bg-${hoverBgColor} scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100`}></span>
        <span className={`relative z-10 group-hover:text-${bgColor === 'white' ? 'white' : 'gray-950'} transition-colors duration-300`}>{text}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ml-1 relative z-10 transition-colors duration-300 group-hover:text-${bgColor === 'white' ? 'white' : 'gray-950'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    </a>
);

// Reusable Card Component
const Card = ({ icon, title, description }) => (
    <li>
        <a href="#business" data-clickable="Category:5:category-card" className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
            <div className="flex items-center p-6">
                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
                    <img src={icon} alt={title} className="w-10 h-10" />
                </div>
                <div className="flex-grow ml-6">
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">{title}</h3>
                    <div className="inline-flex items-center mt-1">
                        <span className="text-gray-600 rounded">{description}</span>
                    </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                </div>
            </div>
        </a>
    </li>
);

export default About;