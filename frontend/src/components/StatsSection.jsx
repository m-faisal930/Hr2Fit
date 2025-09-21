// src/components/StatsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

export default function StatsSection() {
  // triggerCount becomes true once the section is ≥30% visible
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const { colors } = useTheme();

  const stats = [
    { label: 'Recruiters Globally', value: 20, suffix: '+' },
    { label: 'Job Seekers Onboarded', value: 12000, suffix: '+' },
    { label: 'Vacancies Onboarded', value: 5000, suffix: '+' },
    { label: 'Placements Done', value: 500, suffix: '+' },
    { label: 'Satisfaction Rate', value: 95, suffix: '%' },
  ];

  return (
    <section id="stats" ref={ref} className={`${colors.bgSecondary} py-20 relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-[#123456] rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-[#DC203B] rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold ${colors.textPrimary} text-center mb-16`}>
          <span className="bg-gradient-to-r from-[#123456] via-[#DC203B] to-[#414042] bg-clip-text text-transparent">
            Trusted by 500+ Companies
          </span>
          <br />
          <span className={`${colors.textPrimary}`}>
            Worldwide for Top Global Brands
          </span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(({ label, value, suffix }, i) => (
            <motion.div
              key={i}
              className={`${colors.cardBg} ${colors.cardBorder} border rounded-3xl p-8 flex flex-col items-center text-center backdrop-blur-sm hover:shadow-2xl transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <span className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[#123456] to-[#DC203B] bg-clip-text text-transparent`}>
                {inView ? (
                  <CountUp end={value} duration={2} suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </span>
              <span className={`mt-4 text-sm font-medium ${colors.textSecondary}`}>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
