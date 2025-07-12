import React, { useState } from 'react';
// import ResumeModal from './ResumeModal';

interface HeroSectionProps {
  projectsRef: React.RefObject<HTMLElement>;
}

const HeroSection = ({ projectsRef }: HeroSectionProps) => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-editorial-beige relative overflow-hidden">
      {/* Background Text Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="text-9xl font-black text-editorial-charcoal animate-pulse">
          DATA ANALYST
        </div>
      </div>
      
      <div className="container mx-auto px-8 lg:px-16 py-20">
        <div className="flex flex-col lg:grid lg:[grid-template-columns:3fr_2fr] gap-8 lg:gap-24 items-center min-h-screen relative z-10">
          {/* Left Column - Text */}
          <div className="space-y-12 animate-slide-in-left w-full lg:max-w-full lg:min-w-0 mb-12 lg:mb-0 z-20 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-editorial-charcoal transition-all duration-700 hover:tracking-wider whitespace-nowrap px-2 sm:px-0">
                SUDHARSHAN<span className="text-editorial-red transition-all duration-500 hover:scale-110 inline-block">.</span>
              </h1>
              
              <div className="bg-editorial-red p-6 lg:p-8 max-w-md transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 group cursor-pointer">
                <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide transition-all duration-500 group-hover:tracking-widest">
                  Aspiring Data Analyst
                </h2>
              </div>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
              <button 
                onClick={scrollToProjects}
                className="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-editorial-charcoal hover:border-editorial-red transition-all duration-500 transform hover:scale-105"
              >
                <span className="relative z-10 text-editorial-charcoal group-hover:text-white transition-all duration-500 font-medium tracking-wide uppercase group-hover:tracking-widest">
                  Projects
                </span>
                <div className="absolute inset-0 bg-editorial-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              </button>
              
              <a
                href="https://drive.google.com/file/d/1dPC9CZ9U7BAHPQvqoxmiCHG5NHNp0oSL/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 py-4 bg-editorial-red border-2 border-editorial-red hover:bg-transparent transition-all duration-500 transform hover:scale-105 text-center sm:text-left"
              >
                <span className="relative z-10 text-white group-hover:text-editorial-charcoal transition-all duration-500 font-medium tracking-wide uppercase group-hover:tracking-widest">
                  View Resume
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-in-right w-full lg:max-w-full lg:min-w-0 z-10">
            <div className="relative group flex justify-center">
              <img 
                src="/profile.jpg"
                alt="Creative Designer Portrait"
                className="w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-full h-[32rem] sm:h-96 md:h-[450px] lg:h-[700px] object-cover shadow-2xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:shadow-3xl filter grayscale group-hover:brightness-110 border border-editorial-charcoal/20 mx-auto"
              />
              
              {/* Floating Title Overlay */}
              <div className="absolute top-8 -left-4 bg-white p-4 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 transform hover:-translate-y-1">
                <p className="text-sm font-bold tracking-[0.2em] text-editorial-charcoal uppercase transition-all duration-300 hover:text-editorial-red">
                  Data<br />Enthusiast.
                </p>
              </div>
              
              {/* Bottom Right Accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-editorial-red transition-all duration-700 ease-out group-hover:w-32 group-hover:h-32 group-hover:bg-opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {/* <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      /> */}
    </section>
  );
};

export default HeroSection;
