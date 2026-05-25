import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    { id: 1, src: '/video1.mp4', title: 'Our Story', category: 'founder', desc: 'Founders share the vision of Aranyam' },
    { id: 2, src: '/video2.mp4', title: 'The Journey', category: 'founder', desc: 'How Aranyam was born' },
    { id: 3, src: '/video3.mp4', title: 'M.M. Keeravani Review', category: 'celebrity', desc: 'Oscar Winner shares his experience', isSpecial: true },
    { id: 4, src: '/video4.mp4', title: 'Behind The Scenes', category: 'behind', desc: 'Kitchen & Preparation' },
    { id: 5, src: '/video5.mp4', title: 'Signature Dishes', category: 'behind', desc: 'Crafting culinary magic' },
    { id: 6, src: '/video6.mp4', title: 'Ambience Walkthrough', category: 'behind', desc: 'Experience the jungle vibe' },
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

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
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
      setSelectedImage(photos[prevIndex]);
      setCurrentIndex(prevIndex);
    } else if (selectedVideo) {
      const prevIndex = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length;
      setSelectedVideo(filteredVideos[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-jungle-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Decorative Lines + Dot (Same as Contact) */}
        <div className="text-center mb-16">
          <p className="font-cormorant italic text-gold-400 tracking-[0.4em] text-lg uppercase mb-3">
            Immersive Experiences
          </p>
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-gold-400 mb-4">
            Our World
          </h2>
          
          {/* Gold Lines + Dot - Matching Contact Section */}
          <div className="flex items-center justify-center gap-4 mt-5 mb-5">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold-600/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
          </div>

          <p className="font-cormorant text-jungle-100 text-xl max-w-xl mx-auto">
            Step into the heart of the jungle
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-28">
          <h3 className="font-cinzel text-3xl text-gold-400 mb-10 text-center">Moments from Aranyam</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`relative group overflow-hidden rounded-3xl cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index === 0 ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                onClick={() => openImage(photo, index)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-cormorant text-white text-xl md:text-2xl leading-tight drop-shadow-md">
                    {photo.alt}
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/50 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div>
          <h3 className="font-cinzel text-3xl text-gold-400 mb-10 text-center">Stories & Voices</h3>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'founder', 'celebrity', 'behind'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-cinzel tracking-widest text-sm transition-all ${
                  activeCategory === cat 
                    ? 'bg-gold-500 text-jungle-950 shadow-lg' 
                    : 'border border-gold-600 text-gold-400 hover:border-gold-400 hover:text-gold-300'
                }`}
              >
                {cat === 'all' && 'All'}
                {cat === 'founder' && 'Founder Stories'}
                {cat === 'celebrity' && 'Celebrity'}
                {cat === 'behind' && 'Behind The Scenes'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative bg-jungle-900 rounded-3xl overflow-hidden cursor-pointer border border-gold-700/30 hover:border-gold-500 hover:-translate-y-1 transition-all duration-500"
                onClick={() => openVideo(video, index)}
              >
                <div className="relative aspect-video">
                  <video
                    src={video.src}
                    muted
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-gold-500/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-jungle-950 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-cinzel text-gold-300 text-xl">{video.title}</h4>
                    {video.isSpecial && (
                      <span className="px-3 py-1 text-xs bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold rounded-full">SPECIAL</span>
                    )}
                  </div>
                  <p className="font-cormorant text-jungle-100 text-base leading-relaxed">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-4 text-white hover:text-gold-400 z-20"
            >
              <X size={36} />
            </button>

            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all"
            >
              <ChevronRight size={32} />
            </button>

            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full rounded-3xl shadow-2xl" 
            />
            <p className="text-center text-gold-300 font-cormorant text-xl mt-6 px-4">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-16 right-4 text-white hover:text-gold-400 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
            >
              <X size={36} />
            </button>

            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 z-20 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-all"
            >
              <ChevronRight size={32} />
            </button>

            <div className="bg-jungle-900 rounded-3xl overflow-hidden">
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                className="w-full aspect-video"
              />
              <div className="p-8">
                <h3 className="font-cinzel text-3xl text-gold-400 mb-3">{selectedVideo.title}</h3>
                <p className="font-cormorant text-jungle-100 text-lg leading-relaxed">
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