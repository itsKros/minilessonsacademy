import React, { useState, useRef, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Accordion Open
const accordionData = [
  {
    title: "Can anyone create a course with Mini Lessons Academy, even without experience?",
    content: "Absolutely! Whether you're brand new or experienced in your field, Mini Lessons makes course creation simple. Just bring your idea—we handle the heavy lifting.",
  },
  {
    title: "How long does it take to create a course?",
    content: "Extremely fast. Mini Lessons can generate a full course in 2–3 minutes! For larger topics (15+ chapters), it may take slightly longer (around 3-5 minutes), but you’ll still get your content created very quickly!",
  },
  {
    title: "Can I use Mini Lessons Academy on different devices?",
    content: "Yes! You can log in from your phone, tablet, or computer—so you can create and edit courses anytime, anywhere.",
  },
  {
    title: "What if I run into problems or need help with my course?",
    content: "We’ve got you covered! Our support team, tutorials, and strategy calls ensure you get the help you need. Plus, our user-friendly interface makes everything easy to navigate.",
  },
  {
    title: "Does Mini Lessons Academy help with marketing?",
    content: "We provide a comprehensive marketing arena filled with templates, guides, videos, and strategies—giving you everything you need to promote and sell your courses.",
  },
  {
    title: "What additional tools do I get when I sign up?",
    content: "You'll unlock access to our course creator, book creator, course hosting, the AI Coach, marketing resources, strategy calls, and more. Everything you need to create and grow your content is included.",
  },
  {
    title: "Does Mini Lessons Academy own any rights to my digital content?",
    content: "Nope! Everything you create is 100% yours. Whether you sell it or give it away, you retain full ownership.",
  },
  {
    title: "Can I download courses created with Mini Lessons Academy?",
    content: "Yes! You can download and share your courses however you like. We believe in giving you complete control over your content.",
  },
  {
    title: "How does Mini Lessons Academy actually work?",
    content: "Our comprehensive course creation platform turns your ideas into structured, ready-to-sell courses, books, and guides. Everything is streamlined and intuitive, giving you full control. (Powered by AI to help you work even smarter.)",
  },

];
// Accordion Close

// Testimonial One Open
const testimonialsOne = [
  {
    name: "Melanie",
    role: "5th Grade Teacher",
    img: "/assets/home/testimonial/11.jpg",
    title: "I reclaimed my weekends while creating better content.",
    text: "Every Sunday disappeared into lesson planning. Now I type my topic and Mini Lessons gives me a complete, ready-to-teach lesson with built-in assessment questions. What consumed my entire Sunday now takes less than an hour. I've reclaimed 15+ hours monthly while delivering better results."
  },
  {
    name: "Jamal",
    role: "Mindset Coach",
    img: "/assets/home/testimonial/2.png",
    title: "I monetized my expertise without the tech nightmare.",
    text: "For years, I had notebooks of prompts and exercises but couldn't turn them into a course. Mini Lessons transformed my scattered methods into a coherent system in one afternoon. Now new subscribers receive a valuable mini-course automatically, and my close rate increased from 30% to 65%."
  },
  {
    name: "Lily",
    role: "Wellness Author & Mom",
    img: "/assets/home/testimonial/3.png",
    title: "I finally published what I've been thinking about for years.",
    text: "My mindful eating course outline sat untouched for three years. With Mini Lessons, I created a complete course and companion audiobook in one evening. I launched it at $97 and made more in two weeks than I do in six months, while being fully present for my family."
  },
  {
    name: "Necie",
    role: "Entrepreneur",
    img: "/assets/home/testimonial/necie.jpg",
    title: "This is a true money saver and success accelerator. Highly recommended!",
    text: "Mini Lesson Academy is a real game changer! In less than 5 minutes, I created an audiobook for my virtual tea party - no more expensive freelancers or countless apps. The platform’s ease-of-use, beautiful cover creation, and streamlined functionality ended my overwhelm, boosted my productivity, and empowered me as a solo entrepreneur."
  },

];
// Testimonial One Close


// Testimonial Two Open
const testimonialsTwo = [
  {
    name: "Sarah P",
    role: "Business Coach",
    img: "/assets/home/testimonial/1.png",
    stars: "/assets/brand-icon/star.png",
    text: "Every Sunday disappeared into lesson planning. Now I type my topic and Mini Lessons gives me a complete, ready-to-teach lesson with built-in assessment questions. What consumed my entire Sunday now takes less than an hour. I've reclaimed 15+ hours monthly while delivering better results."
  },
  {
    name: "James L",
    role: "Life Coach",
    img: "/assets/home/testimonial/2.png",
    stars: "/assets/brand-icon/star.png",
    text: "I was struggling to launch my first online course, but Mini Lessons Academy made it so easy. The AI-generated content was spot on, and my students love the quality. I can't believe how fast it came together."
  },
  {
    name: "Melissa J",
    role: "Wellness Entrepreneur",
    img: "/assets/home/testimonial/3.png",
    stars: "/assets/brand-icon/star.png",
    text: "Being able to create books and courses on demand has transformed my small business. I’m now able to offer more products to my audience without spending hours on content creation. I’ve seen a 30% increase in sales thanks to Mini Lessons!"
  },
  {
    name: "David S",
    role: "Business Consultant ",
    img: "/assets/home/testimonial/4.png",
    stars: "/assets/brand-icon/star.png",
    text: "As a consultant, I needed a platform that would allow me to share my expertise without spending all my time writing. Mini Lessons Academy has been perfect! I’ve already created three guides and a full course—all within a week!"
  },
  {
    name: "Carlos R",
    role: "Leadership Trainer",
    img: "/assets/home/testimonial/5.png",
    stars: "/assets/brand-icon/star.png",
    text: "Mini Lessons Academy gave me the freedom to focus on my clients rather than wasting time on course creation. In just a few clicks, I had a full-length course ready to go. It’s saved me hours!"
  },
  {
    name: "Tanya G",
    role: "Digital Marketing Expert",
    img: "/assets/home/testimonial/6.webp",
    stars: "/assets/brand-icon/star.png",
    text: "I’ve never seen anything like Mini Lessons Academy before! I can create professional courses and guides in minutes, and my audience is loving the content. This is by far the easiest and most efficient content creation tool I’ve used."
  },
  {
    name: "Brandon T",
    role: "Serial Entrepreneur",
    img: "/assets/home/testimonial/7.webp",
    stars: "/assets/brand-icon/star.png",
    text: "As a busy entrepreneur, I was looking for a way to monetize my knowledge without spending days on content creation. Mini Lessons Academy made it so simple to create courses and books, and my sales have never been better."
  },
  {
    name: "Rachel M",
    role: "Health Coach",
    img: "/assets/home/testimonial/8.png",
    stars: "/assets/brand-icon/star.png",
    text: "I’m so impressed with Mini Lessons Academy! It took the guesswork out of course creation and allowed me to focus on what I love—helping my clients. I’ve already doubled my product offerings thanks to this platform."
  },
  {
    name: "Mike D",
    role: "E-Learning Entrepreneur",
    img: "/assets/home/testimonial/9.png",
    stars: "/assets/brand-icon/star.png",
    text: "Mini Lessons Academy is the best tool I’ve used for scaling my online education business. The AI-generated content is spot on, and I’ve seen a huge increase in engagement from my students since I started using it."
  },
  {
    name: "Jessica K",
    role: "Fitness Coach",
    img: "/assets/home/testimonial/10.png",
    stars: "/assets/brand-icon/star.png",
    text: "As a fitness coach, I needed a way to package my knowledge into sellable products, but I didn’t have the time to write everything myself. Mini Lessons Academy made it effortless to create courses and guides that my clients love."
  },
  {
    name: "George Hartsfield",
    role: "Skills Trainer",
    img: "/assets/home/testimonial/george.jpg",
    stars: "/assets/brand-icon/star.png",
    text: "One of the most impressive aspects of my experience was their exceptional customer service. I encountered an issue during the process, and to my surprise, a call was scheduled immediately. Even more impressive was the fact that the owner personally joined the call to help resolve the problem."
  },
  {
    name: "Jessica Thatcher",
    role: "Educator",
    img: "/assets/home/testimonial/11.jpg",
    stars: "/assets/brand-icon/star.png",
    text: "Mini Lessons Academy made setting up and selling my course surprisingly easy. I embedded it on my website quickly, and my customers loved how professional it looked. The whole process was smooth and stress-free. I definitely recommend it if you're serious about growing your online business!"
  },
];

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer border-[3px] border-[#909090] right-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
  >
    <ChevronRight className="w-5 h-5 text-[#909090]" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer border-[3px] border-[#909090] left-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
  >
    <ChevronLeft className="w-5 h-5 text-[#909090]" />
  </button>
);

const settingsOne = {
  dots: true, // ✅ Show pagination dots
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  cssEase: "ease",
  pauseOnHover: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipe: true,
  draggable: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


const settingsTwo = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover: false,
  slidesToShow: 5, // ✅ DESKTOP: 5
  slidesToScroll: 1,
  swipe: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
// Testimonial Close

export default function Home() {

  // Video Open
  useEffect(() => {
    const embedId = 'vidalytics_embed_3w0cbex34DPfSjQm';
    const loaderUrl = 'https://fast.vidalytics.com/embeds/UNl1lqys/3w0cbex34DPfSjQm/loader.min.js';
    const playerUrl = 'https://fast.vidalytics.com/embeds/UNl1lqys/3w0cbex34DPfSjQm/player.min.js';

    (function (v, i, d, a, l, y, t, c, s) {
      y = '_' + d.toLowerCase();
      c = d + 'L';
      if (!v[d]) { v[d] = {}; }
      if (!v[c]) { v[c] = {}; }
      if (!v[y]) { v[y] = {}; }
      const vl = 'Loader';
      let vli = v[y][vl];
      let vsl = v[c][vl + 'Script'];
      let vlf = v[c][vl + 'Loaded'];
      const ve = 'Embed';

      if (!vsl) {
        vsl = function (u, cb) {
          if (t) { cb(); return; }
          s = i.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = u;

          if (s.readyState) {
            s.onreadystatechange = function () {
              if (s.readyState === 'loaded' || s.readyState === 'complete') {
                s.onreadystatechange = null;
                vlf = 1;
                cb();
              }
            };
          } else {
            s.onload = function () {
              vlf = 1;
              cb();
            };
          }

          i.getElementsByTagName('head')[0].appendChild(s);
        };
      }

      vsl(loaderUrl, function () {
        if (!vli) {
          const vlc = v[c][vl];
          vli = new vlc();
        }
        vli.loadScript(playerUrl, function () {
          const vec = v[d][ve];
          t = new vec();
          t.run(a);
        });
      });
    })(window, document, 'Vidalytics', embedId, 'https://fast.vidalytics.com/embeds/UNl1lqys/3w0cbex34DPfSjQm/');

  }, []);
  // Video Close

  // Accordion Open  
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleTab = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        if (activeIndex === i) {
          ref.style.maxHeight = ref.scrollHeight + "px";
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [activeIndex]);
  // Accordion Close  

  return (
    <>
      {/* Sectione 1 Create Studio Quality Courses  */}
      <section className="pt-20 bg-[linear-gradient(180deg,_#FFF8E8_14.62%,_#FBF1F3_50%,_#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
          <h1 className="font-medium text-black text-[18px] leading-[23px] sm:text-[22px] sm:leading-[29px] uppercase">FOR EDUCATORS, COACHES & BUSINESS OWNERS</h1>
          <h2 className="max-w-[900px] font-bold text-[40px] leading-[45px] sm:text-[60px] sm:leading-[78px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">Create Studio Quality Courses & E-Books in 90 Seconds</h2>
          <h3 className="font-bold text-[30px] leading-[39px] text-[#4D4D4D] sm:text-[36px] sm:leading-[47px]">✨ (Without Writing a Single Word) ✨</h3>
          <h3 className="max-w-[700px] font-medium text-black text-[22px] leading-[29px] "> Mini Lessons Academy transforms your raw expertise into polished, <b>ready-to-sell digital products in minutes.</b> </h3>
          <nav className="list-none mb-10 text-center font-medium text-black text-[22px] leading-[29px] space-y-2">
            <li>No tech skills.</li>
            <li>No design talent.</li>
            <li>No content creation burnout.</li>
          </nav>
        </div>
      </section>

      {/* Sectione 2 3Day Free Trail  */}
      <section className="py-10">
        <div className="max-w-7xl max-w-[1060px] mx-auto px-4 sm:px-6 mb-20 lg:px-8 flex flex-row flex-wrap gap-7">
          <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-5 gap-4">
            <div className="p-5 flex flex-col items-start gap-4 rounded-lg border border-[#F1F1F1] h-full w-full bg-[#FFFFFF] justify-start overflow-y-auto">
              <img alt="content" className="w-12 h-12" src="/assets/home/icon-1.webp" />
              <p class="font-medium text-black text-[20px] leading-[26px]">Generate complete courses, e-books, and lead magnets with AI that actually sounds like you</p>
            </div>
            <div className="p-5 flex flex-col items-start gap-4 rounded-lg border border-[#FFE5AD] h-full w-full bg-[#fffbf3] justify-start overflow-y-auto">
              <img alt="content" className="w-12 h-12" src="/assets/home/icon-2.webp" />
              <p class="font-medium text-black text-[20px] leading-[26px]">Edit every word or publish as-is — you're always in complete control</p>
            </div>
            <div className="p-5 flex flex-col items-start gap-4 rounded-lg border border-[#9AE6BF] h-full w-full bg-[#f4fffa] justify-start overflow-y-auto">

              <img alt="content" className="w-12 h-12" src="/assets/home/icon-3.webp" />
              <p class="font-medium text-black text-[20px] leading-[26px]">Instantly host online or export beautiful files ready to sell</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-[-30px] px-3 flex flex-wrap gap-10 items-center justify-center">
          {/* Image */}
          <img
            alt="content"
            className="mx-auto max-w-full h-auto"
            src="/assets/home/home-1.png"
          />

          {/* Start Trial Button */}
          <button className="max-w-[791px] w-full mx-auto flex justify-center items-center font-medium text-white text-[35px] leading-[40px] py-4 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
            Start Free Trial
          </button>

          {/* Vidalytics Embed */}
          <div className="max-w-[750px] pb-0"
            id="vidalytics_embed_3w0cbex34DPfSjQm"
            style={{ width: '80%', position: 'relative', paddingTop: '56.25%' }}
          /> 
        </div>

      </section>

      {/* Sectione 3 Day Free Trail  */}
      <section className="py-10 mt-[0px] sm:mt-[-200px] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FFF8E8_34.62%,_#FBF1F3_50%,_#FFFFFF_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-30 lg:px-8 flex flex-row flex-wrap gap-10">
          <h2 className="text-center w-full mb-10 font-bold font-bold text-black text-[50px] leading-[65px]">What You Get</h2>
          <div class="w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-15">
            <div class="w-full relative p-5">
              <img alt="content" class="w-auto h-auto w-full" src="/assets/home/home-2.webp" />
              <img alt="content" class="absolute top-0 h-auto rotate-[-10deg] w-[93%]" src="/assets/home/home-2.webp" />
            </div>
            <div class="w-full flex flex-wrap gap-10 sm:gap-0">
              <div class="ctaBlock">
                <h2 class="font-bold text-black text-[24px] leading-[31px] mb-2"><span class="text-[#9b0ff1]">100% Ownership</span> of All Content</h2>
                <p class="font-medium text-black text-[20px] leading-[26px]">Your intellectual property stays yours forever </p>
              </div>
              <div class="ctaBlock">
                <h2 class="font-bold text-black text-[24px] leading-[31px] mb-2"><span class="text-[#9b0ff1]">Research-Backed</span> Material</h2>
                <p class="font-medium text-black text-[20px] leading-[26px]">Content based on trusted sources, not generic AI fluff </p>
              </div>
              <div class="ctaBlock">
                <h2 class="font-bold text-black text-[24px] leading-[31px] mb-2"><span class="text-[#9b0ff1]">Risk-Free</span> Experience</h2>
                <p class="font-medium text-black text-[20px] leading-[26px]">Try it free for 3 days with zero hassle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6  lg:px-8 flex flex-row flex-wrap gap-10">
          <h3 className="font-medium text-black text-[26px] leading-[34px]  text-center w-full">Trusted by <span class="font-bold">10,000+ Course</span> Creators & Counting</h3>
          <div class="container w-full max-w-[1000px] px-15 sm:px-5 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-10 items-center justify-center text-center">
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/1.webp" />
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/2.webp" />
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/3.webp" />
            <img alt="content" class="w-auto h-auto mx-auto filter brightness-[30%] contrast-100 saturate-100 blur-0 hue-rotate-0" src="/assets/brand-icon/4.webp" />
          </div>

          <div class="container flex flex-col md:flex-row items-center w-full justify-center gap-2 sm:gap-10">
            <div class="userBlock inline-flex">
              <img alt="content" class="w-13 h-13 rounded-full z-1" src="/assets/home/user-1.png" />
              <img alt="content" class="w-13 h-13 rounded-full z-2 ml-[-25px]" src="/assets/home/user-2.png" />
              <img alt="content" class="w-13 h-13 rounded-full z-3 ml-[-25px]" src="/assets/home/user-3.png" />
              <img alt="content" class="w-13 h-13 rounded-full z-4 ml-[-25px]" src="/assets/home/user-4.png" />
              <img alt="content" class="w-13 h-13 rounded-full z-5 ml-[-25px]" src="/assets/home/user-5.jpg" />
              <img alt="content" class="w-13 h-13 rounded-full z-6 ml-[-25px]" src="/assets/home/user-6.webp" />
              <img alt="content" class="w-13 h-13 rounded-full z-7 ml-[-25px]" src="/assets/home/user-7.png" />
            </div>
            <h3 class="font-bold text-black text-[24px] leading-[31px] mb-2">4.9/5 Rating</h3>
            <img alt="content" class="w-35" src="/assets/brand-icon/star.png" />
          </div>
        </div>
      </section>

      {/* Sectione 3 Most Course Ideas*/}
      <section className="py-10 pb-0 mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-30 lg:px-8 flex flex-row flex-wrap gap-4">
          <h2 className="w-[650px] mx-auto font-bold text-[40px] leading-[45px] sm:text-[50px] sm:leading-[70px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">Why Most Course Ideas Die Before Launch</h2>
          <p class="text-gray-900 text-lg title-font font-medium w-full text-center">We surveyed 300 first-time creators who joined Mini Lessons Academy.</p>
          <p class="text-gray-900 text-lg title-font font-medium w-full text-center mb-5">Here's what was killing their progress:</p>

          <div className="w-[850px] grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-20 mx-auto bg-none sm:bg-[url('/assets/home/home-9.png')] bg-no-repeat bg-cover bg-center rounded-[30px]">

            <div class="w-full p-7 border border-[#ECECEC] bg-white ml-[0px] mt-[0px] sm:ml-[-80px] sm:mt-[20px] shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg flex flex-col gap-[10px] items-start">
              <img alt="content" class="w-8 h-auto" src="/assets/home/close-icon.webp" />
              <h3 class="font-bold text-[30px] leading-[39px] text-[#DA0000] text-left">Analysis Paralysis</h3>
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left">"I never knew where to begin."</p>
              
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left"><b>42% were stuck</b> with no clear roadmap</p>
              
            </div>
            <div class="w-full p-7 border border-[#ECECEC] bg-white ml-[0px] mt-0 sm:ml-[80px] sm:mt-5 shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg flex flex-col gap-[10px] items-start">
              <img alt="content" class="w-8 h-auto" src="/assets/home/close-icon.webp" />
              <h3 class="font-bold text-[30px] leading-[39px] text-[#DA0000] text-left">No Framework</h3>
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left">"I had ideas but couldn't organize them."</p>
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left">38% couldn't transform knowledge into structure</p>
            </div>
            <img src="/assets/home/home-9.png" className="rounded-[30px] block sm:hidden" alt="" />
            <div class="w-full p-7 border border-[#ECECEC] bg-white ml-[0px] mb-[0px] sm:ml-[-80px] sm:mb-[20px] shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg flex flex-col gap-[10px] items-start">
              <img alt="content" class="w-8 h-auto" src="/assets/home/close-icon.webp" />
              <h3 class="font-bold text-[30px] leading-[39px] text-[#DA0000] text-left">Technical Overwhelm</h3>
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left">"I just wanted to teach, not become a web developer."</p>
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left"><b>45% were derailed</b> by complex tech</p>
            </div>
            <div class="w-full p-7 border border-[#ECECEC] bg-white ml-[0px] mb-0 sm:ml-[80px] sm:mb-5 shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg flex flex-col gap-[10px] items-start">
              <img alt="content" class="w-8 h-auto" src="/assets/home/close-icon.webp" />
              <h3 class="font-bold text-[30px] leading-[39px] text-[#DA0000] text-left">Upfront Costs</h3>
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left">"I kept paying $200/month while my course idea collected dust." </p>
              <p class="text-gray-900 text-lg title-font font-medium w-full text-left"><b>36% couldn't justify costs</b> without revenue</p>
            </div>
          </div>

        </div>
        <div className="w-full max-w-[1000px] mx-auto sm:px-6 mb-30 flex flex-col items-center gap-10">
          <h2 className="text-center w-full mb-3 font-bold text-black text-[40px] leading-[40px] sm:text-[50px] sm:leading-[65px]"> The True Cost of Staying Stuck </h2>
          <div className="w-full flex flex-wrap -m-4 p-3">
            {/* Left Image Block */}
            <div className="p-4 lg:w-1/3 w-full py-50 bg-center bg-cover rounded-[25px]" style={{ backgroundImage: "url('/assets/home/home-3.jpg')" }} >
              <span></span>
            </div>

            {/* Right Text Block */}
            <div className="lg:w-2/3 mt-10 sm:mt-0">
              {/* CTA 1 */}
              <div className="ctaBlock p-0 sm:p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Lost Revenue</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]"> Every month without your course = potential $1,000s uncaptured </p>
                </div>
              </div>

              {/* CTA 2 */}
              <div className="ctaBlock p-0 sm:p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Invisible Expertise</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]"> Your knowledge remains hidden while others gain visibility </p>
                </div>
              </div>

              {/* CTA 3 */}
              <div className="ctaBlock p-0 sm:p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Mental Burden</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]"> That unfinished project is draining your creative energy </p>
                </div>
              </div>

              {/* CTA 4 */}
              <div className="ctaBlock p-0 sm:p-4 w-full flex items-start">
                <div className="w-12 h-12 inline-flex items-center mt-[-5px]">
                  <span className="text-[27px]">❌</span>
                </div>
                <div className="flex-grow w-full pl-3">
                  <h2 className="font-bold text-black text-[24px] leading-[31px] mb-2">Market Position</h2>
                  <p className="font-medium text-black text-[20px] leading-[26px]">  Competitors publish faster and claim your audience </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sectione 4 3Day Free Trail  */}
      <section className="py-10 pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-10 ">
          <h3 className=" mx-auto mb-[-15px] text-center font-bold text-[36px] leading-[47px] sm:text-[46px] sm:leading-[50px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">That’s Why We Built Mini Lessons Academy</h3>
          <h3 className="w-[900px] mx-auto text-center font-bold text-[36px] leading-[47px] sm:text-[40px] sm:leading-[55px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">A powerful AI tool that turns your idea into a ready‑to‑sell course in five simple steps.</h3>

          <div class="w-full max-w-[800px] mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 px-3">
            <div class="w-full p-3 sm:p-7 pb-0 border border-[#ECECEC] shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg p-5">
              <h3 class="font-bold text-[30px] leading-[39px] text-[#DA0000] text-center mb-2">The Old Way</h3>
              <h3 class="font-bold text-[30px] leading-[39px] text-[#00000] text-center mb-3">(That's Failing You)</h3>
              <div class="space-y-4">
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Endless writing cycles</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Disorganized content docs</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Expensive, difficult platforms</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Multiple hiring needs</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">❌ Steep learning curves</p>
              </div>
              <img alt="content" class="w-auto h-auto w-full" src="/assets/home/home-4.png" />

            </div>
            <div class="w-full relative p-7 pb-0 border border-[#ECECEC] shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg p-5">
              <h3 className="font-bold text-[30px] mt-[-10px] leading-[39px] text-[#FFF] text-center mb-2 bg-[url('/assets/home/blue-background.png')] bg-[length:80%] bg-no-repeat bg-center bg-content p-1"> The Better Way </h3>
              <div class="space-y-4 mr-[0px] sm:mr-[-50px] mt-5">
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ 90-second course creation</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ Built-in knowledge frameworks</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ All-in-one platform</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ Automatic professional design</p>
                <p class="font-bold text-black text-[20px] leading-[26px]">✅ Tech-free publishing</p>
              </div>

              <img alt="content" class="relative sm:absolute inset-x-0 bottom-0 mx-auto h-auto" src="/assets/home/home-5.png" />
            </div>

          </div>
          <button className="max-w-[400px] mx-auto w-full flex justify-center items-center font-bold text-white text-[35px] leading-[40px] py-4 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Sectione 5 How Mini Lessons Academy Works  */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-30 lg:px-8 flex flex-row flex-wrap gap-4">
          <h2 className="text-center w-full font-bold text-black text-[40px] leading-[40px] sm:text-[50px] sm:leading-[65px]"> How Mini Lessons Academy Works
          </h2>

          {/* Step 1 */}
          <div className="w-full max-w-[930px] mx-auto flex-cols sm:flex gap-0 items-center mb-10 sm:mb-0">
            {/* Left Image Block */}
            <div className="w-full lg:w-1/2 p-4">
              <span className="block w-full h-[370px] bg-center bg-cover rounded-[25px]" style={{ backgroundImage: "url('/assets/home/home-5.jpg')" }} ></span>
            </div>

            {/* Right Text Block */}
            <div className="w-full lg:w-2/3 p-0 sm:p-4">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 w-full flex flex-wrap items-center gap-3">
                <h3 className="font-bold text-[#9B0FF1] text-[34px] leading-[44px] mb-2">Step 1</h3>
                <h3 className="font-bold text-black text-[28px] leading-[36px] mb-2">Enter Your Course Topic (10 Seconds)</h3>
                <p className="font-medium text-black text-[20px] leading-[26px]"> Simply type what you want to teach. Our AI Title Generator instantly suggests clear, compelling titles that position your expertise.</p>
                <div class="space-y-2 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> No more agonizing over the "perfect" title</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Get expert guidance on narrowing your topic</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Stop second-guessing and start creating immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full max-w-[930px] mx-auto flex flex-col-reverse sm:flex-row gap-0 items-center mb-10 sm:mb-0">

            {/* Left Image Block */}
            <div className="w-full lg:w-2/3 p-0 sm:p-4">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 w-full flex flex-wrap items-center gap-3">
                <h3 className="font-bold text-[#9B0FF1] text-[34px] leading-[44px] mb-2">Step 2</h3>
                <h3 className="font-bold text-black text-[28px] leading-[36px] mb-2">Review & Edit Your Complete Outline (30 Seconds)</h3>
                <p className="font-medium text-black text-[20px] leading-[26px]"> Mini Lessons instantly builds:</p>
                <div class="space-y-2 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Your course structure with logical progression</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> A detailed summary of each section</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> A customizable blueprint before generating content</p>
                </div>
                <p className="font-medium text-black text-[20px] leading-[26px]"> "After two years trying to organize my nutrition expertise, Mini Lessons gave me a complete outline in seconds. This saved me literally weeks of work."</p>
                <p className="font-bold text-black text-[20px] leading-[26px]"> – Jenna, Health Coach ($1,800 in course sales)</p>

              </div>
            </div>
            {/* Right Text Block */}
            <div className="w-full lg:w-1/2  p-0 sm:p-4">
              <span className="block w-full h-[370px] border border-[3px] bg-center bg-cover rounded-[25px]" style={{ backgroundImage: "url('/assets/home/home-6.jpg')" }} ></span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="w-full max-w-[930px] mx-auto flex-cols sm:flex  gap-0 items-center mb-10 sm:mb-0">
            {/* Left Image Block */}
            <div className="w-full lg:w-1/2 p-0 sm:p-4">
              <span className="block w-full h-[370px] bg-center bg-cover rounded-[25px]" style={{ backgroundImage: "url('/assets/home/home-7.jpg')" }} ></span>
            </div>

            {/* Right Text Block */}
            <div className="w-full lg:w-2/3 p-0 sm:p-4">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 w-full flex flex-wrap items-center gap-3">
                <h3 className="font-bold text-[#9B0FF1] text-[34px] leading-[44px] mb-2">Step 3</h3>
                <h3 className="font-bold text-black text-[28px] leading-[36px] mb-2">Generate Your Complete Course (50 Seconds)</h3>
                <p className="font-medium text-black text-[20px] leading-[26px]"> With one click, your finished product materializes:</p>
                <div class="space-y-2 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> A professionally structured course or e-book</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Content that sounds like you, not generic AI</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Fully formatted and ready to share or sell</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Scaled from quick lead magnets to comprehensive courses</p>
                </div>
                <p className="font-medium text-black text-[20px] leading-[26px]"> "I had a lead magnet generated and live on my site in under five minutes. The next morning, I had 20 new subscribers."</p>
                <p className="font-bold text-black text-[20px] leading-[26px]"> – Marcus, Marketing Consultant (180% email list growth)</p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="w-full max-w-[930px] mx-auto flex flex-col-reverse sm:flex-row gap-0 items-center mb-10 sm:mb-0">

            {/* Left Image Block */}
            <div className="w-full lg:w-2/3 p-0 sm:p-4">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 w-full flex flex-wrap items-center gap-3">
                <h3 className="font-bold text-[#9B0FF1] text-[34px] leading-[44px] mb-2">Step 4</h3>
                <h3 className="font-bold text-black text-[28px] leading-[36px] mb-2">Add Multimedia With One Click (2 Minutes)</h3>
                <p className="font-medium text-black text-[20px] leading-[26px]"> Transform your course without tech headaches:</p>
                <div class="space-y-2 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> One-click video embedding (no coding required)</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Easy image insertion</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Seamless addition of external resources</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Professional formatting maintained automatically</p>
                </div>
                <p className="font-medium text-black text-[20px] leading-[26px]"> "I used to spend thousands on designers & web developers. MiniLessons makes everything look studio-quality."</p>
                <p className="font-bold text-black text-[20px] leading-[26px]"> – Rina, Career Coach ($6,000 launch in her first month)</p>
              </div>
            </div>
            {/* Right Text Block */}
            <div className="w-full lg:w-1/2 p-0 sm:p-4">
              <span className="block w-full h-[370px] bg-center bg-cover rounded-[25px]" style={{ backgroundImage: "url('/assets/home/home-8.png')" }} ></span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="w-full max-w-[930px] mx-auto flex-cols sm:flex gap-0 items-center">
            {/* Left Image Block */}
            <div className="w-full lg:w-1/2 p-0 sm:p-4">
              <span className="block w-full h-[370px] bg-center bg-cover rounded-[25px]" style={{ backgroundImage: "url('/assets/home/home-9.jpg')" }} ></span>
            </div>

            {/* Right Text Block */}
            <div className="w-full lg:w-2/3 p-0 sm:p-4">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 w-full flex flex-wrap items-center gap-3">
                <h3 className="font-bold text-[#9B0FF1] text-[34px] leading-[44px] mb-2">Step 5</h3>
                <h3 className="font-bold text-black text-[28px] leading-[36px] mb-2">Publish & Monetize Instantly</h3>
                <p className="font-medium text-black text-[20px] leading-[26px]"> Your course is ready to generate income:</p>
                <div class="space-y-2 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Instant hosting with a shareable link</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Professional PDF and DOC exports</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Interactive quizzes for engagement</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> One-click audiobook creation with six realistic voices</p>
                </div>
                <p className="font-medium text-black text-[20px] leading-[26px]"> "The audiobook feature alone is worth the subscription. My completion rates doubled, and referrals are up 40%."</p>
                <p className="font-bold text-black text-[20px] leading-[26px]"> – Nate, Productivity Coach</p>
              </div>
            </div>
          </div>
          <button className="sm:max-w-[320px] max-w-full mx-auto w-full flex justify-center items-center font-bold text-white text-[35px] leading-[40px] py-4 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
            Start Free Trial
          </button>
        </div>
      </section >

      {/* Sectione 6 Real Results From Creators Like You */}
      <section className="py-10 pt-0">
        <div className="max-w-7xl mx-auto  flex flex-row flex-wrap gap-10 ">
          <h2 className="max-w-[450px] mx-auto  text-center w-full font-bold font-bold text-black text-[40px] leading-[50px] sm:text-[50px] sm:leading-[65px]"><span class="text-[#9b0ff1]">Real Results</span> From Creators Like You</h2>
          {/* <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full p-8  shadow-[0px_4px_15px_rgba(0,0,0,0.4)]">
                <img alt="testimonial" src="/assets/brand-icon/star.png" class="w-auto h-5 mb-4" />
                <a class="inline-flex items-center">
                  <img alt="testimonial" src="/assets/home/user-2.png" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="font-normal text-[18px] leading-[28px] text-[#151515]">Lily</span>
                    <span class="font-normal text-[18px] leading-[28px] text-[#151515]">Wellness Author & Mom</span>
                  </span>
                </a>
                <h3 className="font-bold text-[18px] leading-[28px] text-[#151515] py-3">“I finally published what I’ve been thinking about for years.”</h3>
                <p class="font-normal text-[18px] leading-[28px] text-[#151515]">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <div
        className="px-4 max-w-[900px] mx-auto relative overflow-hidden">
        <Slider {...settingsOne}>
          {testimonialsOne.map((item, index) => (
            <div key={index} className="p-5">
              <div className="h-full p-6 shadow-[0px_4px_15px_rgba(0,0,0,0.4)]">
                <img src="/assets/brand-icon/star.png" alt="stars" className="h-5 mb-4" />
                <div className="flex items-center mb-4">
                  <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-4">
                    <p className="font-normal text-[18px] leading-[28px] text-[#151515]">{item.name}</p>
                    <p className="font-normal text-[18px] leading-[28px] text-[#151515]">{item.role}</p>
                  </div>
                </div>
                <h3 className="font-bold text-[18px] leading-[22px] text-[#151515] py-3">"{item.title}"</h3>
                <p className="font-normal text-[18px] leading-[28px] text-[#151515]">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
        <button className="max-w-[791px] w-full mx-auto flex mt-10 mb-20 justify-center items-center font-medium text-white text-[35px] leading-[40px] py-4 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer"> Start Free Trial </button>
      </div>

      {/* Sectione 7 Mini Lessons Academy Helps You Create  */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-10 ">
          <h3 className="w-full max-w-[600px] mx-auto text-center font-bold text-[40px] leading-[50px] sm:text-[50px] sm:leading-[65px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">Mini Lessons Academy Helps You Create:</h3>
          <div class="w-full max-w-[750px] mx-auto space-y-4  ">
            <p class="inline-flex flex-wrap gap-2 font-medium text-black text-[22px] leading-[26px] sm:text-[28px] sm:leading-[26px]"><img class="w-7 h-7" src="/assets/home/greenCheck.svg" /> <span class="font-bold">Lead magnets that convert</span> visitors to subscribers</p>
            <p class="inline-flex flex-wrap gap-2 font-medium text-black text-[22px] leading-[26px] sm:text-[28px] sm:leading-[26px]"><img class="w-7 h-7" src="/assets/home/greenCheck.svg" /><span class="font-bold">E-books that establish</span> your authority</p>
            <p class="inline-flex flex-wrap gap-2 font-medium text-black text-[22px] leading-[26px] sm:text-[28px] sm:leading-[26px]"><img class="w-7 h-7" src="/assets/home/greenCheck.svg" /><span class="font-bold">Courses that generate</span> passive income</p>
            <p class="inline-flex flex-wrap gap-2 font-medium text-black text-[22px] leading-[26px] sm:text-[28px] sm:leading-[26px]"><img class="w-7 h-7" src="/assets/home/greenCheck.svg" /><span class="font-bold">Audiobooks that reach </span> busy learners</p>
            <p class="inline-flex flex-wrap gap-2 font-medium text-black text-[22px] leading-[26px] sm:text-[28px] sm:leading-[26px]"><img class="w-7 h-7" src="/assets/home/greenCheck.svg" /><span class="font-bold">Workshop materials</span> that impress clients</p>
            <p class="flex gap-2 font-bold text-black text-[22px] leading-[26px] sm:text-[28px] sm:leading-[26px]"><img class="w-7 h-7" src="/assets/home/greenCheck.svg" />And much more…</p>
          </div>
        </div>
      </section>

      {/* Sectione 8 What Makes Mini Lessons Academy */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex flex-row flex-wrap gap-10 ">
          <h2 className="max-w-[700px] mx-auto text-center w-full mb-0 font-bold font-bold text-black text-[40px] leading-[50px] sm:text-[50px] sm:leading-[65px]">What Makes <span class="text-[#9b0ff1]">Mini Lessons Academy </span> Different</h2>
          <div class="max-w-[900px] mx-auto flex items-center gap-5">
            <div class="p-2 sm:p-4 md:w-1/2 w-full">
              <div class="h-full p-8 rounded rounded-[25px] border border-[1px] border-[#9b0ff1]">
                <h3 className="font-bold text-black text-[30px] leading-[39px] mb-3"><span class="text-[#9b0ff1]">Your Thinking Partner</span>, Not Just a Robot</h3>
                <p className="font-medium text-black text-[18px] leading-[23px] mb-3">Most AI tools produce generic content.</p>
                <p className="font-medium text-black text-[18px] leading-[23px] mb-3">Mini Lessons Creates:</p>
                <div class="space-y-5 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Content that builds logically, with each section supporting the next</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> No meaningless fluff </p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Content that reads like your best teaching moments</p>
                </div>
              </div>
            </div>
            <div class="p-2 sm:p-4 md:w-1/2 w-full hidden lg:block">
              <div class="h-full p-8">
                <img alt="content" className="sm:w-auto sm-h-auto" src="/assets/home/arrow-r.png" />
              </div>
            </div>
          </div >
          <div class="max-w-[900px] mx-auto my-[-20px] sm:my-[-150px] flex items-center gap-0 sm:gap-5">
            <div class="p-4 md:w-1/2 w-full hidden lg:block">
              <div class="h-full p-8">
                <img alt="content" className="sm:w-auto sm-h-auto ml-auto mb-[-100px] " src="/assets/home/arrow-l.png" />
              </div>
            </div>
            <div class="p-2 sm:p-4 md:w-1/2 w-full">
              <div class="h-full p-8 rounded rounded-[25px] border border-[1px] border-[#9b0ff1]">
                <h3 className="font-bold text-black text-[30px] leading-[39px] mb-3"><span class="text-[#9b0ff1]">Full Control From Vision  </span>, To Execution</h3>
                <p className="font-medium text-black text-[18px] leading-[23px] mb-3">With our unique Summary Builder:</p>
                <p className="font-medium text-black text-[18px] leading-[23px] mb-3">Mini Lessons Creates:</p>
                <div class="space-y-5 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> See exactly what will be in your course before it's generated</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Edit the summary to guide the AI toward your teaching approach </p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> No surprises or extensive rewriting after generation</p>
                </div>
              </div>
            </div>

          </div >
          <div class="max-w-[900px] mx-auto flex items-end gap-5">
            <div class="p-2 sm:p-4 md:w-1/2 w-full">
              <div class="p-8 rounded rounded-[25px] border border-[1px] border-[#9b0ff1]">
                <h3 className="font-bold text-black text-[30px] leading-[39px] mb-3"><span class="text-[#9b0ff1]">Professional Presentation</span>, Without Design Skills</h3>
                <div class="space-y-5 mr-[0px] sm:mr-[-50px]">
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Clean, professionally styled PDFs and documents </p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Perfectly formatted course chapters</p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Consistent branding </p>
                  <p class="font-medium text-black text-[20px] leading-[26px]"><span class="font-bold text-[2rem]">→</span> Zero design work required </p>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full hidden lg:block">
              <div class="p-8">
                <img alt="content" className="sm:w-auto sm:w-auto" src="/assets/home/arrow-b.png" />
              </div>
            </div>
          </div >
          <button className="max-w-[791px] w-full mx-auto flex justify-center items-center font-medium text-white text-[35px] leading-[40px] py-4 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
            Start Trial
          </button>
        </div >
      </section >

      {/* Sectione 9 I Built a Course… */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-5">
          <img src="/assets/home/light.jpg" class="mx-auto w-auto h-30" alt="" srcset="" />
          <h3 className="mx-auto text-center w-full font-bold font-bold text-black text-[40px] leading-[50px] sm:text-[50px] sm:leading-[65px]">“I Built a Course… <br />Now, How Do I Market it?”</h3>
          <h3 className="mx-auto w-[900px] font-bold text-[34px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">You’ve Built the Course. Now Let’s Make It Sell.</h3>
          <p class="mx-auto mb-10 font-medium text-black text-[26px] leading-[36px]">Most platforms abandon you after "publish." We don't.</p>
        </div>
        <div class="max-w-[600px] mx-auto flex flex-wrap flex-col -m-4 items-start">
          <div class="p-4 max-w-[600px]">
            <div class="h-full flex sm:flex-row flex-col sm:text-left">
              <img alt="team" class="w-18 h-18 mx-auto mb-6 sm:mb-4" src="/assets/home/icon-4.png" />
              <div class="flex-grow sm:pl-8">
                <h3 class="font-bold text-black text-[28px] leading-[36px] mb-2">Persuasive Copy Generator</h3>
                <p class="font-medium text-black text-[18px] leading-[23px] mb-3">Transform your course description from awkward to compelling:</p>
                <div class="space-y-5">
                  <p class="font-medium text-black text-[18px] leading-[23px]"><span class="font-bold text-[2rem]">→</span> Sales page copy that converts</p>
                  <p class="font-medium text-black text-[18px] leading-[23px]"><span class="font-bold text-[2rem]">→</span> Benefit statements that feel authentic</p>
                  <p class="font-medium text-black text-[18px] leading-[23px]"><span class="font-bold text-[2rem]">→</span> Language that positions you as an expert</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 max-w-[600px]">
            <div class="h-full flex sm:flex-row flex-col sm:text-left">
              <img alt="team" class="w-18 h-18 mx-auto mb-6 sm:mb-4" src="/assets/home/icon-5.png" />
              <div class="flex-grow sm:pl-8">
                <h3 class="font-bold text-black text-[28px] leading-[36px] mb-2">AI Marketing Coach</h3>
                <p class="font-medium text-black text-[18px] leading-[23px] mb-3">Your on-demand marketing advisor:</p>
                <div class="space-y-5">
                  <p class="font-medium text-black text-[18px] leading-[23px]"><span class="font-bold text-[2rem]">→</span> Personalized email sequences and social posts</p>
                  <p class="font-medium text-black text-[18px] leading-[23px]"><span class="font-bold text-[2rem]">→</span> Promotional ideas tailored to your audience</p>
                  <p class="font-medium text-black text-[18px] leading-[23px]"><span class="font-bold text-[2rem]">→</span> Guidance for overcoming marketing blocks</p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4 max-w-[600px]">
            <div class="h-full flex sm:flex-row flex-col sm:text-left">
              <img alt="team" class="w-18 h-18 mx-auto mb-6 sm:mb-4" src="/assets/home/icon-6.png" />
              <div class="flex-grow sm:pl-8">
                <h3 class="font-bold text-black text-[28px] leading-[36px] mb-2">Complete Marketing Ecosystem</h3>
                <p class="font-medium text-black text-[18px] leading-[23px] mb-3">Transform your course description from awkward to compelling:</p>
                <div class="space-y-5">
                  <p class="font-medium text-black text-[18px] leading-[23px]">
                    <span class="font-bold text-[2rem]">→</span> <span class="font-bold">Done-for-You Email Sequences</span><br />
                    Proven campaigns that convert subscribers
                  </p>
                  <p class="font-medium text-black text-[18px] leading-[23px]">
                    <span class="font-bold text-[2rem]">→</span> <span class="font-bold">Six-Figure Sales Funnel Templates</span><br />
                    Plug-and-play systems used by top creators
                  </p>
                  <p class="font-medium text-black text-[18px] leading-[23px]">
                    <span class="font-bold text-[2rem]">→</span> <span class="font-bold">Expert Masterclass Collection</span><br />
                    Behind-the-scenes lessons from successful course creators
                  </p>
                  <p class="font-medium text-black text-[18px] leading-[23px]">
                    <span class="font-bold text-[2rem]">→</span> <span class="font-bold">1-on-1 Strategy Call</span><br />
                    Guidance for your specific launch plan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Sectione 10 We’re proud of building a tool our customers love */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-5">
          <h3 className="mx-auto max-w-[1000px] text-center w-full font-bold font-bold text-black text-[40px] leading-[52px] ">✨ We’re proud of building a tool our customers love. </h3>
          <h3 className="mx-auto max-w-[1000px] text-center w-full font-bold font-bold text-black text-[40px] leading-[52px] my-4">Listen to what they’re saying about Mini Lessons Academy ✨</h3>
        </div>
      </section>

      <div
        className="px-4 relative overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, #ffffff00 0%, #000000 22.5%, #000000 77.5%, #ffffff00 100%)',
          maskImage: 'linear-gradient(to right, #ffffff00 0%, #000000 22.5%, #000000 77.5%, #ffffff00 100%)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
        }}
      >
        <Slider {...settingsTwo}>
          {testimonialsTwo.map((item, index) => (
            <div key={index} className="px-[5px]">
              <div className="h-full p-6 border border-[#F1F1F1] rounded-[10px] shadow-[0_0_2.8px_0_rgb(191,191,191,0.25)] cursor-pointer">
                <img src={item.stars} alt="stars" className="h-5 mb-4" />
                <div className="flex items-center mb-4">
                  <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-[#151515]">{item.name}</p>
                    <p className="text-sm text-[#151515]">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm text-[#151515] leading-[18px]">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
        <button className="max-w-[791px] w-full mx-auto flex mt-10 mb-20 justify-center items-center font-medium text-white text-[35px] leading-[40px] py-4 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer"> Start Free Trial </button>
      </div>

      {/* Sectione 11 You're 90 Seconds Away From a Product*/}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-5">
          <h3 className="mx-auto max-w-[1000px] text-center w-full font-bold font-bold text-black text-[50px] leading-[56px]">⚡ You're 90 Seconds Away From a Product You're Proud to Sell</h3>
          <div class="space-y-5 text-center mx-atuo w-full">
            <p class="font-medium text-black text-[28px] leading-[36px]"><span class="font-bold text-[2rem]">• </span> No complicated tech skills.</p>
            <p class="font-medium text-black text-[28px] leading-[36px]"><span class="font-bold text-[2rem]">• </span> No blank page anxiety.</p>
            <p class="font-medium text-black text-[28px] leading-[36px]"><span class="font-bold text-[2rem]">• </span> Just your idea — structured, professional, and ready to generate income.</p>
          </div>

          <h3 className="mx-auto mt-3 mb-[-10px] w-[900px] font-bold text-[34px] text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">When You Join Today, You Get:</h3>
          <div class="max-w-[700px] flex flex-col gap-7 mx-auto w-full relative p-7 border border-[#ECECEC] shadow-[0_0_30px_4px_rgb(191,191,191,0.25)] rounded-lg">

            <div class="iconBlock mr-[0px] sm:mr-[-50px]">
              <h3 class="font-bold text-black text-[24px] leading-[31px]">✅ Instant Course Creation</h3>
              <p class="font-medium text-black text-[22px] leading-[29px]">Turn expertise into professional products in minutes</p>
            </div>

            <div class="iconBlock mr-[0px] sm:mr-[-50px]">
              <h3 class="font-bold text-black text-[24px] leading-[31px]">✅ Editable Outlines & Summaries</h3>
              <p class="font-medium text-black text-[22px] leading-[29px]">Complete control over structure and content</p>
            </div>

            <div class="iconBlock mr-[0px] sm:mr-[-50px]">
              <h3 class="font-bold text-black text-[24px] leading-[31px]">✅ Interactive Elements</h3>
              <p class="font-medium text-black text-[22px] leading-[29px]">Quizzes, audiobooks, and multimedia support</p>
            </div>

            <div class="iconBlock mr-[0px] sm:mr-[-50px]">
              <h3 class="font-bold text-black text-[24px] leading-[31px]">✅ Interactive Elements</h3>
              <p class="font-medium text-black text-[22px] leading-[29px]">Quizzes, audiobooks, and multimedia support</p>
            </div>

            <div class="iconBlock mr-[0px] sm:mr-[-50px]">
              <h3 class="font-bold text-black text-[24px] leading-[31px]">Professional Branding</h3>
              <p class="font-medium text-black text-[22px] leading-[29px]">Automated cover design and formatting</p>
            </div>

            <div class="iconBlock mr-[0px] sm:mr-[-50px]">
              <h3 class="font-bold text-black text-[24px] leading-[31px]">✅ Complete Marketing Toolkit</h3>
              <p class="font-medium text-black text-[22px] leading-[29px]">Email sequences, sales copy, and launch strategy</p>
            </div>

            <div class="iconBlock mr-[0px] sm:mr-[-50px]">
              <h3 class="font-bold text-black text-[24px] leading-[31px]">✅ Unlimited Creation</h3>
              <p class="font-medium text-black text-[22px] leading-[29px]">No caps on how much you can produce</p>
            </div>


          </div>

        </div>
        <button className="max-w-[350px] mt-10 w-full mx-auto flex justify-center items-center font-medium text-white text-[35px] leading-[40px] py-4 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
          Start Free Trial
        </button>
      </section>

      {/* Sectione 12 FAQ*/}
      <section class="py-10 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-5">
          <h3 class="w-full max-w-[600px] mx-auto text-center font-bold text-[50px] leading-[60px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">FAQs</h3>
          <div className="accordionTab max-w-[1000px] w-full mx-auto">
            {accordionData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div className="tab border-b-[2px] border-dark" key={index}>
                  <div className={`tab-head flex justify-between items-center cursor-pointer transition-all duration-200 py-6 ${isActive ? "p-6 pb-3" : "hover:p-6 hover:bg-[#EED8FF]"}`} onClick={() => toggleTab(index)} >
                    <h3 className="font-bold text-black text-[20px] leading-[28px]"> {item.title} </h3> <div>
                      {isActive ? (
                        <i className="fa-solid fa-caret-up text-[25px]"></i>
                      ) : (
                        <i className="fa-solid fa-caret-down text-[25px]"></i>
                      )}
                    </div>
                  </div>

                  <div ref={(el) => (contentRefs.current[index] = el)} className="tab-body overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: "0px" }} >
                    <p className="font-medium text-black text-[18px] leading-[23px] pt-0 pb-6 px-6"> {item.content} </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectione 13 FAQ*/}
      <section class="py-20 sm:py-10 bg-[linear-gradient(90deg,_#FFF9E1_0%,_#FFEDED_30.94%,_#EDF1FF_62.22%,_#FFFFFF_92.31%)]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap gap-5">
          <h3 class="w-full max-w-[1100px] mx-auto text-center font-bold text-[40px] leading-[50px] sm:text-[60px] sm:leading-[70px] text-transparent bg-clip-text bg-[linear-gradient(180deg,_#9B0FF1_0%,_#4A0773_100%)]">70% of Six-Figure Creators Say Courses Are Their #1 Income Source</h3>
          <div className="w-full mx-auto flex flex-col sm:flex-row gap-0">
            {/* Left Image Block */}
            <div className="w-full lg:w-1/3 p-0 sm:p-4 mt-8 sm:mt-0">
              <img src="/assets/home/cta2.png" alt="" srcset="" />
            </div>

            {/* Right Text Block */}
            <div className="w-full lg:w-2/3">
              {/* CTA 1 */}
              <div className="ctaBlock p-4 h-full flex flex-col justify-between items-center gap-3">
                <p className="font-medium text-black text-[26px] leading-[34px] text-center"> Join 10,000+ educators, coaches, authors & trainers already turning their expertise into income and impact.</p>
                <button className="max-w-[791px] w-full mx-auto flex justify-center items-center font-medium text-white text-[35px] leading-[40px] py-4 px-8 focus:outline-none rounded-lg transition duration-300 bg-gradient-to-b from-[#9B0FF1] to-[#59098B] hover:bg-[linear-gradient(180deg,_#9B0FF1CC_0%,_#59098BCC_100%)] cursor-pointer">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}