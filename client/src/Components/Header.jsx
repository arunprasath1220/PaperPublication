import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col items-center py-5 lg:py-7 border-b-2 border-ijmems-blue bg-white w-full">
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 w-full px-4 sm:px-8 lg:px-[141px]">
        <img
          src="/logo.jpg"
          alt="IJMEMS Logo"
          className="h-14 sm:h-16 object-contain shrink-0"
        />
        <div className="flex flex-col text-center w-full">
          <h1 className="text-base sm:text-lg md:text-xl lg:text-[21.5px] font-bold text-ijmems-blue m-0 font-sans tracking-wide lg:whitespace-nowrap leading-snug">
            International Journal of Mathematical, Engineering and Management Sciences
          </h1>
          <p className="text-ijmems-blue mt-2 sm:mt-3 text-xs sm:text-sm font-normal tracking-wide">
            eISSN: 2455-7749 • Open Access
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
