import {  useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const slidesWrapperRef = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".panel");
    panels.pop(); // Remove the last panel from the animation

    panels.forEach((panel) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          pinSpacing: false,
          pin: true,
          scrub: true,
          onRefresh: () => 
            gsap.set(panel, {
              transformOrigin: `center ${
                panel.offsetHeight - window.innerHeight / 2
              }px`,
            }),
        },
      });

      tl.fromTo(
        panel,
        {
          y: 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
        },
        {
          y: 0,
          rotateX: 0,
          scale: 0.5,
          opacity: 0.5,
          duration: 1,
        }
      ).to(panel, {
        opacity: 0,
        duration: 0.1,
      });
    });
  }, []);

  return (
    <>
      
      {/* Slides */}
      <div ref={slidesWrapperRef} className="mt-[63px]">
        <section className="panel min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100 p-10 relative overflow-hidden">
          <div className="panel-content">
            <h1 className="text-[17vw] font-semibold tracking-tight uppercase m-0">
              Section 1
            </h1>
            <img
              className="w-1/2 mt-[100px]"
              src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMjk3MzA3Mg&ixlib=rb-1.2.1&q=85"
              alt=""
            />
          </div>
        </section>

        <section className="panel min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100 p-10 relative overflow-hidden">
          <div className="panel-content bg-red-500">
            <div className="dd">
              <h1 className="text-[17vw] font-semibold tracking-tight uppercase m-0">
                Section 2
              </h1>
              {[...Array(20)].map((_, i) => (
                <p key={i} className="text-lg">
                  This section is supposed to be long and scrollable within before
                  the next slide comes in
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="panel min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100 p-10 relative overflow-hidden">
          <div className="panel-content">
            <h1 className="text-[17vw] font-semibold tracking-tight uppercase m-0">
              Section 3
            </h1>
          </div>
        </section>

        <section className="panel min-h-[calc(100vh-64px)] flex justify-center items-center bg-gray-100 p-10 relative overflow-hidden">
          <div className="panel-content">
            <h1 className="text-[17vw] font-semibold tracking-tight uppercase m-0">
              Section 4
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
