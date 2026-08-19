import React from 'react';

const Publisher = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        About the Publisher
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        The <strong className="text-gray-900 font-semibold">International Journal of Mathematical, Engineering and Management Sciences</strong> (IJMEMS) is published by <strong className="text-gray-900 font-semibold">Ram Arti Publishers</strong>, India.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs my-6 space-y-4">
        <h2 className="text-lg font-bold text-ijmems-blue">Ram Arti Publishers</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Ram Arti Publishers is an academic publishing house committed to the dissemination of innovative scientific research, mathematical developments, and technological solutions worldwide. The publisher adheres to strict ethical standards and open-access mandates to make knowledge universally accessible.
        </p>
        <div className="text-sm text-gray-600 pt-2 border-t border-gray-200">
          <p><strong>Headquarters:</strong> Dehradun, Uttarakhand, India</p>
          <p><strong>Focus Areas:</strong> Mathematics, Computational Science, Engineering, Management Science</p>
        </div>
      </div>
    </div>
  );
};

export default Publisher;
