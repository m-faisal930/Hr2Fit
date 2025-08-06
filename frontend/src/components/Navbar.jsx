
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigation items with their respective paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'HR Services', path: '/services' },
    { name: 'Recruiting', path: '/recruiting' },
    { name: 'HR Insights', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-24"></div>
      <section className={`${colors.bgPrimary} overflow-hidden pb-9 px-4 md:px-8`}>
        <header className={`flex flex-wrap mx-auto justify-between items-center py-6 transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${colors.navBg} backdrop-blur-2xl border-b-2 border-blue-500/30 shadow-2xl px-4 md:px-8`}>
        <a href="/" className="flex items-center gap-4" onClick={closeMenu}>
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white font-bold text-lg font-palo">H</span>
          </motion.div>
          <span className={`${colors.textPrimary} text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-palo`}>HR2Fit</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:inline-block">
          <ul className="flex gap-4 md:gap-6 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.name} className="group">
                <motion.a
                  href={item.path}
                  className={`uppercase font-bold text-sm ${colors.navText} ${colors.hoverText} transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-[3px] after:bg-gradient-to-r from-blue-500 to-purple-500 hover:after:w-full after:transition-all after:duration-300 font-vastago`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-4 sm:mt-3 sm:items-center md:gap-6 lg:gap-10">
          <motion.a 
            href="tel:7814365399" 
            className={`uppercase font-bold text-sm ${colors.navText} border-2 border-blue-500/40 rounded-2xl py-3 px-6 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer backdrop-blur-xl font-vastago`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            (781) 436-5399
          </motion.a>
          <motion.a 
            href="/get-started" 
            className="uppercase font-bold text-sm rounded-2xl py-3 px-6 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 font-palo"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            GET STARTED
          </motion.a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden inline-block focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-7 h-7 ${colors.navText}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={`sm:hidden fixed inset-0 z-40 ${colors.navBg} backdrop-blur-2xl border-b-2 border-blue-500/30 pt-24 px-4`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center">
              <ThemeToggle />
              <ul className="flex flex-col gap-10 text-center">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={item.path}
                      className={`uppercase font-bold text-xl ${colors.navText} ${colors.hoverText} transition-colors duration-300 font-vastago`}
                      onClick={closeMenu}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-8 mt-16 w-full max-w-[350px]">
                <motion.a 
                  href="tel:7814365399"
                  className="uppercase font-bold text-base text-white border-2 border-blue-500/40 rounded-2xl py-5 px-8 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer w-full text-center backdrop-blur-xl font-vastago"
                  onClick={closeMenu}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  (781) 436-5399
                </motion.a>
                <motion.a
                  href="/contact"
                  className="uppercase font-bold text-base rounded-2xl py-5 px-8 text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 cursor-pointer w-full text-center shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 font-palo"
                  onClick={closeMenu}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GET STARTED
                </motion.a>
              </div>
            </nav>
            
            <motion.button 
              className="absolute top-8 right-8 text-white text-4xl hover:text-blue-400 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rest of your content remains the same */}
        </section>
      </>
    );
  };

export default Navbar;