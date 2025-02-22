import React from "react";

const Sponsors = ({ sponsorRef }) => {
  const logos = [
    {
      src: "https://res.cloudinary.com/djtzzg12a/image/upload/v1740233413/Weds_India_vljsxp.png",
      alt: "wedsIndia",
    },
    {
      src: "https://res.cloudinary.com/djtzzg12a/image/upload/v1740233413/iPlus_page-0001_fbqu5m.jpg",
      alt: "Iplus",
    },
    {
      src: "https://res.cloudinary.com/djtzzg12a/image/upload/v1740233413/smart_lrgvi0.png",
      alt: "smart",
    },
    {
      src: "https://res.cloudinary.com/djtzzg12a/image/upload/v1740233410/gym_juqaci.jpg",
      alt: "bfit",
    },
    {
      src: "https://res.cloudinary.com/djtzzg12a/image/upload/v1740233408/littleHugs_jphywe.jpg",
      alt: "littleHugs",
    },
    {
      src: "https://res.cloudinary.com/djtzzg12a/image/upload/v1740233408/NallaBoomi_ofykq6.jpg",
      alt: "nallaBoomi",
    },
    {
      src: "https://res.cloudinary.com/djtzzg12a/image/upload/v1740233406/thejus_fziktc.jpg",
      alt: "thejus",
    },
  ];

  return (
    <section ref={sponsorRef} className="relative z-10 py-32">
      <div className="container mx-auto px-4 font-mono">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-8 text-purple-500">
            Our Sponsors
          </h2>

          {/* Marquee container */}
          <div className="overflow-hidden">
            {/* Scrolling wrapper */}
            <div className="sponsor-scroll inline-flex gap-16 items-center">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <img
                  key={`logo1-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <img
                  key={`logo2-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>

          <style jsx>{`
            .sponsor-scroll {
              animation: scroll 20s linear infinite;
              will-change: transform;
            }

            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }

            /* Optional: Pause on hover */
            .sponsor-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
