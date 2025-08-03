import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      staggerChildren: 0.1,
    },
  },
};

const industries = [
  { icon: FaBalanceScale , name: 'Legal', color: 'from-hr-gradient-from to-hr-gradient-to' },
  { icon: FaHeart, name: 'Dental', color: 'from-hr-gradient-from to-hr-gradient-to' },
  { icon: FaWrench, name: 'Plumbing', color: 'from-hr-gradient-from to-hr-gradient-to' },
  { icon: FaBuilding, name: 'HVAC', color: 'from-hr-gradient-from to-hr-gradient-to' },
];

const services = [
  {
    icon: FaShieldAlt,
    title: 'Compliance & Risk Management',
    question: 'Would you know what to do if an employee claimed harassment?',
    features: ['Legal Compliance', 'Risk Assessment', 'Policy Development', 'Audit Support']
  },
  {
    icon: FaDollarSign,
    title: 'Compensation & Benefits',
    question: 'Are you at risk of losing valued employees?',
    features: ['Salary Structure', 'Benefits Design', 'Performance Pay', 'Total Rewards']
  },
  {
    icon: FaUsers,
    title: 'Employee Relations',
    question: 'Sensible solutions that increase workplace productivity.',
    features: ['Conflict Resolution', 'Performance Management', 'Employee Engagement', 'Workplace Culture']
  },
  {
    icon: FaChartLine,
    title: 'Management Coaching',
    question: 'What type of management style are you?',
    features: ['Leadership Development', 'Communication Skills', 'Team Building', 'Performance Coaching']
  },
  {
    icon: FaHandshake,
    title: 'Recruiting & Staffing',
    question: 'Do you have an extra 40 to 60 hours to spare?',
    features: ['Talent Acquisition', 'Candidate Screening', 'Interview Process', 'Onboarding']
  },
  {
    icon: FaGraduationCap,
    title: 'Employee Training & Development',
    question: 'A single source for all your training needs.',
    features: ['Training Programs', 'Skill Development', 'Compliance Training', 'Assessment Tools']
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Payroll Administration',
    question: 'Is it time to outsource your payroll administration?',
    features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Reporting']
  },
  {
    icon: FaCog,
    title: 'Employee Benefit Strategies & Administration',
    question: 'A complete integrated approach to employee benefit choices.',
    features: ['Health Plans', 'Welfare Benefits', 'Enrollment Management', 'Custom Strategies']
  },
  {
    icon: FaRocket,
    title: 'Special Human Resources Projects',
    question: 'Because large or small human resource projects can need special attention.',
    features: ['Project Management', 'Process Optimization', 'System Implementation', 'Change Management']
  },
  {
    icon: FaUsers,
    title: 'Staff Designs & Reorganizations',
    question: 'Managing change effectively.',
    features: ['Organizational Design', 'Change Management', 'Process Optimization', 'Team Restructuring']
  },
  {
    icon: FaFileAlt,
    title: 'Employee Handbooks',
    question: 'A well-defined employee Handbook is a roadmap to promote a productive work environment.',
    features: ['Handbook Creation', 'Policy Development', 'Legal Compliance', 'Regular Updates']
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

const RecruitingSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="">
      <Navbar />

      <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Recruiting', href: '/recruiting' },
          ]}
        />

      {/* Hero Section */}
      <motion.section
        className={`py-20 relative overflow-hidden ${colors.bgPrimary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Decorative background elements */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none`}>
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-hr-gradient-to rounded-full filter blur-3xl opacity-10"
            animate={{
              x: [0, 20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-60 h-60 bg-hr-gradient-from rounded-full filter blur-3xl opacity-5"
            animate={{
              x: [0, -20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className="inline-block text-xs uppercase font-bold text-hr-gradient-to border-b-2 border-hr-gradient-to pb-1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Recruiting Solutions
            </motion.span>
            <h1 className={`text-4xl md:text-6xl font-bold ${colors.textPrimary} mb-6`}>
              Unlock Growth with Our <span className="text-hr-gradient-to">Affordable Staff</span> Recruiting Solutions
            </h1>
            <p className={`text-xl ${colors.textSecondary} max-w-4xl mx-auto mb-8 leading-relaxed`}>
              Schedule Your Call Today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-primary bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to hover:from-hr-gradient-to hover:to-hr-gradient-from transition-all duration-300 cursor-pointer shadow-lg hover:shadow-hr-gradient-to/50 inline-flex items-center gap-3"
            >
              <FaCalendar className="text-lg" />
              Schedule a Call
              <FaArrowRight className="text-lg" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        className={`py-20 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-0 w-32 h-32 bg-hr-gradient-to rounded-full filter blur-2xl opacity-20"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
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
            className="text-center mb-16"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className="inline-block text-xs uppercase font-bold text-hr-gradient-to border-b-2 border-hr-gradient-to pb-1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The Challenge
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-6`}>
              Do you have an extra <span className="text-hr-gradient-to">40 to 60 hours</span> to spare on recruiting?
            </h2>
            <p className={`text-xl ${colors.textSecondary} max-w-4xl mx-auto mb-12 leading-relaxed`}>
              An average hire can take between 40 to 60 hours of your time for the full hiring cycle. The result is often not the perfect candidate to enhance your business. In addition, a bad hire can cost you tens of thousands of dollars once factoring in the loss of customers, staff disruption, and potentially irreversible damage to your reputation.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => {
              const cardColors = [
                {
                  bgColor: 'bg-blue-50 dark:bg-blue-900/20',
                  borderColor: 'border-blue-200 dark:border-blue-700',
                  iconBg: 'bg-blue-500 dark:bg-blue-400',
                  iconColor: 'text-white',
                  textColor: 'text-blue-900 dark:text-blue-100',
                  descColor: 'text-blue-700 dark:text-blue-300'
                },
                {
                  bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
                  borderColor: 'border-emerald-200 dark:border-emerald-700',
                  iconBg: 'bg-emerald-500 dark:bg-emerald-400',
                  iconColor: 'text-white',
                  textColor: 'text-emerald-900 dark:text-emerald-100',
                  descColor: 'text-emerald-700 dark:text-emerald-300'
                },
                {
                  bgColor: 'bg-purple-50 dark:bg-purple-900/20',
                  borderColor: 'border-purple-200 dark:border-purple-700',
                  iconBg: 'bg-purple-500 dark:bg-purple-400',
                  iconColor: 'text-white',
                  textColor: 'text-purple-900 dark:text-purple-100',
                  descColor: 'text-purple-700 dark:text-purple-300'
                }
              ];
              
              const colors = cardColors[index];
              
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index + 1}
                  className="group relative"
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`relative p-8 ${colors.bgColor} ${colors.borderColor} border rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className={`w-16 h-16 ${colors.iconBg} ${colors.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <benefit.icon className="text-2xl" />
                      </div>
                      <h3 className={`text-xl font-bold ${colors.textPrimary} mb-4`}>{benefit.title}</h3>
                      <p className={`${colors.textSecondary} leading-relaxed`}>{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20"
            variants={fadeInUp}
            custom={4}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
            <div className="relative z-10">
              <p className="text-lg text-hr-light text-center leading-relaxed">
                <strong className="text-hr-gradient-to">
                  We provide full-service recruiting that is guaranteed to be the right fit for your business.
                </strong>{' '}
                We will work with you to develop an outstanding job description and advertise on your behalf. We will partner with you through the complete hiring cycle from screening candidates to setting up interviews. Once we find the ideal candidate, we foster the process all the way through onboarding your new employee. Our commitment to you is to find that ideal candidate who will enrich your business.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        className={`py-20 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className="inline-block text-xs uppercase font-bold text-hr-gradient-to border-b-2 border-hr-gradient-to pb-1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Industries We Serve
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-6`}>
              Catering to a <span className="text-hr-gradient-to">Variety of Industries</span>
            </h2>
            <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto`}>
              From legal to HVAC, we serve diverse industries with specialized recruiting solutions
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-hr-dark to-hr-mid rounded-[25px] border border-hr-gradient-to/20 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="text-2xl text-hr-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-hr-light group-hover:text-hr-gradient-to transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className={`py-20 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            custom={0}
          >
            <motion.span
              className="inline-block text-xs uppercase font-bold text-hr-gradient-to border-b-2 border-hr-gradient-to pb-1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-6`}>
              One Place for All Your <span className="text-hr-gradient-to">HR Needs</span>
            </h2>
            <p className={`text-xl ${colors.textSecondary} max-w-3xl mx-auto`}>
              Comprehensive HR solutions designed to help your business thrive
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[25px] border border-hr-gradient-to/20 overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-2xl text-hr-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-hr-light mb-4 group-hover:text-hr-gradient-to transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-hr-light/70 leading-relaxed mb-6 flex-grow">
                      {service.question}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-hr-light/80 text-sm">
                          <div className="w-2 h-2 bg-hr-gradient-to rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      <Testimonial />

      {/* Call to Action */}
      <motion.section
        className={`py-20 relative overflow-hidden ${colors.bgSecondary}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              Ready to Find Your <span className="text-hr-gradient-to">Perfect Candidate</span>?
            </h2>
            <p className="text-xl text-hr-light/80 mb-8">
              Let us handle the time-consuming hiring process while you focus on growing your business. Schedule your consultation today!
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={1}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-primary bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to hover:from-hr-gradient-to hover:to-hr-gradient-from transition-all duration-300 cursor-pointer shadow-lg hover:shadow-hr-gradient-to/50"
            >
              Schedule Your Call Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-light border-2 border-hr-light hover:bg-hr-light hover:text-hr-primary transition-all duration-300 cursor-pointer"
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
