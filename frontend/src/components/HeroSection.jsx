
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`${colors.bgPrimary} overflow-hidden pb-9 px-4 md:px-8`}>


      <Navbar />

{/* Hero Section - Updated with better image integration */}
<section className="relative flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-9 md:gap-4 py-4 my-12">
  {/* Decorative curve - unchanged */}
  <svg width="736" height="423" className="absolute top-[50px] sm:top-[200px] sm:right-[-150px]" viewBox="0 0 736 423" fill="none">
    <path d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5" stroke="url(#paint0_linear_16_172)" strokeWidth="6"></path>
    <defs>
      <linearGradient id="paint0_linear_16_172" x1="700.5" y1="-3.99998" x2="14.5" y2="361" gradientUnits="userSpaceOnUse">
        <stop stopColor="#343045"></stop>
        <stop offset="0.213542" stopColor="#C0B7E8"></stop>
        <stop offset="0.71875" stopColor="#8176AF"></stop>
        <stop offset="1" stopColor="#343045"></stop>
      </linearGradient>
    </defs>
  </svg>
  
  {/* Text content - unchanged */}
  <div className="md:w-[520px] z-20">
    <h1 className={`text-3xl md:text-[36px] lg:text-[46px] leading-[56px] ${colors.textPrimary} font-bold`}>
      <span className="text-[#C0B7E8]">Human Resource Services</span> for Small to Medium Sized Businesses
    </h1>
    <p className={`text-base ${colors.textPrimary} mt-4 md:mt-9 mb-10 md:mb-16`}>
      HR2fit provides a cohesive approach to Human Resources services, designed for small to mid-size businesses with Fortune 500 quality. Our unique service model delivers complete HR solutions directly to your business with an emphasis on affordability.
    </p>
    <div className="flex gap-6 sm:gap-10">
      <button className="uppercase font-bold text-xs rounded-[40px] py-2 lg:py-4 px-4 lg:px-9 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:from-[#C0B7E8] hover:to-[#8176AF] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#8176AF]/50">
        REQUEST ASSESSMENT
      </button>
      <svg className="w-8 h-6 sm:w-12 sm:h-9 hover:scale-110 transition-transform duration-300 cursor-pointer" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.8334 19L2.16669 19M43.8334 19L27.1667 35.6667M43.8334 19L27.1667 2.33333" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </div>
  </div>
  
  {/* Enhanced Image Container */}
  <div className="relative z-20 w-full max-w-[430px]">
    {/* Gradient border container */}
    <div className="p-[3px] rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:from-[#C0B7E8] hover:to-[#8176AF] transition-all duration-500">
      {/* Image with better framing */}
      <div className="relative overflow-hidden rounded-[97px] md:rounded-bl-[197px] lg:rounded-bl-[247px] h-full w-full aspect-square md:aspect-[1/1.1]">
        {/* Professional HR image with overlay */}
        <img 
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="Professional HR team discussing business strategies" 
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#302c42]/70 to-[#302c42]/20"></div>
      </div>
    </div>
    
    {/* Decorative elements */}
    {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#C0B7E8] rounded-full opacity-30"></div>
    <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#8176AF] rounded-full opacity-30"></div> */}
  </div>
</section>

      {/* Contact Info Bar */}
      <div className={`flex relative z-30 justify-center sm:justify-between gap-5 items-center mt-6 mx-auto rounded-[90px] py-3 px-3 sm:p-8 lg:p-14 ${colors.bgSecondary}`}>
        <div className="flex sm:flex-1 gap-4 lg:gap-6">
          <svg width="42" height="63" viewBox="0 0 42 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none">
            <path fillRule="evenodd" clipRule="evenodd" d="M21 0.833344C32.2758 0.833344 41.4166 9.9742 41.4166 21.25C41.4166 24.6593 40.5834 27.8717 39.1039 30.6983L21 62.0833L3.31538 31.4595C1.57498 28.4542 0.583313 24.9693 0.583313 21.25C0.583313 9.9742 9.72416 0.833344 21 0.833344ZM21 6.66668C12.9458 6.66668 6.41665 13.1959 6.41665 21.25C6.41665 23.566 6.95093 25.7882 7.96198 27.7943L8.45197 28.6893L21 50.4167L33.6366 28.5362C34.9071 26.3423 35.5833 23.8555 35.5833 21.25C35.5833 13.1959 29.0541 6.66668 21 6.66668ZM21 12.5C25.8325 12.5 29.75 16.4175 29.75 21.25C29.75 26.0825 25.8325 30 21 30C16.1675 30 12.25 26.0825 12.25 21.25C12.25 16.4175 16.1675 12.5 21 12.5ZM21 18.3333C19.3891 18.3333 18.0833 19.6392 18.0833 21.25C18.0833 22.8608 19.3891 24.1667 21 24.1667C22.6108 24.1667 23.9166 22.8608 23.9166 21.25C23.9166 19.6392 22.6108 18.3333 21 18.3333Z" fill="#C0B7E8"></path>
          </svg>
          <div className={colors.textPrimary}>
            <h2 className={`hidden sm:inline-block text-2xl font-bold ${colors.textPrimary}`}>Visit Our Office</h2>
            <p className={`text-sm mt-3 ${colors.textSecondary}`}>896 Main Street, Walpole MA 02081</p>
          </div>
        </div>
        
        <div className="hidden sm:flex flex-1 gap-4 lg:gap-6 ${colors.textPrimary}">
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.6458 11.9792C33.458 12.3327 35.2569 13.1319 36.5625 14.4375C37.8681 15.7431 38.6673 17.542 39.0208 19.3542M32.875 3.375C36.64 3.79326 40.028 5.61471 42.7083 8.29167C45.3887 10.9686 47.202 14.3605 47.625 18.125M47.6237 36.5051V43.1666C47.634 45.7131 45.3443 47.8395 42.7734 47.6077C20.5835 47.625 3.37515 30.2568 3.39252 8.21591C3.16097 5.65866 5.27686 3.37761 7.82008 3.37522H14.4948C15.5746 3.36461 16.6214 3.74621 17.4401 4.4489C19.7676 6.44667 21.2648 13.2274 20.6887 15.923C20.239 18.0276 18.1175 19.4999 16.6752 20.9394C19.8425 26.4985 24.4545 31.1014 30.0247 34.2624C31.467 32.823 32.9423 30.7057 35.051 30.2568C37.7561 29.6811 44.5805 31.1803 46.5702 33.5241C47.2758 34.3552 47.6507 35.4161 47.6237 36.5051Z" stroke="#C0B7E8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <div className={colors.textPrimary}>
            <h2 className="text-2xl font-bold">Call Us Today</h2>
            <p className="text-sm mt-3">(781) 436-5399</p>
          </div>
        </div>
        
        <div className="hidden lg:flex flex-1 gap-4 lg:gap-6 ${colors.textPrimary}">
          <svg width="55" height="45" viewBox="0 0 55 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.91825 4.33491C4.40836 3.8448 5.08545 3.54166 5.83333 3.54166H49.1667C49.9146 3.54166 50.5916 3.8448 51.0817 4.33491M3.91825 4.33491C3.42814 4.82502 3.125 5.50211 3.125 6.24999V38.75C3.125 40.2458 4.33756 41.4583 5.83333 41.4583H49.1667C50.6624 41.4583 51.875 40.2458 51.875 38.75V6.24999C51.875 5.5021 51.5719 4.82502 51.0817 4.33491M3.91825 4.33491L23.6698 24.0864C25.7852 26.2017 29.2148 26.2017 31.3302 24.0864L51.0817 4.33491" stroke="#C0B7E8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <div className={colors.textPrimary}>
            <h2 className="text-2xl font-bold">Email Us</h2>
            <p className="text-sm mt-3">info@hr2fit.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;