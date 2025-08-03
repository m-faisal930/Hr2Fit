import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const Team = () => {
  const { colors } = useTheme();
  const teamMembers = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
      name: 'Sarah',
      profession: 'Human Resources',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600',
      name: 'Johnny',
      profession: 'Sales Manager',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600',
      name: 'Rehman',
      profession: 'Software Architect',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=600',
      name: 'Mona',
      profession: 'Editor',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600',
      name: 'Silvia',
      profession: 'Software Developer',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600',
      name: 'Enrico',
      profession: 'Marketing Head',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1594369428909-cf575675ca9a?w=600',
      name: 'Ilaria',
      profession: 'Designer',
    },
  ];

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

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      className={`flex min-h-screen flex-col items-center justify-center px-5 py-8 xl:px-10 xl:py-28 ${colors.bgSecondary}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      ref={ref}
    >
      <motion.div
        className="mb-16 flex w-full flex-col items-center justify-center text-center md:mb-32 "
        variants={item}
      >
        <h2 className={`mb-6 text-3xl font-bold ${colors.textPrimary}`}>Our Team</h2>
        <p className={`w-full sm:w-1/2 ${colors.textSecondary}`}>
          We're fueled by a passion for our work and a belief in making a
          positive impact. Let our team's dedication and drive accelerate your
          success.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center pb-32 md:ml-12 md:flex-row md:pb-0"
        variants={container}
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="mb-8 last:mb-0 md:mb-0"
            variants={item}
          >
            <div className="group relative flex justify-start rounded-full border-4 border-white transition-all duration-300 ease-in-out hover:-translate-x-20 md:-ml-12 md:justify-center md:hover:-translate-x-0 md:hover:-translate-y-6 xl:border-8">
              <div className="absolute left-6 top-7 w-full text-left opacity-0 transition-all duration-300 ease-linear group-hover:translate-x-24 group-hover:opacity-100 md:-top-12 md:left-0 md:text-center md:group-hover:-translate-y-6 md:group-hover:translate-x-0">
                <h3 className="text-gray-600 font-semibold xl:text-xl">
                  {member.name}
                </h3>
                <h4 className="text-nowrap text-sm text-gray-500">
                  {member.profession}
                </h4>
              </div>
              <img
                src={member.image}
                className="size-28 rounded-full object-cover lg:size-32 xl:size-48 2xl:size-60"
                alt="Team Member"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;