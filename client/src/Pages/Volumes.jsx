import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const volumeData = [
  {
    id: 'vol-11-2026',
    title: 'Volume 11 (2026)',
    issues: [
      { name: 'Number 4 (August)', href: '#' },
      { name: 'Number 3 (June)', href: '#' },
      { name: 'Number 2 (April)', href: '#' },
      { name: 'Number 1 (February)', href: '#' },
    ],
  },
  {
    id: 'vol-10-2025',
    title: 'Volume 10 (2025)',
    issues: [
      { name: 'Number 6 (December)', href: '#' },
      { name: 'Number 5 (October)', href: '#' },
    ],
  },
];

const Volumes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedVolumes, setExpandedVolumes] = useState({
    'vol-11-2026': true,
    'vol-10-2025': true,
  });

  const toggleVolume = (id) => {
    setExpandedVolumes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredVolumes = volumeData.filter((vol) => {
    const matchesVolTitle = vol.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIssues = vol.issues.some((issue) =>
      issue.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesVolTitle || matchesIssues;
  });

  return (
    <div className="w-full px-4 sm:px-8 lg:px-[141px] py-6 lg:py-8 font-sans bg-white">
      {/* Search Bar */}
      <div className="flex w-full mb-6 lg:mb-8 shadow-xs rounded-lg overflow-hidden border border-gray-300 focus-within:border-ijmems-lightBlue focus-within:ring-2 focus-within:ring-ijmems-lightBlue/20 transition-all">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base outline-none bg-white text-gray-800 placeholder-gray-400"
          placeholder="Search Volumes or Issues..."
        />
        <button
          type="button"
          className="bg-ijmems-lightBlue text-white px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Volume List */}
      <div className="space-y-4 sm:space-y-6">
        {filteredVolumes.length > 0 ? (
          filteredVolumes.map((vol) => {
            const isOpen = expandedVolumes[vol.id] ?? true;
            return (
              <div
                key={vol.id}
                className="rounded-xl overflow-hidden border border-gray-200 shadow-xs transition-shadow hover:shadow-sm"
              >
                {/* Volume Header (Clickable Accordion) */}
                <button
                  type="button"
                  onClick={() => toggleVolume(vol.id)}
                  className="w-full bg-slate-100 hover:bg-slate-200/80 px-4 sm:px-6 py-3.5 sm:py-4 font-bold text-gray-800 flex items-center justify-between transition-colors text-left text-sm sm:text-base cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <BookOpen size={18} className="text-ijmems-blue shrink-0" />
                    <span>{vol.title}</span>
                  </div>
                  <span className="text-gray-500">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {/* Volume Issues List */}
                {isOpen && (
                  <div className="bg-slate-50 divide-y divide-gray-200/70">
                    {vol.issues.map((issue, idx) => (
                      <a
                        key={idx}
                        href={issue.href}
                        className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base text-ijmems-blue hover:text-blue-700 hover:bg-blue-50/60 active:bg-blue-100/60 transition-colors group"
                      >
                        <span className="group-hover:underline font-medium">
                          {issue.name}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-ijmems-blue transition-colors">
                          View Issue →
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm sm:text-base bg-gray-50 rounded-xl border border-dashed border-gray-300">
            No volumes found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

export default Volumes;
