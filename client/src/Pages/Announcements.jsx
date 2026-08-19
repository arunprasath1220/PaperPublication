import React from 'react';

const announcements = [
  {
    title: 'Call for Papers: Special Issue on AI in Smart Healthcare Systems (2026)',
    date: 'August 15, 2026',
    summary: 'Submissions are invited for our upcoming special issue focusing on advances in artificial intelligence, predictive modeling, and robotics in modern medical systems.',
  },
  {
    title: 'IJMEMS Impact Factor & Scopus CiteScore Update',
    date: 'July 10, 2026',
    summary: 'We are pleased to announce the latest citation metrics and CiteScore updates for IJMEMS, reflecting our growing global scholarly impact.',
  },
  {
    title: 'Fast Track Review Track for Selected Conference Papers',
    date: 'June 01, 2026',
    summary: 'Extended versions of top papers presented at partner international conferences are eligible for the expedited fast-track review process.',
  },
];

const Announcements = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Journal Announcements
      </h1>

      <div className="space-y-6">
        {announcements.map((item, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
            <span className="text-xs font-semibold text-ijmems-lightBlue uppercase tracking-wider">{item.date}</span>
            <h2 className="text-lg sm:text-xl font-bold text-ijmems-blue my-2">{item.title}</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
