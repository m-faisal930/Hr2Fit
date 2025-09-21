import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import {
  FaShieldAlt,
  FaDollarSign,
  FaUsers,
  FaChartLine,
  FaBook,
  FaFileInvoiceDollar,
  FaCog,
  FaRocket,
  FaFileAlt,
  FaGraduationCap,
  FaHandshake,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendar,
  FaArrowRight,
  FaClock,
  FaBullseye ,
  FaBuilding,
  FaHeart,
  FaWrench,
  FaBalanceScale ,
} from 'react-icons/fa';
import { Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { useTheme } from '../context/ThemeContext';
import Testimonial from '../components/Testimonial';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const services = [
  {
    icon: FaShieldAlt,
    title: 'Compliance & Risk Management',
    question: 'Would you know what to do if an employee claimed harassment?',
    features: ['Legal Compliance', 'Risk Assessment', 'Policy Development', 'Audit Support'],
    color: '#123456' // primary blue
  },
  {
    icon: FaDollarSign,
    title: 'Compensation & Benefits',
    question: 'Are you at risk of losing valued employees?',
    features: ['Salary Structure', 'Benefits Design', 'Performance Pay', 'Total Rewards'],
    color: '#DC203B' // secondary red
  },
  {
    icon: FaUsers,
    title: 'Employee Relations',
    question: 'Sensible solutions that increase workplace productivity.',
    features: ['Conflict Resolution', 'Performance Management', 'Employee Engagement', 'Workplace Culture'],
    color: '#414042' // tertiary gray
  },
  {
    icon: FaChartLine,
    title: 'Management Coaching',
    question: 'What type of management style are you?',
    features: ['Leadership Development', 'Communication Skills', 'Team Building', 'Performance Coaching'],
    color: '#123456' // primary blue
  },
  {
    icon: FaHandshake,
    title: 'Recruiting & Staffing',
    question: 'Do you have an extra 40 to 60 hours to spare?',
    features: ['Talent Acquisition', 'Candidate Screening', 'Interview Process', 'Onboarding'],
    color: '#DC203B' // secondary red
  },
  {
    icon: FaGraduationCap,
    title: 'Employee Training & Development',
    question: 'A single source for all your training needs.',
    features: ['Training Programs', 'Skill Development', 'Compliance Training', 'Assessment Tools'],
    color: '#414042' // tertiary gray
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Payroll Administration',
    question: 'Is it time to outsource your payroll administration?',
    features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Reporting'],
    color: '#123456' // primary blue
  },
  {
    icon: FaCog,
    title: 'Employee Benefit Strategies & Administration',
    question: 'A complete integrated approach to employee benefit choices.',
    features: ['Health Plans', 'Welfare Benefits', 'Enrollment Management', 'Custom Strategies'],
    color: '#DC203B' // secondary red
  },
  {
    icon: FaRocket,
    title: 'Special Human Resources Projects',
    question: 'Because large or small human resource projects can need special attention.',
    features: ['Project Management', 'Process Optimization', 'System Implementation', 'Change Management'],
    color: '#414042' // tertiary gray
  },
  {
    icon: FaUsers,
    title: 'Staff Designs & Reorganizations',
    question: 'Managing change effectively.',
    features: ['Organizational Design', 'Change Management', 'Process Optimization', 'Team Restructuring'],
    color: '#123456' // primary blue
  },
  {
    icon: FaFileAlt,
    title: 'Employee Handbooks',
    question: 'A well-defined employee Handbook is a roadmap to promote a productive work environment.',
    features: ['Handbook Creation', 'Policy Development', 'Legal Compliance', 'Regular Updates'],
    color: '#DC203B' // secondary red
  },
];

const benefits = [
  {
    icon: FaClock,
    title: 'Save 40-60 Hours',
    description: 'We handle the entire hiring cycle so you can focus on your business',
  },
  {
    icon: FaBullseye ,
    title: 'Perfect Match Guaranteed',
    description: 'Our process ensures the right fit for your business culture and needs',
  },
  {
    icon: FaCheckCircle,
    title: 'Full-Service Support',
    description: "From job descriptions to onboarding - we've got you covered",
  },
];

const ServiceCard = ({ title, question, features, icon: Icon, color, index }) => {
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
      className={`group relative ${colors.cardBg} rounded-3xl ${colors.cardBorder} p-10 flex flex-col items-center text-center overflow-hidden backdrop-blur-xl border-2 border-[#123456]/20`}
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
      <p className={`${colors.textSecondary} text-base flex-grow font-vastago leading-relaxed mb-6`}>{question}</p>
      
      <div className="space-y-3 w-full">
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} className={`flex items-center gap-3 ${colors.textSecondary} text-base font-vastago`}>
            <div className="w-3 h-3 bg-[#123456] rounded-full"></div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <motion.button
        className="mt-8 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.05, type: 'spring' }}
      >
        <ArrowRight className="w-5 h-5 text-white" />
      </motion.button>
    </motion.div>
  );
};

const RecruitingSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { colors } = useTheme();


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="">
      <Navbar />


      {/* Enhanced Hero Section */}
      <motion.section
        className={`py-24 relative overflow-hidden ${colors.bgPrimary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Enhanced decorative background elements */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none`}>
          <motion.div
            className="absolute top-20 left-10 w-60 h-60 bg-blue-500 rounded-full filter blur-3xl opacity-15"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className={`inline-block text-sm uppercase font-bold ${colors.iconPrimary} border-b-2 border-[#123456] pb-2 mb-6 font-palo`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Recruiting Solutions
            </motion.span>
            <h1 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Unlock Growth with Our <span className={`bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042] bg-clip-text text-transparent animate-gradient`}>Affordable Staff</span> Recruiting Solutions
            </h1>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto mb-10 leading-relaxed font-vastago`}>
              Schedule Your Call Today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`uppercase font-bold text-base rounded-3xl py-6 px-10 text-white bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042] hover:opacity-90 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-3xl inline-flex items-center gap-4 font-palo`}
            >
              <FaCalendar className="text-xl" />
              Schedule a Call
              <FaArrowRight className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Problem Statement */}
      <motion.section
        className={`py-24 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-0 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-25"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/2 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className={`inline-block text-sm uppercase font-bold ${colors.iconPrimary} border-b-2 border-[#123456] pb-2 mb-6 font-palo`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Challenge
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Do you have an extra <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">40 to 60 hours</span> to spare on recruiting?
            </h2>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto mb-16 leading-relaxed font-vastago`}>
              An average hire can take between 40 to 60 hours of your time for the full hiring cycle. The result is often not the perfect candidate to enhance your business. In addition, a bad hire can cost you tens of thousands of dollars once factoring in the loss of customers, staff disruption, and potentially irreversible damage to your reputation.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-10 mb-16"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => {
              const cardColors = [
                {
                  bgColor: 'bg-blue-600/20',
                  borderColor: 'border-blue-500/30',
                  iconBg: 'bg-blue-500',
                  iconColor: 'text-white',
                  textColor: colors.textPrimary,
                  descColor: colors.textSecondary
                },
                {
                  bgColor: 'bg-emerald-600/20',
                  borderColor: 'border-emerald-500/30',
                  iconBg: 'bg-emerald-500',
                  iconColor: 'text-white',
                  textColor: colors.textPrimary,
                  descColor: colors.textSecondary
                },
                {
                  bgColor: 'bg-purple-600/20',
                  borderColor: 'border-purple-500/30',
                  iconBg: 'bg-purple-500',
                  iconColor: 'text-white',
                  textColor: colors.textPrimary,
                  descColor: colors.textSecondary
                }
              ];
              
              const cardColor = cardColors[index];
              
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index + 1}
                  className="group relative"
                  whileHover={{ y: -12 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`relative p-10 ${cardColor.bgColor} ${cardColor.borderColor} border-2 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-xl`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-20 h-20 ${cardColor.iconBg} ${cardColor.iconColor} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <benefit.icon className="text-3xl" />
                      </div>
                      <h3 className={`text-2xl font-bold ${cardColor.textColor} mb-6 font-palo`}>{benefit.title}</h3>
                      <p className={`${cardColor.descColor} leading-relaxed text-lg font-vastago`}>{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className={`relative p-10 bg-gradient-to-br from-[#123456]/20 to-[#DC203B]/20 backdrop-blur-2xl rounded-3xl border-2 border-[#123456]/30 shadow-2xl`}
            variants={fadeInUp}
            custom={4}
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-[#123456]/10 to-[#DC203B]/10 rounded-3xl`}></div>
            <div className="relative z-10">
              <p className={`text-xl ${colors.textSecondary} text-center leading-relaxed font-vastago`}>
                <strong className={`${colors.textPrimary} font-palo`}>
                  We provide full-service recruiting that is guaranteed to be the right fit for your business.
                </strong>{' '}
                We will work with you to develop an outstanding job description and advertise on your behalf. We will partner with you through the complete hiring cycle from screening candidates to setting up interviews. Once we find the ideal candidate, we foster the process all the way through onboarding your new employee. Our commitment to you is to find that ideal candidate who will enrich your business.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services Section with Landing Page Card Design */}
      <motion.section
        className={`py-24 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className={`inline-block text-sm uppercase font-bold ${colors.iconPrimary} border-b-2 border-[#123456] pb-2 mb-6 font-palo`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              One Place for All Your <span className={`bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042] bg-clip-text text-transparent animate-gradient`}>HR Needs</span>
            </h2>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto font-vastago`}>
              Comprehensive HR solutions designed to help your business thrive
            </p>
          </motion.div>

          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <ServiceCard key={service.title} index={idx} {...service} />
            ))}
          </motion.div>
        </div>
      </motion.section>


      <Testimonial />

      {/* Enhanced Call to Action */}
      <motion.section
        className={`py-24 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="mb-12"
          >
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Ready to Find Your <span className={`bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042] bg-clip-text text-transparent animate-gradient`}>Perfect Candidate</span>?
            </h2>
            <p className={`text-2xl ${colors.textSecondary} mb-10 font-vastago`}>
              Let us handle the time-consuming hiring process while you focus on growing your business. Schedule your consultation today!
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={1}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`uppercase font-bold text-base rounded-3xl py-6 px-10 text-white bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042] hover:opacity-90 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-3xl font-palo`}
            >
              Schedule Your Call Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`uppercase font-bold text-base rounded-3xl py-6 px-10 ${colors.textPrimary} border-2 border-[#123456]/40 hover:border-[#123456] hover:bg-[#123456]/20 transition-all duration-300 cursor-pointer backdrop-blur-xl font-palo`}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default RecruitingSolutions;
