import React from 'react';

const Home = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-[110px] py-6 sm:py-10 lg:py-12 text-gray-800 text-sm sm:text-base leading-relaxed font-sans bg-white">
      <p className="mb-6 text-left sm:text-justify">
        The <em>International Journal of Mathematical, Engineering and Management Sciences</em> (IJMEMS) is an online scientific journal that publishes bi-monthly technical and more informal communications directed to a large readership, as well as articles/review papers/case studies that demonstrate the interaction between various disciplines such as <em>mathematical sciences, engineering sciences, engineering and technology, management sciences, numerical and computational sciences</em>. Research papers, expository and survey papers of high quality are considered from any discipline. In submitting the papers, author(s) must guarantee that they are not submitted elsewhere simultaneously.
      </p>

      <p className="mb-8 text-left sm:text-justify">
        Articles in the <em>International Journal of Mathematical, Engineering and Management Sciences</em> are Open Access, published under the creative commons license Attribution 4.0 International (CC BY 4.0){' '}
        <a 
          href="https://creativecommons.org/licenses/by/4.0/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline break-all"
        >
          https://creativecommons.org/licenses/by/4.0/
        </a>
        . This license permits use, distribution, and reproduction in any medium, provided the original work and source are properly cited. The publisher of the journal is <em>Ram Arti Publishers</em>, India.
      </p>

      <div className="space-y-3 sm:space-y-4 text-base sm:text-[17px]">
        <p>Title: <em>International Journal of Mathematical, Engineering and Management Sciences</em></p>
        <p>eISSN: <em>2455-7749</em></p>
        <p>Editor-in-Chief: <em>Mangey Ram</em></p>
        <p>Starting Year: <em>2016</em></p>
        <p>Frequency: <em>6 Issues per year</em></p>
        <p>Publication Mode: <em>Online</em></p>
        <p>Language: <em>English</em></p>
      </div>
    </div>
  );
};

export default Home;
