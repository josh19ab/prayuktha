import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EventDetails = () => {
  const { eventname } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example event data - Replace this with your actual data fetching logic
    const events = {
      robotics: {
        title: "Robotics Expo",
        date: "February 20, 2025",
        location: "Badminton Court",
        image:
          "https://res.cloudinary.com/djtzzg12a/image/upload/v1739596810/robotics_dt2vme.jpg",
        description:
          "Step into the world of innovation at the Robotics Expo at Prayuktha 2025! This exclusive showcase brings together cutting-edge robotic technology, AI-powered machines, and autonomous systems designed to revolutionize industries.",
        expectations: [
          "Explore advanced robotics and automation solutions",
          "Witness live demonstrations of AI-driven robots",
          "Interact with innovators and tech enthusiasts",
          "Experience the future of robotics firsthand",
        ],
        requirements: [],
      },
      gamingRoom: {
        title: "Gaming Room",
        date: "February 20, 2025",
        location: "CS Lab",
        image:
          "https://res.cloudinary.com/djtzzg12a/image/upload/v1739596876/gamingRoom_lkuaap.png",
        description:
          "Step into a gamer's paradise with high-end PC gaming, the next-gen PlayStation 5, and an adrenaline-pumping racing simulator! Whether you're a competitive esports player, a casual console gamer, or a speed demon craving the thrill of virtual racing, we have got something for everyone! ",
        expectations: ["PC Gaming", "PS5 Arena", "Racing Simulator"],
        requirements: [],
      },
      treasureHunt: {
        title: "Treasure Hunt",
        date: "February 20, 2025",
        location: "College Campus",
        image:
          "https://res.cloudinary.com/djtzzg12a/image/upload/v1739596857/treasureHunt_ynnwmm.jpg",
        description:
          "Get ready for the ultimate adventure at Prayuktha 2025! The Treasure Hunt is not just a game—it's a test of wit, teamwork, and strategy. Solve cryptic clues, navigate hidden trails, and race against time to uncover the ultimate prize!",
        expectations: ["Prize 1K"],
        requirements: [],
      },
      codeFrenzy: {
        title: "Code Frenzy",
        date: "February 20, 2025",
        location: "CS Lab",
        image:
          "https://res.cloudinary.com/djtzzg12a/image/upload/v1739598606/code_frenzy_nnpt0b.jpg",
        description:
          "Put your coding skills to the test at Code Clash, the premier coding challenge of Prayuktha 2025! Whether you're a beginner or a pro, this event is your chance to solve complex problems, optimize algorithms, and compete against the best minds in tech.",
        expectations: [
          "Solve real-world coding challenges",
          "Test your logic, speed, and problem-solving skills",
          "Win exciting prizes!",
        ],
        requirements: [],
      },
      speedTyping: {
        title: "Speed Typing",
        date: "February 20, 2025",
        location: "CS Lab",
        image:
          "https://res.cloudinary.com/djtzzg12a/image/upload/v1739598587/speed_typing_bpaoqy.jpg",
        description:
          "Think you have got the fastest fingers? Test your typing speed and accuracy at the Speed Typing Challenge at Prayuktha 2025! This event is all about precision, agility, and lightning-fast reflexes.",
        expectations: [
          "Type against the clock in intense rounds",
          "Compete for the highest accuracy and speed",
          "Win exciting prizes!",
        ],
        requirements: [],
      },
      paintBall: {
        title: "Paint Ball",
        date: "February 20, 2025",
        location: "College Campus",
        image:
          "https://res.cloudinary.com/djtzzg12a/image/upload/v1739597096/paintball_02_jfd8db.jpg",
        description:
          "For the FIRST TIME in BMCE, get ready for an action-packed Paintball Tournament at Prayuktha 2025! Experience the thrill of tactical combat as you dodge, shoot, and strategize your way to victory in this adrenaline-fueled battlefield.",
        expectations: [
          "Form your squad and enter the battlefield",
          "Outsmart opponents with strategy and teamwork",
          " Experience the thrill of fast-paced combat",
        ],
        requirements: [],
      },
      // Add more events as needed
    };

    // Simulate API call
    setTimeout(() => {
      setEventData(events[eventname]);
      setLoading(false);
    }, 500);
  }, [eventname]);

  const handleGoBack = () => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    // Navigate back
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!eventData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">Event not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-16 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto font-mono">
        {/* Event Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {eventData.title}
          </h1>
          <p className="text-gray-400 text-lg">
            {eventData.date} • {eventData.location}
          </p>
        </div>

        {/* Event Image */}
        <div className="rounded-2xl overflow-hidden mb-12 shadow-2xl">
          <img
            src={eventData.image}
            alt={eventData.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Event Description */}
        <div className="bg-gray-800/50 rounded-2xl p-8 mb-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About the Event
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {eventData.description}
          </p>

          {/* Event Details List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h3 className="text-white font-semibold mb-2">What to Expect</h3>
              <ul className="list-disc list-inside space-y-2">
                {eventData.expectations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={handleGoBack}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
