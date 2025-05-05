import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#1c1f2f] text-[#fffdf8] p-4">
      <div className="text-center space-y-8">
        {/* Logo SVG */}
        <div className="relative w-80 h-40 mx-auto">
          <svg
            viewBox="0 0 400 200"
            className="absolute inset-0 w-full h-full stroke-[#d1bc8a] stroke-1 fill-none"
          >
            <rect x="50" y="50" width="300" height="100" />
            <line x1="90" y1="50" x2="90" y2="150" />
            <line x1="310" y1="50" x2="310" y2="150" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
            <h1 className="font-serif text-2xl tracking-widest text-[#d1bc8a]">The Museum</h1>
            <h2 className="font-serif text-sm tracking-wide text-[#d1bc8a]">The Silent Heritage</h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-serif text-lg text-opacity-80">
          A Collector’s Chronicle of Timeless Forms
        </p>

        {/* Enter button */}
        <Link
          to="/catalogue"
          className="inline-block px-6 py-2 border border-[#d1bc8a] text-[#d1bc8a] uppercase tracking-wider hover:bg-[#d1bc8a] hover:text-[#1c1f2f] transition"
        >
          Enter the Catalogue
        </Link>
      </div>
    </div>
  );
}
