import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'sudharshan08012006@gmail.com',
      href: 'mailto:sudharshan08012006@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 8807231974',
      href: 'tel:+918807231974'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sudharshan-x8',
      icon: '/github.png'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shan8/',
      icon: '/linkedin2.png'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect silver-flash-bg w-full p-4 md:p-8 rounded-lg silver-border mb-4 md:mb-0 silver-glow-box"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Info</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors group"
                  >
                    <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-gray-400 text-sm">{method.label}</p>
                      <p className="text-white font-medium break-all">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-effect silver-flash-bg w-full p-4 md:p-8 rounded-lg silver-border silver-glow-box"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Find Me Online</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors border border-gray-700">
                      <img
                        src={link.icon}
                        alt={link.name + ' icon'}
                        className="w-6 h-6 group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors mt-2">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
                
                {/* View Resume Link */}
                <motion.a
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 group hover:scale-105"
                >
                  <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors border border-gray-700">
                    <img
                      src="/resume.png"
                      alt="Resume"
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors mt-2">
                    Resume
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          {/**
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-effect silver-flash-bg p-8 rounded-lg silver-border silver-glow-box"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Start a Project?
            </h2>
            <p className="text-gray-300 mb-6">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:sudharshan08012006@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect silver-border px-8 py-3 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Send Email
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-500 px-8 py-3 text-gray-300 font-medium hover:border-white hover:text-white transition-all duration-300"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
          */}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
