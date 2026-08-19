import React from 'react';

const Advertisements = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Advertisements & Sponsorship
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        <strong className="text-gray-900 font-semibold">IJMEMS</strong> offers advertising opportunities to academic institutions, scientific publishers, international conferences, and technological enterprises that align with the journal's scientific values.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Conference Sponsorship & Proceedings</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Partner with IJMEMS to publish high-quality conference special issues and promote your academic events to our international readership across 80+ countries.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Academic Book & Journal Promotion</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Promote recently published scholarly textbooks, scientific monographs, and research tools directly to researchers, university libraries, and department heads.
          </p>
        </div>
      </div>

      <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl text-sm sm:text-base text-gray-800">
        For advertising inquiries and rate cards, please reach out via our contact channels or write to <span className="font-semibold text-ijmems-blue">editor@ijmems.in</span>.
      </div>
    </div>
  );
};

export default Advertisements;
