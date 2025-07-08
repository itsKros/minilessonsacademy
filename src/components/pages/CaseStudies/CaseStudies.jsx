import React, { useState, useRef, useEffect } from "react";

 // Sample testimonial data
const testimonialsOne = [
  {
    name: "Lily",
    role: "Wellness Author & Mom",
    title: "Amazing Experience",
    img: "/assets/home/user-2.png",
    text: "She really helped me find balance in life through healthy habits.",
  },
  {
    name: "James Carter",
    role: "Fitness Coach",
    title: "Highly Recommend",
    img: "/assets/home/user-3.png",
    text: "Great guidance and support. Would recommend to anyone serious about health.",
  },
  {
    name: "Emma Stone",
    role: "Author & Wellness Coach",
    title: "True Transformation",
    img: "/assets/home/user-4.png",
    text: "My lifestyle has completely changed for the better. Thank you!",
  },
  // Add more if needed
];

const settingsOne = {
  slidesToShow: 3,
  dots: true,
  arrows: false,
  infinite: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
 
const CaseStudies = () => {
 
  return (
    <div className="relative p-8 bg-white">
      <h2 className="text-xl mb-6 font-semibold">Case Studies</h2> 
    </div>
  );
};

export default CaseStudies;
