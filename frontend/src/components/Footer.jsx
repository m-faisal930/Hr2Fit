import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowUp } from 'react-icons/hi';
import { MdOutlineSend } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const { colors, isDarkMode } = useTheme();

  return (
    <footer className={`${colors.bgPrimary} ${colors.footerText} pt-20 pb-12 sm:pt-24 sm:pb-16 relative overflow-hidden`}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-8">
        <div className="absolute bottom-0 left-10 w-60 h-60 bg-[#123456] rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-10 w-80 h-80 bg-[#DC203B] rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#414042] rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Enhanced Logo and description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={isDarkMode ? logoDark : logoLight} 
                alt="HR 4 Your business" 
                className="h-25 w-auto object-contain"
              />
            </motion.div>
            <motion.p 
              className="mt-6 text-base text-gray-400 sm:mt-8 sm:text-lg leading-relaxed font-vastago"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              HR 4 Your business is a full-service Human Resources outsourcing service
              provider. We build and deliver solutions tailored to your business
              needs with cutting-edge AI technology.
            </motion.p>
            <motion.div 
              className="mt-8 flex gap-6 sm:mt-10 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {[
                { icon: FaFacebook, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaInstagram, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300 p-1 rounded-xl hover:bg-blue-500/10 shadow-lg"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Menu */}
          <motion.div 
            className="mt-8 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold sm:text-xl text-white font-palo">Menu</h3>
            <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {[
                'Home',
                'HR Services',
                'Recruiting',
                'HR Insights',
                'About',
                'Contact',
              ].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="text-base text-gray-400 hover:text-blue-400 transition-colors duration-300 sm:text-lg font-vastago"
                    whileHover={{ x: 8 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Recent Posts */}
          <motion.div 
            className="mt-8 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold sm:text-xl text-white font-palo">Recent Posts</h3>
            <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {[
                'What Every Employer Needs to Know About I-9 Forms',
                'Home to Endarle Service Animals in the Workplace',
                'Why Your Company Should Have an Employee Handbook',
              ].map((post, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + idx * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="text-base text-gray-400 hover:text-blue-400 transition-colors duration-300 sm:text-lg font-vastago"
                    whileHover={{ x: 8 }}
                  >
                    {post}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced HR Services */}
          <motion.div 
            className="mt-8 sm:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
          >
            <h3 className="text-lg font-semibold sm:text-xl text-white font-palo">HR Services</h3>
            <ul className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {[
                'AI-Powered Recruitment',
                'Performance Analytics',
                'Compliance Automation',
                'Employee Engagement',
                'Smart Payroll System',
                'Global HR Solutions',
              ].map((service, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                >
                  <motion.a
                    href="#"
                    className="text-base text-gray-400 hover:text-blue-400 transition-colors duration-300 sm:text-lg font-vastago"
                    whileHover={{ x: 8 }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Newsletter */}
          <motion.div 
            className="mt-10 sm:col-span-2 md:col-span-4 lg:col-span-1 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold sm:text-xl text-black font-palo">Newsletter</h3>
            <p className="mt-6 text-base text-gray-400 sm:mt-8 sm:text-lg leading-relaxed font-vastago">
              Subscribe to receive insights and updates from our AI-powered HR experts.
            </p>
            <motion.form 
              className="mt-6 flex w-full max-w-xs sm:mt-8"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-l-2xl border-0 bg-gray-800/50 backdrop-blur-xl px-5 py-4 text-base text-white focus:ring-2 focus:ring-blue-500 focus:outline-none sm:px-6 sm:py-4.5 sm:text-lg font-vastago"
                required
              />
              <motion.button
                type="submit"
                className="flex-shrink-0 rounded-r-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-4 text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 sm:px-6 sm:py-4.5 shadow-lg hover:shadow-xl font-palo"
                aria-label="Subscribe"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdOutlineSend className="h-5 w-5" />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Enhanced Divider */}
        <motion.div 
          className="mt-16 border-t-2 border-gray-800/50 sm:mt-20"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        ></motion.div>

        {/* Enhanced Bottom footer */}
        <motion.div 
          className="mt-12 flex flex-col items-center justify-between sm:mt-16 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          <p className="text-sm text-gray-500 sm:text-base font-vastago">
            &copy; {new Date().getFullYear()} HR 4 Your business. All rights reserved.
          </p>
          <div className="mt-6 sm:mt-8 md:mt-0">
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-xl border-2 border-blue-500/40 px-6 py-3 text-sm text-gray-400 hover:text-white hover:border-blue-400 transition-all duration-300 sm:gap-4 sm:px-8 sm:py-4 sm:text-base font-vastago shadow-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to top
              <HiOutlineArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
