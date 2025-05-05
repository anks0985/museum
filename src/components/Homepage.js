import React, { useState, useEffect } from 'react';

const Homepage = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="relative h-screen bg-[#fffdf8] text-[#212121] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-[#d1bc8a]"
              style={{
                width: `${Math.random() * 300}px`,
                height: '1px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className={`flex flex-col items-center justify-center h-full p-4 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Logo Placeholder */}
        <div className="relative w-64 mb-8">
          <img 
            src="/api/placeholder/400/400" 
            alt="The Nuseum Logo" 
            className="w-full"
          />
        </div>

        <h1 className="font-['Cormorant_Garamond'] text-5xl text-[#d1bc8a] mb-2 tracking-wider">THE NUSEUM</h1>
        <p className="font-['Cormorant_Garamond'] text-lg text-[#d1bc8a] text-opacity-80 mb-12 tracking-wider">
          A MUSEUM WITHOUT WALLS
        </p>

        {/* Enter button with hover effect */}
        <a
          href="/catalogue"
          className="group relative overflow-hidden"
        >
          <div className="px-12 py-3 border border-[#d1bc8a] text-[#d1bc8a] uppercase tracking-widest font-light text-sm group-hover:text-[#fffdf8] group-hover:bg-[#d1bc8a] transition-colors duration-500">
            Enter the Catalogue
          </div>
        </a>
        
        {/* Museum Navigation */}
        <div className="absolute bottom-8 w-full max-w-xl mx-auto">
          <div className="flex justify-center space-x-8 text-xs font-['Nunito_Sans'] text-[#212121] tracking-widest">
            <a href="/about" className="opacity-70 hover:opacity-100 transition-opacity relative pb-1.5 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#d1bc8a]">ABOUT</a>
            <a href="/exhibitions" className="opacity-70 hover:opacity-100 transition-opacity relative pb-1.5 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#d1bc8a]">EXHIBITIONS</a>
            <a href="/collection" className="opacity-70 hover:opacity-100 transition-opacity relative pb-1.5 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#d1bc8a]">COLLECTION</a>
            <a href="/visit" className="opacity-70 hover:opacity-100 transition-opacity relative pb-1.5 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#d1bc8a]">VISIT</a>
          </div>
        </div>
      </div>

      {/* Advisory Panel */}
      <div className="fixed bottom-10 right-10 z-10">
        <button className="bg-[#fffdf8] border border-[#d1bc8a] font-['Cormorant_Garamond'] tracking-wider py-4 px-8 cursor-pointer transition-all duration-400 ease-out hover:bg-[#d1bc8a] hover:text-[#fffdf8]">
          Request Advisory
        </button>
      </div>
    </div>
  );
};

export default Homepage;