import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Lightbulb, Zap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glassmorphism p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-sm opacity-75"></div>
                <img 
                  src="https://res.cloudinary.com/dvadfv5zz/image/upload/v1758367823/273A0275_burn5j.jpg" 
                  alt="Pavan Ayithireddy" 
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate AI/ML Developer with expertise in Python, machine learning algorithms, 
                and data analysis. Currently pursuing B.Tech in AI/ML at KIET, with hands-on 
                experience in computer vision, natural language processing, and predictive modeling. 
                Dedicated to creating innovative solutions that leverage artificial intelligence 
                to solve real-world problems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          {[
            {
              icon: Target,
              title: "Mission",
              description: "To develop cutting-edge AI solutions that make a meaningful impact on society and business."
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Always exploring new technologies and methodologies in machine learning and data science."
            },
            {
              icon: Zap,
              title: "Expertise",
              description: "Specialized in computer vision, NLP, and predictive analytics with practical industry experience."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="glassmorphism p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;