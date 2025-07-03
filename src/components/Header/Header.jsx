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
            <img src="/mla_logo.webp" alt="Logo" className="w-8 h-8 mr-2" />
            <span className="text-xl font-semibold text-purple-700">Mini Lessons Academy</span>
          </div>

          {/* Desktop Nav */}
          {/* <nav className="hidden md:flex items-center ml-auto space-x-8">
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
          </nav> */}

          <nav className="hidden md:flex items-center ml-auto space-x-8">
            {/* Product (with dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('product')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-black hover:text-purple-700">
                Product
                <ChevronDown size={14} />
              </button>

              {openDropdown === 'product' && (
                <div className="absolute left-0 mt-2 w-44 rounded-md bg-white border shadow-lg z-50 flex flex-col animate-fade-in">
                  <Link
                    to="/product/overview"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Overview
                  </Link>
                  <Link
                    to="/product/pricing"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Pricing
                  </Link>
                </div>
              )}
            </div>

            {/* Features (with dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('features')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium text-black hover:text-purple-700">
                Features
                <ChevronDown size={14} />
              </button>

              {openDropdown === 'features' && (
                <div className="absolute left-0 mt-2 w-44 rounded-md bg-white border shadow-lg z-50 flex flex-col animate-fade-in">
                  <Link
                    to="/features/automation"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <section className="text-gray-600 body-font w-96">
                      <div className="container p-8 mx-auto">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Shooting Stars</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Launch engaging courses and lessons in minutes</p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create eBooks</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Transform your ideas into finished books in 3 clicks</p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create Audiobooks</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Convert your courses into audiobooks in a snap</p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Ai Coach</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Your all-in-one coach for marketing, ads, copy, and more</p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Marketing VIP Area</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Grow your content with our unique marketing arena </p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">AI Cover Generator</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Instantly design eye-catching covers, matching your brand</p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create Quizzes</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Build interactive quizzes, boosting engagement</p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Online Course Editor</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Quickly polish and edit your courses</p>
                            </div>
                          </div>
                          <div className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full" src="https://minilessonsacademy.com/wp-content/uploads/2025/03/icons8-course-100.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Courses Hosting</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Share, manage and monetize your courses with one click</p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>
                  </Link>
                  <Link
                    to="/features/integrations"
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Integrations
                  </Link>
                </div>
              )}
            </div>

            {/* Who We Help (no dropdown) */}
            <Link
              to="/who-we-help"
              className="font-medium text-black hover:text-purple-700"
            >
              Who We Help
            </Link>
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
