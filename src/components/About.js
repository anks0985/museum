import React from 'react';
import Header from './Header';
export default function About() {
  return (
    <div className="bg-[#fcf6eb] text-[#bf9347] overflow-x-hidden min-h-screen">
      <Header activeTab={"about"} />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl text-gray-900 mb-6">
          About The Nuseum 
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The Nuseum | The Silent Heritage is a digital curatorial platform designed
          to celebrate and preserve the world's most exquisite art and artifacts.
          Leveraging a minimalist aesthetic and state-of-the-art web technologies,
          we deliver an immersive browsing experience for collectors, curators,
          and connoisseurs.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to fuse traditional craftsmanship with modern digital
          innovation, ensuring that cultural heritage transcends physical borders
          and reaches global audiences with uncompromised fidelity.
        </p>
      </div>
    </div>
  );
}
