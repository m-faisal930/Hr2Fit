// import React, { useEffect, useRef, useState } from 'react';

// const TechStacks = () => {
//   // Technical roles with icons
//   const technicalRoles = [
//     { name: 'Angular/Node', icon: '⚛️' },
//     { name: 'Swift', icon: '🍏' },
//     { name: 'Back End', icon: '⚙️' },
//     { name: 'Web', icon: '🌐' },
//     { name: 'GraphQL', icon: '📊' },
//     { name: 'Python', icon: '🐍' },
//     { name: 'Blockchain', icon: '⛓️' },
//     { name: 'Front End', icon: '🎨' },
//     { name: 'React.js', icon: '⚛️' },
//     { name: 'React Native', icon: '📱' },
//     { name: 'App', icon: '📲' },
//     { name: 'DevOps', icon: '🔄' },
//     { name: 'Full Stack', icon: '🧩' },
//     { name: 'Java', icon: '☕' },
//     { name: 'iOS', icon: '' },
//     { name: 'QA Engineers', icon: '🧪' },
//     { name: 'Android', icon: '🤖' },
//     { name: 'Ruby on Rails', icon: '💎' },
//     { name: 'PHP', icon: '🐘' },
//   ];

//   // Non-technical roles with icons
//   const nonTechnicalRoles = [
//     { name: 'Project Manager', icon: '📅' },
//     { name: 'Product Owner', icon: '🎯' },
//     { name: 'UI/UX Designer', icon: '✏️' },
//     { name: 'Business Analyst', icon: '📈' },
//     { name: 'Content Writer', icon: '✍️' },
//     { name: 'Digital Marketer', icon: '📢' },
//     { name: 'HR Specialist', icon: '🤝' },
//     { name: 'Sales Executive', icon: '💼' },
//     { name: 'Customer Support', icon: '📞' },
//     { name: 'Data Analyst', icon: '🔍' },
//     { name: 'SEO Specialist', icon: '🔎' },
//     { name: 'Social Media Manager', icon: '📱' },
//   ];

//   const techRef = useRef(null);
//   const nonTechRef = useRef(null);
//   const [techPaused, setTechPaused] = useState(false);
//   const [nonTechPaused, setNonTechPaused] = useState(false);

//   // Auto-scroll functionality with pause on hover
//   useEffect(() => {
//     const techContainer = techRef.current;
//     const nonTechContainer = nonTechRef.current;
//     let techScrollAmount = 0;
//     let nonTechScrollAmount = 0;
//     let animationFrameId;

//     const scroll = () => {
//       if (!techPaused && techContainer) {
//         techScrollAmount += 0.5;
//         if (techScrollAmount >= techContainer.scrollWidth / 2) {
//           techScrollAmount = 0;
//         }
//         techContainer.scrollLeft = techScrollAmount;
//       }

//       if (!nonTechPaused && nonTechContainer) {
//         nonTechScrollAmount += 0.5;
//         if (nonTechScrollAmount >= nonTechContainer.scrollWidth / 2) {
//           nonTechScrollAmount = 0;
//         }
//         nonTechContainer.scrollLeft = nonTechScrollAmount;
//       }

//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [techPaused, nonTechPaused]);

//   return (
//     <section className="bg-white py-16 px-5 xl:px-10 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
//         <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
//       </div>

//       <div className="max-w-screen-xl mx-auto relative z-10">
//         <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
//           <span className="relative inline-block">
//             <span className="relative z-10">Roles We Hire For</span>
//             <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-0"></span>
//           </span>
//         </h2>

//         {/* Technical Roles */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-6 ml-2 relative inline-block">
//             <span className="relative z-10">Technical Roles</span>
//             <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-100 -z-0"></span>
//           </h3>
//           <div
//             ref={techRef}
//             className="flex overflow-hidden py-6 cursor-grab active:cursor-grabbing"
//             onMouseEnter={() => setTechPaused(true)}
//             onMouseLeave={() => setTechPaused(false)}
//             onTouchStart={() => setTechPaused(true)}
//             onTouchEnd={() => setTechPaused(false)}
//           >
//             <div className="flex whitespace-nowrap">
//               {[...technicalRoles, ...technicalRoles].map((role, index) => (
//                 <div
//                   key={`tech-${index}`}
//                   className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl text-gray-100 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-900 transform-gpu"
//                 >
//                   <span className="text-2xl mr-3">{role.icon}</span>
//                   <span>{role.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Non-Technical Roles */}
//         <div>
//           <h3 className="text-2xl font-semibold text-gray-800 mb-6 ml-2 relative inline-block">
//             <span className="relative z-10">Non-Technical Roles</span>
//             <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-100 -z-0"></span>
//           </h3>
//           <div
//             ref={nonTechRef}
//             className="flex overflow-hidden py-6 cursor-grab active:cursor-grabbing"
//             onMouseEnter={() => setNonTechPaused(true)}
//             onMouseLeave={() => setNonTechPaused(false)}
//             onTouchStart={() => setNonTechPaused(true)}
//             onTouchEnd={() => setNonTechPaused(false)}
//           >
//             <div className="flex whitespace-nowrap">
//               {[...nonTechnicalRoles, ...nonTechnicalRoles].map(
//                 (role, index) => (
//                   <div
//                     key={`nontech-${index}`}
//                     className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl text-gray-100 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-900 transform-gpu"
//                   >
//                     <span className="text-2xl mr-3">{role.icon}</span>
//                     <span>{role.name}</span>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStacks;


















