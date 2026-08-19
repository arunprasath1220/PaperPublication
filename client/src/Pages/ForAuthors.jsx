import React from 'react';

const ForAuthors = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Guidelines for Authors
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        Authors are invited to submit original, unpublished research manuscripts that are not under review elsewhere. All submissions undergo rigorous double-blind peer review before publication.
      </p>

      <div className="space-y-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Manuscript Preparation</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            <li><strong>Language:</strong> English (American or British, consistent throughout).</li>
            <li><strong>Format:</strong> Microsoft Word (.docx) or LaTeX formatted according to IJMEMS template.</li>
            <li><strong>Length:</strong> Articles should typically be between 5,000 and 10,000 words including references and tables.</li>
            <li><strong>Abstract:</strong> Structured abstract (maximum 250 words) with 4-6 keywords.</li>
            <li><strong>References:</strong> APA 7th edition or IEEE reference style.</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Submission Checklist</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-700">
            <li>Title page with full author details, affiliations, and ORCID IDs.</li>
            <li>Blinded manuscript without author-identifying information for peer review.</li>
            <li>High-resolution figures (minimum 300 DPI in PNG/TIFF/EPS format).</li>
            <li>Conflict of interest declaration and funding acknowledgment.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ForAuthors;
