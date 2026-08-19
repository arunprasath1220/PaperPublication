import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button 
        onClick={scrollToTop}
        className="bg-ijmems-blue text-white p-2 rounded shadow-lg hover:bg-blue-800 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default Footer;