import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStacks = () => {
  // Technical roles with icons
  const technicalRoles = [
    { name: 'Angular/Node', icon: '⚛️' },
    { name: 'Swift', icon: '🍏' },
    { name: 'Back End', icon: '⚙️' },
    { name: 'Web', icon: '🌐' },
    { name: 'GraphQL', icon: '📊' },
    { name: 'Python', icon: '🐍' },
    { name: 'Blockchain', icon: '⛓️' },
    { name: 'Front End', icon: '🎨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'React Native', icon: '📱' },
    { name: 'App', icon: '📲' },
    { name: 'DevOps', icon: '🔄' },
    { name: 'Full Stack', icon: '🧩' },
    { name: 'Java', icon: '☕' },
    { name: 'iOS', icon: '' },
    { name: 'QA Engineers', icon: '🧪' },
    { name: 'Android', icon: '🤖' },
    { name: 'Ruby on Rails', icon: '💎' },
    { name: 'PHP', icon: '🐘' },
  ];

  // Non-technical roles with icons
  const nonTechnicalRoles = [
    { name: 'Project Manager', icon: '📅' },
    { name: 'Product Owner', icon: '🎯' },
    { name: 'UI/UX Designer', icon: '✏️' },
    { name: 'Business Analyst', icon: '📈' },
    { name: 'Content Writer', icon: '✍️' },
    { name: 'Digital Marketer', icon: '📢' },
    { name: 'HR Specialist', icon: '🤝' },
    { name: 'Sales Executive', icon: '💼' },
    { name: 'Customer Support', icon: '📞' },
    { name: 'Data Analyst', icon: '🔍' },
    { name: 'SEO Specialist', icon: '🔎' },
    { name: 'Social Media Manager', icon: '📱' },
  ];

  const techRef = useRef(null);
  const nonTechRef = useRef(null);
  const [techPaused, setTechPaused] = useState(false);
  const [nonTechPaused, setNonTechPaused] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Auto-scroll functionality with pause on hover
  useEffect(() => {
    const techContainer = techRef.current;
    const nonTechContainer = nonTechRef.current;
    let techScrollAmount = 0;
    let nonTechScrollAmount = 0;
    let animationFrameId;

    const scroll = () => {
      if (!techPaused && techContainer) {
        techScrollAmount += 0.5;
        if (techScrollAmount >= techContainer.scrollWidth / 2) {
          techScrollAmount = 0;
        }
        techContainer.scrollLeft = techScrollAmount;
      }

      if (!nonTechPaused && nonTechContainer) {
        nonTechScrollAmount += 0.5;
        if (nonTechScrollAmount >= nonTechContainer.scrollWidth / 2) {
          nonTechScrollAmount = 0;
        }
        nonTechContainer.scrollLeft = nonTechScrollAmount;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    if (inView) {
      animationFrameId = requestAnimationFrame(scroll);
      controls.start('visible');
    } else {
      controls.start('hidden');
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [techPaused, nonTechPaused, inView, controls]);

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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
      className="bg-white py-16 px-5 xl:px-10 relative overflow-hidden"
    >
      {/* Animated decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20"
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
          className="absolute bottom-20 right-10 w-60 h-60 bg-purple-100 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          variants={item}
        >
          <span className="relative inline-block">
            <span className="relative z-10">Roles We Hire For</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        {/* Technical Roles */}
        <motion.div className="mb-16" variants={item}>
          <motion.h3
            className="text-2xl font-semibold text-gray-800 mb-6 ml-2 relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">Technical Roles</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-100 -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
          </motion.h3>
          <div
            ref={techRef}
            className="flex overflow-hidden py-6 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setTechPaused(true)}
            onMouseLeave={() => setTechPaused(false)}
            onTouchStart={() => setTechPaused(true)}
            onTouchEnd={() => setTechPaused(false)}
          >
            <div className="flex whitespace-nowrap">
              {[...technicalRoles, ...technicalRoles].map((role, index) => (
                <motion.div
                  key={`tech-${index}`}
                  className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl text-gray-100 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-900 transform-gpu"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-2xl mr-3">{role.icon}</span>
                  <span>{role.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Non-Technical Roles */}
        <motion.div variants={item}>
          <motion.h3
            className="text-2xl font-semibold text-gray-800 mb-6 ml-2 relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">Non-Technical Roles</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-1 bg-purple-100 -z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
          </motion.h3>
          <div
            ref={nonTechRef}
            className="flex overflow-hidden py-6 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setNonTechPaused(true)}
            onMouseLeave={() => setNonTechPaused(false)}
            onTouchStart={() => setNonTechPaused(true)}
            onTouchEnd={() => setNonTechPaused(false)}
          >
            <div className="flex whitespace-nowrap">
              {[...nonTechnicalRoles, ...nonTechnicalRoles].map(
                (role, index) => (
                  <motion.div
                    key={`nontech-${index}`}
                    className="inline-flex items-center justify-center px-8 py-4 mx-3 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl text-gray-100 font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-900 transform-gpu"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl mr-3">{role.icon}</span>
                    <span>{role.name}</span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStacks;