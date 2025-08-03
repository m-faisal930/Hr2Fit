

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
        staggerChildren: 0.1,
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

  return (
    <>
      <Navbar />
      <div className="bg-hr-primary">
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Contact', href: '/contact' },
          ]}
        />

        {/* Contact Methods */}
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={container}
          className="py-20 relative overflow-hidden"
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

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-16"
              variants={item}
            >
              <motion.span
                className="inline-block text-xs uppercase font-bold text-hr-gradient-to border-b-2 border-hr-gradient-to pb-1 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Get In Touch
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
                Let's Start a <span className="text-hr-gradient-to">Conversation</span>
              </h2>
              <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
                Ready to transform your HR operations? Reach out to us today and discover how HR2Fit can help your business thrive.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              variants={container}
            >
              {/* Contact Card - Phone */}
              <motion.div
                variants={item}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 border rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-500 dark:bg-blue-400 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <FaPhone className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold  da mb-4 ${colors.textPrimary}">Phone Support</h3>
                    <p className="mb-4 ${colors.textSecondary}">
                      Call us directly for immediate assistance
                    </p>
                    <div className="space-y-2 ${colors.textPrimary}">
                      <p className="font-semibold">(781) 436-5399</p>
                      <p className=" text-sm">Mon-Fri: 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card - Email */}
              <motion.div
                variants={item}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-8 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700 border rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-500 dark:bg-emerald-400 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <FaEnvelope className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ${colors.textPrimary} mb-4">Email Us</h3>
                    <p className="${colors.textSecondary} mb-4">
                      Send us a message anytime
                    </p>
                    <div className="space-y-2 ${colors.textPrimary}">
                      <p className=" font-semibold">info@hr2fit.com</p>
                      <p className=" text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card - Location */}
              <motion.div
                variants={item}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative p-8 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700 border rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-purple-500 dark:bg-purple-400 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <FaMapMarkerAlt className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold ${colors.textPrimary} mb-4">Visit Our Office</h3>
                    <p className="${colors.textSecondary} mb-4">
                      Come see us in person
                    </p>
                    <div className="space-y-2 ${colors.textPrimary}">
                      <p className=" font-semibold">896 Main Street</p>
                      <p className=" text-sm">Walpole MA 02081</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
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
                Send Message
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
                Ready to Get <span className="text-hr-gradient-to">Started</span>?
              </h2>
              <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                variants={fadeInUp}
                custom={1}
                className="relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
                  <div className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-hr-light mb-2">
                            <FaUser className="inline mr-2 text-hr-gradient-to" />
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-hr-light mb-2">
                            <FaEnvelope className="inline mr-2 text-hr-gradient-to" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaGlobe className="inline mr-2 text-hr-gradient-to" />
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300"
                          placeholder="What can we help you with?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-hr-light mb-2">
                          <FaComments className="inline mr-2 text-hr-gradient-to" />
                          Message *
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-hr-primary/50 border border-hr-gradient-to/30 rounded-xl text-hr-light placeholder-hr-light/50 focus:outline-none focus:ring-2 focus:ring-hr-gradient-to focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell us about your HR needs..."
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-primary bg-gradient-to-r from-hr-gradient-from to-hr-gradient-to hover:from-hr-gradient-to hover:to-hr-gradient-from transition-all duration-300 cursor-pointer shadow-lg hover:shadow-hr-gradient-to/50"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                variants={fadeInUp}
                custom={2}
                className="space-y-8"
              >
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
                          <h4 className="text-hr-light font-semibold mb-1">Rapid Response</h4>
                          <p className="text-hr-light/70 text-sm">Get answers to your HR questions within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-sm text-hr-primary" />
                        </div>
                        <div>
                          <h4 className="text-hr-light font-semibold mb-1">Expert Guidance</h4>
                          <p className="text-hr-light/70 text-sm">Fortune 500 quality HR services for your business</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FaCheckCircle className="text-sm text-hr-primary" />
                        </div>
                        <div>
                          <h4 className="text-hr-light font-semibold mb-1">Cost Effective</h4>
                          <p className="text-hr-light/70 text-sm">Affordable solutions tailored to your budget</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-8 bg-gradient-to-br from-hr-primary to-hr-mid rounded-[30px] border border-hr-gradient-to/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-hr-gradient-from/10 to-hr-gradient-to/10 rounded-[30px]"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-hr-light mb-6">
                      Business Hours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-hr-light">Monday - Friday</span>
                        <span className="text-hr-gradient-to font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-hr-light">Saturday</span>
                        <span className="text-hr-light/60">By Appointment</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-hr-light">Sunday</span>
                        <span className="text-hr-light/60">Closed</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-hr-gradient-to/20">
                      <p className="text-hr-light/70 text-sm">
                        Emergency HR support available 24/7 for existing clients
                      </p>
                    </div>
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
                Don't wait - start your HR transformation journey today
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
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="uppercase font-bold text-sm rounded-[40px] py-4 px-8 text-hr-light border-2 border-hr-light hover:bg-hr-light hover:text-hr-primary transition-all duration-300 cursor-pointer"
              >
                Download Brochure
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );rk:text-blue-100
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

export default ContactPage;