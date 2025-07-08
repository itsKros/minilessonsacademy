import React, { useState, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

export default function Header() {

  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <button className="flex items-center gap-1 py-7 font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">
                Product
                <ChevronDown size={14} />
              </button>

              {openDropdown === 'product' && (
                <div className="absolute overflow-hidden left-0 mt--2 w-44 rounded-sm bg-white border shadow-lg z-50 flex flex-col animate-fade-in">
                  <Link to="/product/overview" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom">  Overview </Link>
                  <Link to="/product/pricing" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom"> Pricing </Link>
                </div>
              )}
            </div>

            {/* Features (with dropdown) */}
            <div
              className=""
              onMouseEnter={() => setOpenDropdown('features')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 py-7 font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">
                Features
                <ChevronDown size={14} />
              </button>

              {openDropdown === 'features' && (
                <div className="absolute left-0 mt--1 w-full rounded-sm z-50 flex flex-col animate-fade-in">
                  <section className="text-gray-600 body-font ">
                    <div className="container py-4 px-8 mx-auto">
                      <div className="grid grid-cols-3 gap-4">
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-1.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Shooting Stars</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Launch engaging courses and lessons in minutes</p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-1.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create eBooks</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Transform your ideas into finished books in 3 clicks</p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-3.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create Audiobooks</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Convert your courses into audiobooks in a snap</p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-4.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Ai Coach</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Your all-in-one coach for marketing, ads, copy, and more</p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-5.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Marketing VIP Area</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Grow your content with our unique marketing arena </p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-6.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">AI Cover Generator</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Instantly design eye-catching covers, matching your brand</p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-7.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create Quizzes</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Build interactive quizzes, boosting engagement</p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-8.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Online Course Editor</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Quickly polish and edit your courses</p>
                          </div>
                        </Link>
                        <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                          <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                            <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-9.png" />
                          </div>
                          <div className="flex-grow pl-4">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Courses Hosting</h2>
                            <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Share, manage and monetize your courses with one click</p>
                          </div>
                        </Link>

                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>

            {/* Who We Help (no dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('who_we_help')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 py-7 font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">
                Who We Help
                <ChevronDown size={14} />
              </button>

              {openDropdown === 'who_we_help' && (
                <div className="absolute overflow-hidden left-0 mt--2 w-44 rounded-sm bg-white border shadow-lg z-50 flex flex-col animate-fade-in">
                  <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom"> Educators</Link>
                  <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom">Authors</Link>
                  <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom"> Coaches</Link>
                  <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100">Content Creaters</Link>
                </div>
              )}
            </div>
            {/* Pricing */}
            <Link to={'/pricing-plans-cb-t64v1'} className="font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">Prices</Link>
          </nav>

          {/* Sidebar Open Button (Hamburger) */}
          {!sidebarOpen && (
            <button className="cursor-pointer" onClick={() => setSidebarOpen(true)} ><Menu size={35} /> </button>
          )}

        </div>
      </div>

      {/* Right Sidebar */}
      <section
        className={`fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] transition-opacity duration-300 ease-in-out ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div
          className={`fixed right-0 top-0 z-50 h-full w-[370px] sm:w-[340px] bg-white shadow-lg px-5 py-6 transform transition-transform duration-600 ease-in-out ${sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}

        >
          {/* Close Button */}
          <button
            className="absolute top-0 right-0 p-4 text-darkPurple text-2xl z-10 cursor-pointer"
            onClick={() => setSidebarOpen(false)} >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="block sm:hidden">
            <nav className=" md:flex items-center ml-auto space-x">
              {/* Product (with dropdown) */}
              <div
                className="relative w-[fit-content]"
                onMouseEnter={() => setOpenDropdown('product')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 py-1 font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">
                  Product
                  <ChevronDown size={14} />
                </button>

                {openDropdown === 'product' && (
                  <div className="absolute overflow-hidden left-0 mt--2 w-44 rounded-sm bg-white border shadow-lg z-50 flex flex-col animate-fade-in">
                    <Link to="/product/overview" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom">  Overview </Link>
                    <Link to="/product/pricing" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom"> Pricing </Link>
                  </div>
                )}
              </div>

              {/* Features (with dropdown) */}
              <div
                className="w-[fit-content]"
                onMouseEnter={() => setOpenDropdown('features')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 py-1 font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">
                  Features
                  <ChevronDown size={14} />
                </button>

                {openDropdown === 'features' && (
                  <div className="absolute left-0 mt-[-20px] w-full rounded-sm z-50 flex flex-col animate-fade-in">
                    <section className="text-gray-600 body-font ">
                      <div className="container py-4 px-4 mx-auto">
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-1.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Shooting Stars</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Launch engaging courses and lessons in minutes</p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-1.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create eBooks</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Transform your ideas into finished books in 3 clicks</p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-3.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create Audiobooks</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Convert your courses into audiobooks in a snap</p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-4.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Ai Coach</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Your all-in-one coach for marketing, ads, copy, and more</p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-5.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Marketing VIP Area</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Grow your content with our unique marketing arena </p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-6.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">AI Cover Generator</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Instantly design eye-catching covers, matching your brand</p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-7.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Create Quizzes</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Build interactive quizzes, boosting engagement</p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-8.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Online Course Editor</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Quickly polish and edit your courses</p>
                            </div>
                          </Link>
                          <Link to={''} className="flex group  border border-gray-200 py-2 px-3.5 rounded-sm items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-[#650AAA] transition-colors duration-500 ease-in-out">
                            <div className="w-18 h-18 p-3 inline-flex border border-[1px] border-[#450077] items-center justify-center bg-white text-indigo-500 flex-shrink-0 rounded-sm">
                              <img alt="content" className="object-cover object-center h-full w-full filter group-hover:brightness-50 filter-none transition duration-300" src="/assets/menu/menu-9.png" />
                            </div>
                            <div className="flex-grow pl-4">
                              <h2 className="text-gray-900 text-lg title-font font-medium mb-1 group-hover:text-white">Courses Hosting</h2>
                              <p className="leading-relaxed text-[#1F2D3D] group-hover:text-white font-light">Share, manage and monetize your courses with one click</p>
                            </div>
                          </Link>

                        </div>
                      </div>
                    </section>
                  </div>
                )}
              </div>

              {/* Who We Help (no dropdown) */}
              <div
                className="relative w-[fit-content]"
                onMouseEnter={() => setOpenDropdown('who_we_help')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 py-1 font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">
                  Who We Help
                  <ChevronDown size={14} />
                </button>

                {openDropdown === 'who_we_help' && (
                  <div className="absolute overflow-hidden left-0 mt--2 w-44 rounded-sm bg-white border shadow-lg z-50 flex flex-col animate-fade-in">
                    <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom"> Educators</Link>
                    <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom">Authors</Link>
                    <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100 border-b border-dashed border-gray-200 border-bottom"> Coaches</Link>
                    <Link to="" className="px-4 py-2 font-[500] text-[17px] leading-[28px] text-[#334155] hover:bg-gray-100">Content Creaters</Link>
                  </div>
                )}
              </div>
              {/* Pricing */}
              <Link to={'/pricing-plans-cb-t64v1'} className="font-medium text-black text-[19px] leading-[28px] hover:text-purple-700 cursor-pointer">Prices</Link>
            </nav>
          </div>


          <img src="/mla_logo.webp" alt="Logo" className="w-30 mx-auto mt-10" />

          <button className="flex justify-center items-center mt-10 font-medium text-white text-[21px] leading-[21px] bg-darkPurple border-0 py-4 px-8 w-full focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Log In
          </button>
        </div>
      </section>


    </header>
  );
}
