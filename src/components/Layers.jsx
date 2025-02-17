import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Layers() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);

  

  

  useGSAP(() => {
    const ctx = gsap.context(() => {
      

      // Main timeline for parallax
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        }
      });

      // Background moves up with fade effect
      tl.to(backgroundRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: "power1.inOut",
      }, 0);

      // Title moves up and fades
      tl.to(titleRef.current, {
        yPercent: -100,
        opacity: 0,
        ease: "power2.inOut"
      }, 0);

      // Logo moves up and fades
      tl.to(logoRef.current, {
        yPercent: -100,
        scale: 0.8,
        opacity: 0,
        ease: "power2.inOut"
      }, 0.2);

      // Gradient overlay becomes more opaque
      tl.to(".background-gradient", {
        opacity: 1,
        ease: "none"
      }, 0);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Layer */}
      <div
        ref={backgroundRef}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <img
            src="/1.jpg"
            alt="Background"  
            className="w-full h-full object-cover opacity-40"
          />
          {/* Gradient overlay for smooth transition */}
          <div 
            className="background-gradient absolute inset-0 opacity-0"
            style={{
              background: `
                linear-gradient(to bottom, 
                  rgba(0, 0, 0, 0.3) 0%,
                  rgba(0, 0, 0, 0.6) 50%,
                  rgba(0, 0, 0, 0.9) 100%
                )
              `
            }}
          />
        </div>
      </div>

      {/* Logo Layer */}
      <div
        ref={logoRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
      >
        <img 
          src="/logo_3D.png" 
          alt="Logo" 
          className="w-full object-contain"
        />
      </div>

      {/* Title Layer */}
      <div
        ref={titleRef}
        className="absolute px-32 md:px-32 top-2/3 left-1/2 -translate-x-1/2 text-white text-5xl md:text-8xl font-bold text-center"
      >
        <h1 className="font-mono">PRAYUKTHA&apos;25</h1>
      </div>

      {/* Base overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/30 pointer-events-none" 
      />
    </div>
  );
}
