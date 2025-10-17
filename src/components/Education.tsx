import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, BookOpen, Trophy, Star } from 'lucide-react';


const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-6 max-w-7xl mx-auto dark">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-600 mx-auto"></div>
      </motion.div>

      <div className="space-y-12 max-w-6xl mx-auto">
        {/* B.Tech Education */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="group relative">
          <div className="glassmorphism rounded-3xl overflow-hidden border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-500 transform hover:scale-[1.02]">
            
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Header Section */}
            <div className="relative p-8 md:p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 group-hover:animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1">
                      Bachelor of Technology
                    </h3>
                    <p className="text-xl text-indigo-100 font-medium">
                      Computer Science and Engineering in AI & ML
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-indigo-100">
                  <Star className="w-6 h-6 fill-current" />
                  <span className="text-2xl font-bold">7.52</span>
                  <span className="text-sm">CGPA</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-indigo-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Kakinada Institute of Engineering and Technology-II</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">2021 - 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-medium">Kakinada, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Core Subjects */}
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-bold text-cyan-400 mb-4">
                    <BookOpen className="w-6 h-6" />
                    Core Subjects
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Machine Learning Algorithms",
                      "Deep Learning & Neural Networks",
                      "Computer Vision",
                      "Natural Language Processing",
                      "Data Structures & Algorithms",
                      "Statistical Methods",
                      "Python Programming",
                      "Database Management Systems"
                    ].map((subject, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
                        {subject}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements & Activities */}
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-bold text-purple-400 mb-4">
                    <Trophy className="w-6 h-6" />
                    Achievements & Activities
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Academic Excellence",
                        description: "Maintaining 7.52 CGPA throughout the program",
                        icon: Star
                      },
                      {
                        title: "Research Projects",
                        description: "Led multiple AI/ML research projects with practical applications",
                        icon: BookOpen
                      },
                      {
                        title: "Sports Champion",
                        description: "Active participant in Kabaddi and Volleyball competitions",
                        icon: Trophy
                      },
                      {
                        title: "Technical Leadership",
                        description: "Member of AI/ML club and organizing technical events",
                        icon: GraduationCap
                      }
                    ].map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                        className="glassmorphism p-4 rounded-lg border border-gray-700/30 hover:border-purple-400/50 transition-all duration-300 group/item"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                            <achievement.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-white mb-1 group-hover/item:text-purple-400 transition-colors duration-300">
                              {achievement.title}
                            </h5>
                            <p className="text-sm text-gray-400">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              {/* CGPA Display for Mobile */}
              <div className="md:hidden mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-semibold">
                  <Star className="w-5 h-5 fill-current" />
                  <span>Current CGPA: 7.52</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-20 h-20 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-pulse"></div>
            </div>
          </div>
          </div>
        </motion.div>
        
        {/* Intermediate Education */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <div className="group relative">
            <div className="glassmorphism rounded-3xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 transform hover:scale-[1.02]">
              
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Header Section */}
              <div className="relative p-8 md:p-12 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-10 h-10 group-hover:animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-1">
                        Intermediate (12th Grade)
                      </h3>
                      <p className="text-xl text-green-100 font-medium">
                        Mathematics, Physics, Chemistry (MPC)
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-green-100">
                    <Star className="w-6 h-6 fill-current" />
                    <span className="text-2xl font-bold">86.5%</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-green-100">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">Sri Chaitanya Junior College</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">2019 - 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    <span className="font-medium">86.5% Aggregate</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Core Subjects */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xl font-bold text-green-400 mb-4">
                      <BookOpen className="w-6 h-6" />
                      Core Subjects
                    </h4>
                    <div className="space-y-2">
                      {[
                        "Advanced Mathematics",
                        "Physics - Mechanics & Thermodynamics",
                        "Chemistry - Organic & Inorganic",
                        "English Communication",
                        "Computer Science Fundamentals"
                      ].map((subject, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"></div>
                          {subject}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xl font-bold text-teal-400 mb-4">
                      <Trophy className="w-6 h-6" />
                      Achievements
                    </h4>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Academic Excellence",
                          description: "Achieved 86.5% in MPC stream with strong foundation in sciences",
                          icon: Star
                        },
                        {
                          title: "Science Foundation",
                          description: "Built strong analytical and problem-solving skills in STEM subjects",
                          icon: BookOpen
                        }
                      ].map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                          className="glassmorphism p-4 rounded-lg border border-gray-700/30 hover:border-teal-400/50 transition-all duration-300 group/item"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg group-hover/item:scale-110 transition-transform duration-300">
                              <achievement.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-white mb-1 group-hover/item:text-teal-400 transition-colors duration-300">
                                {achievement.title}
                              </h5>
                              <p className="text-sm text-gray-400">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Percentage Display for Mobile */}
                <div className="md:hidden mt-8 text-center">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full text-white font-semibold">
                    <Star className="w-5 h-5 fill-current" />
                    <span>Percentage: 86.5%</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;