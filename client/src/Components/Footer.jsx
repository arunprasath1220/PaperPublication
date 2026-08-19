import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 200) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 200) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-100 border-t border-slate-200 mt-auto text-gray-600 text-xs sm:text-sm">
      <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="m-0">
          © {new Date().getFullYear()} <strong className="text-gray-800 font-semibold">IJMEMS</strong> - Published by <em className="text-gray-700">Ram Arti Publishers</em>. All rights reserved.
        </p>
        <p className="m-0 text-gray-500 text-xs">
          Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-ijmems-blue hover:underline">CC BY 4.0</a>
        </p>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScroll && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 animate-in fade-in zoom-in-75 duration-200">
          <button 
            onClick={scrollToTop}
            className="bg-ijmems-blue text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-blue-800 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp size={22} />
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
