import React from 'react';

const editors = [
  { role: 'Editor-in-Chief', name: 'Prof. (Dr.) Mangey Ram', affiliation: 'Graphic Era (Deemed to be University), Dehradun, India' },
  { role: 'Associate Editor', name: 'Prof. (Dr.) S. B. Singh', affiliation: 'G. B. Pant University of Agriculture & Technology, Pantnagar, India' },
  { role: 'Associate Editor', name: 'Prof. (Dr.) Hoang Pham', affiliation: 'Rutgers University, New Jersey, USA' },
  { role: 'Editorial Board Member', name: 'Prof. (Dr.) J. Paulo Davim', affiliation: 'University of Aveiro, Portugal' },
  { role: 'Editorial Board Member', name: 'Prof. (Dr.) Ilia Frenkel', affiliation: 'Sami Shamoon College of Engineering, Beer Sheva, Israel' },
  { role: 'Editorial Board Member', name: 'Prof. (Dr.) Kishor S. Trivedi', affiliation: 'Duke University, Durham, NC, USA' },
  { role: 'Editorial Board Member', name: 'Prof. (Dr.) Michael Pecht', affiliation: 'University of Maryland, College Park, USA' },
  { role: 'Editorial Board Member', name: 'Prof. (Dr.) Tadashi Dohi', affiliation: 'Hiroshima University, Higashi-Hiroshima, Japan' },
];

const EditorialBoard = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Editorial Board
      </h1>

      <p className="mb-8 text-left sm:text-justify leading-relaxed">
        The Editorial Board of <strong className="text-gray-900 font-semibold">IJMEMS</strong> comprises distinguished scholars, professors, and industry experts representing renowned universities and research laboratories worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {editors.map((editor, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs">
            <span className="text-xs font-bold text-ijmems-lightBlue uppercase tracking-wider">{editor.role}</span>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mt-1">{editor.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{editor.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorialBoard;
