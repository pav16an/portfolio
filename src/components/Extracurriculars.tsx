import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Target, Zap, Medal, Crown } from 'lucide-react';

const Extracurriculars: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const activities = [
    {
      category: "Sports Excellence",
      items: [
        {
          title: "Kabaddi Championship",
          description: "Regional champion in inter-college kabaddi tournaments. Led team to victory with strategic gameplay and leadership.",
          achievement: "1st Place - Regional Tournament",
          icon: Trophy,
          gradient: "from-yellow-500 to-orange-600",
          stats: "15+ matches won"
        },
        {
          title: "Volleyball Team Captain",
          description: "Captain of college volleyball team, organizing training sessions and leading team in various competitions.",
          achievement: "Team Captain & Top Performer",
          icon: Medal,
          gradient: "from-blue-500 to-purple-600",
          stats: "3 years leadership"
        }
      ]
    },
    {
      category: "Technical Competitions",
      items: [
        {
          title: "Hackathon Leaderboards",
          description: "Consistent top performer in AI/ML hackathons with innovative solutions and technical excellence.",
          achievement: "Top 5 in Multiple Hackathons",
          icon: Crown,
          gradient: "from-green-500 to-teal-600",
          stats: "10+ hackathons participated"
        },
        {
          title: "Coding Competitions",
          description: "Active participant in competitive programming contests, specializing in algorithmic problem solving.",
          achievement: "Regional Finalist",
          icon: Zap,
          gradient: "from-purple-500 to-pink-600",
          stats: "500+ problems solved"
        }
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
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
          Beyond Academics
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Excellence in sports, leadership, and technical competitions that shape character and drive innovation
        </p>
      </motion.div>

      <div className="space-y-12">
        {activities.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="space-y-8"
          >
            {/* Category Header */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {category.category}
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
            </div>

            {/* Activity Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: categoryIndex * 0.2 + index * 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="group relative"
                >
                  <div className="glassmorphism rounded-2xl overflow-hidden border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-[1.03] hover:rotate-1">
                    
                    {/* Glowing background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Header with Icon */}
                    <div className={`relative p-6 bg-gradient-to-r ${activity.gradient} text-white`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 bg-white/20 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                          <activity.icon className="w-8 h-8 group-hover:animate-bounce" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm opacity-90 mb-1">Achievement</div>
                          <div className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                            {activity.stats}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                        {activity.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4" />
                        <span className="font-medium opacity-90">{activity.achievement}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {activity.description}
                      </p>

                      {/* Achievement Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${activity.gradient} rounded-full text-white text-sm font-semibold group-hover:scale-105 transition-transform duration-300`}>
                        <Medal className="w-4 h-4" />
                        {activity.achievement}
                      </div>
                    </div>

                    {/* Floating Achievement Icons */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <div className={`w-12 h-12 bg-gradient-to-br ${activity.gradient} rounded-full animate-pulse`}></div>
                    </div>
                    
                    {/* Bottom decorative element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: "Sports Medals", value: "15+", icon: Medal },
          { label: "Team Leadership", value: "3 Years", icon: Users },
          { label: "Hackathons", value: "10+", icon: Zap },
          { label: "Competitions", value: "25+", icon: Trophy }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            className="glassmorphism p-4 rounded-xl border border-gray-700/30 text-center group hover:border-yellow-400/50 transition-all duration-300"
          >
            <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <stat.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Extracurriculars;