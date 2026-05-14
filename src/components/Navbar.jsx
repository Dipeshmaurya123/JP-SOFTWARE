function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className="text-xl font-bold text-yellow-400 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          JP SOFTWARE
        </h1>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <button
            onClick={() => scrollTo("home")}
            className="hover:text-yellow-400"
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="hover:text-yellow-400"
          >
            Services
          </button>

          <button
            onClick={() => scrollTo("technologies")}
            className="hover:text-yellow-400"
          >
            Technologies
          </button>

          <button
            onClick={() => scrollTo("pricing")}
            className="hover:text-yellow-400"
          >
            Pricing
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-yellow-400"
          >
            Contact
          </button>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollTo("contact")}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
