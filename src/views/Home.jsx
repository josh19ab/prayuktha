import { useContext, useRef, useEffect, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import TransitionContext from "../context/TransitionContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layers from "../components/Layers";
import About from "../components/About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Workshop from "../components/Workshop";
import Esports from "../components/Esports";
import Merch from "../components/Merch";
import Sponsors from "../components/Sponsors";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const main = useRef(null);
  const aboutRef = useRef();
  const eventsRef = useRef();
  const galleryRef = useRef();
  const workshopRef = useRef();
  const esportsRef = useRef();
  const merchRef = useRef();
  const sponsorRef = useRef();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useGSAP(() => {
    // Wait for DOM to be ready
    const ctx = gsap.context(() => {
      // Setup gradient animation if it exists
      const gradient = document.querySelector('.background-gradient');
      if (gradient) {
        gsap.to(gradient, {
          opacity: 1,
          scrollTrigger: {
            trigger: main.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
          }
        });
      }

      // Setup parallax for layers
      const layers = gsap.utils.toArray('[data-speed]');
      if (layers.length > 0) {
        layers.forEach((layer) => {
          gsap.to(layer, {
            y: () => (layer.dataset.speed * (window.innerHeight + layer.offsetHeight)),
            ease: "none",
            scrollTrigger: {
              trigger: main.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });
      }
    }, main); // Scope to main element

    return () => {
      ctx.revert(); // Clean up all animations
    };
  }, { scope: main });

  return (
    <main ref={main} className="relative w-full min-h-screen">
      <div className="h-screen relative overflow-hidden" id="home">
        <Layers />
      </div>

      {/* Grid Background - Now starts after Layers */}
      <div className="relative mt-32">
        {/* Grid Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30">
          <div
            className="h-full w-full"
            style={{
              background: `
                linear-gradient(to right, rgba(255, 255, 255, 0.2) 2px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 2px, transparent 1px),
                linear-gradient(to right, rgba(128, 0, 128, 0.5) 0px, transparent 0px),
                linear-gradient(to bottom, rgba(128, 0, 128, 0.5) 0px, transparent 0px)
              `,
              backgroundSize: "100px 100px",
              maskImage: `
                radial-gradient(circle at center, black 30%, transparent 80%),
                linear-gradient(to right, transparent, black 20%, black 80%, transparent),
                linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent)
              `,
            }}
          ></div>
        </div>

        {/* About Section */}
        <About aboutRef={aboutRef} />

        {/* About Section */}
        <Sponsors sponsorRef={sponsorRef} />

        {/* Events Section */}
        <Events eventsRef={eventsRef} />

        {/* eSports */}
        <Esports esportsRef={esportsRef} />

        {/* Workshops */}
        <Workshop workshopRef={workshopRef} />

        {/* Merchantise */}
        <Merch merchRef={merchRef} />

        {/* Gallery Section */}
        <Gallery galleryRef={galleryRef} />
      </div>
    </main>
  );
}
