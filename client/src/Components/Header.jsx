import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center py-6 border-b-2 border-ijmems-blue bg-white w-full">
      <div className="flex items-center gap-6 w-full px-[141px]">
        <img src="/logo.jpg" alt="IJMEMS Logo" className="h-16 object-contain" />
        <div className="flex flex-col text-center w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-ijmems-blue m-0 font-sans tracking-wide">
            International Journal of Mathematical, Engineering and Management Sciences
          </h1>
          <p className="text-ijmems-blue mt-2 text-sm">
            eISSN: 2455-7749 • Open Access
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
