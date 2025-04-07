 import react from 'react';
 import Link from 'next/link';

 function FloatingButtons() {
    return (
      <div className="fixed bottom-12 left-1 flex flex-col gap-4 z-50">
        
  
        {/* Contact Us Button */}
        <Link
          href="/contact"
          className="px-6 py-3 text-white font-semibold rounded-sm bg-orange-500 shadow-lg transition-all animate-pulse    "
        >
          Contact Us
        </Link>
      </div>
    );
  }
  

  export default FloatingButtons;