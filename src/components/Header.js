import React, { useState, useEffect } from 'react';
const Header = ({ activeTab }) => {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Animation effect on load and scroll detection
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  return (
    <>
      {/* Header spacer to prevent content overlap */}
      <div className={`h-24 ${scrolled ? 'h-20' : 'h-24'} transition-all duration-500`}></div>
      
      <header 
        className={`py-8 bg-[#fcf6eb] text-[#212121] fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? 'py-4 shadow-sm' : 'py-8'
        } ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-[100rem] mx-auto px-10">
          <div className="flex justify-between items-center md:flex-row flex-col md:gap-0 gap-5">
            {/* Logo with animated gold line */}
            <a href="/" className="no-underline flex flex-col group relative">
              <div className="font-light text-2xl tracking-widest text-[#212121] uppercase">THE NUSEUM</div>
              <div className="font-light text-xs tracking-widest opacity-70 mt-1 text-[#bf9347]">A MUSEUM WITHOUT WALLS</div>
              <div className="absolute -bottom-2 left-0 w-0 h-px bg-[#bf9347] transition-all duration-500 group-hover:w-full"></div>
            </a>
            
            {/* Navigation with elegant hover effects */}
            <nav className="flex gap-10 overflow-x-auto py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`font-light text-sm tracking-widest uppercase no-underline relative 
                    transition-all duration-300 
                    ${activeTab === item.name.toLowerCase() 
                      ? "text-[#bf9347]" 
                      : "text-[#212121] hover:text-[#bf9347]"}`}
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute -bottom-2 left-0 w-full h-px bg-[#bf9347] transform origin-left transition-transform duration-300 
                      ${activeTab === item.name.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                    </span>
                  </span>
                </a>
              ))}
            </nav>
          </div>
          
          {/* Decorative gold line */}
          <div className={`absolute bottom-0 left-0 w-full h-px opacity-30 transition-all duration-500 ${
            scrolled ? 'bg-[#bf9347]' : 'bg-transparent'
          }`}></div>
          
          {/* Decorative corner elements */}
          <div className={`absolute top-0 left-0 w-8 h-8 border-t border-l border-[#bf9347] opacity-0 transition-opacity duration-500 ${
            loaded && !scrolled ? 'opacity-30' : 'opacity-0'
          }`}></div>
          <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r border-[#bf9347] opacity-0 transition-opacity duration-500 ${
            loaded && !scrolled ? 'opacity-30' : 'opacity-0'
          }`}></div>
        </div>
      </header>
    </>
  );
};
export default Header;