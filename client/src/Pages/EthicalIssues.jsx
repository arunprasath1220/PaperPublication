import React from 'react';

const EthicalIssues = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Publication Ethics & Malpractice Statement
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        The publication of an article in a peer-reviewed journal like <strong className="text-gray-900 font-semibold">IJMEMS</strong> is an essential building block in the development of a coherent and respected network of knowledge. It is a direct reflection of the quality of the work of the authors and the institutions that support them.
      </p>

      <div className="space-y-6">
        <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-2">1. Authors' Responsibilities</h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Authors must ensure that they have written entirely original works. Any work or words of other authors must be properly cited or quoted. Plagiarism in all its forms constitutes unethical publishing behavior and is unacceptable. Submitting the same manuscript to more than one journal concurrently is unethical publishing behavior.
          </p>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-2">2. Peer Review Process & Reviewers' Duties</h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            Peer review assists the Editor-in-Chief in making editorial decisions and may also assist the author in improving the paper. Reviewers must treat all received manuscripts as confidential documents. Reviews should be conducted objectively with supporting arguments.
          </p>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs">
          <h2 className="text-lg font-bold text-ijmems-blue mb-2">3. Editors' Responsibilities</h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            The editors evaluate manuscripts for their intellectual content without regard to race, gender, sexual orientation, religious belief, ethnic origin, citizenship, or political philosophy of the authors.
          </p>
        </section>
      </div>
    </div>
  );
};

export default EthicalIssues;
