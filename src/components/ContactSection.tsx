import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const ContactSection = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sudharshan08012006@gmail.com');
    // You could add a toast notification here
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91-8807231974');
    // You could add a toast notification here
  };

  return (
    <section className="py-24 lg:py-32 bg-editorial-charcoal">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center space-y-16">
          {/* Thank You Title */}
          <div className="animate-fade-in">
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tight transition-all duration-700 hover:tracking-wider">
              THANK YOU<span className="text-editorial-red transition-all duration-500 hover:scale-110 inline-block">.</span>
            </h2>
            <div className="bg-editorial-red p-6 lg:p-8 inline-block transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 group cursor-pointer">
              <p className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide transition-all duration-500 group-hover:tracking-widest">
                Let's connect.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-12 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto mb-12 items-center">
              {/* Email */}
              <div className="group h-full flex flex-col justify-center md:h-64">
                <a
                  href="mailto:sudharshan08012006@gmail.com"
                  className="w-full p-4 md:p-8 bg-white hover:bg-editorial-red transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-1 flex flex-col justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-8 h-8 mx-auto mb-4 text-editorial-charcoal group-hover:text-white transition-all duration-500 transform group-hover:scale-110" />
                  <h3 className="text-lg font-bold text-editorial-charcoal group-hover:text-white uppercase tracking-wide mb-2 transition-all duration-500 group-hover:tracking-widest">
                    Email
                  </h3>
                  <p className="text-sm text-editorial-charcoal/70 group-hover:text-white/90 transition-all duration-500 mt-2 mb-1 text-center break-all" title="sudharshan08012006@gmail.com">
                    sudharshan08012006@gmail.com
                  </p>
                  <span className="invisible select-none">placeholder</span>
                </a>
              </div>

              {/* Phone */}
              <div className="group h-full flex flex-col justify-center md:h-64">
                <a
                  href="tel:+918807231974"
                  className="w-full p-4 md:p-8 bg-white hover:bg-editorial-red transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-1 flex flex-col justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="w-8 h-8 mx-auto mb-4 text-editorial-charcoal group-hover:text-white transition-all duration-500 transform group-hover:scale-110" />
                  <h3 className="text-lg font-bold text-editorial-charcoal group-hover:text-white uppercase tracking-wide mb-2 transition-all duration-500 group-hover:tracking-widest">
                    Mobile
                  </h3>
                  <p className="text-editorial-charcoal/70 group-hover:text-white/90 transition-all duration-500 mt-2 mb-1">
                    +91-8807231974
                  </p>
                  <span className="invisible select-none">placeholder</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="group h-full flex flex-col justify-center md:h-64">
                <a 
                  href="https://www.linkedin.com/in/sudharshanx8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full p-4 md:p-8 bg-white hover:bg-editorial-red transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-1 flex flex-col justify-center"
                >
                  <Linkedin className="w-8 h-8 mx-auto mb-4 text-editorial-charcoal group-hover:text-white transition-all duration-500 transform group-hover:scale-110" />
                  <h3 className="text-lg font-bold text-editorial-charcoal group-hover:text-white uppercase tracking-wide mb-2 transition-all duration-500 group-hover:tracking-widest">
                    LinkedIn
                  </h3>
                  <p className="text-editorial-charcoal/70 group-hover:text-white/90 transition-all duration-500 mt-2 mb-1">
                    /in/sudharshanx8
                  </p>
                  <span className="invisible select-none">placeholder</span>
                </a>
              </div>

              {/* GitHub */}
              <div className="group h-full flex flex-col justify-center md:h-64">
                <a 
                  href="https://github.com/Sudharshan-x8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full p-4 md:p-8 bg-white hover:bg-editorial-red transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 flex-1 flex flex-col justify-center"
                >
                  <Github className="w-8 h-8 mx-auto mb-4 text-editorial-charcoal group-hover:text-white transition-all duration-500 transform group-hover:scale-110" />
                  <h3 className="text-lg font-bold text-editorial-charcoal group-hover:text-white uppercase tracking-wide mb-2 transition-all duration-500 group-hover:tracking-widest">
                    GitHub
                  </h3>
                  <p className="text-editorial-charcoal/70 group-hover:text-white/90 transition-all duration-500 mt-2 mb-1">
                    /Sudharshan-x8
                  </p>
                  <span className="invisible select-none">placeholder</span>
                </a>
              </div>
            </div>


          </div>

          {/* Footer */}
          <div className="pt-16 border-t border-white/20">
            <p className="text-white/60 text-sm uppercase tracking-wider transition-all duration-500 hover:text-white hover:tracking-widest">
              © 2025 Sudharshan
            </p>
          </div>

          {/* Vertical Watermark */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-center pointer-events-none select-none opacity-10 z-0">
            <span className="text-6xl font-black tracking-widest text-white uppercase">Thank You</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
