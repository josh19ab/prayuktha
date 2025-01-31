
const Gallery = ({ galleryRef }) => {
  return (
    <section ref={galleryRef} className="relative z-10 py-32" id="gallery">
      <div className="container mx-auto px-16 md:px-32">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Memories of Prayuktha
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Gallery Image */}
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src="/LOGO_WHITE.png"
              alt="Gallery"
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src="/LOGO_WHITE.png"
              alt="Gallery"
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src="/LOGO_WHITE.png"
              alt="Gallery"
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src="/LOGO_WHITE.png"
              alt="Gallery"
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-300"
            />
          </div>
         
          {/* Add more gallery images */}
        </div>
      </div>
    </section>
  );
};

export default Gallery
