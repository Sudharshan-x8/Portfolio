import React from 'react';

const SkillsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-editorial-beige">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Title */}
          <div className="lg:col-span-3">
            <div className="bg-editorial-red p-4 lg:p-6 animate-fade-in transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 group cursor-pointer">
              <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide transition-all duration-500 group-hover:tracking-widest">
                skills.
              </h2>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-9">
            <p className="mb-6 text-editorial-charcoal/70 text-base md:text-lg">Here are the tools and technologies I use to turn data into insights:</p>
            {/* Programming */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase text-editorial-charcoal mb-2 tracking-widest">Programming</h4>
              <div className="flex flex-wrap gap-4 animate-slide-up">
                {['Python', 'SQL', 'HTML', 'CSS'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-6 py-3 min-w-[8rem] text-center bg-white text-editorial-charcoal font-medium uppercase tracking-wide text-sm md:text-base lg:text-lg transition-all duration-500 hover:bg-editorial-red hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Data Tools */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase text-editorial-charcoal mb-2 tracking-widest">Data Tools</h4>
              <div className="flex flex-wrap gap-4 animate-slide-up">
                {['Power BI', 'Excel', 'Pandas', 'Numpy', 'Jupyter'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-6 py-3 min-w-[8rem] text-center bg-white text-editorial-charcoal font-medium uppercase tracking-wide text-sm md:text-base lg:text-lg transition-all duration-500 hover:bg-editorial-red hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* Visualization */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase text-editorial-charcoal mb-2 tracking-widest">Visualization</h4>
              <div className="flex flex-wrap gap-4 animate-slide-up">
                {['Matplotlib', 'Seaborn', 'Power BI'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-6 py-3 min-w-[8rem] text-center bg-white text-editorial-charcoal font-medium uppercase tracking-wide text-sm md:text-base lg:text-lg transition-all duration-500 hover:bg-editorial-red hover:text-white hover:scale-105 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
