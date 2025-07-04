 import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/pages/Home/Home.jsx';
import HowItWorks from './components/pages/HowItWorks/HowItWorks.jsx';
import FAQ from './components/pages/FAQ/FAQ.jsx';
import Pricing from './components/pages/Pricing/Pricing.jsx';
import Partners from './components/pages/Partners/Partners.jsx';
import Contact from './components/pages/Contact/Contact.jsx';
import CaseStudies from './components/pages/CaseStudies/CaseStudies.jsx';

// Features
import CreateCourses from './components/pages/Features/CreateCourses.jsx';
import CreateEbooks from './components/pages/Features/CreateEbooks.jsx';
import CreateAudiobooks from './components/pages/Features/CreateAudiobooks.jsx';
import AICoach from './components/pages/Features/AICoach.jsx';
import MarketingVIP from './components/pages/Features/MarketingVIP.jsx';
import AICoverGenerator from './components/pages/Features/AICoverGenerator.jsx';
import CreateQuizzes from './components/pages/Features/CreateQuizzes.jsx';
import OnlineCourseEditor from './components/pages/Features/OnlineCourseEditor.jsx';
import CourseHosting from './components/pages/Features/CourseHosting.jsx';

// Who We Help
import Educators from './components/pages/Who/Educators.jsx';
import Authors from './components/pages/Who/Authors.jsx';
import Coaches from './components/pages/Who/Coaches.jsx';
import ContentCreators from './components/pages/Who/ContentCreators.jsx';
import RightSideBar from './components/RightSideBar/RightSideBar.jsx';

export default function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (

    <Routes>        
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="pricing-plans-cb-t64v1" element={<Pricing />} />
        <Route path="partners" element={<Partners />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="contact-us" element={<Contact />} />

        {/* Features */}
        <Route path="create-courses" element={<CreateCourses />} />
        <Route path="create-ebooks" element={<CreateEbooks />} />
        <Route path="create-audiobooks" element={<CreateAudiobooks />} />
        <Route path="ai-coach" element={<AICoach />} />
        <Route path="marketing-vip-area" element={<MarketingVIP />} />
        <Route path="ai-cover-generator" element={<AICoverGenerator />} />
        <Route path="create-quizzes" element={<CreateQuizzes />} />
        <Route path="online-course-editor" element={<OnlineCourseEditor />} />
        <Route path="course-hosting" element={<CourseHosting />} />

        {/* Who We Help */}
        <Route path="educators" element={<Educators />} />
        <Route path="authors" element={<Authors />} />
        <Route path="coaches" element={<Coaches />} />
        <Route path="content-creators" element={<ContentCreators />} />
      </Route>
    </Routes>
  );
}