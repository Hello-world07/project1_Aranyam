'use client';

import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';

import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

/* =========================================
   DATA
========================================= */

const photos = [
  {
    id: 1,
    src: '/gallery1.jpg',
    alt: 'Grand Entrance with Telugu Signage',
  },
  {
    id: 2,
    src: '/gallery2.jpg',
    alt: 'Cave Style Seating',
  },
  {
    id: 3,
    src: '/gallery3.jpg',
    alt: 'Waterfall & Ambience',
  },
  {
    id: 4,
    src: '/gallery4.jpg',
    alt: 'Magical Dining Experience',
  },
  {
    id: 5,
    src: '/gallery5.jpg',
    alt: 'Lush Green Interior',
  },
  {
    id: 6,
    src: '/gallery6.jpg',
    alt: 'Premium Dining Experience',
  },
];

const videos = [
  {
    id: 1,
    src: '/video1.mp4',
    title: 'A Taste of the Wild',
    desc: 'Luxury dining inspired by nature.',
  },
  {
    id: 2,
    src: '/video2.mp4',
    title: 'Signature Biryani',
    desc: 'Rich flavors crafted to perfection.',
  },
  {
    id: 3,
    src: '/video3.mp4',
    title: 'Celebrity Experience',
    desc: 'Memorable guest moments.',
  },
  {
    id: 4,
    src: '/video4.mp4',
    title: 'Behind The Scenes',
    desc: 'Kitchen & preparation moments.',
  },
  {
    id: 5,
    src: '/video5.mp4',
    title: 'Signature Dishes',
    desc: 'Crafting culinary magic.',
  },
  {
    id: 6,
    src: '/video6.mp4',
    title: 'Ambience Walkthrough',
    desc: 'Experience the jungle vibe.',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSliderRef = useRef(null);
  const videoSliderRef = useRef(null);

  /* =========================================
     AUTO SCROLL
  ========================================= */

  const startAutoScroll = useCallback(
    (sliderRef, speed = 0.8) => {
      const slider = sliderRef.current;

      if (!slider) return;

      let animationFrame;
      let isPaused = false;
      let isRunning = true;

      const pause = () => {
        isPaused = true;
      };

      const resume = () => {
        isPaused = false;
      };

      slider.addEventListener('mouseenter', pause);
      slider.addEventListener('mouseleave', resume);

      const scroll = () => {
        if (!isRunning || !slider) return;

        if (!isPaused) {
          slider.scrollLeft += speed;

          if (
            slider.scrollLeft + slider.clientWidth >=
            slider.scrollWidth - 2
          ) {
            slider.scrollTo({
              left: 0,
              behavior: 'smooth',
            });
          }
        }

        animationFrame = requestAnimationFrame(scroll);
      };

      animationFrame = requestAnimationFrame(scroll);

      return () => {
        isRunning = false;

        slider.removeEventListener('mouseenter', pause);
        slider.removeEventListener('mouseleave', resume);

        cancelAnimationFrame(animationFrame);
      };
    },
    []
  );

  useEffect(() => {
    const cleanup = startAutoScroll(imageSliderRef, 0.8);
    return () => cleanup?.();
  }, [startAutoScroll]);

  useEffect(() => {
    const cleanup = startAutoScroll(videoSliderRef, 0.8);
    return () => cleanup?.();
  }, [startAutoScroll]);

  /* =========================================
     BUTTON SCROLL
  ========================================= */

  const scrollImages = (direction) => {
    const slider = imageSliderRef.current;
    if (!slider) return;

    const scrollAmount = 420;
    slider.scrollTo({
      left: slider.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth',
    });
  };

  const scrollVideos = (direction) => {
    const slider = videoSliderRef.current;
    if (!slider) return;

    const scrollAmount = 320;
    slider.scrollTo({
      left: slider.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth',
    });
  };

  /* =========================================
     MODAL
  ========================================= */

  const openImage = (photo, index) => {
    setSelectedImage(photo);
    setCurrentIndex(index);
  };

  const openVideo = (video, index) => {
    setSelectedVideo(video);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedVideo(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedImage(photos[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden border-t border-yellow-500/10 bg-[#050505] py-20 text-white"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%)]" />

        {/* Jungle Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative z-10 max-w-[1700px] mx-auto px-4">

          {/* =========================================
             HEADER
          ========================================= */}

          <div className="text-center mb-20">

            <p className="font-cormorant italic text-gold-400 tracking-[0.35em] uppercase mb-4">
              Immersive Experiences
            </p>

            <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-gold-400 mb-6">
              Our World
            </h2>

            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent to-gold-600/60" />
              <span className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(255,215,0,0.8)]" />
              <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent to-gold-600/60" />
            </div>

            <p className="font-cormorant text-jungle-100 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed">
              Explore Aranyam through a cinematic visual journey.
            </p>
          </div>

          {/* =========================================
             IMAGE SECTION
          ========================================= */}

          <div className="relative mb-28">
            <div className="text-center mb-12">
              <h3 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400">
                Moments from Aranyam
              </h3>
              <p className="font-cormorant text-jungle-100 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed mt-6">
                Discover breathtaking spaces, immersive interiors, and unforgettable dining moments.
              </p>
            </div>

            {/* LEFT BUTTON */}
            <button
              onClick={() => scrollImages('left')}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/70 backdrop-blur-xl border border-gold-500/20 items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={28} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scrollImages('right')}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/70 backdrop-blur-xl border border-gold-500/20 items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300"
            >
              <ChevronRight size={28} />
            </button>

            {/* IMAGE SLIDER */}
            <div
              ref={imageSliderRef}
              className="flex items-center gap-6 overflow-x-auto overflow-y-hidden px-4 md:px-8 scroll-smooth touch-pan-x"
            >
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => openImage(photo, index)}
                  className="group relative shrink-0 overflow-hidden rounded-[28px] border border-gold-500/20 bg-black cursor-pointer hover:border-gold-400/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] transition-all duration-500 w-[320px] sm:w-[380px] md:w-[450px] h-[178px] sm:h-[211px] md:h-[250px]"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    draggable="false"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-cormorant text-white text-lg sm:text-xl leading-tight">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
             VIDEO SECTION
          ========================================= */}

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-6">
                Stories & Voices
              </h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent to-gold-600/60" />
                <span className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(255,215,0,0.8)]" />
                <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-l from-transparent to-gold-600/60" />
              </div>
              <p className="font-cormorant text-jungle-100 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed">
                Hear unforgettable stories and experiences from Aranyam.
              </p>
            </div>

            {/* LEFT BUTTON */}
            <button
              onClick={() => scrollVideos('left')}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/70 backdrop-blur-xl border border-gold-500/20 items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300"
            >
              <ChevronLeft size={28} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scrollVideos('right')}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-black/70 backdrop-blur-xl border border-gold-500/20 items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300"
            >
              <ChevronRight size={28} />
            </button>

            {/* VIDEO SLIDER */}
            <div
              ref={videoSliderRef}
              className="flex gap-5 overflow-x-auto overflow-y-hidden px-4 md:px-8 scroll-smooth touch-pan-x"
            >
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => openVideo(video, index)}
                  className="group relative shrink-0 overflow-hidden rounded-[28px] border border-gold-500/20 bg-black cursor-pointer hover:border-gold-400/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] transition-all duration-500 w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] aspect-[4/5]"
                >
                  <video
                    src={video.src}
                    muted
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold-500/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-cinzel text-gold-300 text-lg mb-1">
                      {video.title}
                    </h4>
                    <p className="font-cormorant text-white text-base">
                      {video.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
         MODAL
      ========================================= */}

      {(selectedImage || selectedVideo) && (
        <div className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 z-50 text-white hover:text-gold-400 transition-colors"
          >
            <X size={36} />
          </button>

          {selectedImage && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-50 w-14 h-14 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-50 w-14 h-14 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="max-w-6xl w-full">
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[90vh] object-contain rounded-3xl"
              />
            )}

            {selectedVideo && (
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full max-h-[90vh] rounded-3xl"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}