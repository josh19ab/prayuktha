import { Link } from "react-router-dom";

const Events = ({ eventsRef }) => {
  return (
    <section ref={eventsRef} className="relative z-10 py-32" id="events">
      <div className="container mx-auto px-16 md:px-32">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-12 text-center">
          Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
          {/* Hacknite */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/hacknite.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Hackathon</h3>
            <p className="text-gray-300 mb-4">
              24-hour coding challenge to solve real-world problems
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              <Link to='/register'>Register</Link>
            </button>
          </div>  
          {/* Robotics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              ROBOTICS EXPO
            </h3>
            <p className="text-gray-300 mb-4">
              Innovating the Future: Robotics for a Smarter Tomorrow{" "}
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
          {/* Gaming room */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">GAME ZONE</h3>
            <p className="text-gray-300 mb-4">
              Experience real gaming simulation and esports in our dedicated
              gaming arena
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
          {/* Tresure Hunt */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Treasure Hunt
            </h3>
            <p className="text-gray-300 mb-4">
              Embark on an exciting quest to solve puzzles and find hidden
              treasures across campus
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
          {/* CODING Contest */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Coding Challenge
            </h3>
            <p className="text-gray-300 mb-4">
              Test your coding skills with challenges and compete against fellow
              programmers
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
          {/* Speed Typing */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Speed Typing</h3>
            <p className="text-gray-300 mb-4">
              Test your typing speed and accuracy in this fast-paced competition
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
          {/* CTF */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">CTF</h3>
            <p className="text-gray-300 mb-4">
              Capture the Flag challenge testing your cybersecurity and hacking
              skills
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
          {/* Paintball */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
            <img
              src="/Assets/robotics.jpg"
              alt="Event Name"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Paintball</h3>
            <p className="text-gray-300 mb-4">
              Experience the thrill of tactical combat in our paintball arena
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
