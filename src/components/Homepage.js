import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="relative h-screen bg-[#0f1117] text-[#fffdf8] overflow-hidden">
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
        {/* Logo */}
        <div className="relative w-96 h-48 mb-12">
          <svg
            viewBox="0 0 400 200"
            className="absolute inset-0 w-full h-full"
          >
            {/* Outer decorative frame */}
            <rect x="25" y="25" width="350" height="150" className="stroke-[#d1bc8a] stroke-1 fill-none" />
            
            {/* Inner frame */}
            <rect x="45" y="45" width="310" height="110" className="stroke-[#d1bc8a] stroke-[0.5] fill-none" />
            
            {/* Decorative corners */}
            <path d="M25,25 L45,45" className="stroke-[#d1bc8a] stroke-1" />
            <path d="M375,25 L355,45" className="stroke-[#d1bc8a] stroke-1" />
            <path d="M25,175 L45,155" className="stroke-[#d1bc8a] stroke-1" />
            <path d="M375,175 L355,155" className="stroke-[#d1bc8a] stroke-1" />
            
            {/* Decorative vertical lines */}
            <line x1="110" y1="45" x2="110" y2="155" className="stroke-[#d1bc8a] stroke-[0.5]" />
            <line x1="290" y1="45" x2="290" y2="155" className="stroke-[#d1bc8a] stroke-[0.5]" />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="font-serif text-3xl tracking-widest text-[#d1bc8a] mb-2">THE MUSEUM</h1>
            <div className="w-32 h-px bg-[#d1bc8a] my-3"></div>
            <h2 className="font-serif text-sm tracking-widest text-[#d1bc8a]">THE SILENT HERITAGE</h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-serif text-lg text-[#fffdf8] text-opacity-80 mb-12 italic">
          A Collector's Chronicle of Timeless Forms
        </p>

        {/* Enter button with hover effect */}
        <Link
          to="/catalogue"
          className="group relative overflow-hidden"
        >
          <div className="px-12 py-3 border border-[#d1bc8a] text-[#d1bc8a] uppercase tracking-widest font-light text-sm group-hover:text-[#0f1117] transition-colors duration-500">
            Enter the Catalogue
          </div>
          <div className="absolute inset-0 bg-[#d1bc8a] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-[-1]"></div>
        </Link>
        
        {/* Museum Navigation */}
        <div className="absolute bottom-8 w-full max-w-xl mx-auto">
          <div className="flex justify-center space-x-8 text-xs text-[#d1bc8a] tracking-widest opacity-70">
            <Link to="/about" className="hover:opacity-100 transition-opacity">ABOUT</Link>
            <Link to="/exhibitions" className="hover:opacity-100 transition-opacity">EXHIBITIONS</Link>
            <Link to="/collection" className="hover:opacity-100 transition-opacity">COLLECTION</Link>
            <Link to="/visit" className="hover:opacity-100 transition-opacity">VISIT</Link>
          </div>
        </div>
      </div>
    </div>
  );
}