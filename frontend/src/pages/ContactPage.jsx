

import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
  FaWhatsapp,
  FaClock,
  FaGlobe,
  FaUser,
  FaComments,
  FaCheckCircle,
} from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { useTheme } from '../context/ThemeContext';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
const {colors} = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  return (
    <>
      <Navbar />
      <div className=''>

        {/* Contact Methods */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={container}
          className="py-24 relative overflow-hidden"
        >
          {/* Enhanced decorative background elements */}
          <div className={`absolute inset-0 overflow-hidden pointer-events-none ${colors.bgPrimary}`}>
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

          <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
            <motion.div
              className="text-center mb-20"
              variants={item}
            >
              <motion.span
                className="inline-block text-sm uppercase font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 pb-2 mb-6 font-palo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                Get In Touch
              </motion.span>
              <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                Let's Start a <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">Conversation</span>
              </h2>
              <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto font-vastago`}>
                Ready to transform your HR operations? Reach out to us today and discover how HR 4 Your business can help your business thrive.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-10 md:grid-cols-3"
              variants={container}
            >
              {/* Enhanced Contact Card - Phone */}
              <motion.div
                variants={item}
                className="group relative"
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl border-2 border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <FaPhone className="text-3xl" />
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6 font-palo`}>Phone Support</h3>
                    <p className={`mb-6 ${colors.textSecondary} text-lg font-vastago`}>
                      Call us directly for immediate assistance
                    </p>
                    <div className={`space-y-3 ${colors.textPrimary}`}>
                      <p className="font-bold text-xl">(781) 436-5399</p>
                      <p className={`text-base ${colors.textSecondary} font-vastago`}>Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Contact Card - Email */}
              <motion.div
                variants={item}
                className="group relative"
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl border-2 border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <FaEnvelope className="text-3xl" />
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6 font-palo`}>Email Us</h3>
                    <p className={`${colors.textSecondary} mb-6 text-lg font-vastago`}>
                      Send us a message anytime
                    </p>
                    <div className={`space-y-3 ${colors.textPrimary}`}>
                      <p className="font-bold text-xl">info@hr4yourbusiness.com</p>
                      <p className={`text-base ${colors.textSecondary} font-vastago`}>Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Contact Card - Location */}
              <motion.div
                variants={item}
                className="group relative"
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl border-2 border-blue-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <FaMapMarkerAlt className="text-3xl" />
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.textPrimary} mb-6 font-palo`}>Visit Our Office</h3>
                    <p className={`${colors.textSecondary} mb-6 text-lg font-vastago`}>
                      Come see us in person
                    </p>
                    <div className={`space-y-3 ${colors.textPrimary}`}>
                      <p className="font-bold text-xl">896 Main Street</p>
                      <p className={`text-base ${colors.textSecondary} font-vastago`}>Walpole MA 02081</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Contact Form Section */}
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
                Send Message
              </motion.span>
              <h2 className={`text-5xl md:text-6xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                Ready to Get <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">Started</span>?
              </h2>
              <p className={`text-2xl ${colors.textSecondary} max-w-4xl mx-auto font-vastago`}>
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Form */}
              <motion.div
                variants={fadeInUp}
                custom={1}
                className="relative"
              >
                <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                  <div className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className={`block text-base font-medium ${colors.textPrimary} mb-3 font-vastago`}>
                            <FaUser className="inline mr-3 text-blue-500" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full px-6 py-4 bg-blue-600/20 border-2 border-blue-500/30 rounded-2xl ${colors.textPrimary} placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-vastago text-lg`}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className={`block text-base font-medium ${colors.textPrimary} mb-3 font-vastago`}>
                            <FaEnvelope className="inline mr-3 text-blue-500" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-6 py-4 bg-blue-600/20 border-2 border-blue-500/30 rounded-2xl ${colors.textPrimary} placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-vastago text-lg`}
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-base font-medium ${colors.textPrimary} mb-3 font-vastago`}>
                          <FaGlobe className="inline mr-3 text-blue-500" />
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className={`w-full px-6 py-4 bg-blue-600/20 border-2 border-blue-500/30 rounded-2xl ${colors.textPrimary} placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-vastago text-lg`}
                          placeholder="What can we help you with?"
                        />
                      </div>
                      
                      <div>
                        <label className={`block text-base font-medium ${colors.textPrimary} mb-3 font-vastago`}>
                          <FaComments className="inline mr-3 text-blue-500" />
                          Message *
                        </label>
                        <textarea
                          required
                          rows={8}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`w-full px-6 py-4 bg-blue-600/20 border-2 border-blue-500/30 rounded-2xl ${colors.textPrimary} placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none font-vastago text-lg`}
                          placeholder="Tell us about your HR needs..."
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full uppercase font-bold text-base rounded-3xl py-6 px-10 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 font-palo"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Additional Info */}
              <motion.div
                variants={fadeInUp}
                custom={2}
                className="space-y-10"
              >
                <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                  <div className="relative z-10">
                    <h3 className={`text-3xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                      Why Choose HR 4 Your business?
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <FaCheckCircle className="text-lg text-white" />
                        </div>
                        <div>
                          <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Rapid Response</h4>
                          <p className={`${colors.textSecondary} text-base font-vastago`}>Get answers to your HR questions within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <FaCheckCircle className="text-lg text-white" />
                        </div>
                        <div>
                          <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Expert Guidance</h4>
                          <p className={`${colors.textSecondary} text-base font-vastago`}>Fortune 500 quality HR services for your business</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                          <FaCheckCircle className="text-lg text-white" />
                        </div>
                        <div>
                          <h4 className={`${colors.textPrimary} font-bold mb-2 text-lg font-palo`}>Cost Effective</h4>
                          <p className={`${colors.textSecondary} text-base font-vastago`}>Affordable solutions tailored to your budget</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-2xl rounded-3xl border-2 border-blue-500/30 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                  <div className="relative z-10">
                    <h3 className={`text-3xl font-bold ${colors.textPrimary} mb-8 font-palo`}>
                      Business Hours
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={`${colors.textPrimary} font-vastago text-lg`}>Monday - Friday</span>
                        <span className="text-blue-400 font-bold text-lg font-palo">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`${colors.textPrimary} font-vastago text-lg`}>Saturday</span>
                        <span className={`${colors.textSecondary} font-vastago text-lg`}>By Appointment</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`${colors.textPrimary} font-vastago text-lg`}>Sunday</span>
                        <span className={`${colors.textSecondary} font-vastago text-lg`}>Closed</span>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t-2 border-blue-500/30">
                      <p className={`${colors.textSecondary} text-base font-vastago`}>
                        Emergency HR support available 24/7 for existing clients
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
                Don't wait - start your HR transformation journey today
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
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="uppercase font-bold text-base rounded-3xl py-6 px-10 text-white border-2 border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer backdrop-blur-xl font-palo"
              >
                Download Brochure
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;