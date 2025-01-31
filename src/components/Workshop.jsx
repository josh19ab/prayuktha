
const Workshop = ({ workshopRef }) => {
  return (
    <section ref={workshopRef} className="relative z-10 py-32" id="workshops">
      <div className="container mx-auto px-16 md:px-32">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-12 text-center">
          Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
          {/* 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">worlshop1</h3>
            <p className="text-gray-300 mb-4">
              Experience real gaming simulation and esports in our dedicated
              gaming arena
            </p>
          </div>
          {/* 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">worlshop2</h3>
            <p className="text-gray-300 mb-4">
              Experience real gaming simulation and esports in our dedicated
              gaming arena
            </p>
          </div>
          {/*  3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">worlshop3</h3>
            <p className="text-gray-300 mb-4">
              Experience real gaming simulation and esports in our dedicated
              gaming arena
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop
