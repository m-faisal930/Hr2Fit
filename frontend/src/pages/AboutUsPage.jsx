// src/pages/AboutUsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
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
      staggerChildren: 0.05,
    },
  },
};

export default function AboutUsPage() {
  const { colors } = useTheme();
  return (
    < >
      <Navbar />



      {/* Stats */}
      <StatsSection />

      {/* Our Outsourced HR Service Approach */}
      <motion.section
        className={`py-24 ${colors.bgSecondary} relative overflow-hidden`}
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

        <div className={`mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${colors.bgSecondary}`}>
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
              Our Approach
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Our Outsourced{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">HR Service</span> Approach
            </h2>
            <p className={`text-2xl ${colors.textSecondary} font-semibold mb-6 font-vastago`}>
              Efficiency & Productivity for Small to Medium Sized Businesses
            </p>
            <div className="w-48 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} custom={1}>
              <h3 className={`text-4xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                Customized HR to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fit Your Business</span>
              </h3>
              <div className={`space-y-6 ${colors.textSecondary} leading-relaxed font-vastago text-lg`}>
                <p>
                  HR2fit's extraordinary customer services model is an
                  alternative approach to Human Resources. Our technique is to
                  bring a rapid response to your HR needs.
                </p>
                <p>
                  We provide human resources services that are designed for
                  small to mid-size business at{' '}
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                className="mt-10 flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className={`flex items-center gap-3 ${colors.textSecondary}`}>
                  <FaCheckCircle className="text-blue-500 text-xl" />
                  <span className="text-base font-vastago">Rapid Response</span>
                </div>
                <div className={`flex items-center gap-3 ${colors.textSecondary}`}>
                  <FaCheckCircle className="text-blue-500 text-xl" />
                  <span className="text-base font-vastago">Fortune 500 Quality</span>
                </div>
                <div className={`flex items-center gap-3 ${colors.textSecondary}`}>
                  <FaCheckCircle className="text-blue-500 text-xl" />
                  <span className="text-base font-vastago">Complete HR Solutions</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={2}
              className="relative"
            >
              <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-8">
                    <motion.div
                      className="text-center p-6 rounded-3xl bg-blue-500/15 backdrop-blur-xl border-2 border-blue-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />
                      <h4 className={`${colors.textPrimary} font-bold mb-3 text-lg font-palo`}>Team Support</h4>
                      <p className={`${colors.textSecondary} text-base font-vastago`}>Dedicated HR professionals</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-6 rounded-3xl bg-blue-500/15 backdrop-blur-xl border-2 border-blue-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaShieldAlt className="text-5xl text-blue-500 mx-auto mb-4" />
                      <h4 className={`${colors.textPrimary} font-bold mb-3 text-lg font-palo`}>Compliance</h4>
                      <p className={`${colors.textSecondary} text-base font-vastago`}>Risk-free operations</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-6 rounded-3xl bg-blue-500/15 backdrop-blur-xl border-2 border-blue-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaRocket className="text-5xl text-blue-500 mx-auto mb-4" />
                      <h4 className={`${colors.textPrimary} font-bold mb-3 text-lg font-palo`}>Growth</h4>
                      <p className={`${colors.textSecondary} text-base font-vastago`}>Scalable solutions</p>
                    </motion.div>
                    <motion.div
                      className="text-center p-6 rounded-3xl bg-blue-500/15 backdrop-blur-xl border-2 border-blue-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <FaDollarSign className="text-5xl text-blue-500 mx-auto mb-4" />
                      <h4 className={`${colors.textPrimary} font-bold mb-3 text-lg font-palo`}>Cost-Effective</h4>
                      <p className={`${colors.textSecondary} text-base font-vastago`}>Affordable quality</p>
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
              transition={{ delay: 0.05 }}
            >
              Why Choose Us
            </motion.span>
            <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
              Why Choose <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">HR2Fit</span>
            </h2>
            <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto font-vastago`}>
              We deliver comprehensive HR solutions that empower your business to thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="text-3xl text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6 font-palo`}>{feature.title}</h3>
                    <p className={`${colors.textSecondary} leading-relaxed text-lg font-vastago`}>{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Call to Action */}
      <motion.section
        className={`py-24 ${colors.bgSecondary} relative overflow-hidden`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/15"></div>
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
              Join hundreds of businesses that trust HR2Fit for their HR needs
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
    </>
  );
}
