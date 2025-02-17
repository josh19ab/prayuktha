const Merch = ({ merchRef }) => {

  const sendMessage = () => {
    const phoneNumber = "7510237062"; // Replace with actual number
    const message = encodeURIComponent(
      "Hello, I am interested in purchasing ypur tshirt as part of the merchandise in Prayuktha 25!"
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank"); // Opens WhatsApp in a new tab
  };
  return (
    <section ref={merchRef} className="relative z-10 py-32" id="merch">
      <div className="container mx-auto px-16 md:px-32">
        <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-12 text-center">
          Merchandise
        </h1>
        <div className=" flex flex-col gap-10 md:flex-row md:justify-center md:items-center py-16 bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all border border-white/30">
          <h2 className="text-4xl text-center font-extrabold font-mono text-white">
            Buy Our T-Shirts!
          </h2>
          <div>
            <img
              src="https://res.cloudinary.com/djtzzg12a/image/upload/v1739600373/mockup_final_omnypi.jpg"
              alt="T-Shirt Mockup"
              className="mt-4 w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg text-center font-mono text-white">
              Check out our exclusive t-shirt designs available for purchase.
            </p>
          </div>

          <button
            onClick={sendMessage}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-full"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Merch
