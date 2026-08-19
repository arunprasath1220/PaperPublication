import React from 'react';

const TopNav = () => {
  return (
    <header className="bg-ijmems-blue text-white w-full">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-[110px] py-3 lg:py-0 lg:h-[72px] gap-3 lg:gap-0 text-xs sm:text-sm lg:text-base font-sans">
        {/* Left Side: Submit Button */}
        <div className="flex items-center w-full lg:w-auto justify-between lg:justify-start">
          <button className="bg-transparent border border-white text-white py-1.5 px-4 rounded text-xs sm:text-sm font-medium hover:bg-white/10 active:scale-95 transition-all shadow-sm cursor-pointer">
            Submit your paper
          </button>

          {/* Social Icons for Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Links & Desktop Socials */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 sm:gap-5 w-full lg:w-auto">
          {/* Social Icons for Desktop */}
          <div className="hidden lg:flex gap-3 items-center">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm lg:text-base">
            <a href="#" className="text-white hover:underline transition-colors py-0.5">Reviewers</a>
            <a href="#" className="text-white hover:underline transition-colors py-0.5">Publication Fee</a>
            <a href="#" className="text-white hover:underline transition-colors py-0.5">Contact Us</a>
            <a href="#" className="text-white hover:underline transition-colors py-0.5">Publisher</a>
            <a href="#" className="text-white hover:underline transition-colors py-0.5">PMSL</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
