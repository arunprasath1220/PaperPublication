import React from 'react';

const PublicationFee = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Article Processing Charges (APC) & Publication Fee
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        <strong className="text-gray-900 font-semibold">IJMEMS</strong> is an Open Access journal. In order to cover the costs of peer review administration, professional copyediting, DOI assignment via Crossref, indexing, and online hosting, an Article Processing Charge (APC) is applied to accepted papers.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs my-8 space-y-4">
        <h2 className="text-lg font-bold text-ijmems-blue">Fee Structure</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-200 text-gray-800">
                <th className="p-3 border border-gray-300">Author Category</th>
                <th className="p-3 border border-gray-300">Publication Fee</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-3 border border-gray-200">International Authors (Outside India)</td>
                <td className="p-3 border border-gray-200 font-semibold text-ijmems-blue">$350 USD</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200">Indian Authors</td>
                <td className="p-3 border border-gray-200 font-semibold text-ijmems-blue">₹15,000 INR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 mt-2">
          * There are no submission fees. Fees are only applicable upon formal acceptance after peer review.
        </p>
      </div>
    </div>
  );
};

export default PublicationFee;
