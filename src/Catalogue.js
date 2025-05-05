import React, { useState } from 'react';

const brands = [
  { id: 1, name: 'AM Brant', img: '/assets/images/ambrant.jpg' },
  { id: 2, name: 'Mughal Atelier', img: '/assets/images/mughal.png' },
  { id: 3, name: 'Flemish Collection', img: '/assets/images/flemish.png' },
];

const artists = [
  { id: 1, name: 'Katsushika Hokusai', dates: '1760–1849', img: '/assets/images/katsushika.png' },
  { id: 2, name: 'Utagawa Hiroshige', dates: '1797–1858', img: '/assets/images/utagawa.png' },
  { id: 3, name: 'Kitagawa Utamaro', dates: '1753–1806', img: '/assets/images/kitagawa.png' },
];

export default function Catalogue() {
  const [activeBrand, setActiveBrand] = useState(brands[0].id);
  const [activeArtist, setActiveArtist] = useState(artists[0].id);

  return (
    <div className="bg-[#fffdf8] text-[#212121] p-6">
      {/* Breadcrumb */}
      <nav className="text-sm font-light mb-6 space-x-1">
        <span className="opacity-70">Home</span>›
        <span className="opacity-70">Catalogue</span>›
        <span className="opacity-100">{brands.find(b => b.id === activeBrand).name}</span>›
        <span className="font-medium">{artists.find(a => a.id === activeArtist).name}</span>
      </nav>

      {/* Brand selector */}
      <section className="mb-8">
        <h2 className="font-serif text-2xl mb-4">Select Brand</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {brands.map(b => (
            <div
              key={b.id}
              onClick={() => setActiveBrand(b.id)}
              className={`min-w-[240px] h-48 relative border transition ${
                b.id === activeBrand
                  ? 'border-[#d1bc8a] shadow-lg'
                  : 'border-gray-300'
              }`}
            >
              <img
                src={b.img}
                alt={b.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <span className="text-white font-serif text-xl">{b.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artist selector */}
      <section className="mb-8">
        <h2 className="font-serif text-2xl mb-4">Select Artist</h2>
        <div className="grid grid-cols-3 gap-4">
          {artists.map(a => (
            <div
              key={a.id}
              onClick={() => setActiveArtist(a.id)}
              className={`relative h-64 cursor-pointer overflow-hidden border transition ${
                a.id === activeArtist
                  ? 'border-[#d1bc8a] shadow-lg'
                  : 'border-gray-200'
              }`}
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <h3 className="font-serif text-xl">{a.name}</h3>
                <p className="text-sm">{a.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for artworks grid… */}
      <section>
        <h2 className="font-serif text-2xl mb-4">Artworks by {artists.find(a => a.id === activeArtist).name}</h2>
        {/* …insert your artwork cards here… */}
        <p className="text-gray-500">Artworks grid to be implemented</p>
      </section>
    </div>
  );
}
