import React from 'react';
import { motion } from 'framer-motion';
import {
  FaShieldAlt,
  FaDollarSign,
  FaUsers,
  FaUserPlus,
  FaFileInvoiceDollar,
  FaBook,
  FaCog,
  FaChartLine,
  FaHandshake,
  FaGraduationCap,
  FaHeart,
  FaRocket,
} from 'react-icons/fa';
import PageHero from '../components/PageHero';
import Navbar from '../components/Navbar';
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

const services = [
  {
    title: 'Compliance & Risk Management',
    desc: 'Ensure legal compliance and minimize risk with expert HR guidance.',
    icon: FaShieldAlt,
    features: ['Legal Compliance', 'Risk Assessment', 'Policy Development', 'Audit Support']
  },
  {
    title: 'Compensation & Benefits',
    desc: 'Strategically manage employee benefits to retain top talent.',
    icon: FaDollarSign,
    features: ['Salary Structure', 'Benefits Design', 'Performance Pay', 'Total Rewards']
  },
  {
    title: 'Employee Relations',
    desc: 'Improve workplace productivity through sound employee relations.',
    icon: FaUsers,
    features: ['Conflict Resolution', 'Performance Management', 'Employee Engagement', 'Workplace Culture']
  },
  {
    title: 'Recruiting & Staffing',
    desc: 'Scalable recruitment solutions to match your business growth.',
    icon: FaUserPlus,
    features: ['Talent Acquisition', 'Candidate Screening', 'Interview Process', 'Onboarding']
  },
  {
    title: 'Payroll Administration',
    desc: 'Accurate, efficient payroll services customized to your needs.',
    icon: FaFileInvoiceDollar,
    features: ['Payroll Processing', 'Tax Compliance', 'Benefits Administration', 'Reporting']
  },
  {
    title: 'Employee Handbook Creation',
    desc: 'Craft professional handbooks to promote productive environments.',
    icon: FaBook,
    features: ['Policy Development', 'Legal Compliance', 'Employee Guidelines', 'Company Culture']
  },
];

const additionalServices = [
  {
    title: 'HR Technology Solutions',
    desc: 'Implement cutting-edge HR technology to streamline your operations.',
    icon: FaCog,
    features: ['HRIS Implementation', 'Process Automation', 'Data Analytics', 'System Integration']
  },
  {
    title: 'Performance Management',
    desc: 'Develop effective performance systems to drive employee success.',
    icon: FaChartLine,
    features: ['Goal Setting', 'Performance Reviews', 'Development Plans', 'Success Metrics']
  },
  {
    title: 'Leadership Development',
    desc: 'Build strong leadership teams through targeted development programs.',
    icon: FaGraduationCap,
    features: ['Executive Coaching', 'Leadership Training', 'Succession Planning', 'Team Building']
  },
  {
    title: 'Employee Wellness Programs',
    desc: 'Promote employee health and well-being with comprehensive wellness initiatives.',
    icon: FaHeart,
    features: ['Health Programs', 'Mental Health Support', 'Work-Life Balance', 'Wellness Benefits']
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-hr-primary">
      <Navbar />
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      {/* Main Services Section */}
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <div className="relative p-8 bg-gradient-to-br from-hr-dark to-hr-mid rounded-[25px] border border-hr-gradient-to/20 overflow-hidden h-full">
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

      {/* Additional Services Section */}
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
              Specialized Solutions
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-hr-light mb-6">
              Advanced <span className="text-hr-gradient-to">HR Services</span>
            </h2>
            <p className="text-xl text-hr-light/80 max-w-3xl mx-auto">
              Take your HR operations to the next level with our specialized services
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {additionalServices.map((service, index) => (
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
                      <service.icon className="text-2xl text-hr-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-hr-light mb-4">{service.title}</h3>
                    <p className="text-hr-light/70 leading-relaxed mb-6">{service.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
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

      {/* Why Choose Our Services */}
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
              Experience the difference that professional HR services can make for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaRocket,
                title: 'Rapid Implementation',
                desc: 'Quick setup and deployment of HR solutions'
              },
              {
                icon: FaShieldAlt,
                title: 'Compliance First',
                desc: 'Stay ahead of regulatory requirements'
              },
              {
                icon: FaHandshake,
                title: 'Dedicated Support',
                desc: 'Personal attention from experienced HR professionals'
              },
              {
                icon: FaChartLine,
                title: 'Measurable Results',
                desc: 'Track improvements in your HR metrics'
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 1}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-hr-gradient-from to-hr-gradient-to rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <advantage.icon className="text-3xl text-hr-primary" />
                </div>
                <h3 className="text-lg font-bold text-hr-light mb-3">{advantage.title}</h3>
                <p className="text-hr-light/70 text-sm">{advantage.desc}</p>
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
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
