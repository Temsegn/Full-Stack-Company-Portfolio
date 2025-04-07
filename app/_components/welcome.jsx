import react from "react"
import Link from 'next/link';

function Welcome({title,url,button,link}){
    return (
        
<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-72 text-white overflow-hidden mt-16">
  <div className="absolute inset-0">
    <img
      src={url}
      alt="Background Image"
      className="object-cover object-center w-full h-72"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4 ">{title}</h1>
    <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
    <Link href={link} 
   className="relative inline-flex items-center px-4 py-2 text-md text-white bg-orange-600 rounded-full overflow-hidden group transition-all duration-300 w-fit"
>
  <span className="absolute inset-0 bg-gray-800 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-300">{button}</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1 relative z-10 transition-colors duration-300 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</Link>

  </div>
</div>

    )
}

export default Welcome;