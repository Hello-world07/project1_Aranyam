import { useState } from 'react';
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    { id: 1, src: '/gallery1.jpg', alt: 'Grand Entrance with Telugu Signage' },
    { id: 2, src: '/gallery2.jpg', alt: 'Cave Style Seating' },
    { id: 3, src: '/gallery3.jpg', alt: 'Waterfall & Ambience' },
    { id: 4, src: '/gallery4.jpg', alt: 'Magical Dining Experience' },
    { id: 5, src: '/gallery5.jpg', alt: 'Lush Green Interior' },
  ];

  const videos = [
    {
      id: 1,
      src: '/video1.mp4',
      title: 'A Taste of the Wild at Aranyam',
      category: 'hidden-founder',
      desc: 'Luxury dining inspired by nature.',
    },
    {
      id: 2,
      src: '/video2.mp4',
      title: 'Signature Biryani Experience',
      category: 'hidden-founder',
      desc: 'Rich flavors crafted to perfection.',
    },
    {
      id: 3,
      src: '/video3.mp4',
      title: 'M.M. Keeravani Review',
      category: 'celebrity',
      desc: 'Oscar Winner shares his experience',
      isSpecial: true,
    },
    {
      id: 4,
      src: '/video4.mp4',
      title: 'Behind The Scenes',
      category: 'behind',
      desc: 'Kitchen & Preparation',
    },
    {
      id: 5,
      src: '/video5.mp4',
      title: 'Signature Dishes',
      category: 'behind',
      desc: 'Crafting culinary magic',
    },
    {
      id: 6,
      src: '/video6.mp4',
      title: 'Ambience Walkthrough',
      category: 'behind',
      desc: 'Experience the jungle vibe',
    },
  ];

  const filteredVideos =
    activeCategory === 'all'
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const openImage = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const openVideo = (video, index) => {
    setSelectedVideo(video);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (selectedImage) {
      const nextIndex = (currentIndex + 1) % photos.length;
      setSelectedImage(photos[nextIndex]);
      setCurrentIndex(nextIndex);
    } else if (selectedVideo) {
      const nextIndex = (currentIndex + 1) % filteredVideos.length;
      setSelectedVideo(filteredVideos[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const goToPrev = () => {
    if (selectedImage) {
      const prevIndex =
        (currentIndex - 1 + photos.length) % photos.length;
      setSelectedImage(photos[prevIndex]);
      setCurrentIndex(prevIndex);
    } else if (selectedVideo) {
      const prevIndex =
        (currentIndex - 1 + filteredVideos.length) %
        filteredVideos.length;
      setSelectedVideo(filteredVideos[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-24 bg-jungle-950 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="font-cormorant italic text-gold-400 tracking-[0.35em] text-xs sm:text-lg uppercase mb-4">
            Immersive Experiences
          </p>

          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-5">
            Our World
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent to-gold-600/60" />
            <span className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(255,215,0,0.8)]" />
            <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent to-gold-600/60" />
          </div>

          <p className="font-cormorant text-jungle-100 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed">
            Step into the cinematic jungle experience of Aranyam
          </p>
        </div>

        {/* PHOTO GALLERY */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 tracking-tight leading-none">
              Moments from Aranyam
            </h3>

            <div className="flex items-center justify-center gap-3 mt-5 mb-6">
              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold-500/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold-500/50" />
            </div>

            <p className="font-cormorant text-jungle-100 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed px-4">
              Discover breathtaking spaces, immersive interiors, and unforgettable dining moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openImage(photo, index)}
                className={`group relative overflow-hidden rounded-[28px] cursor-pointer shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                  index === 0
                    ? 'lg:col-span-2 aspect-[16/9]'
                    : 'aspect-square'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <p className="font-cormorant text-white text-xl sm:text-2xl leading-tight">
                    {photo.alt}
                  </p>
                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-gold-500/40 rounded-[28px] transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO SECTION */}
        <div>
          <div className="text-center mb-12 sm:mb-14">

            <h3 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 tracking-tight leading-none">
              Stories & Voices
            </h3>

            <div className="flex items-center justify-center gap-3 mt-5 mb-6">
              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold-500/50" />

              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(255,215,0,0.8)]" />

              <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold-500/50" />
            </div>

            <p className="font-cormorant text-jungle-100 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed px-4">
              Hear the voices, experiences, and unforgettable moments shared inside the world of Aranyam.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12 px-2">
            {['all', 'celebrity', 'behind'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-w-[140px] sm:min-w-[190px] px-5 sm:px-8 py-3 rounded-full font-cinzel uppercase tracking-[0.22em] text-[10px] sm:text-xs transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gold-500 text-black shadow-[0_0_25px_rgba(255,215,0,0.35)]'
                    : 'border border-gold-600/40 text-gold-300 hover:border-gold-400 hover:text-gold-100'
                }`}
              >
                {cat === 'all' && 'All'}
                {cat === 'celebrity' && 'Celebrity'}
                {cat === 'behind' && 'Behind The Scenes'}
              </button>
            ))}
          </div>

          {/* VIDEO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => openVideo(video, index)}
                className="group relative bg-gradient-to-b from-jungle-900 to-black rounded-[30px] overflow-hidden cursor-pointer border border-gold-700/20 hover:border-gold-500/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={video.src}
                    muted
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center group-hover:bg-black/15 transition-all duration-500">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold-500/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play
                        className="w-8 h-8 sm:w-10 sm:h-10 text-black ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex justify-between items-start mb-3 gap-3">
                    <h4 className="font-cinzel text-gold-300 text-lg sm:text-xl leading-snug">
                      {video.title}
                    </h4>

                    {video.isSpecial && (
                      <span className="px-3 py-1 text-[9px] uppercase tracking-widest bg-gradient-to-r from-amber-300 to-yellow-500 text-black font-bold rounded-full whitespace-nowrap">
                        Special
                      </span>
                    )}
                  </div>

                  <p className="font-cormorant text-jungle-100 text-base sm:text-lg leading-relaxed">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 text-white hover:text-gold-400"
            >
              <X size={34} />
            </button>

            <button
              onClick={goToPrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gold-400 bg-black/40 p-3 rounded-full"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gold-400 bg-black/40 p-3 rounded-full"
            >
              <ChevronRight size={30} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[85vh] object-cover rounded-[30px]"
            />

            <p className="text-center text-gold-300 font-cormorant text-xl mt-5">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Background Blur */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              src={selectedVideo.src}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover scale-110 blur-3xl opacity-20"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div
            className="relative w-full max-w-6xl px-3 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-14 right-4 z-20 text-white hover:text-gold-400"
            >
              <X size={34} />
            </button>

            <button
              onClick={goToPrev}
              className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gold-400 bg-black/50 backdrop-blur-md p-3 rounded-full"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={goToNext}
              className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gold-400 bg-black/50 backdrop-blur-md p-3 rounded-full"
            >
              <ChevronRight size={30} />
            </button>

            <div className="relative rounded-[32px] overflow-hidden border border-gold-500/20 shadow-[0_0_80px_rgba(255,215,0,0.08)] bg-black/40 backdrop-blur-xl">

              {/* VIDEO WRAPPER */}
              <div className="relative flex items-center justify-center bg-black">

                {/* Blurred Background */}
                <video
                  src={selectedVideo.src}
                  autoPlay
                  muted
                  loop
                  className="absolute inset-0 w-full h-full object-cover blur-3xl scale-110 opacity-20"
                />

                {/* MAIN VIDEO */}
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="relative z-10 w-full max-h-[78vh] object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-8 text-center">
                <h3 className="font-cinzel text-2xl sm:text-4xl text-gold-400 mb-3">
                  {selectedVideo.title}
                </h3>

                <p className="font-cormorant text-jungle-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                  {selectedVideo.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}