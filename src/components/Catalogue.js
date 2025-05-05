import React, { useState, useEffect } from 'react';

const brands = [
  { id: 1, name: 'AM Brant', img: '/assets/images/ambrant.jpg', period: '18th Century' },
  { id: 2, name: 'Mughal Atelier', img: '/assets/images/mughal.png', period: '16th-17th Century' },
  { id: 3, name: 'Flemish Collection', img: '/assets/images/flemish.png', period: '15th Century' },
];

const artists = [
  { id: 1, name: 'Katsushika Hokusai', dates: '1760–1849', img: '/assets/images/katsushika.png', origin: 'Japan', style: 'Ukiyo-e' },
  { id: 2, name: 'Utagawa Hiroshige', dates: '1797–1858', img: '/assets/images/utagawa.png', origin: 'Japan', style: 'Ukiyo-e' },
  { id: 3, name: 'Kitagawa Utamaro', dates: '1753–1806', img: '/assets/images/kitagawa.png', origin: 'Japan', style: 'Ukiyo-e' },
];

// Sample artworks
const artworks = [
  { id: 1, title: 'The Great Wave', year: '1831', img: '/assets/images/katsushika.png', artistId: 1 },
  { id: 2, title: 'Fine Wind, Clear Morning', year: '1832', img: '/assets/images/katsushika.png', artistId: 1 },
  { id: 3, title: 'Plum Estate', year: '1857', img: '/assets/images/utagawa.png', artistId: 2 },
  { id: 4, title: 'Evening Snow', year: '1832', img: '/assets/images/utagawa.png', artistId: 2 },
  { id: 5, title: 'Three Beauties', year: '1793', img: '/assets/images/kitagawa.png', artistId: 3 },
  { id: 6, title: 'Midnight', year: '1801', img: '/assets/images/kitagawa.png', artistId: 3 },
];

export default function Catalogue() {
  const [activeBrand, setActiveBrand] = useState(brands[0].id);
  const [activeArtist, setActiveArtist] = useState(artists[0].id);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  // Animation effect on load
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  // Filter artworks by active artist
  const filteredArtworks = artworks.filter(artwork => artwork.artistId === activeArtist);
  
  const currentArtist = artists.find(a => a.id === activeArtist);
  const currentBrand = brands.find(b => b.id === activeBrand);

  return (
    <div className="bg-[#0f1117] text-[#fffdf8] min-h-screen">
      {/* Header with gold line */}
      <header className="relative py-6 bg-[#0f1117]">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="font-serif text-xl text-[#d1bc8a]">THE MUSEUM</a>
          <div className="flex space-x-8 text-xs uppercase tracking-widest">
            <a href="/about" className="text-[#fffdf8] hover:text-[#d1bc8a] transition-colors">About</a>
            <a href="/exhibitions" className="text-[#fffdf8] hover:text-[#d1bc8a] transition-colors">Exhibitions</a>
            <a href="/visit" className="text-[#fffdf8] hover:text-[#d1bc8a] transition-colors">Visit</a>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#d1bc8a] to-transparent"></div>
      </header>

      <div className={`container mx-auto px-6 py-12 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Breadcrumb with artistic separator */}
        <nav className="text-sm mb-12 flex items-center space-x-2">
          <a href="/" className="opacity-70 hover:text-[#d1bc8a] transition-colors">Home</a>
          <span className="text-[#d1bc8a] opacity-50">━</span>
          <span className="opacity-70">Catalogue</span>
          <span className="text-[#d1bc8a] opacity-50">━</span>
          <span className="opacity-70">{currentBrand.name}</span>
          <span className="text-[#d1bc8a] opacity-50">━</span>
          <span className="font-medium text-[#d1bc8a]">{currentArtist.name}</span>
        </nav>

        {/* Brand selector with artistic cards */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-6 flex items-center">
            <span className="text-[#d1bc8a]">┃</span>
            <span className="ml-2">Select Brand</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map(b => (
              <div
                key={b.id}
                onClick={() => setActiveBrand(b.id)}
                className={`group relative h-48 cursor-pointer overflow-hidden ${
                  b.id === activeBrand
                    ? 'ring-2 ring-[#d1bc8a]'
                    : 'ring-1 ring-[#d1bc8a] ring-opacity-30'
                }`}
              >
                <img
                  src={b.img}
                  alt={b.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-serif text-xl text-[#d1bc8a]">{b.name}</h3>
                  <p className="text-sm opacity-70">{b.period}</p>
                </div>
                {b.id === activeBrand && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 border border-[#d1bc8a] flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#d1bc8a]"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Artist selector with artistic treatment */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-6 flex items-center">
            <span className="text-[#d1bc8a]">┃</span>
            <span className="ml-2">Select Artist</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artists.map(a => (
              <div
                key={a.id}
                onClick={() => setActiveArtist(a.id)}
                className={`relative h-80 cursor-pointer overflow-hidden transition-transform duration-300 ${
                  a.id === activeArtist
                    ? 'ring-2 ring-[#d1bc8a] scale-100'
                    : 'ring-1 ring-[#d1bc8a] ring-opacity-30 scale-95 hover:scale-97'
                }`}
              >
                <img
                  src={a.img}
                  alt={a.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    a.id === activeArtist ? 'filter-none' : 'filter grayscale hover:grayscale-0'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 transform transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-[#d1bc8a]">{a.name}</h3>
                  <div className="w-12 h-px bg-[#d1bc8a] my-2"></div>
                  <p className="text-sm">{a.dates}</p>
                  {a.id === activeArtist && (
                    <div className="mt-2 text-xs opacity-70">
                      <p>Origin: {a.origin}</p>
                      <p>Style: {a.style}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Artworks grid with elegant styling */}
        <section>
          <h2 className="font-serif text-2xl mb-6 flex items-center">
            <span className="text-[#d1bc8a]">┃</span>
            <span className="ml-2">Artworks by {currentArtist.name}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArtworks.map(artwork => (
              <div 
                key={artwork.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="relative overflow-hidden h-56 mb-3">
                  <img 
                    src={artwork.img} 
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0f1117] opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <h3 className="font-serif text-[#d1bc8a] group-hover:text-[#d1bc8a] transition-colors">{artwork.title}</h3>
                <p className="text-sm opacity-70">{artwork.year}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Artwork modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-[#0f1117] border border-[#d1bc8a] max-w-2xl w-full">
            <div className="relative">
              <img 
                src={selectedArtwork.img} 
                alt={selectedArtwork.title}
                className="w-full h-auto"
              />
              <button 
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-[#d1bc8a] text-[#d1bc8a] hover:bg-[#d1bc8a] hover:text-[#0f1117] transition-colors"
              >
                ╳
              </button>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-[#d1bc8a]">{selectedArtwork.title}</h3>
              <p className="text-sm opacity-70 mb-4">{selectedArtwork.year}, {currentArtist.name}</p>
              <p className="text-sm">
                This exquisite work exemplifies the unique artistic vision that defines 
                {currentArtist.name}'s oeuvre during the {currentBrand.period}.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer with artistic separator */}
      <footer className="mt-24 pb-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d1bc8a] to-transparent mb-8"></div>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-sm text-[#d1bc8a]">THE MUSEUM</div>
          <div className="text-xs opacity-50">© {new Date().getFullYear()} All Rights Reserved</div>
        </div>
      </footer>
    </div>
  );
}