import React from 'react';

const SubmitPaper = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Submit Your Paper
      </h1>

      <p className="mb-6 text-left sm:text-justify leading-relaxed">
        Thank you for choosing to submit your research to the <strong className="text-gray-900 font-semibold">International Journal of Mathematical, Engineering and Management Sciences</strong> (IJMEMS). Please ensure your manuscript follows our submission guidelines before proceeding.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs my-8 space-y-4">
        <h2 className="text-lg font-bold text-ijmems-blue">Online Manuscript Submission System</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Authors can submit their manuscripts online through the IJMEMS editorial submission portal or directly via email attachment.
        </p>

        <div className="p-4 bg-white border border-gray-300 rounded-lg text-sm space-y-2">
          <p><strong>Direct Submission Email:</strong> <a href="mailto:ijmems.editor@gmail.com" className="text-ijmems-lightBlue hover:underline">ijmems.editor@gmail.com</a></p>
          <p><strong>Accepted Formats:</strong> MS Word (.doc, .docx) or PDF format</p>
          <p><strong>Response Time:</strong> Initial screening decision within 7-10 working days</p>
        </div>

        <button className="bg-ijmems-blue text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 active:scale-95 transition-all shadow-sm cursor-pointer">
          Launch Submission Portal →
        </button>
      </div>
    </div>
  );
};

export default SubmitPaper;
