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
} from 'react-icons/fa';
import { Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { useTheme } from '../context/ThemeContext';

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
    description: 'Navigate employment laws with confidence. Avoid costly lawsuits through comprehensive risk assessments.',
    details: 'Do you know what to do if an employee claimed they were harassed by another employee? We conduct risk assessments to identify compliance exposure and ensure proper procedures minimize overall risk.',
    features: ['Legal Compliance', 'Risk Assessment', 'Policy Development', 'Audit Support'],
    color: '#3B82F6' // blue
  },
  {
    icon: FaDollarSign,
    title: 'Compensation & Benefits',
    description: 'Attract and retain top talent with strategic compensation planning backed by 20+ years of experience.',
    details: 'Your employees are your most valuable assets. We assess current packages and conduct salary benchmarks to create practical compensation plans that work for your budget.',
    features: ['Salary Structure', 'Benefits Design', 'Performance Pay', 'Total Rewards'],
    color: '#2563EB' // blue-600
  },
  {
    icon: FaUsers,
    title: 'Employee Relations',
    description: 'Increase workplace productivity through strategic employee engagement and satisfaction measures.',
    details: 'Just 32% of U.S. workers are engaged. We develop multidimensional strategies including communication improvements, engagement surveys, and satisfaction metrics.',
    features: ['Conflict Resolution', 'Performance Management', 'Employee Engagement', 'Workplace Culture'],
    color: '#1D4ED8' // blue-700
  },
  {
    icon: FaChartLine,
    title: 'Management Coaching',
    description: 'Enhance leadership skills and improve communication to boost workplace productivity.',
    details: 'Whatever management style you have, we help you engage staff through coaching on business goals, constructive feedback, and difficult employee situations.',
    features: ['Leadership Development', 'Communication Skills', 'Team Building', 'Performance Coaching'],
    color: '#1E40AF' // blue-800
  },
  {
    icon: FaHandshake,
    title: 'Recruiting & Staffing',
    description: 'Full-service recruiting guaranteed to find the right fit for your business in 40-60 hours.',
    details: 'We handle the complete hiring cycle from job descriptions to onboarding. Our commitment is finding ideal candidates who will enrich your business.',
    features: ['Talent Acquisition', 'Candidate Screening', 'Interview Process', 'Onboarding'],
    color: '#1E3A8A' // blue-900
  },
  {
    icon: FaGraduationCap,
    title: 'Employee Training & Development',
    description: 'Comprehensive training programs to improve productivity and ensure policy compliance.',
    details: 'Standard programs include harassment prevention, diversity training, safety, customer care, and personality assessments like DISC and Myers-Briggs.',
    features: ['Training Programs', 'Skill Development', 'Compliance Training', 'Assessment Tools'],
    color: '#60A5FA' // blue-400
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Payroll Administration',
    description: 'Expert payroll management with 20+ years of experience in federal and state compliance.',
    details: 'We handle employee classification, background checks, and record retention. Partnership with local HCM company ensures accurate processing.',
    features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Reporting'],
    color: '#3B82F6' // blue
  },
  {
    icon: FaCog,
    title: 'Benefit Strategies & Administration',
    description: 'Complete integrated approach to benefit choices with customized strategies.',
    details: 'We administer health and welfare plans, handle enrollment and terminations, and develop customized benefit strategies for your specific needs.',
    features: ['Health Plans', 'Welfare Benefits', 'Enrollment Management', 'Custom Strategies'],
    color: '#2563EB' // blue-600
  },
  {
    icon: FaRocket,
    title: 'Special Projects',
    description: 'Custom HR project implementation based on your time, budget, and staff requirements.',
    details: 'Experts in payroll conversions, flat organizations, reorganizations, review processes, and employee engagement surveys.',
    features: ['Project Management', 'Process Optimization', 'System Implementation', 'Change Management'],
    color: '#1D4ED8' // blue-700
  },
  {
    icon: FaFileAlt,
    title: 'Employee Handbooks',
    description: 'Well-defined handbooks that promote productive work environments and legal protection.',
    details: 'We handle every aspect from creation to updates, ensuring your handbook reflects current laws and business priorities.',
    features: ['Handbook Creation', 'Policy Development', 'Legal Compliance', 'Regular Updates'],
    color: '#1E40AF' // blue-800
  },
];

