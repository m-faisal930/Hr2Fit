import React from 'react';
import { UserCheck, UserPlus, FileText, Award, LifeBuoy, Sparkles, Target, Shield, Zap, TrendingUp, Users, Globe } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';


const services = [
  {
    title: 'AI-Powered Recruitment',
    desc: 'Smart candidate matching with 95% accuracy using advanced algorithms.',
    icon: Target,
    color: '#3B82F6', // blue
  },
  {
    title: 'Performance Analytics',
    desc: 'Real-time insights and predictive analytics for better decision making.',
    icon: TrendingUp,
    color: '#2563EB', // blue-600
  },
  {
    title: 'Compliance Automation',
    desc: 'Automated legal compliance and risk management with AI monitoring.',
    icon: Shield,
    color: '#1D4ED8', // blue-700
  },
  {
    title: 'Employee Engagement',
    desc: 'Boost productivity through intelligent employee relations management.',
    icon: Users,
    color: '#1E40AF', // blue-800
  },
  {
    title: 'Smart Payroll System',
    desc: 'AI-driven payroll processing with automated tax calculations.',
    icon: Zap,
    color: '#1E3A8A', // blue-900
  },
  {
    title: 'Global HR Solutions',
    desc: 'Comprehensive HR management for international business operations.',
    icon: Globe,
    color: '#60A5FA', // blue-400
  },
];


// const services = [
//   {
//     title: 'Talent Acquisition',
//     desc: 'Finding top talent matching your needs with precision and speed.',
//     icon: UserCheck,
//     color: '#3B82F6', // blue
//   },
//   {
//     title: 'Recruitment Outsourcing',
//     desc: 'Reduce turnover and boost ROI by outsourcing hiring to our expert team.',
//     icon: UserPlus,
//     color: '#10B981', // emerald
//   },
//   {
//     title: 'Staff Contracting',
//     desc: 'Flexible staffing solutions on spec and on time for every project.',
//     icon: Award,
//     color: '#F59E0B', // amber
//   },
//   {
//     title: 'Employee Branding',
//     desc: 'Create a positive image of your company to attract top talent.',
//     icon: Award,
//     color: '#8B5CF6', // violet
//   },
//   {
//     title: 'Resume Writing',
//     desc: 'Professional resume writing services to help your candidates stand out.',
//     icon: FileText,
//     color: '#EC4899', // pink
//   },
//   {
//     title: 'HR Consultancy Services',
//     desc: 'Expert HR guidance to save you time, effort, and reduce risk.',
//     icon: LifeBuoy,
//     color: '#06B6D4', // cyan
//   },
// ];

const ServiceCard = ({ title, desc, icon: Icon, color, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { colors } = useTheme();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.05,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, y: -8 },
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 15 },
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative ${colors.cardBg} rounded-3xl ${colors.cardBorder} p-10 flex flex-col items-center text-center overflow-hidden backdrop-blur-xl border-2 border-blue-500/20`}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Enhanced gradient background effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
        }}
      />

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -30],
              x: [0, (Math.random() - 0.5) * 30],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Enhanced animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none"
        variants={{
          hover: { borderColor: color },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Enhanced icon container */}
      <motion.div className="relative mb-10" variants={iconVariants}>
        <div
          className="relative rounded-3xl p-10 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110"
          style={{ 
            backgroundColor: `${color}20`,
            background: `linear-gradient(135deg, ${color}30, ${color}15)`
          }}
        >
          <Icon className="w-16 h-16" style={{ color }} />
          
          {/* Enhanced 3D Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Enhanced animated border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-current group-hover:border-opacity-40 transition-all duration-300" />
          
          {/* Enhanced sparkle effect */}
          <motion.div
            className="absolute -top-3 -right-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="w-6 h-6" style={{ color }} />
          </motion.div>
        </div>
        
        {/* Enhanced glow effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
          style={{
            boxShadow: `0 0 60px 20px ${color}50`,
            filter: 'blur(20px)',
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Enhanced floating particles around icon */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: color,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, -30],
                x: [0, (Math.random() - 0.5) * 25],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </motion.div>

      <h3 className={`font-palo text-2xl font-bold ${colors.textPrimary} mb-4`}>
        {title}
      </h3>
      <p className={`${colors.textSecondary} text-base flex-grow font-vastago leading-relaxed`}>{desc}</p>

      <motion.button
        className="mt-8 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <ArrowRight className="w-5 h-5 text-white" />
      </motion.button>
    </motion.div>
  );
};

export default function ServicesSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { colors } = useTheme();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section
      id="services"
      className={`${colors.bgSecondary} py-24 relative overflow-hidden`}
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-15">
        <motion.div 
          className="absolute top-20 left-10 w-60 h-60 rounded-full bg-blue-500 filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500 filter blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-400 filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className={`font-palo text-5xl sm:text-6xl lg:text-7xl font-bold ${colors.textPrimary} text-center mb-20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
            AI-Powered Solutions
          </span>
          <div className="w-60 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
        </motion.h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {services.map((service, idx) => (
            <ServiceCard key={service.title} index={idx} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}