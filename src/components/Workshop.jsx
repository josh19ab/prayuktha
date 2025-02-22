const Workshop = ({ workshopRef }) => {
  return (
    <section ref={workshopRef} className="relative z-10 py-32" id="workshops">
      <div className="container mx-auto px-16 md:px-32">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-12 text-center">
          Workshops
        </h2>
        <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
          <div className="hidden md:block"></div>
          {/* 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="https://res.cloudinary.com/djtzzg12a/image/upload/v1740242181/Workshop-poster_02_ojj82a.png"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Introduction to cybersecurity
            </h3>
            <p className="text-gray-300 mb-4">
              Join our Intro to Cybersecurity Workshop at Prayuktha 2025 and
              learn how to protect yourself from cyber threats, secure your
              data, and stay ahead of hackers!
            </p>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
