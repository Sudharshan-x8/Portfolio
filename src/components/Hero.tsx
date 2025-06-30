import React from 'react';
import { motion } from 'framer-motion';
import DataCube from './DataCube';
import ParticlesBackground from './ParticlesBackground';
import SparklesBackground from './SparklesBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      <SparklesBackground />
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
                className="text-lg text-gray-300 font-light"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: 'easeInOut' }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                <span className="silver-glow-text">Sudharshan</span>{' '}
                <span className="silver-glow-text">S</span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: 'easeInOut' }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 silver-glow-text"
              >
                Aspiring Data Analyst
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6, ease: 'easeInOut' }}
                className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed"
              >
               I transform complex data into clear, 
               actionable insights through thoughtful analysis and storytelling.
              </motion.p>
            </div>
          </motion.div>

          {/* 3D Cube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeInOut' }}
            className="relative h-48 md:h-96 lg:h-[500px]"
          >
            {/* 3D Data Cube */}
            <div
              className="w-full h-full animate-float"
              style={{ willChange: 'transform', transform: 'translateZ(0)' }}
            >
              <DataCube />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
