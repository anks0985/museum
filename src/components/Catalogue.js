import React, { useState } from 'react';

const MuseumCatalogueExplorer = () => {
  const [activeViewMode, setActiveViewMode] = useState('grid');
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [activeArtistIndex, setActiveArtistIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentArtworkIndex, setCurrentArtworkIndex] = useState(0);

  // Brand data
  const brands = [
    { name: "AM Brant", image: "assets/images/ambrant.jpg" },
    { name: "Mughal Atelier", image: "assets/images/mughal.png" },
    { name: "Flemish Collection", image: "assets/images/flemish.png" }
  ];

  // Artist data
  const artists = [
    {
      name: "Katsushika Hokusai",
      image: "assets/images/katsushika.png",
      years: "1760-1849",
      description: "Master of Ukiyo-e painting and woodblock printing"
    },
    {
      name: "Utagawa Hiroshige",
      image: "assets/images/utagawa.png",
      years: "1797-1858",
      description: "Known for landscapes and natural scenes"
    },
    {
      name: "Kitagawa Utamaro",
      image: "assets/images/kitagawa.png",
      years: "1753-1806",
      description: "Celebrated for portraits of women"
    }
  ];

  // Artwork data
  const artworks = [
    {
      src: 'assets/images/greatwaves.png',
      alt: 'The Great Wave off Kanagawa',
      title: 'The Great Wave off Kanagawa',
      description: `First published in 1831 as part of the series "Thirty-six Views of Mount Fuji." This iconic woodblock print depicts a large rogue wave threatening boats off the coast of Kanagawa, with Mount Fuji visible in the background.`,
      date: '1831',
      dimensions: '25.7 x 37.9 cm',
      link: '#'
    },
    {
      src: 'assets/images/finewind.png',
      alt: 'Fine Wind, Clear Morning',
      title: 'Fine Wind, Clear Morning',
      description: `Also known as "Red Fuji," this woodblock print from the series "Thirty-six Views of Mount Fuji" shows Mount Fuji tinged red by the early morning sun, displaying Hokusai's mastery of color gradation.`,
      date: '1830-1832',
      dimensions: '25.7 x 37.9 cm',
      link: '#'
    },
    {
      src: 'assets/images/waterfall.png',
      alt: 'The Waterfall of Amida',
      title: 'The Waterfall of Amida',
      description: `From the series "A Tour of Waterfalls in Various Provinces," this print showcases Hokusai's skill in capturing the movement and power of falling water, with a beautiful vertical composition typical of his landscape work.`,
      date: '1833',
      dimensions: '26.5 x 38.1 cm',
      link: '#'
    },
    {
      src: 'assets/images/owari.png',
      alt: 'Fuji View Field in Owari Province',
      title: 'Fuji View Field in Owari Province',
      description: `Another masterpiece from the "Thirty-six Views of Mount Fuji" series, showing farmers working in a field with Mount Fuji visible in the distance, demonstrating Hokusai's skill in depicting both human activity and natural landscapes.`,
      date: '1831',
      dimensions: '25.7 x 37.9 cm',
      link: '#'
    }
  ];

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
    setCurrentArtworkIndex((currentArtworkIndex - 1 + artworks.length) % artworks.length);
  };

  const showNextArtwork = () => {
    setCurrentArtworkIndex((currentArtworkIndex + 1) % artworks.length);
  };

  const addToFavorites = () => {
    alert(`Added "${artworks[currentArtworkIndex].title}" to favorites!`);
  };

  return (
    <div className="bg-[#fcf6eb] text-[#bf9347] overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="py-8 bg-[#fcf6eb] border-b border-[#bf934733]">
        <div className="max-w-[100rem] mx-auto px-10">
          <div className="flex justify-between items-center md:flex-row flex-col md:gap-0 gap-5">
            <a href="/" className="no-underline flex flex-col">
              <div className="font-medium text-2xl tracking-wider">THE NUSEUM</div>
              <div className="font-normal text-sm opacity-70 mt-0.5">A MUSEUM WITHOUT WALLS</div>
            </a>
            <nav className="flex gap-10 md:gap-10 gap-2.5 overflow-x-auto pb-2.5">
              <a href="/" className="font-light text-base no-underline relative pb-1.5 transition-all duration-400 ease-out">Home</a>
              <a href="/catalogue" className="font-normal text-base no-underline relative pb-1.5 transition-all duration-400 ease-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#bf9347]">Catalogue</a>
              <a href="#" className="font-light text-base no-underline relative pb-1.5 transition-all duration-400 ease-out">Collections</a>
              <a href="#" className="font-light text-base no-underline relative pb-1.5 transition-all duration-400 ease-out">About</a>
              <a href="#" className="font-light text-base no-underline relative pb-1.5 transition-all duration-400 ease-out">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="py-16">
        <div className="max-w-[100rem] mx-auto px-10">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8 font-light text-sm">
            <a href="#" className="opacity-70 no-underline transition-all duration-400 ease-out">Home</a>
            <span className="mx-2.5 text-[#bf9347]">›</span>
            <a href="#" className="opacity-70 no-underline transition-all duration-400 ease-out">Catalogue</a>
            <span className="mx-2.5 text-[#bf9347]">›</span>
            <span className="opacity-70">{brands[activeBrandIndex].name}</span>
            <span className="mx-2.5 text-[#bf9347]">›</span>
            <span className="font-normal opacity-100">{artists[activeArtistIndex].name}</span>
          </div>

          {/* Page Heading */}
          <div className="mb-16">
            <h1 className="font-medium text-4xl mb-2.5">Catalogue Explorer</h1>
            <p className="font-light text-base opacity-70 max-w-xl">
              Navigate through our curated brands, discover master artists, and explore their exceptional artworks representing the pinnacle of human creativity and craftsmanship.
            </p>
          </div>

          {/* Brand Selection */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-medium text-3xl relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#bf9347]">Select Brand</h2>
          </div>
          <div className="flex gap-5 mb-16 overflow-x-auto pb-2.5">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`min-w-96 h-72 relative overflow-hidden border cursor-pointer transition-all duration-400 ease-out hover:transform hover:-translate-y-1 hover:shadow-md ${index === activeBrandIndex ? 'border-[#bf9347] after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-0.5 after:bg-[#bf9347]' : 'border-[#bf934733]'}`}
                onClick={() => handleBrandClick(index)}
              >
                <img src={brand.image} alt={brand.name} className="w-full h-full object-cover transition-all duration-400 ease-out hover:scale-105" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000066] to-[#00000033] flex items-center justify-center text-white transition-all duration-400 ease-out">
                  <h3 className="font-medium text-2xl text-center px-5 drop-shadow-md">{brand.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Artist Selection */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-medium text-3xl relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#bf9347]">Japanese Master Artists</h2>
            <div className="flex gap-4">
              <button
                className={`w-10 h-10 flex items-center justify-center bg-transparent border border-[#bf93474d] cursor-pointer transition-all duration-400 ease-out ${activeViewMode === 'grid' ? 'border-[#bf9347] bg-[#bf93471a]' : ''}`}
                onClick={() => setActiveViewMode('grid')}
              >
                ◈
              </button>
              <button
                className={`w-10 h-10 flex items-center justify-center bg-transparent border border-[#bf93474d] cursor-pointer transition-all duration-400 ease-out ${activeViewMode === 'list' ? 'border-[#bf9347] bg-[#bf93471a]' : ''}`}
                onClick={() => setActiveViewMode('list')}
              >
                ☰
              </button>
            </div>
          </div>
          <div className={`grid gap-8 mb-16 ${activeViewMode === 'grid' ? 'lg:grid-cols-3 md:grid-cols-2 grid-cols-1' : 'grid-cols-1'}`}>
            {artists.map((artist, index) => (
              <div
                key={index}
                className={`relative overflow-hidden cursor-pointer h-72 border transition-all duration-400 ease-out hover:transform hover:-translate-y-1 hover:shadow-md ${index === activeArtistIndex ? 'border-[#bf9347] after:content-[""] after:absolute after:top-0 after:right-0 after:w-0.5 after:h-full after:bg-[#bf9347]' : 'border-[#bf93471a]'}`}
                onClick={() => handleArtistClick(index)}
              >
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover filter grayscale-[0.2] transition-all duration-700 ease-out hover:grayscale-0 hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#000000b3] to-transparent text-white transition-all duration-400 ease-out">
                  <h3 className="font-medium text-2xl mb-2">{artist.name}</h3>
                  <p className="font-light text-sm opacity-0 transform translate-y-2.5 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    {artist.years} | {artist.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Artworks by Selected Artist */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-medium text-3xl relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[#bf9347]">
              Artworks by {artists[activeArtistIndex].name}
            </h2>
          </div>
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
            {artworks.map((artwork, index) => (
              <div
                key={index}
                className="relative overflow-hidden cursor-pointer aspect-video w-full border border-[#bf93471a] transition-all duration-400 ease-out hover:transform hover:-translate-y-2 hover:shadow-lg"
                onClick={() => openModal(index)}
              >
                <img src={artwork.src} alt={artwork.alt} className="w-full h-full object-cover object-center transition-all duration-700 ease-out hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#000000b3] to-transparent text-white transition-all duration-400 ease-out">
                  <h3 className="font-medium text-2xl mb-2.5">{artwork.title}</h3>
                  <div className="w-10 h-px bg-[#bf9347] mb-2.5 transform scale-x-[0.7] origin-left transition-all duration-400 ease-out group-hover:scale-x-100"></div>
                  <p className="font-light text-sm leading-relaxed max-w-[80%] opacity-0 transform translate-y-2.5 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    {artwork.description}
                  </p>
                  <button className="absolute bottom-8 right-8 py-2.5 px-5 bg-[#ffffffe6] border-none font-light text-sm text-[#212121] cursor-pointer opacity-0 transform translate-y-2.5 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Artwork Detail Modal */}
      {modalVisible && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[#00000099] flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-[#fcf6eb] w-4/5 max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg p-5 relative">
            <button
              className="absolute top-4 right-4 bg-transparent border-none text-2xl cursor-pointer text-[#212121]"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex justify-between items-center mb-4">
              <button
                className="bg-transparent border-none text-lg cursor-pointer text-[#212121] py-1.5 px-2.5"
                onClick={showPrevArtwork}
              >
                ‹ Prev
              </button>
              <h2>{artworks[currentArtworkIndex].title}</h2>
              <button
                className="bg-transparent border-none text-lg cursor-pointer text-[#212121] py-1.5 px-2.5"
                onClick={showNextArtwork}
              >
                Next ›
              </button>
            </div>
            <div>
              <img
                src={artworks[currentArtworkIndex].src}
                alt={artworks[currentArtworkIndex].alt}
                className="w-full h-auto rounded"
              />
              <div className="flex gap-2.5 my-2.5 overflow-x-auto">
                {artworks.map((artwork, index) => (
                  <img
                    key={index}
                    src={artwork.src}
                    alt={artwork.alt}
                    className={`w-24 h-14 object-cover cursor-pointer rounded ${index === currentArtworkIndex ? 'border-2 border-[#bf9347]' : 'border-2 border-transparent'}`}
                    onClick={() => setCurrentArtworkIndex(index)}
                  />
                ))}
              </div>
              <p className="mb-2.5">{artworks[currentArtworkIndex].description}</p>
              <p className="mb-2.5"><strong>Date:</strong> {artworks[currentArtworkIndex].date}</p>
              <p className="mb-2.5"><strong>Dimensions:</strong> {artworks[currentArtworkIndex].dimensions}</p>
              <button
                className="bg-[#bf9347] text-[#fcf6eb] border-none py-2.5 px-5 rounded cursor-pointer mr-4"
                onClick={addToFavorites}
              >
                ❤ Add to Favorites
              </button>
              <a
                href={artworks[currentArtworkIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bf9347] no-underline font-medium border-b border-[#bf9347]"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MuseumCatalogueExplorer;