const ServiceCard = ({ title, description, icon: Icon, color, index }) => {
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
      <p className={`${colors.textSecondary} text-base flex-grow font-vastago leading-relaxed`}>{description}</p>

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

const HRServices = () => {
  const [activeService, setActiveService] = useState(0);
  const { colors } = useTheme();

  return (
    <div className={colors.bgPrimary}>
      <Navbar />



      {/* Enhanced Hero Section */}
      <motion.section
        className="py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Enhanced decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className="inline-block text-sm uppercase font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 pb-2 mb-6 font-palo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              HR Services
            </motion.span>
            <h1 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Delivering Tailored <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">HR Excellence</span>
            </h1>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto mb-10 leading-relaxed font-vastago`}>
              Solutions that Propel Businesses of All Sizes Towards Sustainable Growth
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="uppercase font-bold text-base rounded-3xl py-6 px-10 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 inline-flex items-center gap-4 font-palo"
            >
              <FaCalendar className="text-xl" />
              Schedule a Call
              <FaArrowRight className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services Overview */}
      <motion.section
        className={`py-24 ${colors.bgSecondary} relative overflow-hidden`}
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
              className="inline-block text-sm uppercase font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 pb-2 mb-6 font-palo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Services Overview
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Everything You Need for <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">HR Management</span>
            </h2>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto mb-16 font-vastago`}>
              Discover how you can have fast, reliable and flexible HR support. Whether you want to hire top talent, update your employee handbook or address employee relations we have the answers.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={staggerContainer}
          >
            {[
              {
                icon: FaUsers,
                title: 'Dedicated Staff',
                description: 'HR 4 Your business\'s staff are dedicated to the successful performance of each client.',
                bgColor: 'bg-blue-600/20',
                borderColor: 'border-blue-500/30',
                iconBg: 'bg-blue-500',
                iconColor: 'text-white',
                textColor: colors.textPrimary,
                descColor: colors.textSecondary
              },
              {
                icon: FaShieldAlt,
                title: 'Integrated Services',
                description: 'Our mission is to provide integrated HR services that improve productivity while minimizing risk.',
                bgColor: 'bg-emerald-600/20',
                borderColor: 'border-emerald-500/30',
                iconBg: 'bg-emerald-500',
                iconColor: 'text-white',
                textColor: colors.textPrimary,
                descColor: colors.textSecondary
              },
              {
                icon: FaChartLine,
                title: 'Small to Mid-Size Focus',
                description: 'Our services are exclusively designed for small to mid-size businesses.',
                bgColor: 'bg-purple-600/20',
                borderColor: 'border-purple-500/30',
                iconBg: 'bg-purple-500',
                iconColor: 'text-white',
                textColor: colors.textPrimary,
                descColor: colors.textSecondary
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="group relative"
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`relative p-10 ${item.bgColor} ${item.borderColor} border-2 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-xl`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className={`w-20 h-20 ${item.iconBg} ${item.iconColor} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="text-3xl" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-6 ${item.textColor} font-palo`}>{item.title}</h3>
                    <p className={`text-lg leading-relaxed ${item.descColor} font-vastago`}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Interactive Services Grid with Landing Page Card Design */}
      <motion.section
        className="py-24 relative overflow-hidden"
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
              className="inline-block text-sm uppercase font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 pb-2 mb-6 font-palo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Comprehensive <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">HR Solutions</span>
            </h2>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto font-vastago`}>
              From compliance to culture, we provide end-to-end HR services designed to help your business thrive
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

      {/* Enhanced Contact Section */}
      <motion.section
        className="py-24 bg-gradient-to-br from-blue-600/10 to-purple-600/10 relative overflow-hidden"
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
              className="inline-block text-sm uppercase font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 pb-2 mb-6 font-palo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Get Started
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Ready to Transform Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">HR Operations</span>?
            </h2>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto font-vastago`}>
              Book a Free Consultation to Explore How Our Distinctive HR Solutions Seamlessly Scale with Your Business's Growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Info */}
            <motion.div
              variants={fadeInUp}
              custom={1}
              className="space-y-10"
            >
              <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className={`text-3xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                    Contact Information
                  </h3>
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaPhone className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Phone</h4>
                        <p className={`${colors.textSecondary} text-lg font-vastago`}>(781) 436-5399</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaEnvelope className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Email</h4>
                        <p className={`${colors.textSecondary} text-lg font-vastago`}>info@hr4yourbusiness.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Office</h4>
                        <p className={`${colors.textSecondary} text-lg font-vastago`}>896 Main Street, Walpole MA 02081</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className={`text-3xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                    Why Choose HR 4 Your business?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <FaCheckCircle className="text-lg text-white" />
                      </div>
                      <div>
                        <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Expert Team</h4>
                        <p className={`${colors.textSecondary} text-base font-vastago`}>20+ years of HR experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <FaCheckCircle className="text-lg text-white" />
                      </div>
                      <div>
                        <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Proven Results</h4>
                        <p className={`${colors.textSecondary} text-base font-vastago`}>High success rates across industries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                        <FaCheckCircle className="text-lg text-white" />
                      </div>
                      <div>
                        <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Personalized Service</h4>
                        <p className={`${colors.textSecondary} text-base font-vastago`}>Tailored to your specific needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Card */}
            <motion.div
              variants={fadeInUp}
              custom={2}
              className="relative"
            >
              <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10 text-center">
                  <h3 className={`text-4xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                    Ready to Get Started?
                  </h3>
                  <p className={`${colors.textSecondary} mb-10 text-xl font-vastago`}>
                    Let's discuss how our comprehensive HR services can benefit your business
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="uppercase font-bold text-base rounded-3xl py-6 px-10 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 inline-flex items-center gap-4 font-palo"
                  >
                    <FaCalendar className="text-xl" />
                    Book Free Consultation
                    <FaArrowRight className="text-xl" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Call to Action */}
      <motion.section
        className="py-24 bg-gradient-to-br from-blue-600/15 to-purple-600/15 relative overflow-hidden"
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
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">HR Operations</span>?
            </h2>
            <p className={`text-2xl ${colors.textSecondary} mb-10 font-vastago`}>
              Let's discuss how our comprehensive HR services can benefit your business
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
              className="uppercase font-bold text-base rounded-3xl py-6 px-10 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 font-palo"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="uppercase font-bold text-base rounded-3xl py-6 px-10 text-white border-2 border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer backdrop-blur-xl font-palo"
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

export default HRServices;
