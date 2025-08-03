
import { useState, useEffect } from 'react';
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
      <div className="h-20"></div>
      <section className={`${colors.bgPrimary} overflow-hidden pb-9 px-4 md:px-8`}>
        <header className={`flex flex-wrap mx-auto justify-between items-center py-4 transition-all duration-300 fixed top-0 left-0 right-0 z-50 ${colors.navBg} shadow-lg px-4 md:px-8`}>
        <a href="/" className="flex items-center gap-3" onClick={closeMenu}>

          <span className={`${colors.textPrimary} text-xl md:text-2xl lg:text-3xl font-bold`}>HR2Fit</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:inline-block">
          <ul className="flex gap-3 md:gap-5 lg:gap-10">
            {navItems.map((item) => (
              <li key={item.name} className="group">
                <a
                  href={item.path}
                  className={`uppercase font-bold text-xs ${colors.navText} ${colors.hoverText} transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:after:w-full after:transition-all after:duration-300`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex gap-3 sm:mt-3 sm:items-center md:gap-5 lg:gap-9">
          <a href="tel:7814365399" className={`uppercase font-bold text-xs ${colors.navText} border-2 ${colors.borderPrimary} rounded-[40px] py-1 px-3 md:py-2 lg:py-4 md:px-4 lg:px-9 hover:bg-white hover:text-[#302c42] transition-colors duration-300 cursor-pointer`}>
            (781) 436-5399
          </a>
          <a href="/get-started" className="uppercase font-bold text-xs rounded-[40px] py-1 px-3 md:py-2 lg:py-4 md:px-4 lg:px-9 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:from-[#C0B7E8] hover:to-[#8176AF] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#8176AF]/50">
            GET STARTED
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden inline-block focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 ${colors.navText}`}
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
      {isMenuOpen && (
        <div className={`sm:hidden fixed inset-0 z-40 ${colors.navBg} bg-opacity-95 pt-20 px-4`}>
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={`uppercase font-bold text-lg ${colors.navText} ${colors.hoverText} transition-colors duration-300`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col gap-6 mt-12 w-full max-w-[300px]">
              <a 
                href="tel:7814365399"
                className="uppercase font-bold text-sm text-white border-2 border-white rounded-[40px] py-4 px-6 hover:bg-white hover:text-[#302c42] transition-colors duration-300 cursor-pointer w-full text-center"
                onClick={closeMenu}
              >
                (781) 436-5399
              </a>
              <a
                href="/contact"
                className="uppercase font-bold text-sm rounded-[40px] py-4 px-6 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:from-[#C0B7E8] hover:to-[#8176AF] transition-all duration-300 cursor-pointer w-full text-center"
                onClick={closeMenu}
              >
                GET STARTED
              </a>
              <ThemeToggle />
            </div>
          </nav>
          
          <button 
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
      )}

      {/* Rest of your content remains the same */}
        </section>
      </>
    );
  };

export default Navbar;