import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Testimonial = () => {
  const { colors } = useTheme();
  
  const testimonials = [
    {
      id: 1,
      quote:
        "The team's dedication and expertise accelerated our project timeline significantly. Their work ethic is truly inspiring.",
      name: 'Sarah Johnson',
      role: 'Human Resources Director',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    },
    {
      id: 2,
      quote:
        'Working with this team transformed our sales strategy. Their innovative approach delivered results beyond our expectations.',
      name: 'Johnny Smith',
      role: 'Sales Manager',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600',
    },
    {
      id: 3,
      quote:
        'The technical architecture provided was robust and scalable. It became the foundation for our entire digital transformation.',
      name: 'Rehman Ali',
      role: 'CTO',
      avatar:
        'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600',
    },
    {
      id: 4,
      quote:
        'Their creative solutions to our content challenges were both elegant and effective. A true partnership in every sense.',
      name: 'Mona Lee',
      role: 'Editor in Chief',
      avatar:
        'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=600',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const intervalRef = useRef(null);

  // Auto-scroll functionality with animation direction
  useEffect(() => {
    if (autoScroll && inView) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [autoScroll, testimonials.length, inView]);

  const handlePrev = () => {
    setDirection(-1);
    setAutoScroll(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    clearInterval(intervalRef.current);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const handleNext = () => {
    setDirection(1);
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    clearInterval(intervalRef.current);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  const scrollToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoScroll(false);
    clearInterval(intervalRef.current);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      className={`${colors.bgSecondary} py-12 px-5 xl:px-10`}
    >
      <div className=" mx-auto relative text-center">
        <div className="flex items-center justify-between mb-8 md:mb-16">
          <motion.h2
            className={`text-3xl font-bold ${colors.textPrimary}`}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            className="flex space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handlePrev}
              className={`p-2 rounded-full ${colors.cardBg} ${colors.textPrimary} ${colors.hoverBg} transition ${colors.cardBorder} border hover:shadow-md`}
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoIosArrowBack size={20} />
            </button>
            <button
              onClick={handleNext}
              className={`p-2 rounded-full ${colors.cardBg} ${colors.textPrimary} ${colors.hoverBg} transition ${colors.cardBorder} border hover:shadow-md`}
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoIosArrowForward size={20} />
            </button>
          </motion.div>
        </div>

        <div className="overflow-hidden relative min-h-[300px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full px-4 absolute"
            >
              <figure className="max-w-screen-md mx-auto">
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <FaQuoteLeft className={`h-8 ${colors.textMuted}`} />
                </motion.div>
                <blockquote>
                  <motion.p
                    className={`text-xl md:text-2xl font-medium ${colors.textPrimary} text-center`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>
                </blockquote>
                <motion.figcaption
                  className="flex items-center justify-center mt-6 space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.img
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 1,
                    }}
                  />
                  <div className={`flex items-center divide-x-2 ${colors.borderSecondary}`}>
                    <div className={`pr-3 font-medium ${colors.textPrimary}`}>
                      {testimonials[currentIndex].name}
                    </div>
                    <div className={`pl-3 text-sm font-light ${colors.textSecondary}`}>
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.figcaption>
              </figure>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? `${colors.textPrimary} scale-125`
                  : `${colors.textMuted} hover:${colors.textSecondary}`
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonial;