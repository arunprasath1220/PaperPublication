import React from 'react';
import { NavLink } from 'react-router-dom';

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
  return (
    <div className="flex justify-between flex-wrap py-6 px-[110px] w-full bg-white">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `px-5 py-2 rounded-md border border-ijmems-blue text-sm transition-colors ${isActive
              ? 'bg-ijmems-lightBlue text-white border-transparent'
              : 'text-ijmems-blue bg-white hover:bg-gray-50'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
