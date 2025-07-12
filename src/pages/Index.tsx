import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const projectsRef = useRef<HTMLElement>(null);

  return (
    <div className="overflow-x-hidden">
      <HeroSection projectsRef={projectsRef} />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <ProjectsSection ref={projectsRef} />
      <div className="section-divider" />
      <ContactSection />
    </div>
  );
};

export default Index;
