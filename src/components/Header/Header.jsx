import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const navItems = [
    {
      title: 'Product',
      routes: [
        { name: 'Overview', path: '/product/overview' },
        { name: 'Integrations', path: '/product/integrations' },
      ],
    },
    {
      title: 'Features',
      routes: [
        { name: 'AI Tools', path: '/features/ai' },
        { name: 'Analytics', path: '/features/analytics' },
      ],
    },
    {
      title: 'Who We Help',
      routes: [
        { name: 'Teachers', path: '/who/teachers' },
        { name: 'Schools', path: '/who/schools' },
      ],
    },
    {
      title: 'Pricing',
      path: '/pricing',
    },
  ];

  const handleMouseEnter = (idx) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // small delay prevents flicker
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white font-poppins relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">

          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
            <span className="text-xl font-semibold text-purple-700">Mini Lessons Academy</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center ml-auto space-x-8">
            {navItems.map((item, idx) => (
              item.routes ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 font-medium text-black hover:text-purple-700">
                    {item.title}
                    <ChevronDown size={14} />
                  </button>

                  {openDropdown === idx && (
                    <div className="absolute left-0 mt-2 w-44 rounded-md bg-white border shadow-lg z-50 flex flex-col animate-fade-in">
                      {item.routes.map((route, i) => (
                        <Link
                          key={i}
                          to={route.path}
                          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {route.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.path}
                  className="font-medium text-black hover:text-purple-700"
                >
                  {item.title}
                </Link>
              )
            ))}
          </nav>

          {/* Always-visible Hamburger */}
          <button className="text-purple-700 focus:outline-none">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
