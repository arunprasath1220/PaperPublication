import React from 'react';
import { Search } from 'lucide-react';

const Volumes = () => {
  return (
    <div className="w-full px-[141px] py-8 font-sans bg-white">
      {/* Search Bar */}
      <div className="flex mb-8">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
          placeholder="Search Volumes..."
        />
        <button className="bg-blue-400 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 transition-colors">
          <Search size={20} />
        </button>
      </div>

      {/* Accordion Item 1 */}
      <div className="mb-6 rounded-md overflow-hidden border border-gray-200">
        <div className="bg-gray-200 px-6 py-4 font-bold text-gray-800">
          Volume 11 (2026)
        </div>
        <div className="bg-gray-100 p-6 flex flex-col gap-0">
          <a href="#" className="text-blue-600 hover:underline py-3 border-b border-gray-400 text-sm">Number 4 (August)</a>
          <a href="#" className="text-blue-600 hover:underline py-3 border-b border-gray-400 text-sm">Number 3 (June)</a>
          <a href="#" className="text-blue-600 hover:underline py-3 border-b border-gray-400 text-sm">Number 2 (April)</a>
          <a href="#" className="text-blue-600 hover:underline py-3 border-b border-gray-400 text-sm">Number 1 (February)</a>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="mb-6 rounded-md overflow-hidden border border-gray-200">
        <div className="bg-gray-200 px-6 py-4 font-bold text-gray-800">
          Volume 10 (2025)
        </div>
        <div className="bg-gray-100 p-6 flex flex-col gap-0">
          <a href="#" className="text-blue-600 hover:underline py-3 border-b border-gray-400 text-sm">Number 6 (December)</a>
          <a href="#" className="text-blue-600 hover:underline py-3 border-b border-gray-400 text-sm">Number 5 (October)</a>
        </div>
      </div>
    </div>
  );
};

export default Volumes;
