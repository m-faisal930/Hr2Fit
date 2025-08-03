// src/pages/AboutUsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaHandshake,
  FaShieldAlt,
  FaCog,
  FaRocket,
  FaDollarSign,
  FaHeart,
  FaDownload,
  FaPhone,
  FaStar,
  FaAward,
  FaGlobe,
  FaCheckCircle,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

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

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      {/* Stats */}
      <StatsSection />

      {/* Our Outsourced HR Service Approach */}
      <motion.section
        className="py-20 bg-hr-primary relative overflow-hidden"
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
              Our Approach
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              Our Outsourced{' '}
              <span className="text-hr-gradient-to">HR Service</span> Approach
            </h2>
            <p className="text-xl text-hr-light/80 font-semibold mb-4">
              Efficiency & Productivity for Small to Medium Sized Businesses
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} custom={1}>
              <h3 className="text-3xl font-bold text-hr-light mb-6">
                Customized HR to{' '}
                <span className="text-hr-gradient-to">Fit Your Business</span>
              </h3>
              <div className="space-y-4 text-hr-light/80 leading-relaxed">
                <p>
                  HR2fit's extraordinary customer services model is an
                  alternative approach to Human Resources. Our technique is to
                  bring a rapid response to your HR needs.
                </p>
                <p>
                  We provide human resources services that are designed for
                  small to mid-size business at{' '}
                  <span className="font-semibold text-hr-gradient-to">
                    Fortune 500 quality
                  </span>
                  .
                </p>
                <p>
                  Our overlaid service model is designed to deliver a complete
                  array of Human Resources Services directly to your business.
                </p>
              </div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 text-hr-light/90">
                  <FaCheckCircle className="text-hr-gradient-to" />
                  <span className="text-sm">Rapid Response</span>
                </div>
                <div className="flex items-center gap-2 text-hr-light/90">
                  <FaCheckCircle className="text-hr-gradient-to" />
                  <span className="text-sm">Fortune 500 Quality</span>
                </div>
                <div className="flex items-center gap-2 text-hr-light/90">
                  <FaCheckCircle className="text-hr-gradient-to" />
                  <span className="text-sm">Complete HR Solutions</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={2}
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
                      <FaUsers className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Team Support</h4>
                      <p className="text-hr-light/70 text-sm">Dedicated HR professionals</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 rounded-xl bg-hr-primary/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaShieldAlt className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Compliance</h4>
                      <p className="text-hr-light/70 text-sm">Risk-free operations</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 rounded-xl bg-hr-primary/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaRocket className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Growth</h4>
                      <p className="text-hr-light/70 text-sm">Scalable solutions</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-4 rounded-xl bg-hr-primary/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaDollarSign className="text-4xl text-hr-gradient-to mx-auto mb-3" />
                      <h4 className="text-hr-light font-semibold mb-2">Cost-Effective</h4>
                      <p className="text-hr-light/70 text-sm">Affordable quality</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose HR2Fit */}
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
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              Why Choose <span className="text-hr-gradient-to">HR2Fit</span>
            </h2>
            <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
              We deliver comprehensive HR solutions that empower your business to thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: 'Expert Team',
                description: 'Dedicated HR professionals with years of experience',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: FaShieldAlt,
                title: 'Compliance First',
                description: 'Stay compliant with ever-changing regulations',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: FaRocket,
                title: 'Scalable Growth',
                description: 'Solutions that grow with your business',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: FaDollarSign,
                title: 'Cost Effective',
                description: 'Fortune 500 quality at affordable rates',
                color: 'from-yellow-500 to-orange-500'
              },
              {
                icon: FaHeart,
                title: 'Employee Focus',
                description: 'Enhance employee satisfaction and retention',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: FaGlobe,
                title: 'Comprehensive',
                description: 'Complete HR solutions under one roof',
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[25px] border border-hr-gradient-to/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/5 to-hr-gradient-to/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-2xl text-hr-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-hr-light mb-4">{feature.title}</h3>
                    <p className="text-hr-light/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Join hundreds of businesses that trust HR2Fit for their HR needs
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
    </>
  );
}
