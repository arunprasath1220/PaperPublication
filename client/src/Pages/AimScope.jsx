import React from 'react';

const AimScope = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Aim & Scope
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        The <strong className="text-gray-900 font-semibold">International Journal of Mathematical, Engineering and Management Sciences</strong> (IJMEMS) is a peer-reviewed, open-access international journal dedicated to publishing high-quality, original research and review articles. The journal aims to bridge the gap between pure and applied sciences by promoting interdisciplinary research that integrates mathematical models, engineering applications, and strategic management practices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Mathematical Sciences</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Applied Mathematics & Modeling</li>
            <li>Computational Statistics</li>
            <li>Differential Equations & Dynamics</li>
            <li>Optimization Techniques</li>
            <li>Stochastic Analysis & Probability</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Engineering Sciences</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Reliability & Quality Engineering</li>
            <li>Computational Fluid Dynamics</li>
            <li>Artificial Intelligence & Robotics</li>
            <li>Smart Manufacturing Systems</li>
            <li>Renewable Energy Systems</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Management Sciences</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>Supply Chain & Logistics Modeling</li>
            <li>Decision Sciences & Operations</li>
            <li>Risk Assessment & Forecasting</li>
            <li>Information Systems & Analytics</li>
            <li>Strategic Operations Management</li>
          </ul>
        </div>
      </div>

      <p className="text-left sm:text-justify leading-relaxed">
        IJMEMS invites original research papers, survey papers, and case studies that report significant contributions to theory and practical implementation across these disciplines.
      </p>
    </div>
  );
};

export default AimScope;
