import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Github, ExternalLink, Bot, Shield, Camera, Star, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "AI-Based Number Plate Detection",
      description: "Advanced computer vision system combining YOLO for object detection, ESRGAN for super-resolution enhancement, and EasyOCR for accurate text extraction. Features real-time processing capabilities and handles various lighting conditions.",
      technologies: ["YOLO", "ESRGAN", "EasyOCR", "Python", "OpenCV", "PyTorch"],
      icon: Camera,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Real-time license plate detection",
        "Super-resolution image enhancement",
        "Multi-language OCR support",
        "95% accuracy in various conditions"
      ]
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning system using ensemble methods including Logistic Regression and Random Forest to identify fraudulent transactions. Implemented advanced feature engineering and data balancing techniques.",
      technologies: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Random Forest", "Logistic Regression"],
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "99.2% accuracy in fraud detection",
        "Real-time transaction monitoring",
        "Advanced feature engineering",
        "Balanced dataset handling"
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
        </div>
        <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
          🚀 Innovative AI/ML solutions showcasing cutting-edge technology and real-world impact
        </p>
      </motion.div>

      {/* Horizontal Projects */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="group relative"
          >
            <div className="glassmorphism rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-[1.02]">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
                
                {/* Floating award badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-full shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                
              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Project Info */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {/* Project Icon */}
                    <div className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800/80 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:border-cyan-400/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className={`group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-lg font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                        <Github className="w-5 h-5 group-hover/btn:animate-spin" />
                        View Code
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </button>
                    </div>
                  </div>

                  {/* Project Visualization */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                    <div className="relative group/visual">
                      <div className={`aspect-square bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <Bot className="w-24 h-24 text-white/90 relative z-10 group-hover/visual:animate-bounce" />
                        
                        {/* Floating elements */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -10, 0],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 2 + i * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="absolute w-2 h-2 bg-white/50 rounded-full"
                            style={{
                              left: `${20 + (i % 4) * 20}%`,
                              top: `${20 + Math.floor(i / 4) * 60}%`,
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/visual:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center pb-6">
                        <Eye className="w-8 h-8 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              </div>
            </motion.div>
          ))}
      </div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-16"
      >
        <div className="glassmorphism p-8 rounded-2xl border border-cyan-500/30 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">🚀 Ready to Collaborate?</h3>
          <p className="text-gray-300 mb-6">
            These projects represent just the beginning. Let's build something amazing together!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-xl font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            Get In Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;