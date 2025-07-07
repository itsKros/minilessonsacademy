import React, { useState, useRef, useEffect } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const testimonials = [
  {
    name: "Lily",
    role: "Wellness Author & Mom",
    img: "/assets/home/user-2.png",
    stars: "/assets/brand-icon/star.png",
    text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland."
  },
  {
    name: "James Carter",
    role: "Fitness Coach & Speaker",
    img: "/assets/home/user-3.png",
    stars: "/assets/brand-icon/star.png",
    text: "Disrupt photo booth kinfolk cred vegan enamel pin banjo irony. Man bun sustainable brunch vexillologist narwhal jean shorts deep v next level green juice."
  },
  {
    name: "Sophie Granger",
    role: "Holistic Nutritionist",
    img: "/assets/home/user-4.png",
    stars: "/assets/brand-icon/star.png",
    text: "Meditation glossier swag cloud bread meggings fingerstache artisan kitsch gochujang tousled selfies. Cold-pressed franzen sriracha hammock poutine portland."
  },
  {
    name: "Daniel Lee",
    role: "Mental Health Advocate",
    img: "/assets/home/user-5.png",
    stars: "/assets/brand-icon/star.png",
    text: "Activated charcoal hammock godard gluten-free meh poke enamel pin. Readymade put a bird on it man braid paleo messenger bag echo park trust fund."
  },
  {
    name: "Emma Stone",
    role: "Author & Wellness Coach",
    img: "/assets/home/user-6.png",
    stars: "/assets/brand-icon/star.png",
    text: "Poke beard microdosing vexillologist pickled humblebrag. Farm-to-table waistcoat raclette subway tile kombucha blog tbh man bun seitan."
  },
  {
    name: "Nathan Brown",
    role: "Health Tech Entrepreneur",
    img: "/assets/home/user-7.png",
    stars: "/assets/brand-icon/star.png",
    text: "Knausgaard YOLO master cleanse tumeric, polaroid letterpress ennui vegan stumptown mumblecore mixtape hammock snackwave aesthetic."
  }
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0, // continuous effect
  speed: 10000, // slower speed for smooth scroll
  cssEase: 'linear',
  pauseOnHover: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipe: false, // disable swipe
  draggable: false, // disable drag
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

const CaseStudies = () => {

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
    <div className="relative p-8 bg-white">
      <h2 className="text-xl mb-6 font-semibold">Case Studies</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
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

      <div className="accordionTab max-w-[1000px] w-full mx-auto">
            {accordionData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div className="tab border-b border-gray-300" key={index}>
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
  );
};

export default CaseStudies;
