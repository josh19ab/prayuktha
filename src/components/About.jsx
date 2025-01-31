const About = ({aboutRef}) => {
  return (
    <section ref={aboutRef} className="relative z-10 py-32">
      <div className="container mx-auto px-4 font-mono">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-8 text-purple-500">
            PRAYUKTHA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Prayuktha is more than just a technical festival - it's a
            celebration of innovation, creativity, and technological
            advancement. Join us in this spectacular journey where minds meet
            possibilities.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
