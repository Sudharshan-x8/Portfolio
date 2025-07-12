import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-editorial-beige">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Title */}
          <div className="lg:col-span-3">
            <div className="bg-editorial-red p-6 lg:p-8 mb-8 animate-fade-in transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 group cursor-pointer">
              <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide transition-all duration-500 group-hover:tracking-widest">
                about<br />me.
              </h2>
            </div>
          </div>

          {/* Middle Column - Content */}
          <div className="lg:col-span-5 space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg text-editorial-charcoal/70 max-w-lg leading-relaxed transform transition-all duration-700 hover:translate-x-2">
                Sudharshan S is a BCA Data Science student with a strong interest in data analysis and problem-solving.
              </p>
              
              <p className="text-base text-editorial-charcoal/70 leading-relaxed transition-all duration-700 hover:translate-x-1 transform hover:text-editorial-charcoal">
                Enjoys working with Python, SQL, and Power BI to uncover insights from real-world data.
              </p>
              
              <p className="text-base text-editorial-charcoal/70 leading-relaxed transition-all duration-700 hover:translate-x-1 transform hover:text-editorial-charcoal">
                Always curious about how data tells stories and helps drive smart decisions.
                Currently exploring hands-on projects to build skills and grow as a future data analyst.
              </p>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold text-editorial-charcoal mb-4 uppercase tracking-wide transition-all duration-500 hover:text-editorial-red hover:tracking-widest">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-editorial-red pl-6 transition-all duration-500 hover:border-l-8 hover:pl-8 transform hover:translate-x-2">
                  <h4 className="font-semibold text-editorial-charcoal transition-colors duration-300 hover:text-editorial-red">Bachelor of Computer Applications (BCA) in Data Science</h4>
                  <p className="text-editorial-charcoal/60 transition-colors duration-300 hover:text-editorial-charcoal">B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai | 2023-2026</p>
                  <p className="text-editorial-charcoal/60 transition-colors duration-300 hover:text-editorial-charcoal">Current CGPA: 8.33</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - SQL Code Snippet */}
          <div className="lg:col-span-4 animate-slide-in-right">
            <div className="relative group">
              <div className="bg-black p-6 lg:p-8 shadow-2xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:shadow-3xl border-4 border-gray-800 rounded-lg">
                {/* Code Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">SQL</span>
                </div>
                
                {/* SQL Code */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-3 select-none">01</span>
                    <span className="text-white">SELECT</span>
                    <span className="text-white ml-2">name, skills, education</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-3 select-none">02</span>
                    <span className="text-white ml-8">FROM</span>
                    <span className="text-white ml-2">data_analysts</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-3 select-none">03</span>
                    <span className="text-white">WHERE</span>
                    <span className="text-white ml-2">name = 'Sudharshan'</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-3 select-none">04</span>
                    <span className="text-white ml-8">AND skills IN ('Python', 'SQL', 'Power BI')</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-3 select-none">05</span>
                    <span className="text-white ml-8">AND education = 'BCA Data Science'</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-3 select-none">06</span>
                    <span className="text-white ml-8">AND cgpa &gt;= 8.33;</span>
                  </div>
                </div>
                
                {/* Code Footer */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Data Analysis</span>
                    <span>Query executed successfully</span>
                  </div>
                </div>
              </div>
              
              {/* Red Accent */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-editorial-red transition-all duration-700 ease-out group-hover:w-20 group-hover:h-20 group-hover:bg-opacity-80"></div>
            </div>
            
            {/* Two Smaller Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="group">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Creative workspace"
                  className="w-full h-32 object-cover shadow-lg transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl filter grayscale group-hover:brightness-110 border border-editorial-charcoal/20 mb-6 sm:mb-0"
                />
              </div>
              <div className="group">
                <img 
                  src="/code.jpg"
                  alt="Python or SQL code snippet"
                  className="w-full h-32 object-cover shadow-lg transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-xl filter grayscale group-hover:brightness-110 border border-editorial-charcoal/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vertical Watermark */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-center pointer-events-none select-none opacity-10 z-0">
        <span className="text-6xl font-black tracking-widest text-editorial-charcoal uppercase">About</span>
      </div>
    </section>
  );
};

export default AboutSection;
