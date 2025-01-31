import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ParallaxElement from "./ParallaxElement";

gsap.registerPlugin(ScrollTrigger);

export default function Layers() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to("[data-speed]", {
      y: (i, el) =>
        -parseFloat(el.getAttribute("data-speed")) *
        ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[200vh] w-full overflow-hidden bg-black z-10 px-16 md:px-32 mx-auto"
      id="home"
    >
      <ParallaxElement
        speed="0.25"
        className="fixed top-0 right-0 w-full h-screen"
      >
        <div className="relative w-full h-full">
          <img
            src="/Assets/1.jpg"
            alt="Background"  
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 50%)' }} />
        </div>
      </ParallaxElement>

      <ParallaxElement
        speed="0.15"
        className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
      >
        <img src="/logo_3D.png" alt="Logo" className="w-full  object-contain" />
      </ParallaxElement>

      <ParallaxElement
        speed="0.45"
        className="fixed px-16 md:px-32 top-2/3 left-1/2 -translate-x-1/2 text-white text-6xl md:text-8xl font-bold text-center"
      >
        <h1 className="font-poppins">PRAYUKTHA&apos;25</h1>
      </ParallaxElement>

      {/* <ParallaxElement
        speed="0.55"
        className="fixed top-4/5 left-1/2 -translate-x-1/2 text-white text-3xl md:text-4xl font-light"
      >
        <img src="/gh.png" alt="img2" className="w-full  object-contain" />
      </ParallaxElement> */}

      <div className="fixed inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
}
