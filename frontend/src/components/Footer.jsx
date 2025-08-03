import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowUp } from 'react-icons/hi';
import { MdOutlineSend } from 'react-icons/md';
import logo from '../assets/logo.jpg';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const { colors } = useTheme();

  return (
    <footer className={`${colors.bgPrimary} ${colors.footerText} pt-12 pb-6 sm:pt-16 sm:pb-8`}>
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo and description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="HR2Fit Logo" className="h-30" />
            </div>
            <p className="mt-3 text-sm text-gray-400 sm:mt-4 sm:text-base">
              HR2Fit is a full-service Human Resources outsourcing service
              provider. We build and deliver solutions tailored to your business
              needs.
            </p>
            <div className="mt-4 flex gap-3 sm:mt-6 sm:gap-4">
              <a
                href="#"
                className="text-gray-400  transition-colors"
              >
                <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400  transition-colors"
              >
                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors"
              >
                <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400  transition-colors"
              >
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">Menu</h3>
            <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
              {[
                'Home',
                'HR Services',
                'Recruiting',
                'HR Insights',
                'About',
                'Contact',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">Recent Posts</h3>
            <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
              {[
                'What Every Employer Needs to Know About I-9 Forms',
                'Home to Endarle Service Animals in the Workplace',
                'Why Your Company Should Have an Employee Handbook',
              ].map((post, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-sm text-gray-400  transition-colors sm:text-base"
                  >
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HR Services */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">HR Services</h3>
            <ul className="mt-2 space-y-2 sm:mt-4 sm:space-y-3">
              {[
                'Compliance & Risk Management',
                'Compensation & Benefits',
                'Employee Relations',
                'Payroll Administration',
                'Recruiting & Staffing',
                'Special Projects',
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-sm text-gray-400  transition-colors sm:text-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mt-6 sm:col-span-2 md:col-span-4 lg:col-span-1 lg:mt-0">
            <h3 className="text-base font-semibold sm:text-lg">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-400 sm:mt-4 sm:text-base">
              Subscribe to receive insights and updates from our HR experts.
            </p>
            <form className="mt-3 flex w-full max-w-xs sm:mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-l-lg border-0 bg-gray-800 px-3 py-2 text-sm text-white focus:ring-2 focus:ring-blue-600 sm:px-4 sm:py-2.5 sm:text-base"
                required
              />
              <button
                type="submit"
                className="flex-shrink-0 rounded-r-lg bg-blue-600 px-3 py-2 text-sm font-medium hover:bg-blue-700 sm:px-3 sm:py-2.5"
                aria-label="Subscribe"
              >
                <MdOutlineSend className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-800 sm:mt-12"></div>

        {/* Bottom footer */}
        <div className="mt-6 flex flex-col items-center justify-between sm:mt-8 md:flex-row">
          <p className="text-xs text-gray-500 sm:text-sm">
            &copy; {new Date().getFullYear()} HR2Fit. All rights reserved.
          </p>
          <div className="mt-3 sm:mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1.5 text-xs text-gray-400 hover:text-white sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            >
              Back to top
              <HiOutlineArrowUp className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
