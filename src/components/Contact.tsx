import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MapPin, Bot, Send, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ayithireddypavan8466@gmail.com",
      href: "mailto:ayithireddypavan8466@gmail.com",
      gradient: "from-red-500 to-pink-600",
      description: "Let's discuss opportunities and collaborations"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pavan-ayithireddy-67a487245",
      href: "https://www.linkedin.com/in/pavan-ayithireddy-67a487245/",
      gradient: "from-blue-600 to-blue-800",
      description: "Connect for professional networking"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pav16an",
      href: "https://github.com/pav16an",
      gradient: "from-gray-600 to-gray-800",
      description: "Explore my projects and contributions"
    },
    {
      icon: MapPin,
      label: "Phone",
      value: "+91 9603698176",
      href: "tel:+919603698176",
      gradient: "from-green-500 to-emerald-600",
      description: "Available for calls and discussions"
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
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to build something amazing together? I'm always open to discussing new opportunities, 
          innovative projects, and collaborations in AI/ML development.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Animated Robot Section */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center lg:text-left"
        >
          <div className="relative inline-block mb-8">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse scale-110"></div>
            
            {/* Robot Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              <Bot className="w-32 h-32 md:w-40 md:h-40 text-cyan-400 filter drop-shadow-2xl" />
            </motion.div>

            {/* Floating particles around robot */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                style={{
                  left: `${20 + (i % 4) * 20}%`,
                  top: `${20 + Math.floor(i / 4) * 60}%`,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              AI Assistant Ready to Help! 🤖
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Just like this friendly AI robot, I'm here to assist with your next big project. 
              Whether it's machine learning solutions, data analysis, or innovative AI applications, 
              let's create something extraordinary together!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <a
                href={contact.href}
                target={contact.label !== "Email" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="glassmorphism p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer">
                  
                  {/* Glowing background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 bg-gradient-to-r ${contact.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {contact.label}
                        </h4>
                        {contact.label !== "Location" && (
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                        )}
                      </div>
                      
                      <p className="text-cyan-300 font-medium mb-2 break-all">
                        {contact.value}
                      </p>
                      
                      <p className="text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-6"
          >
            <button className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-2xl font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <Send className="w-5 h-5 group-hover:animate-pulse" />
              <span>Send a Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-20 pt-8 border-t border-gray-800 text-center"
      >
        <p className="text-gray-400 mb-4">
          © 2024 Pavan Ayithireddy. Crafted with passion for AI/ML innovation.
        </p>
        <div className="flex justify-center items-center gap-2 text-cyan-400">
          <Bot className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-medium">
            Powered by artificial intelligence and human creativity
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;