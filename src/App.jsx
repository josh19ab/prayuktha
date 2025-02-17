import { useState, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/Router";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

const WaveLoading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsVisible(false);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Progress Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-purple-900 to-blue-900 transition-all duration-300 ease-out"
          style={{ 
            height: `${progress}vh`,
            overflow: 'hidden'
          }}
        >
          {/* Wave Effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="relative w-full h-full">
              <div 
                className="absolute top-0 left-0 w-[200%] h-12 animate-wave"
                style={{
                  background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                  transform: 'rotate(-5deg)',
                  animation: 'waveMove 3s linear infinite'
                }}
              />
              <div 
                className="absolute top-6 left-0 w-[200%] h-12 animate-wave-slow"
                style={{
                  background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                  transform: 'rotate(5deg)',
                  animation: 'waveMove 4s linear infinite'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Percentage Counter */}
      <div className="text-white text-6xl font-bold z-20">
        {progress}%
      </div>

      <style jsx>{`
        @keyframes waveMove {
          0% {
            transform: translateX(-50%) rotate(-5deg);
          }
          100% {
            transform: translateX(0%) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
};

const App = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(() => {
    return !sessionStorage.getItem('hasLoaded');
  });

  const handleLoadingComplete = () => {
    setIsInitialLoad(false);
    sessionStorage.setItem('hasLoaded', 'true');
    
    gsap.to(".content-wrapper", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('hasLoaded');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {isInitialLoad && <WaveLoading onLoadingComplete={handleLoadingComplete} />}
      <div className="content-wrapper" style={{ opacity: isInitialLoad ? 0 : 1 }}>
        <Header />
        <Router />
        <Footer />
      </div>
    </>
  );
};

export default App;