import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    /*{
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Corp',
      description: 'Leading development of cutting-edge web applications using React, Node.js, and cloud technologies.'
    },*/
    // {
    //   year: '2022',
    //   title: 'Full Stack Developer',
    //   company: 'Digital Solutions Inc',
    //   description: 'Developed responsive web applications and RESTful APIs for various client projects.'
    // },
    // {
    //   year: '2020',
    //   title: 'Frontend Developer',
    //   company: 'StartUp Ventures',
    //   description: 'Created interactive user interfaces and implemented modern design systems.'
    // },
    // {
    //   year: '2019',
    //   title: 'Computer Science Graduate',
    //   company: 'University of Technology',
    //   description: 'Bachelor\'s degree in Computer Science with focus on software engineering and web development.'
    // }
  ];

  return (
    <div id="about" className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
            About Me
          </h1>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="glass-effect p-6 rounded-lg silver-border silver-glow-box">
                <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center text-gray-400 overflow-hidden">
                  <img src="/image.jpg" alt="Profile" className="object-cover w-full h-full rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sudharshan</h3>
                <p className="text-gray-300">Aspiring Data Analyst</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect p-6 rounded-lg silver-border silver-glow-box">
                <h3 className="text-2xl font-semibold text-white mb-4">My Story</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                  I'm a final-year BCA Data Science student at B.S. Abdur Rahman Crescent Institute of Science and Technology.
                  </p>
                  <p>
                  My journey into data started with curiosity — I always wanted to know why things happen the way they do. 
                  That curiosity led me to learn tools like Python, SQL, Excel, and Power BI — and how to use them to uncover insights that actually matter.
                  From wrangling raw data to building clean dashboards, I enjoy turning numbers into stories and helping people make better decisions with data. 
                  I'm also exploring data visualization, statistical thinking, and real-world project experience to strengthen my problem-solving skills.
                  </p>
                  <p>
                  Right now, I'm actively building my portfolio with hands-on projects that combine code, logic, and business thinking — aiming to break into the analytics industry with confidence and clarity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          {/**
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience Timeline</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="relative"
                >
                  <div className="glass-effect p-6 rounded-lg silver-border silver-glow-box">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-gray-300">{item.company}</p>
                      </div>
                      <span className="text-gray-400 font-mono text-sm mt-2 md:mt-0">{item.year}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          */}

          {/* Resume Link */}
          {/**
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-12"
          >
            <a
              href="#"
              className="inline-block text-white font-medium hover:text-gray-300 transition-colors relative"
            >
              <span className="border-b-2 border-white hover:border-gray-300 pb-1">
                View Resume
              </span>
            </a>
          </motion.div>
          */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
