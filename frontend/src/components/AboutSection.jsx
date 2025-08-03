import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImage from '../assets/WbQnbas1.png';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { colors } = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      className={`${colors.bgPrimary} py-16 overflow-hidden`} // Changed to theme background
    >
      {/* Decorative background elements - updated to match theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-hr-gradient-to rounded-full filter blur-3xl opacity-10" // Updated color
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
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div className="md:w-1/2" variants={container}> {/* Adjusted width to match hero section ratio */}
          <motion.span
            className="inline-block text-xs uppercase font-bold text-hr-gradient-to border-b-2 border-hr-gradient-to pb-1" // Updated to theme colors
            variants={item}
          >
            About us
          </motion.span>

          <motion.h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${colors.textPrimary} mt-4 mb-6`} // Updated to theme colors
            variants={item}
          >
            About{' '}
            <motion.span
              className="text-hr-gradient-to inline-block" // Updated to theme gradient
              whileHover={{
                scale: 1.05,
                transition: {
                  yoyo: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut',
                },
              }}
            >
              HR2Fit
            </motion.span>
          </motion.h2>

          <motion.p className={`${colors.textSecondary} mb-4`} variants={item}> {/* Updated to theme colors with opacity */}
            HR2Fit provides a cohesive approach to Human Resources services
            designed for small to mid-sized businesses at Fortune 500 onsite
            quality.
          </motion.p>

          <motion.p className={`${colors.textSecondary} mb-8`} variants={item}> {/* Updated to theme colors with opacity */}
            Our unique service model delivers a complete array of HR solutions
            with a strong focus on affordability, compliance, and employee
            engagement—helping your business grow while saving time and reducing
            risk.
          </motion.p>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              to="/about"
              className="relative inline-block px-8 py-3 font-bold text-sm uppercase rounded-[40px] group" // Updated to match hero button style
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-hr-gradient-to group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-[40px]"></span>
              <span className="absolute inset-0 w-full h-full border-2 border-hr-gradient-to group-hover:bg-hr-gradient-to rounded-[40px]"></span>
              <span className="relative text-hr-light group-hover:text-hr-primary">
                Want To Know More?
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="md:w-1/3 md:ml-35"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={aboutImage}
            alt="About HR2Fit"
            className="w-full rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] border-2 border-hr-gradient-to/20" // Matched hero image styling
            whileHover={{
              scale: 1.02,
              boxShadow: '0 10px 25px rgba(192, 183, 232, 0.2)', // Updated to theme color
            }}
            transition={{
              scale: { type: 'spring', stiffness: 300 },
              shadow: { duration: 0.3 },
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}