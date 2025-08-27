
import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, TrendingUp, Shield, Zap, Sparkles, Target, Award, Globe, Rocket, Brain, Cpu, Database, Network, ChevronRight, CheckCircle, ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { colors, isDarkMode } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Full Cycle Recruiting",
      description: "Complete end-to-end recruitment and hiring solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Human Resource Management",
      description: "Comprehensive HR operations and workforce management",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Trainings",
      description: "Professional development and skills enhancement programs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Payroll Servicing",
      description: "Complete payroll processing and management services",
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className={`${colors.bgPrimary} overflow-hidden relative min-h-screen flex flex-col`}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Gradient Orbs with Enhanced Effects */}
        <motion.div
          className={`absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl ${
            isDarkMode ? 'bg-blue-500/30' : 'bg-blue-500/20'
          }`}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 80, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={`absolute top-40 right-20 w-[600px] h-[600px] rounded-full blur-3xl ${
            isDarkMode ? 'bg-purple-500/25' : 'bg-purple-500/15'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
            y: [0, -50, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className={`absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl ${
            isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-500/10'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Enhanced Animated Grid Pattern */}
        <div className={`absolute inset-0 opacity-15 ${isDarkMode ? 'opacity-8' : 'opacity-5'}`}>
          <motion.div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${isDarkMode ? '#3B82F6' : '#1E40AF'} 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px', '0px 0px'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}

        {/* Enhanced Futuristic Energy Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{
                top: `${15 + i * 20}%`,
                left: '0%',
                right: '0%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                delay: i * 1.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* New: Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute w-8 h-8 border-2 border-blue-500/30 rounded-lg ${
              isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <Navbar />

      {/* Main Hero Content */}
      <motion.div
        ref={ref}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center py-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-center w-full">
          
          {/* Left Content */}
          <motion.div className="space-y-3 sm:space-y-4 md:space-y-5" variants={itemVariants}>
            {/* Enhanced Animated Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-blue-600 dark:text-blue-400 font-bold text-xs backdrop-blur-xl shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              <span className="font-palo">Trusted by 500+ Companies</span>
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            {/* Enhanced Main Heading with Typewriter Effect */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-palo"
              variants={itemVariants}
            >
              <span className={`${colors.textPrimary}`}>Human Resource</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Outsourcing
              </span>
              <br />
              <span className={`${colors.textPrimary}`}>for small to</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                medium size businesses
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              className={`text-sm sm:text-base md:text-lg ${colors.textSecondary} leading-relaxed max-w-xl font-vastago`}
              variants={itemVariants}
            >
              Streamline your HR operations with our comprehensive outsourcing solutions. 
              From recruitment to compliance, we provide tailored HR services that scale 
              with your business growth and needs.
            </motion.p>

            {/* Enhanced Interactive CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <Link to="/contact">
                <motion.div 
                  className="group relative inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base md:text-lg rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 font-palo cursor-pointer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                </motion.div>
              </Link>
              
              <Link to="/about">
                <motion.div 
                  className="group inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border-3 border-blue-500/40 hover:border-blue-400 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold text-sm sm:text-base md:text-lg rounded-3xl transition-all duration-300 backdrop-blur-xl font-palo cursor-pointer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                  <span>Learn More</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Enhanced Interactive Stats */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              {[
                { number: "500+", label: "Happy Clients", icon: Users },
                { number: "98%", label: "Success Rate", icon: Award },
                { number: "24/7", label: "Support", icon: Globe }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center mb-1">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500 mr-2" />
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold ${colors.textPrimary} font-palo`}>{stat.number}</div>
                  </div>
                  <div className={`text-xs sm:text-sm ${colors.textSecondary} font-vastago`}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Interactive 3D Dashboard */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate="animate"
              variants={floatingVariants}
            >
              {/* Enhanced Main Interactive Card */}
              <div className={`relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl border-2 border-blue-500/30 rounded-3xl p-3 sm:p-4 md:p-6 shadow-2xl ${
                isDarkMode ? 'bg-opacity-30' : 'bg-opacity-15'
              }`}>
                
                {/* Enhanced Card Header with Live Status */}
                <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <motion.div 
                      className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className={`font-bold text-base sm:text-lg ${colors.textPrimary} font-palo`}>HR Services Dashboard</span>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    {['bg-blue-400', 'bg-purple-400', 'bg-cyan-400'].map((color, i) => (
                      <motion.div
                        key={i}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${color}`}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>

                {/* Enhanced Interactive Feature Showcase */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Enhanced Feature Cards */}
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className={`relative p-2.5 sm:p-3 md:p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                          activeFeature === index 
                            ? 'border-blue-500 bg-blue-500/30 shadow-xl' 
                            : 'border-blue-500/30 bg-blue-500/10'
                        }`}
                        onClick={() => setActiveFeature(index)}
                        whileHover={{ scale: 1.03, y: -2 }}
                        animate={{
                          scale: activeFeature === index ? 1.03 : 1,
                        }}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                          <div className={`p-1.5 sm:p-2 md:p-3 rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                            <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <div>
                            <h3 className={`font-bold text-xs sm:text-sm md:text-base ${colors.textPrimary} font-palo`}>{feature.title}</h3>
                            <p className={`text-xs sm:text-sm ${colors.textSecondary} font-vastago`}>{feature.description}</p>
                          </div>
                        </div>
                        
                        {/* Enhanced Animated Progress Bar */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl"
                          initial={{ width: 0 }}
                          animate={{ width: activeFeature === index ? '100%' : '0%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Real-time Analytics */}
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-3 sm:p-4 md:p-5 border-2 border-blue-500/30">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                      <span className={`text-xs sm:text-sm md:text-base font-medium ${colors.textSecondary} font-vastago`}>Service Performance</span>
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-500" />
                    </div>
                    
                    {/* Enhanced Animated Chart */}
                    <div className="flex items-end gap-1 sm:gap-1.5 md:gap-2 h-8 sm:h-12 md:h-14">
                      {[60, 80, 45, 90, 75, 85, 95].map((height, index) => (
                        <motion.div
                          key={index}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                        />
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 sm:mt-3 md:mt-4">
                      <span className={`text-xs sm:text-sm ${colors.textSecondary} font-vastago`}>Response Time</span>
                      <span className="text-xs sm:text-sm md:text-base font-bold text-green-400 font-palo">24hrs</span>
                    </div>
                  </div>

                  {/* Enhanced Live Activity Feed */}
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                    {[
                      { text: "New candidate profile reviewed", color: "bg-green-400", delay: 0 },
                      { text: "Compliance audit completed", color: "bg-blue-400", delay: 0.1 },
                      { text: "Performance review scheduled", color: "bg-purple-400", delay: 0.2 }
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-xs sm:text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: activity.delay }}
                      >
                        <motion.div 
                          className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full ${activity.color}`}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: index * 0.3 }}
                        />
                        <span className={`${colors.textSecondary} font-vastago`}>{activity.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Floating 3D Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl"
                animate={{
                  rotate: [0, 8, -8, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            
              
              {/* Enhanced Pulse Rings */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-blue-500/30"
                variants={pulseVariants}
                animate="animate"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Contact Info Bar - Outside Viewport */}
      <motion.div
        className="relative z-20 mx-4 sm:mx-8 lg:mx-auto max-w-7xl mb-6"
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        <div className={`bg-gradient-to-r from-blue-600/20 to-purple-600/20  border-2 border-blue-500/30 rounded-3xl px-6 pt-6 pb-3 sm:p-8 ${colors.bgSecondary} shadow-xl`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                title: "Visit Our Office",
                subtitle: "896 Main Street, Walpole MA 02081"
              },
              {
                icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
                title: "Call Us Today",
                subtitle: "(781) 436-5399"
              },
              {
                icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                title: "Email Us",
                subtitle: "info@hr4yourbusiness.com"
              }
            ].map((contact, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 sm:gap-5 group cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl flex items-center justify-center group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-all duration-300 shadow-lg">
                  <svg width="24" height="24" sm:width="28" sm:height="28" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                    <path d={contact.icon} fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className={`font-bold text-lg sm:text-xl ${colors.textPrimary} font-palo`}>{contact.title}</h3>
                  <p className={`text-sm sm:text-base ${colors.textSecondary} font-vastago`}>{contact.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;