import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      role: "AI/ML Intern",
      company: "Feynn Labs",
      location: "Remote",
      duration: "June 2024 - August 2024",
      description: "Developed machine learning models for predictive analytics and worked on computer vision projects using TensorFlow and PyTorch.",
      achievements: [
        "Implemented deep learning models with 95% accuracy",
        "Optimized existing ML pipelines reducing processing time by 40%",
        "Collaborated with team of 5 developers on AI research projects"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      role: "Data Science Intern",
      company: "Cognifyz Technologies",
      location: "Remote",
      duration: "May 2024 - July 2024",
      description: "Focused on data analysis, visualization, and building predictive models for business intelligence solutions.",
      achievements: [
        "Created interactive dashboards using Python and Tableau",
        "Performed statistical analysis on large datasets (1M+ records)",
        "Developed automated reporting systems for stakeholders"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      role: "Research Assistant",
      company: "IIIT (Indian Institute of Information Technology)",
      location: "Hybrid",
      duration: "March 2024 - May 2024",
      description: "Conducted research in natural language processing and contributed to academic publications in AI/ML domain.",
      achievements: [
        "Co-authored research paper on NLP applications",
        "Developed novel text classification algorithms",
        "Presented findings at university research symposium"
      ],
      gradient: "from-purple-500 to-pink-600"
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
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent mb-4">
          Professional Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-gray-900 z-10">
              <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glassmorphism p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                {/* Glowing background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${experience.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Company Icon */}
                  <div className={`inline-flex p-3 bg-gradient-to-r ${experience.gradient} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {experience.role}
                  </h3>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">
                    {experience.company}
                  </h4>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${experience.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;