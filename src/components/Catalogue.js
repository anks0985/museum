import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Heart, ExternalLink, Menu, Search } from 'lucide-react';
import Header from './Header';
import brandData from './data.json';
const MuseumCatalogueExplorer = () => {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [activeArtistIndex, setActiveArtistIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    setActiveArtistIndex(0);
  }, [activeBrandIndex]);
  const FloatingDot = ({ delay, size, top, left, opacity }) => {
    return (
      <div
        className={`absolute rounded-full bg-[#bf9347] transition-all duration-1000 delay-${delay} ${loaded ? 'opacity-' + opacity : 'opacity-0'}`}
        style={{
          width: size,
          height: size,
          top: `${top}%`,
          left: `${left}%`,
          transform: loaded ? 'scale(1)' : 'scale(0)',
        }}
      />
    );
  };
  const handleBrandClick = (index) => {
    setActiveBrandIndex(index);
  };
  const handleArtistClick = (index) => {
    setActiveArtistIndex(index);
  };
  const openModal = (index) => {
    setCurrentArtworkIndex(index);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const showPrevArtwork = () => {
    const artworks = brandData[activeBrandIndex].artists[activeArtistIndex].artworks;
    setCurrentArtworkIndex((currentArtworkIndex - 1 + artworks.length) % artworks.length);
  };
  const showNextArtwork = () => {
    const artworks = brandData[activeBrandIndex].artists[activeArtistIndex].artworks;
    setCurrentArtworkIndex((currentArtworkIndex + 1) % artworks.length);
  };
  const addToFavorites = () => {
    const artwork = brandData[activeBrandIndex].artists[activeArtistIndex].artworks[currentArtworkIndex];
    alert(`Added "${artwork.title}" to favorites!`);
  };
  const currentBrand = brandData[activeBrandIndex];
  const currentArtists = currentBrand.artists;
  const currentArtist = currentArtists[activeArtistIndex];
  const currentArtworks = currentArtist.artworks;
  return (
    <div className="relative bg-[#fcf6eb] text-[#212121] overflow-x-hidden min-h-screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingDot delay="300" size="6px" top={15} left={20} opacity="20" />
        <FloatingDot delay="500" size="8px" top={35} left={85} opacity="15" />
        <FloatingDot delay="700" size="4px" top={70} left={15} opacity="10" />
        <FloatingDot delay="900" size="12px" top={80} left={75} opacity="5" />
        <div className={`absolute top-0 left-0 w-full h-px bg-[#bf9347] origin-left transform rotate-30 opacity-5 transition-opacity duration-1000 ${loaded ? 'opacity-5' : 'opacity-0'}`} style={{ width: '200%' }}></div>
        <div className={`absolute top-0 right-0 w-full h-px bg-[#bf9347] origin-right transform -rotate-15 opacity-5 transition-opacity duration-1000 ${loaded ? 'opacity-5' : 'opacity-0'}`} style={{ width: '200%' }}></div>
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(191,147,71,0.1) 0%, rgba(191,147,71,0) 70%)',
            transform: 'translate(-50%, -50%)',
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        />
      </div>
      <Header activeTab={"catalogue"} />
      <section className={`py-16 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-[100rem] mx-auto px-10">
          <div className="flex items-center mb-12 font-light text-xs tracking-widest text-[#bf9347]">
            <a href="/" className="opacity-70 hover:opacity-100 transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#bf9347] hover:after:w-full after:transition-all after:duration-300">HOME</a>
            <span className="mx-2.5 text-[#bf9347]">›</span>
            <a href="#" className="opacity-70 hover:opacity-100 transition-all duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#bf9347] hover:after:w-full after:transition-all after:duration-300">CATALOGUE</a>
            <span className="mx-2.5 text-[#bf9347]">›</span>
            <span className="opacity-70">{currentBrand.name}</span>
            <span className="mx-2.5 text-[#bf9347]">›</span>
            <span className="font-normal opacity-100">{currentArtist.name}</span>
          </div>
          <div className="mb-16 relative">
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#bf9347] opacity-60"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#bf9347] opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#bf9347] opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#bf9347] opacity-60"></div>
            <div className="p-8">
              <h1 className="font-light text-4xl tracking-wider text-[#bf9347] mb-6 uppercase">Catalogue Explorer</h1>
              <div className="w-20 h-px bg-[#bf9347] opacity-40 mb-6"></div>
              <p className="font-light text-base text-[#bf9347] opacity-70 max-w-2xl">
                Embark on an immersive journey through our meticulously curated ecosystem of distinguished brands, where you'll engage with visionary master artists and their unparalleled portfolios. Discover bespoke artworks that exemplify the pinnacle of human creativity and craftsmanship.
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center">
            <div className="w-1 h-16 bg-[#bf9347] opacity-30 mr-4"></div>
            <h2 className="font-light text-3xl tracking-wide text-[#bf9347]">Select Brand</h2>
          </div>
          <div className="flex gap-8 mb-20 overflow-x-auto pb-4">
            {brandData.map((brand, index) => (
              <div
                key={index}
                className={`group aspect-square w-96 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${index === activeBrandIndex
                  ? 'border border-[#bf9347] shadow-md shadow-[#bf934733]'
                  : 'border border-[#bf934720]'
                  }`}
                onClick={() => handleBrandClick(index)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#00000090] to-transparent text-white transition-all duration-500 ease-out">
                  <div className="w-12 h-px bg-[#bf9347] mb-3 transform origin-left transition-all duration-500 ease-out group-hover:w-20"></div>
                  <h3 className="font-light text-2xl tracking-wide mb-1">{brand.name}</h3>
                </div>
                {index === activeBrandIndex && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#bf9347]"></div>
                )}
              </div>
            ))}
          </div>
          <div className="mb-8 flex items-center">
            <div className="w-1 h-16 bg-[#bf9347] opacity-30 mr-4"></div>
            <h2 className="font-light text-3xl tracking-wide text-[#bf9347]">{currentBrand.name} Master Artists</h2>
          </div>
          <div className="grid gap-8 mb-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {currentArtists.map((artist, index) => (
              <div
                key={index}
                className={`group aspect-square relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${index === activeArtistIndex
                  ? 'border border-[#bf9347] shadow-md shadow-[#bf934733]'
                  : 'border border-[#bf934720]'
                  }`}
                onClick={() => handleArtistClick(index)}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#00000090] to-transparent text-white transition-all duration-500 ease-out">
                  <div className="w-12 h-px bg-[#bf9347] mb-3 transform origin-left transition-all duration-500 ease-out group-hover:w-20"></div>
                  <h3 className="font-light text-2xl tracking-wide mb-2">{artist.name}</h3>
                  <p className="font-light text-sm opacity-0 transform translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    {artist.years} | {artist.description}
                  </p>
                </div>
                {index === activeArtistIndex && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#bf9347]"></div>
                )}
              </div>
            ))}
          </div>
          <div className="mb-8 flex items-center">
            <div className="w-1 h-16 bg-[#bf9347] opacity-30 mr-4"></div>
            <h2 className="font-light text-3xl tracking-wide text-[#bf9347]">
              Artworks by {currentArtist.name}
            </h2>
          </div>
          <div className="flex flex-wrap mb-16">
            {currentArtworks.map((artwork, index) => (
              <div
                key={index}
                className="group relative cursor-pointer border border-[#bf934720] transition-all duration-500 ease-out hover:shadow-lg hover:translate-y-[-8px] overflow-hidden m-2"
                onClick={() => openModal(index)}
                style={{ height: '400px' }}
              >
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="h-full w-auto transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#00000030] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#00000090] to-transparent text-white transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-px bg-[#bf9347] mb-3 transform origin-left scale-x-75 transition-all duration-500 ease-out group-hover:scale-x-100"></div>
                  <h3 className="font-light text-2xl tracking-wide mb-2">{artwork.title}</h3>
                  <p className="font-light text-sm leading-relaxed max-w-[90%] opacity-0 transform translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    {artwork.date} | {artwork.dimensions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Artwork Detail Modal */}
      {modalVisible && (
        <div
          className="fixed inset-0 z-50 bg-[#000000cc] backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-[#fcf6eb] max-w-6xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-2xl relative">
            <button
              className="absolute top-4 right-4 z-10 text-[#bf9347] hover:text-[#212121] 
                transition-colors duration-300 bg-[#fcf6eb] rounded-full p-2 hover:bg-[#bf9347]/10"
              onClick={closeModal}
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Artwork Image */}
              <div className="relative">
                <img
                  src={currentArtworks[currentArtworkIndex].src}
                  alt={currentArtworks[currentArtworkIndex].alt}
                  className="h-[70vh] max-w-full object-contain mx-auto"
                />
                <div className="absolute bottom-4 inset-x-4 flex justify-between">
                  <button
                    className="bg-[#fcf6eb]/90 hover:bg-[#fcf6eb] rounded-full p-2 text-[#bf9347] 
                      transition-all duration-300 hover:shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrevArtwork();
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="bg-[#fcf6eb]/90 hover:bg-[#fcf6eb] rounded-full p-2 text-[#bf9347] 
                      transition-all duration-300 hover:shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      showNextArtwork();
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Artwork Details */}
              <div className="p-8">
                <h2 className="font-light text-3xl tracking-wide text-[#bf9347] mb-2">
                  {currentArtworks[currentArtworkIndex].title}
                </h2>
                <p className="text-[#bf9347]/70 text-sm mb-6">
                  {currentArtworks[currentArtworkIndex].date} • {currentArtist.name}
                </p>

                <div className="w-12 h-px bg-[#bf9347]/40 mb-6"></div>

                <p className="mb-8 font-light leading-relaxed text-[#212121]">
                  {currentArtworks[currentArtworkIndex].description}
                </p>

                <div className="mb-8 space-y-3 text-sm">
                  <div className="flex">
                    <span className="w-28 font-medium text-[#bf9347]">Artist</span>
                    <span className="font-light">{currentArtist.name}</span>
                  </div>
                  <div className="flex">
                    <span className="w-28 font-medium text-[#bf9347]">Period</span>
                    <span className="font-light">{currentBrand.name}</span>
                  </div>
                  <div className="flex">
                    <span className="w-28 font-medium text-[#bf9347]">Date</span>
                    <span className="font-light">{currentArtworks[currentArtworkIndex].date}</span>
                  </div>
                  <div className="flex">
                    <span className="w-28 font-medium text-[#bf9347]">Dimensions</span>
                    <span className="font-light">{currentArtworks[currentArtworkIndex].dimensions}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToFavorites();
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-[#bf9347] text-white rounded-md
                      hover:bg-[#bf9347]/90 transition-colors duration-300"
                  >
                    <Heart size={16} />
                    <span className="text-sm">Add to Favorites</span>
                  </button>

                  <a
                    href={currentArtworks[currentArtworkIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#bf9347] text-[#bf9347] rounded-md
                      hover:bg-[#bf9347]/10 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">View Details</span>
                  </a>
                </div>

                {/* Thumbnail Navigation */}
                {currentArtworks.length > 1 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-medium text-[#bf9347] mb-3">More Works</h3>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {currentArtworks.map((artwork, index) => (
                        <img
                          key={index}
                          src={artwork.src}
                          alt={artwork.alt}
                          className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all duration-300 
                            ${index === currentArtworkIndex
                              ? 'ring-2 ring-[#bf9347]'
                              : 'ring-1 ring-[#bf9347]/20 opacity-60 hover:opacity-100'
                            }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentArtworkIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MuseumCatalogueExplorer;