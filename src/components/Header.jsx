import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2  backdrop-blur-md shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-50">
            <img
              src="/LOGO_WHITE.png"
              alt="logo"
              className={`w-16 transition-transform duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Events", "Workshops", "Merch","Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="relative font-mono text-white hover:text-blue-600 transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <div className="relative">
              <span
                className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen
                    ? "bg-white rotate-45 translate-y-1"
                    : "bg-gray-600 -translate-y-0.5"
                }`}
              />
              <span
                className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "bg-gray-600"
                }`}
              />
              <span
                className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen
                    ? "bg-white -rotate-45 -translate-y-1"
                    : "bg-gray-600 translate-y-0.5"
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed top-0 left-0 w-full h-screen transition-all bg-black/80 duration-500 ease-in-out backdrop-blur-lg ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ position: "fixed", height: "100vh" }}
          >
            <div
              className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {["Home", "Events", "Workshops", "Merch","Gallery", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="text-white text-2xl font-mono font-medium py-4 hover:text-blue-200 transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
