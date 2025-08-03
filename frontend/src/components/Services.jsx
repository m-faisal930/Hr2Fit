import React from 'react';
import { UserCheck, UserPlus, FileText, Award, LifeBuoy } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';


const services = [
  {
    title: 'Compliance & Risk Management',
    desc: 'Ensure legal compliance and minimize risk with expert HR guidance.',
    icon: FileText,
    color: '#3B82F6', // blue
  },
  {
    title: 'Compensation & Benefits',
    desc: 'Strategically manage employee benefits to retain top talent.',
    icon: Award,
    color: '#10B981', // emerald
  },
  {
    title: 'Employee Relations',
    desc: 'Improve workplace productivity through sound employee relations.',
    icon: UserCheck,
    color: '#F59E0B', // amber
  },
  {
    title: 'Recruiting & Staffing',
    desc: 'Scalable recruitment solutions to match your business growth.',
    icon: UserPlus,
    color: '#8B5CF6', // violet
  },
  {
    title: 'Payroll Administration',
    desc: 'Accurate, efficient payroll services customized to your needs.',
    icon: FileText,
    color: '#EC4899', // pink
  },
  {
    title: 'Employee Handbook Creation',
    desc: 'Craft professional handbooks to promote productive environments.',
    icon: LifeBuoy,
    color: '#06B6D4', // cyan
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
        delay: index * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.03, y: -5 },
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 10 },
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative ${colors.cardBg} rounded-2xl ${colors.cardBorder} p-8 flex flex-col items-center text-center overflow-hidden`}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Gradient background effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}10, transparent 70%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -20],
              x: [0, (Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
        variants={{
          hover: { borderColor: color },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <motion.div className="relative mb-6" variants={iconVariants}>
        <div
          className="rounded-full p-4 transition-all duration-300 group-hover:shadow-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            boxShadow: `0 0 20px 5px ${color}40`,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <h3 className={`font-work text-lg font-semibold ${colors.textPrimary} mb-2`}>
        {title}
      </h3>
      <p className={`${colors.textSecondary} text-sm flex-grow`}>{desc}</p>

      <motion.button
        className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <ArrowRight className="w-4 h-4 text-white" />
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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="services"
      className={`${colors.bgSecondary} py-20 relative overflow-hidden`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500 filter blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className={`font-work text-3xl sm:text-4xl font-bold ${colors.textPrimary} text-center mb-12`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
          <div className="w-20 h-1 bg-[#0041A8] mx-auto mt-4"></div>
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
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