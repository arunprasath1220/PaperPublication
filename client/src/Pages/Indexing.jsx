import React from 'react';

const indexingDatabases = [
  { name: 'Scopus (Elsevier)', desc: 'Indexed in Scopus abstract and citation database' },
  { name: 'Emerging Sources Citation Index (Clarivate / WoS)', desc: 'Web of Science Core Collection' },
  { name: 'DOAJ (Directory of Open Access Journals)', desc: 'Open Access journal directory' },
  { name: 'Google Scholar', desc: 'Comprehensive citation tracking' },
  { name: 'Crossref', desc: 'DOI registration and persistent linking' },
  { name: 'INSPEC (IET)', desc: 'Engineering & Computing database' },
  { name: 'Index Copernicus', desc: 'International index and scientific journal evaluation' },
  { name: 'CNKI Scholar', desc: 'China National Knowledge Infrastructure' },
];

const Indexing = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Indexing & Abstracting
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        The <strong className="text-gray-900 font-semibold">International Journal of Mathematical, Engineering and Management Sciences</strong> is indexed and abstracted in the following premier international indexing services and databases:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 my-8">
        {indexingDatabases.map((db, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs hover:border-ijmems-lightBlue transition-colors">
            <h2 className="text-base sm:text-lg font-bold text-ijmems-blue mb-1">{db.name}</h2>
            <p className="text-sm text-gray-600">{db.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indexing;
