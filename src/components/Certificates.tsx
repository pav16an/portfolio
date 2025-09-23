import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certificates = [
    {
      title: "IBM Data Fundamentals",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive course covering data analysis, visualization, and fundamental concepts in data science.",
      skills: ["Data Analysis", "Data Visualization", "Statistical Methods"],
      gradient: "from-blue-600 to-blue-800",
      credentialId: "IBM-DF-2024-001"
    },
    {
      title: "Python for Data Science",
      issuer: "Cognitive Classes",
      date: "2024",
      description: "Advanced Python programming techniques for data science applications including pandas, numpy, and scikit-learn.",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      gradient: "from-green-600 to-green-800",
      credentialId: "COURSERA-PDS-2024"
    },
    {
      title: "FastTrack Python",
      issuer: "iNeuron",
      date: "2023",
      description: "Intensive Python programming bootcamp covering object-oriented programming, web development, and automation.",
      skills: ["Python Programming", "OOP", "Web Development", "Automation"],
      gradient: "from-purple-600 to-purple-800",
      credentialId: "TA-FTP-2023-089"
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
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
          Certifications & Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 80, rotateY: -15 }}
            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="group relative"
          >
            <div 
              className="glassmorphism rounded-2xl overflow-hidden border border-gray-700/50 hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Certificate Header */}
              <div className={`relative p-6 bg-gradient-to-r ${cert.gradient} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 group-hover:animate-bounce" />
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm opacity-90 font-medium">{cert.issuer}</p>
              </div>

              {/* Certificate Content */}
              <div className="relative z-10 p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-semibold text-sm mb-2">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800/80 border border-gray-600/50 rounded-md text-xs text-gray-300 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-gray-500 mb-4 font-mono">
                  ID: {cert.credentialId}
                </div>

                {/* Action Button */}
                {cert.title === "IBM Data Fundamentals" ? (
                  <a href="https://www.pdffiller.com/s/kOeq4AyCS" target="_blank" rel="noopener noreferrer">
                    <button className="group/btn w-full flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-400 rounded-lg text-gray-300 hover:text-cyan-400 text-sm font-medium transition-all duration-300">
                      <ExternalLink className="w-4 h-4 group-hover/btn:animate-pulse" />
                      View Certificate
                    </button>
                  </a>
                ) : cert.title === "Python for Data Science" ? (
                  <a href="https://www.pdffiller.com/s/a53-Z6Cj" target="_blank" rel="noopener noreferrer">
                    <button className="group/btn w-full flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-400 rounded-lg text-gray-300 hover:text-cyan-400 text-sm font-medium transition-all duration-300">
                      <ExternalLink className="w-4 h-4 group-hover/btn:animate-pulse" />
                      View Certificate
                    </button>
                  </a>
                ) : cert.title === "FastTrack Python" ? (
                  <a href="https://www.pdffiller.com/s/PzbQNPl6" target="_blank" rel="noopener noreferrer">
                    <button className="group/btn w-full flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-400 rounded-lg text-gray-300 hover:text-cyan-400 text-sm font-medium transition-all duration-300">
                      <ExternalLink className="w-4 h-4 group-hover/btn:animate-pulse" />
                      View Certificate
                    </button>
                  </a>
                ) : (
                  <button className="group/btn w-full flex items-center justify-center gap-2 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-cyan-400 rounded-lg text-gray-300 hover:text-cyan-400 text-sm font-medium transition-all duration-300">
                    <ExternalLink className="w-4 h-4 group-hover/btn:animate-pulse" />
                    View Certificate
                  </button>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                <div className={`w-full h-full bg-gradient-to-br ${cert.gradient} rounded-full animate-pulse`}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Achievement Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 glassmorphism rounded-full border border-orange-400/30">
          <Award className="w-5 h-5 text-orange-400 animate-pulse" />
          <span className="text-gray-300 font-medium">
            Continuously learning and growing in AI/ML domain
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;