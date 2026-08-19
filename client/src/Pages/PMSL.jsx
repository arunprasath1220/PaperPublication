import React from 'react';

const PMSL = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        PMSL - Predictive Modeling & Statistical Learning
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        The <strong className="text-gray-900 font-semibold">Predictive Modeling & Statistical Learning (PMSL)</strong> research initiative is a specialized division connected with IJMEMS, focusing on mathematical modeling, deep learning architectures, statistical quality control, and predictive industrial analytics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-2">Research Workshops & Symposia</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Organizing international seminars and hands-on workshops on Python, R, and MATLAB for advanced mathematical optimization and statistical machine learning.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-2">Industrial Collaborations</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bridging academic mathematical researchers with manufacturing and healthcare industries to solve real-world predictive modeling challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PMSL;
