import React from 'react';

const Reviewers = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Reviewer Guidelines & Join Review Board
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        Peer reviewers play a pivotal role in maintaining the rigorous scientific standards and integrity of <strong className="text-gray-900 font-semibold">IJMEMS</strong>. We express our profound gratitude to our international pool of reviewers.
      </p>

      <div className="space-y-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Reviewing Criteria</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            <li>Originality, technical soundness, and scientific contribution.</li>
            <li>Clarity of mathematical formulas, proofs, and methodological validity.</li>
            <li>Appropriate literature review, citations, and context within existing literature.</li>
            <li>Constructive and actionable feedback for the authors.</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-3">Join as a Reviewer</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
            Scholars with a Ph.D. and a proven publication record in mathematics, engineering, or management sciences are welcome to apply to become an IJMEMS reviewer.
          </p>
          <a href="mailto:ijmems.editor@gmail.com" className="inline-block bg-ijmems-lightBlue text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
            Send CV & Reviewer Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviewers;
