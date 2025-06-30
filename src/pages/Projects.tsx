import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Insights',
      description: 'Created a Power BI dashboard with DAX-driven insights to explore chocolate sales trends and performance metrics.',
      tech: ['Poweri Bi'],
      github: 'https://github.com/Sudharshan-x8/Chocolate-SalesDashboard',
      live: 'https://app.powerbi.com/reportEmbed?reportId=17d4ce0d-fafd-4450-be1f-e9bccb6bc5f6&autoAuth=true&ctid=2bf33822-97d4-4084-be41-3efd59ceadd4',
      image: '/DashboardImage.png'
    },
    {
      title: 'Data Analysis Using SQL',
      description: 'Analyzed raw data from CSV files using SQL Server to uncover key trends, performance metrics, and business insights.Transformed the results into a clean, visual dashboard for better understanding and decision-making.',
      tech: ['SQL Server','Excel','Power BI'],
      github: 'https://github.com/Sudharshan-x8/SQL_Data_Analysis',
      live: '#',
      image: 'bg-gradient-to-br from-green-900 to-teal-900'
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'Modern weather application with location-based forecasts, interactive maps, weather alerts, and responsive design for all devices.',
    //   tech: ['React', 'OpenWeather API', 'Chart.js', 'Styled Components'],
    //   github: '#',
    //   live: '#',
    //   image: 'bg-gradient-to-br from-orange-900 to-red-900'
    // },
    // {
    //   title: 'Social Media Analytics',
    //   description: 'Analytics dashboard for social media metrics with data visualization, trend analysis, automated reporting, and API integrations.',
    //   tech: ['Vue.js', 'Python', 'FastAPI', 'D3.js', 'Redis'],
    //   github: '#',
    //   live: '#',
    //   image: 'bg-gradient-to-br from-purple-900 to-pink-900'
    // },
    // {
    //   title: 'AI Chat Interface',
    //   description: 'Modern chat interface with AI integration, real-time messaging, context awareness, and customizable conversation flows.',
    //   tech: ['React', 'OpenAI API', 'WebSocket', 'Tailwind CSS'],
    //   github: '#',
    //   live: '#',
    //   image: 'bg-gradient-to-br from-indigo-900 to-blue-900'
    // },
    // {
    //   title: 'Portfolio Website',
    //   description: 'Ultra-modern portfolio with 3D animations, particle effects, responsive design, and optimized performance for all devices.',
    //   tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    //   github: '#',
    //   live: '#',
    //   image: 'bg-gradient-to-br from-gray-900 to-black'
    // }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
            Featured Projects
          </h1>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Projects that highlight my journey through data, design, and building smart, meaningful solutions with modern tools
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeInOut' }}
                className="group"
              >
                <div className="glass-effect rounded-lg overflow-hidden silver-border card-hover h-full flex flex-col silver-glow-box">
                  {/* Project Image/Preview */}
                  {project.image.startsWith('/') ? (
                    <div className="h-48 w-full bg-black flex items-center justify-center overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  ) : (
                    <div className={`h-48 ${project.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-20">
                          💻
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex-1 text-center py-2 px-4 border border-gray-600 text-gray-300 rounded hover:border-white hover:text-white transition-colors text-sm"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live}
                        className="flex-1 text-center py-2 px-4 bg-white text-black rounded hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Resume Link - Desktop Only */}
          {/**
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16 hidden md:block"
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

          {/* Call to Action */}
          {/**
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-300 mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <button className="glass-effect silver-border px-8 py-3 text-white font-medium hover:bg-white hover:text-black transition-all duration-300">
              Get In Touch
            </button>
          </motion.div>
          */}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
