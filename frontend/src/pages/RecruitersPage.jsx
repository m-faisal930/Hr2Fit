import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaUserTie,
  FaSearch,
  FaHandshake,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaIndustry,
  FaUserPlus,
  FaFileAlt,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

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

const recruitingServices = [
  {
    title: 'Talent Acquisition',
    desc: 'Find the perfect candidates for your organization with our comprehensive recruitment strategies.',
    icon: FaUserPlus,
    features: ['Candidate Sourcing', 'Skills Assessment', 'Cultural Fit Analysis', 'Background Screening']
  },
  {
    title: 'Executive Search',
    desc: 'Specialized recruitment for senior-level positions and executive roles.',
    icon: FaUserTie,
    features: ['C-Level Recruitment', 'Board Member Search', 'Leadership Assessment', 'Succession Planning']
  },
  {
    title: 'Contract Staffing',
    desc: 'Flexible staffing solutions for temporary and project-based needs.',
    icon: FaClock,
    features: ['Temporary Staffing', 'Project Teams', 'Seasonal Hiring', 'Specialized Skills']
  },
  {
    title: 'Recruitment Process Outsourcing',
    desc: 'Complete outsourcing of your recruitment function to our expert team.',
    icon: FaBuilding,
    features: ['End-to-End RPO', 'Technology Integration', 'Process Optimization', 'Cost Reduction']
  },
  {
    title: 'Employer Branding',
    desc: 'Build a compelling employer brand to attract top talent to your organization.',
    icon: FaGlobe,
    features: ['Brand Strategy', 'Content Creation', 'Social Media', 'Candidate Experience']
  },
  {
    title: 'Recruitment Analytics',
    desc: 'Data-driven insights to optimize your recruitment strategies and outcomes.',
    icon: FaChartLine,
    features: ['Performance Metrics', 'Predictive Analytics', 'ROI Tracking', 'Process Optimization']
  },
];

const benefits = [
  {
    icon: FaRocket,
    title: 'Faster Hiring',
    desc: 'Reduce time-to-hire with our streamlined processes'
  },
  {
    icon: FaShieldAlt,
    title: 'Quality Assurance',
    desc: 'Rigorous screening ensures top-quality candidates'
  },
  {
    icon: FaUsers,
    title: 'Cultural Fit',
    desc: 'Match candidates who align with your company culture'
  },
  {
    icon: FaHandshake,
    title: 'Long-term Success',
    desc: 'Focus on retention and employee satisfaction'
  }
];

