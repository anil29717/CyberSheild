import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileSidebar } from './components/MobileSidebar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Technologies } from './components/Technologies';
import { Industries } from './components/Industries';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b112c] text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar onMenuClick={toggleSidebar} />
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section - Highly Animated */}
        <Hero />

        {/* 2. Trust Badges / Certifications */}
        <TrustBadges />

        {/* 3. About Company */}
        <About />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Process / How We Work */}
        <Process />

        {/* 6. Why Choose Us - Stats & Benefits */}
        <WhyChooseUs />

        {/* 7. Technologies & Tools */}
        <Technologies />

        {/* 8. Industries We Secure */}
        <Industries />

        {/* 9. Case Studies / Success Stories */}
        <CaseStudies />

        {/* 10. Testimonials Slider */}
        <Testimonials />

        {/* 11. Blog / Insights Section */}
        <Blog />

        {/* 12. Call To Action */}
        <CTA />

        {/* 13. Contact Section */}
        <Contact />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
};

export default App;
