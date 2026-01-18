import React, { useState, useEffect } from 'react';
import { Icons, NAVIGATION } from '../constants';
import Button from './Button';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    if (item.id) {
      onNavigate(item.id);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('contact');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar - Header 1 Updated with smooth slide-up transition */}
      <div 
        className={`bg-white transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-[200px] opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 py-1">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            {/* Left Section: Logo & Name */}
            <div className="flex items-center gap-[19px] cursor-pointer py-1" onClick={() => onNavigate('home')}>
               {/* Logo Image Placeholder - TCVN Box matching dimensions approx 115x57 */}
               <div className="bg-[#003399] text-white font-extrabold text-3xl flex items-center justify-center tracking-widest leading-none shrink-0" style={{ width: '115px', height: '57px' }}>
                 TCVN
               </div>
               {/* Brand Text */}
               <div className="flex flex-col justify-center">
                 <span className="text-[#141D34CC] text-[16px] font-bold font-sans leading-[20.8px]">Viện Tiêu chuẩn Chất lượng Việt Nam</span>
                 <span className="text-[#141D34CC] text-[14px] font-normal font-sans leading-[18.2px]">Vietnam National Standards & Quality Institute</span>
               </div>
            </div>

            {/* Right Section: Utilities */}
            <div className="hidden lg:flex items-center gap-[21px]">
              {/* Link 1 */}
              <a href="#" className="text-[#141D34CC] text-[14px] font-normal underline leading-[18.2px] text-right">
                Cổng dữ liệu<br/>TCVN/QCVN
              </a>
              
              {/* Divider */}
              <div className="w-[1px] h-[25px] bg-[rgba(20,29,52,0.15)]"></div>
              
              {/* Link 2 */}
              <a href="#" className="text-[#141D34CC] text-[14px] font-normal underline leading-[18.2px] text-right">
                Giải thưởng<br/>Chất lượng Quốc gia
              </a>

              {/* Divider */}
              <div className="w-[1px] h-[25px] bg-[rgba(20,29,52,0.15)]"></div>
              
              {/* Language & Icons */}
              <div className="flex items-center gap-2">
                 <div className="text-[#141D34CC] text-[14px] leading-[18.2px] mr-2">
                    <span className="font-bold">VN</span>
                    <span className="font-normal"> | EN</span>
                 </div>
                 {/* Flag VN */}
                 <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                    <Icons.FlagVN />
                 </div>
                 {/* Second Placeholder Image (e.g. User or EN Flag) */}
                 <div className="w-[30px] h-[30px] rounded-full overflow-hidden bg-gray-200">
                    {/* Placeholder content */}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Header 2 */}
      <div className="bg-[#F4F6F8] border-b border-[rgba(20,29,52,0.05)] transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Mobile: Logo appears here when scrolled (since TopBar hides) */}
            <div 
              className={`lg:hidden font-extrabold text-primary text-2xl tracking-widest cursor-pointer transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
              onClick={() => onNavigate('home')}
            >
              TCVN
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAVIGATION.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item)}
                  className={`
                    py-3 text-[14px] font-semibold font-sans leading-[18.2px] transition-colors
                    ${(currentPage === item.id) || (!item.id && currentPage === 'home' && item.href === '#')
                      ? 'text-[#0F5EE7]' 
                      : 'text-[#141D34CC] hover:text-[#0F5EE7]'
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="text-black hover:text-[#0F5EE7] transition-colors w-8 h-8 flex items-center justify-center">
                <Icons.Search />
              </button>
              
              <button 
                onClick={handleContactClick}
                className={`hidden md:inline-flex items-center justify-center h-[40px] px-6 bg-[rgba(16,103,254,0.05)] border border-[#0F5EE7] text-[#0F5EE7] text-[14px] font-semibold leading-[18.2px] hover:bg-[#0F5EE7] hover:text-white transition-all ${currentPage === 'contact' ? 'bg-[#0F5EE7] text-white' : ''}`}
              >
                Liên hệ tư vấn
              </button>

               {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-dark"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Icons.Menu />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 absolute w-full shadow-2xl z-50">
          <nav className="flex flex-col">
             <div className="p-6 border-b border-gray-100 bg-gray-50">
                <p className="text-xs text-secondary uppercase font-bold mb-3 tracking-widest">Tiện ích</p>
                <a href="#" className="block py-2 text-sm font-semibold text-dark hover:text-primary">Cổng dữ liệu TCVN/QCVN</a>
                <a href="#" className="block py-2 text-sm font-semibold text-dark hover:text-primary">Giải thưởng Chất lượng Quốc gia</a>
             </div>
            {NAVIGATION.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-dark font-bold text-sm py-4 px-6 border-b border-gray-100 hover:bg-gray-50 hover:text-primary transition-colors"
                onClick={(e) => {
                  handleNavClick(e, item);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="p-6">
              <Button fullWidth onClick={handleContactClick}>Liên hệ tư vấn</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;