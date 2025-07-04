import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer class="text-gray-600 bg-darkPurple  body-font">
      <div class="container max-w-7xl py-15 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="grid grid-cols-4 gap-4 w-full -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="w-full px-4">
            <h2 class="title-font text-[22px] leading-[22px] font-bold text-white tracking-widest mb-3">Partners</h2>
            <nav class="list-none mb-10">
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]">Signup</Link></li>
            </nav>
          </div>
          <div class="w-full px-4">
            <h2 class="title-font text-[22px] leading-[22px] font-bold text-white tracking-widest mb-3">Company</h2>
            <nav class="list-none mb-10 space-y-2">
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]"> About </Link></li>
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]"> Case Studies </Link></li>
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]"> Contact Us </Link></li>
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]">Pricing</Link></li>
            </nav>
          </div>
          <div class="w-full px-4">
            <h2 class="title-font text-[22px] leading-[22px] font-bold text-white tracking-widest mb-3">Resources</h2>
            <nav class="list-none mb-10 space-y-2">
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]">Login  </Link></li>
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]">Refund Policy</Link></li>
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]"> FAQ</Link></li>
            </nav>
          </div>
          <div class="w-full px-4">
            <h2 class="title-font text-[22px] leading-[22px] font-bold text-white tracking-widest mb-3">Legal</h2>
            <nav class="list-none mb-10 space-y-2">
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]">Privacy Policy</Link></li>
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]">Terms of Service</Link></li>
              <li><Link to={''} class="text-[19px] leading-[19px] font-normal text-white hover:text-[#CCAA00]">Income Disclaimer</Link></li>
            </nav>
          </div>
        </div>
        <div class="w-70 flex-shrink-0 md:mx-0 mx-auto text-right">
          <p class="mb-2 text-[13px] leading-[22px] font-bold text-white/75">© 2025 MLA. All Rights Reserved.</p>
          <p class="mb-2 text-[13px] leading-[22px] font-bold text-white/75 text-right">1375 Leeser Avenue Akron, Ohio 44314</p>
          <span class="inline-flex gap-3 text-[20px] lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <Link to={''} class="px-3.5 py-2 rounded text-white bg-[#3b5997]"><i class="fa-brands fa-facebook-f"></i></Link>
            <Link to={''} class="px-3 py-2 rounded text-white bg-[#262626]"><i class="fa-brands fa-instagram"></i></Link>
            <Link to={''} class="px-3 py-2 rounded text-white bg-[#000000]"><i class="fa-brands fa-x-twitter"></i></Link>
            <Link to={''} class="px-3 py-2 rounded text-white bg-[#650aaa]"><i class="fa-brands fa-tiktok"></i></Link>
            <Link to={''} class="px-3 py-2 rounded text-white bg-[#cd201f]"><i class="fa-brands fa-youtube"></i></Link>
          </span>
        </div>

      </div>
      {/* <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>  */}
    </footer>
    // <footer className="bg-darkPurple text-white p-4 text-center">
    //   <p>&copy; {new Date().getFullYear()} MiniLessons Academy</p>
    // </footer>
  );
}