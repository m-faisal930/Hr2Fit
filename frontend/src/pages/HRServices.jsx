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
} from 'react-icons/fa';
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
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: FaShieldAlt,
    title: 'Compliance & Risk Management',
    description: 'Navigate employment laws with confidence. Avoid costly lawsuits through comprehensive risk assessments.',
    details: 'Do you know what to do if an employee claimed they were harassed by another employee? We conduct risk assessments to identify compliance exposure and ensure proper procedures minimize overall risk.',
    features: ['Legal Compliance', 'Risk Assessment', 'Policy Development', 'Audit Support']
  },
  {
    icon: FaDollarSign,
    title: 'Compensation & Benefits',
    description: 'Attract and retain top talent with strategic compensation planning backed by 20+ years of experience.',
    details: 'Your employees are your most valuable assets. We assess current packages and conduct salary benchmarks to create practical compensation plans that work for your budget.',
    features: ['Salary Structure', 'Benefits Design', 'Performance Pay', 'Total Rewards']
  },
  {
    icon: FaUsers,
    title: 'Employee Relations',
    description: 'Increase workplace productivity through strategic employee engagement and satisfaction measures.',
    details: 'Just 32% of U.S. workers are engaged. We develop multidimensional strategies including communication improvements, engagement surveys, and satisfaction metrics.',
    features: ['Conflict Resolution', 'Performance Management', 'Employee Engagement', 'Workplace Culture']
  },
  {
    icon: FaChartLine,
    title: 'Management Coaching',
    description: 'Enhance leadership skills and improve communication to boost workplace productivity.',
    details: 'Whatever management style you have, we help you engage staff through coaching on business goals, constructive feedback, and difficult employee situations.',
    features: ['Leadership Development', 'Communication Skills', 'Team Building', 'Performance Coaching']
  },
  {
    icon: FaHandshake,
    title: 'Recruiting & Staffing',
    description: 'Full-service recruiting guaranteed to find the right fit for your business in 40-60 hours.',
    details: 'We handle the complete hiring cycle from job descriptions to onboarding. Our commitment is finding ideal candidates who will enrich your business.',
    features: ['Talent Acquisition', 'Candidate Screening', 'Interview Process', 'Onboarding']
  },
  {
    icon: FaGraduationCap,
    title: 'Employee Training & Development',
    description: 'Comprehensive training programs to improve productivity and ensure policy compliance.',
    details: 'Standard programs include harassment prevention, diversity training, safety, customer care, and personality assessments like DISC and Myers-Briggs.',
    features: ['Training Programs', 'Skill Development', 'Compliance Training', 'Assessment Tools']
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Payroll Administration',
    description: 'Expert payroll management with 20+ years of experience in federal and state compliance.',
    details: 'We handle employee classification, background checks, and record retention. Partnership with local HCM company ensures accurate processing.',
    features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Reporting']
  },
  {
    icon: FaCog,
    title: 'Benefit Strategies & Administration',
    description: 'Complete integrated approach to benefit choices with customized strategies.',
    details: 'We administer health and welfare plans, handle enrollment and terminations, and develop customized benefit strategies for your specific needs.',
    features: ['Health Plans', 'Welfare Benefits', 'Enrollment Management', 'Custom Strategies']
  },
  {
    icon: FaRocket,
    title: 'Special Projects',
    description: 'Custom HR project implementation based on your time, budget, and staff requirements.',
    details: 'Experts in payroll conversions, flat organizations, reorganizations, review processes, and employee engagement surveys.',
    features: ['Project Management', 'Process Optimization', 'System Implementation', 'Change Management']
  },
  {
    icon: FaFileAlt,
    title: 'Employee Handbooks',
    description: 'Well-defined handbooks that promote productive work environments and legal protection.',
    details: 'We handle every aspect from creation to updates, ensuring your handbook reflects current laws and business priorities.',
    features: ['Handbook Creation', 'Policy Development', 'Legal Compliance', 'Regular Updates']
  },
];

