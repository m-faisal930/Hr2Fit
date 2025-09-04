import React from 'react';
import { UserCheck, TrendingUp, Building, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const featuredServices = [
  {
    title: 'Fractionalized HR Services',
    desc: 'Professional HR expertise on a part-time or project basis, perfect for growing businesses.',
    icon: UserCheck,
    color: '#123456', // Primary blue
  },
  {
    title: 'HR Strategy Partners',
    desc: 'Strategic HR consulting to align your people practices with business objectives.',
    icon: TrendingUp,
    color: '#DC203B', // Secondary red
  },
  {
    title: 'Mergers & Acquisitions',
    desc: 'Expert HR guidance through complex M&A processes, ensuring smooth transitions.',
    icon: Building,
    color: '#414042', // Tertiary gray
  },
];

const FeaturedServiceCard = ({ title, desc, icon: Icon, color, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { colors } = useTheme();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    rest: { rotate: 0 },
    hover: { rotate: 15 },
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative ${colors.cardBg} rounded-3xl ${colors.cardBorder} p-10 flex flex-col items-center text-center overflow-hidden backdrop-blur-xl border-2 border-[#123456]/20`}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Enhanced gradient background effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
        }}
      />

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -30],
              x: [0, (Math.random() - 0.5) * 30],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Enhanced animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent rounded-3xl pointer-events-none"
        variants={{
          hover: { borderColor: color },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Enhanced icon container */}
      <motion.div className="relative mb-10" variants={iconVariants}>
        <div
          className="relative rounded-3xl p-10 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110"
          style={{ 
            backgroundColor: `${color}20`,
            background: `linear-gradient(135deg, ${color}30, ${color}15)`
          }}
        >
          <Icon className="w-16 h-16" style={{ color }} />
          
          {/* Enhanced 3D Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Enhanced animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-transparent"
            variants={{
              hover: { borderColor: `${color}50` },
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Enhanced pulse effect */}
          <motion.div
            className="absolute -inset-4 rounded-3xl opacity-0"
            style={{ backgroundColor: color }}
            variants={{
              hover: { 
                opacity: [0, 0.2, 0],
                scale: [1, 1.1, 1],
              },
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Enhanced glow particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: color,
                width: '2px',
                height: '2px',
                top: `${15 + i * 7}%`,
                left: `${15 + (i % 4) * 25}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </motion.div>

      <h3 className={`font-palo text-2xl font-bold ${colors.textPrimary} mb-4`}>
        {title}
      </h3>
      <p className={`${colors.textSecondary} text-base flex-grow font-vastago leading-relaxed`}>{desc}</p>

      <motion.button
        className="mt-8 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <ArrowRight className="w-5 h-5 text-white" />
      </motion.button>
    </motion.div>
  );
};

export default function FeaturedHRServices() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { colors } = useTheme();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="featured-services"
      className={`${colors.bgPrimary} py-24 relative overflow-hidden`}
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-60 h-60 rounded-full bg-purple-500 filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-500 filter blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-400 filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          className={`font-palo text-5xl sm:text-6xl lg:text-7xl font-bold ${colors.textPrimary} text-center mb-20`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-purple-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent animate-gradient">
            Featured HR Services
          </span>
          <div className="w-60 h-2 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 mx-auto mt-8 rounded-full"></div>
        </motion.h2>

        <motion.div
          className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {featuredServices.map((service, idx) => (
            <FeaturedServiceCard key={service.title} index={idx} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
