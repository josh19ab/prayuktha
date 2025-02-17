import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // Navigate back
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center text-white">
      <div className="font-mono text-3xl font-bold">
        <h1>Register Now</h1>
      </div>
      <div className="flex flex-col space-y-4">
        <button
          className="flex items-center bg-white hover:bg-gray-300 text-black px-6 py-4 rounded-full text-2xl font-bold"
          onClick={() => {
            window.open(
              "https://unstop.com/o/gThblDm?utm_medium=Share&utm_source=shortUrl"
            );
          }}
        >
          <img src="devfolio.svg" alt="" className="w-5 mr-1" />
          Devfolio
        </button>
        <button
          className=" bg-white hover:bg-gray-300 text-white px-6 py-2 rounded-full"
          onClick={() => {
            window.open(
              "https://unstop.com/o/gThblDm?utm_medium=Share&utm_source=shortUrl"
            );
          }}
        >
          <img src="/unstop.svg" alt="" className="w-32 " />
        </button>
        <button
          className="flex items-center bg-white hover:bg-gray-300 text-black px-6 py-4 rounded-full text-lg "
          onClick={() => {
            window.open("https://forms.gle/qjCyrCUP5PbuVFXe8");
          }}
        >
          <img src="/google-forms.png" alt="" className="w-5 mr-2" />
          Google Form
        </button>
      </div>
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
  );
};

export default Register;
