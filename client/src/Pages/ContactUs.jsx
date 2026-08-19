import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 font-sans bg-white text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold text-ijmems-blue mb-6 pb-2 border-b border-gray-200">
        Contact Us
      </h1>

      <p className="mb-8 text-left sm:text-justify leading-relaxed">
        For inquiries regarding manuscript submissions, special issues, reviewing, or indexing, please contact the IJMEMS editorial office.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col items-start">
          <Mail className="text-ijmems-blue mb-3" size={28} />
          <h2 className="text-base sm:text-lg font-bold text-ijmems-blue mb-1">Email Inquiries</h2>
          <p className="text-sm text-gray-600">ijmems.editor@gmail.com</p>
          <p className="text-sm text-gray-600">editor@ijmems.in</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col items-start">
          <MapPin className="text-ijmems-blue mb-3" size={28} />
          <h2 className="text-base sm:text-lg font-bold text-ijmems-blue mb-1">Editorial Office</h2>
          <p className="text-sm text-gray-600">Ram Arti Publishers</p>
          <p className="text-sm text-gray-600">Dehradun, Uttarakhand, India</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-xs flex flex-col items-start">
          <Globe className="text-ijmems-blue mb-3" size={28} />
          <h2 className="text-base sm:text-lg font-bold text-ijmems-blue mb-1">Online Portal</h2>
          <p className="text-sm text-gray-600">www.ijmems.in</p>
          <p className="text-sm text-gray-600">Open Access Repository</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
