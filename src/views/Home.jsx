import { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import TransitionContext from "../context/TransitionContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layers from "../components/Layers";
import About from "../components/About";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Workshop from "../components/Workshop";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const main = useRef();
  const heroRef = useRef();
  const aboutRef = useRef();
  const eventsRef = useRef();
  const galleryRef = useRef();
  const workshopRef = useRef();
  const { completed } = useContext(TransitionContext);

  useGSAP(() => {
    if (!completed) return;

    gsap.to("[data-speed]", {
      y: (i, el) =>
        -parseFloat(el.getAttribute("data-speed")) *
        ScrollTrigger.maxScroll(window),
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 0,
      },
    });
  }, [completed]);

  return (
    <main ref={main} className="relative">
      {/* Hero Section with Parallax */}
      <Layers />

      {/* Grid Background Container */}
      <div className="relative mt-[-100vh] pt-[100vh]">
        {/* Grid Background */}
        <div className="fixed inset-0 opacity-30">
          <div
            className="h-full w-full "
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
                linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)
              `,
            }}
          ></div>
        </div>

        {/* About Section */}
        <About aboutRef={aboutRef} />

        {/* Events Section */}
        <Events eventsRef={eventsRef} />

        {/* Workshops */}
        <Workshop workshopRef={workshopRef} />

        {/* Gallery Section */}
        <Gallery galleryRef={galleryRef} />
      </div>
    </main>
  );
}
