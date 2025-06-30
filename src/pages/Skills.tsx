import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const technicalSkills = [
    'HTML',
    'CSS',
    'Python',
    'SQL',
    'Excel',
    'Power BI'
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Time Management',
    'Adaptability'
  ];

  return (
    <div className="min-h-screen pt-20 pb-12" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
            Skills & Technologies
          </h1>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="glass-effect silver-flash-bg p-8 md:p-16 rounded-lg silver-border silver-glow-box"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
                Technical Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {technicalSkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group flex items-center justify-center px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="text-gray-300 text-base md:text-lg text-center font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="glass-effect silver-flash-bg p-8 md:p-16 rounded-lg silver-border silver-glow-box"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
                Soft Skills
              </h2>
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {softSkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group flex items-center justify-center px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="text-gray-300 text-base md:text-lg text-center font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
