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
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
          className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"
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
          className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div className="md:w-1/2" variants={container}> {/* Adjusted width to match hero section ratio */}
          <motion.span
            className="inline-block text-xs uppercase font-bold text-blue-600 dark:text-blue-400 border-b-2 border-blue-500 pb-1"
            variants={item}
          >
            About us
          </motion.span>

          <motion.h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold ${colors.textPrimary} mt-4 mb-6`}
            variants={item}
          >
            About{' '}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent inline-block"
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
              className="relative inline-block px-8 py-4 font-bold text-sm uppercase rounded-2xl group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative">
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
          transition={{ delay: 0.1 }}
        >
          <motion.img
            src={aboutImage}
            alt="About HR2Fit"
            className="w-full rounded-3xl border-2 border-blue-500/20 shadow-2xl"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
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