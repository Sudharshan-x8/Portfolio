import React, { forwardRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'RETAIL SALES ANALYSIS',
    description: 'Comprehensive analysis of retail sales data to identify trends, optimize performance, and improve revenue forecasting.',
    tech: ['Python', 'SQL', 'Power BI'],
    image: '/dash1.png',
    featured: true,
    caseStudyLink: 'https://drive.google.com/file/d/12YcW3OOsJ6lVVHwHuaoh0UJovJGwtbNz/view?usp=drivesdk',
    projectLink: 'https://github.com/Sudharshan-x8/Retail_Sales_analysis'
  },
  {
    id: 2,
    title: 'CHOCOLATE SALES ANALYSIS',
    description: 'Detailed analysis of chocolate sales data to understand market trends and customer preferences.',
    tech: ['Power BI'],
    image: '/dash2.png',
    featured: false,
    caseStudyLink: 'https://drive.google.com/file/d/1rWiaNJ3Y4xHOBhvzv9Xu3knFCD9tor2G/view?usp=drivesdk',
    projectLink: 'https://github.com/Sudharshan-x8/Chocolate-SalesDashboard'
  }
];

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-16 lg:py-24 bg-editorial-beige">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <div className="mb-12 animate-fade-in">
          <div className="bg-editorial-red p-4 lg:p-6 inline-block transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 group cursor-pointer">
            <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide transition-all duration-500 group-hover:tracking-widest">
              selected<br />projects.
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {project.projectLink ? (
                  <a 
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative overflow-hidden animate-slide-up"
                  >
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-contain transition-all duration-1000 ease-out group-hover:scale-110"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-editorial-red/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xl uppercase tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        View Project
                      </span>
                    </div>
                    
                    {/* Project Number */}
                    <div className="absolute top-6 left-6 bg-white px-4 py-2 transition-all duration-500 group-hover:bg-editorial-red group-hover:scale-110 transform group-hover:-translate-y-1">
                      <span className="text-editorial-charcoal font-bold text-sm group-hover:text-white transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="group relative overflow-hidden animate-slide-up">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-contain transition-all duration-1000 ease-out group-hover:scale-110"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-editorial-red/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xl uppercase tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        View Project
                      </span>
                    </div>
                    
                    {/* Project Number */}
                    <div className="absolute top-6 left-6 bg-white px-4 py-2 transition-all duration-500 group-hover:bg-editorial-red group-hover:scale-110 transform group-hover:-translate-y-1">
                      <span className="text-editorial-charcoal font-bold text-sm group-hover:text-white transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''} animate-slide-in-${index % 2 === 1 ? 'left' : 'right'}`}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-editorial-charcoal mb-4 tracking-tight transition-all duration-700 hover:text-editorial-red hover:tracking-wider">
                    {project.title}
                  </h3>
                  
                  {project.featured && (
                    <div className="inline-block bg-editorial-red px-4 py-1 mb-4 transition-all duration-500 hover:scale-110 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer">
                      <span className="text-white text-xs font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-lg text-editorial-charcoal/70 leading-relaxed transition-all duration-500 hover:text-editorial-charcoal hover:translate-x-2 transform">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-editorial-charcoal uppercase tracking-wide transition-all duration-500 hover:text-editorial-red hover:tracking-widest">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 border border-editorial-charcoal text-editorial-charcoal text-sm font-medium uppercase tracking-wide transition-all duration-500 hover:bg-editorial-red hover:text-white hover:scale-105 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.caseStudyLink ? (
                  <a 
                    href={project.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-editorial-charcoal hover:border-editorial-red transition-all duration-500 mt-8 transform hover:scale-105 inline-block"
                  >
                    <span className="relative z-10 text-editorial-charcoal group-hover:text-white transition-all duration-500 font-medium tracking-wide uppercase group-hover:tracking-widest">
                      View Case Study
                    </span>
                    <div className="absolute inset-0 bg-editorial-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  </a>
                ) : (
                  <button className="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-editorial-charcoal hover:border-editorial-red transition-all duration-500 mt-8 transform hover:scale-105">
                    <span className="relative z-10 text-editorial-charcoal group-hover:text-white transition-all duration-500 font-medium tracking-wide uppercase group-hover:tracking-widest">
                      View Case Study
                    </span>
                    <div className="absolute inset-0 bg-editorial-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Watermark */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-center pointer-events-none select-none opacity-10 z-0">
          <span className="text-6xl font-black tracking-widest text-editorial-charcoal uppercase">Projects</span>
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