const HRServices = () => {
  const [activeService, setActiveService] = useState(0);
  const { colors } = useTheme();

  return (
    <div className={colors.bgPrimary}>
      <Navbar />

      <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Hr Services', href: '/services' },
          ]}
        />

      {/* Hero Section */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              HR Services
            </motion.span>
            <h1 className={`text-4xl md:text-6xl font-bold ${colors.textPrimary} mb-6`}>
              Delivering Tailored <span className="text-hr-gradient-to">HR Excellence</span>
            </h1>
            <p className={`text-xl ${colors.textSecondary} max-w-4xl mx-auto mb-8 leading-relaxed`}>
              Solutions that Propel Businesses of All Sizes Towards Sustainable Growth
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

      {/* Services Overview */}
      <motion.section
        className={`py-20 ${colors.bgSecondary} relative overflow-hidden`}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Services Overview
            </motion.span>
            <h2 className={`text-4xl md:text-5xl font-bold ${colors.textPrimary} mb-6`}>
              Everything You Need for <span className="text-hr-gradient-to">HR Management</span>
            </h2>
            <p className={`text-xl ${colors.textSecondary} max-w-4xl mx-auto mb-12`}>
              Discover how you can have fast, reliable and flexible HR support. Whether you want to hire top talent, update your employee handbook or address employee relations we have the answers.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                icon: FaUsers,
                title: 'Dedicated Staff',
                description: 'HR2fit\'s staff are dedicated to the successful performance of each client.',
                bgColor: 'bg-blue-50 dark:bg-blue-900/20',
                borderColor: 'border-blue-200 dark:border-blue-700',
                iconBg: 'bg-blue-500 dark:bg-blue-400',
                iconColor: 'text-white',
                textColor: 'text-blue-900 dark:text-blue-100',
                descColor: 'text-blue-700 dark:text-blue-300'
              },
              {
                icon: FaShieldAlt,
                title: 'Integrated Services',
                description: 'Our mission is to provide integrated HR services that improve productivity while minimizing risk.',
                bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
                borderColor: 'border-emerald-200 dark:border-emerald-700',
                iconBg: 'bg-emerald-500 dark:bg-emerald-400',
                iconColor: 'text-white',
                textColor: 'text-emerald-900 dark:text-emerald-100',
                descColor: 'text-emerald-700 dark:text-emerald-300'
              },
              {
                icon: FaChartLine,
                title: 'Small to Mid-Size Focus',
                description: 'Our services are exclusively designed for small to mid-size businesses.',
                bgColor: 'bg-purple-50 dark:bg-purple-900/20',
                borderColor: 'border-purple-200 dark:border-purple-700',
                iconBg: 'bg-purple-500 dark:bg-purple-400',
                iconColor: 'text-white',
                textColor: 'text-purple-900 dark:text-purple-100',
                descColor: 'text-purple-700 dark:text-purple-300'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className={`relative p-8 ${item.bgColor} ${item.borderColor} border rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <item.icon className="text-2xl" />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 ${colors.textPrimary}`}>{item.title}</h3>
                    <p className={`$ leading-relaxed ${colors.textSecondary}`}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Services Grid */}
      <motion.section
        className="py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              Comprehensive <span className="text-hr-gradient-to">HR Solutions</span>
            </h2>
            <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
              From compliance to culture, we provide end-to-end HR services designed to help your business thrive
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className={`group relative cursor-pointer${
                  activeService === index ? '' : ''
                }`}
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setActiveService(index)}
              >
                <div className="relative p-8 bg-gradient-to-br from-hr-dark to-hr-mid rounded-[25px] border border-hr-gradient-to/20 overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="text-2xl text-hr-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-hr-light mb-4">{service.title}</h3>
                    <p className="text-hr-light/70 leading-relaxed mb-6 flex-grow">{service.description}</p>
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

          {/* Service Detail Panel */}
          <motion.div
            className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20"
            variants={fadeInUp}
            custom={11}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
            <div className="relative z-10">
              <div className="flex items-start space-x-6">
                                 <div className="w-16 h-16 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-2xl flex items-center justify-center flex-shrink-0">
                   {React.createElement(services[activeService].icon, { className: 'text-2xl text-hr-primary' })}
                 </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-hr-light mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-hr-light/80 text-lg leading-relaxed">
                    {services[activeService].details}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 bg-hr-dark relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Get Started
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              Ready to Transform Your <span className="text-hr-gradient-to">HR Operations</span>?
            </h2>
            <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
              Book a Free Consultation to Explore How Our Distinctive HR Solutions Seamlessly Scale with Your Business's Growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              custom={1}
              className="space-y-8"
            >
              <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20">
                <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-hr-light mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaPhone className="text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Phone</h4>
                        <p className="text-hr-light/70">(781) 436-5399</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaEnvelope className="text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Email</h4>
                        <p className="text-hr-light/70">info@hr2fit.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-xl flex items-center justify-center flex-shrink-0">
                        <FaMapMarkerAlt className="text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Office</h4>
                        <p className="text-hr-light/70">896 Main Street, Walpole MA 02081</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20">
                <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-hr-light mb-6">
                    Why Choose HR2Fit?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-sm text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Expert Team</h4>
                        <p className="text-hr-light/70 text-sm">20+ years of HR experience</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-sm text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Proven Results</h4>
                        <p className="text-hr-light/70 text-sm">High success rates across industries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-sm text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Personalized Service</h4>
                        <p className="text-hr-light/70 text-sm">Tailored to your specific needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              variants={fadeInUp}
              custom={2}
              className="relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20">
                <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold text-hr-light mb-6">
                    Ready to Get Started?
                  </h3>
                  <p className="text-hr-light/80 mb-8 text-lg">
                    Let's discuss how our comprehensive HR services can benefit your business
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-primary bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to hover:from-hr-gradient-to hover:to-hr-gradient-from transition-all duration-300 cursor-pointer shadow-lg hover:shadow-hr-gradient-to/50 inline-flex items-center gap-3"
                  >
                    <FaCalendar className="text-lg" />
                    Book Free Consultation
                    <FaArrowRight className="text-lg" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 bg-gradient-to-br from-hr-primary via-hr-mid to-hr-primary relative overflow-hidden"
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
              Ready to Transform Your{' '}
              <span className="text-hr-gradient-to">HR Operations</span>?
            </h2>
            <p className="text-xl text-hr-light/80 mb-8">
              Let's discuss how our comprehensive HR services can benefit your business
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
              Get Started Today
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

export default HRServices;
