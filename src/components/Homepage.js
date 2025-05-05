import React, { useState, useEffect } from 'react';
const Homepage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);
  return (
    <div className="relative h-screen bg-[#fcf6eb] text-[#212121] overflow-hidden">
      <div className={`flex flex-col items-center justify-center h-full p-4 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-[40rem] mb-8">
          <img
            src="/assets/images/nuseum-logo.png"
            alt="The Nuseum Logo"
            className="w-full"
          />
        </div>
        <a
          href="/catalogue"
          className="group relative overflow-hidden"
        >
          <div className="px-12 py-3 border border-[#bf9347] text-[#bf9347] uppercase tracking-widest font-light text-sm group-hover:text-[#fcf6eb] group-hover:bg-[#bf9347] transition-colors duration-500">
            Enter the Catalogue
          </div>
        </a>
        <div className="absolute bottom-8 w-full max-w-xl mx-auto">
          <div className="flex justify-center space-x-8 text-xs text-[#bf9347] tracking-widest">
            <a href="/about" className="opacity-70 hover:opacity-100 transition-opacity relative pb-1.5 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#bf9347]">ABOUT</a>
            <a href="/visit" className="opacity-70 hover:opacity-100 transition-opacity relative pb-1.5 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#bf9347]">VISIT</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;