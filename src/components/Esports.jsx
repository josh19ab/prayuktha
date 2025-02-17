const Esports = ({ esportsRef }) => {
  return (
    <section ref={esportsRef} className="relative z-10 py-32">
      <div className="container mx-auto px-16 md:px-32">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-12 text-center">
          eSports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
          {/* FF */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="https://res.cloudinary.com/djtzzg12a/image/upload/v1739597094/esports_01_betyfq.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Free Fire</h3>
            <p className="text-gray-300 mb-4">
              Lock. Load. Dominate. Get ready for the ultimate FREEFIRE
              Tournament Do you have what it takes to clutch the win? Assemble
              your squad & prove your mettle!
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeg8iMawBfsCIDqoOHR9er5VwrXhlJSGuPs28YLx3cO0Fa9tw/viewform?usp=dialog",
                  "_blank"
                )
              }
            >
              Register
            </button>
          </div>
          {/* eFootball */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="https://res.cloudinary.com/djtzzg12a/image/upload/v1739597084/esports_02_urv9zl.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">eFootball</h3>
            <p className="text-gray-300 mb-4">
              Compete, Conquer, Celebrate Get ready to showcase your gaming
              skills and compete against the best players. Join us for an
              electrifying eFootball tournament where only the strongest will
              claim victory!
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full"
              onClick={() =>
                window.open("https://forms.gle/qfEJviCdcdz6CFec9", "_blank")
              }
            >
              Register
            </button>
          </div>
          {/*  BGMI */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="https://res.cloudinary.com/djtzzg12a/image/upload/v1739597093/esports_03_fmld0o.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">BGMI</h3>
            <p className="text-gray-300 mb-4">
              Lock. Load. Dominate. Get ready for the ultimate BGMI TDM
              Tournament Do you have what it takes to clutch the Win? Assemble
              yourself to the battlefield!
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full"
              onClick={() =>
                window.open("https://forms.gle/i88bk861JZ9oMUcE9", "_blank")
              }
            >
              Register
            </button>
          </div>
          <div className="hidden md:block"></div>

          {/*  Valorant */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all border border-white/30">
            <img
              src="https://res.cloudinary.com/djtzzg12a/image/upload/v1739596826/valorant_sq_rj5tne.jpg"
              alt="Valorant"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Valorant</h3>
            <p className="text-gray-300 mb-4">
              Lock. Load. Dominate. Get ready for the ultimate Valorant
              Tournament! Do you have what it takes to clutch the win? Assemble
              your squad & prove your mettle!
            </p>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full"
              onClick={() =>
                window.open("https://forms.gle/9SWQ6GoFskYKfBHB7", "_blank")
              }
            >
              Register
            </button>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Esports;
