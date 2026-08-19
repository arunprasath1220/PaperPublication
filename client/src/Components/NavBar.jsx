import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Volumes', path: '/volumes' },
  { name: 'Aim & Scope', path: '/aim-scope' },
  { name: 'Ethical Issues', path: '/ethical-issues' },
  { name: 'For Authors', path: '/for-authors' },
  { name: 'Indexing', path: '/indexing' },
  { name: 'Announcements', path: '/announcements' },
  { name: 'Advertisements', path: '/advertisements' },
  { name: 'Editorial Board', path: '/editorial-board' },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 lg:border-none sticky top-0 lg:static z-40">
      <div className="w-full px-4 sm:px-8 lg:px-[110px] py-3 lg:py-6">
        {/* Mobile Header Bar with Hamburger */}
        <div className="flex items-center justify-between lg:hidden">
          <span className="font-semibold text-ijmems-blue text-base">
            Journal Navigation
          </span>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-ijmems-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ijmems-lightBlue transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation (Visible on lg and up) */}
        <div className="hidden lg:flex justify-between flex-wrap w-full">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-md border border-ijmems-blue text-sm transition-colors ${
                  isActive
                    ? 'bg-ijmems-lightBlue text-white border-transparent'
                    : 'text-ijmems-blue bg-white hover:bg-gray-50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Dropdown Menu (Visible on mobile when toggled) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2 pb-2 animate-in fade-in duration-200">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-ijmems-lightBlue text-white border-transparent shadow-xs font-semibold'
                      : 'text-ijmems-blue border-gray-200 bg-gray-50/70 hover:bg-blue-50'
                  }`
                }
              >
                <span>{item.name}</span>
                <span className="text-xs opacity-70">→</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