export default function RecruitersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    companyWebsite: '',
    industry: '',
    hiringNeeds: '',
    companySize: '',
    termsAgreed: false,
  });

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Recruiter Registration Data:', formData);
    alert('Registration submitted successfully! We will contact you shortly.');
    setIsFormOpen(false);
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      companyWebsite: '',
      industry: '',
      hiringNeeds: '',
      companySize: '',
      termsAgreed: false,
    });
  };

  return (
    <div className="bg-hr-primary">
      <Navbar />


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

        <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
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
              <h1 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
                Find Your <span className="text-hr-gradient-to">Perfect Match</span>
              </h1>
              <p className="text-xl text-hr-light/80 mb-8 leading-relaxed">
                HR2Fit's comprehensive recruiting services help you find, attract, and retain the best talent for your organization. From entry-level positions to executive roles, we deliver results that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFormOpen(true)}
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
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={1}
              className="relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-hr-dark to-hr-mid rounded-[30px] border border-hr-gradient-to/20">
                <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      className="text-center p-4 rounded-xl bg-hr-primary/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaSearch className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Smart Sourcing</h4>
                      <p className="text-hr-light/70 text-sm">Advanced candidate search</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 rounded-xl bg-hr-primary/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaHandshake className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Perfect Match</h4>
                      <p className="text-hr-light/70 text-sm">Cultural fit assessment</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 rounded-xl bg-hr-primary/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaRocket className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Fast Results</h4>
                      <p className="text-hr-light/70 text-sm">Quick turnaround times</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 rounded-xl bg-hr-primary/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaChartLine className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Data Driven</h4>
                      <p className="text-hr-light/70 text-sm">Analytics & insights</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-hr-dark relative overflow-hidden"
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
              Our Services
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              Comprehensive <span className="text-hr-gradient-to">Recruiting Solutions</span>
            </h2>
            <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
              From talent acquisition to executive search, we provide end-to-end recruiting services
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {recruitingServices.map((service, index) => (
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
                    <h3 className="text-xl font-bold text-hr-light mb-4">{service.title}</h3>
                    <p className="text-hr-light/70 leading-relaxed mb-6 flex-grow">{service.desc}</p>
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

      {/* Benefits Section */}
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
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              The <span className="text-hr-gradient-to">HR2Fit Advantage</span>
            </h2>
            <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
              Experience the difference that professional recruiting services can make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-3xl text-hr-primary" />
                </div>
                <h3 className="text-lg font-bold text-hr-light mb-3">{benefit.title}</h3>
                <p className="text-hr-light/70 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Find Your <span className="text-hr-gradient-to">Perfect Match</span>?
            </h2>
            <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
              Let's discuss your recruiting needs and find the best solution for your organization
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
                        <p className="text-hr-light/70 text-sm">Experienced HR professionals</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-sm text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Proven Results</h4>
                        <p className="text-hr-light/70 text-sm">High success rates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-sm text-hr-primary" />
                      </div>
                      <div>
                        <h4 className="text-hr-light font-semibold mb-1">Personalized Service</h4>
                        <p className="text-hr-light/70 text-sm">Tailored to your needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              custom={2}
              className="relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20">
                <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-hr-light mb-6">
                    Get Started Today
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaBuilding className="inline mr-2 text-hr-gradient-to" />
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                          placeholder="Enter company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaUserTie className="inline mr-2 text-hr-gradient-to" />
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          name="contactPerson"
                          required
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                          placeholder="Enter contact name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaEnvelope className="inline mr-2 text-hr-gradient-to" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaPhone className="inline mr-2 text-hr-gradient-to" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaIndustry className="inline mr-2 text-hr-gradient-to" />
                          Industry
                        </label>
                        <input
                          type="text"
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                          placeholder="Enter your industry"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaUsers className="inline mr-2 text-hr-gradient-to" />
                          Company Size
                        </label>
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="500+">500+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-hr-light mb-2">
                        <FaFileAlt className="inline mr-2 text-hr-gradient-to" />
                        Hiring Needs
                      </label>
                      <textarea
                        name="hiringNeeds"
                        rows={4}
                        value={formData.hiringNeeds}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Describe your hiring needs..."
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="termsAgreed"
                        checked={formData.termsAgreed}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-hr-gradient-to bg-hr-primary border-hr-gradient-to rounded focus:ring-hr-gradient-to focus:ring-2"
                      />
                      <label className="text-hr-light/80 text-sm">
                        I agree to the terms and conditions
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-primary bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to hover:from-hr-gradient-to hover:to-hr-gradient-from transition-all duration-300 cursor-pointer shadow-lg hover:shadow-hr-gradient-to/50"
                    >
                      Submit Request
                    </motion.button>
                  </form>
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
              Ready to Find Your <span className="text-hr-gradient-to">Perfect Match</span>?
            </h2>
            <p className="text-xl text-hr-light/80 mb-8">
              Let's discuss your recruiting needs and find the best solution for your organization
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
              onClick={() => setIsFormOpen(true)}
              className="uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-primary bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to hover:from-hr-gradient-to hover:to-hr-gradient-from transition-all duration-300 cursor-pointer shadow-lg hover:shadow-hr-gradient-to/50"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-light border-2 border-hr-light hover:bg-hr-light hover:text-hr-primary transition-all duration-300 cursor-pointer"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}