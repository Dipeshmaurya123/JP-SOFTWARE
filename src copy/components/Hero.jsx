import bg from "../assets/js_software.png";

function Hero() {
  return (
    <div
      id="home"
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-yellow-400 text-sm tracking-widest">
          WEB HOSTING COMPANY
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          RELIABLE WEB <br />
          <span className="text-yellow-400">HOSTING COMPANY</span>
        </h1>

        <p className="mt-4 text-gray-200">
          Trusted by over 10,000 domains worldwide
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg">
            Get Started
          </button>

          <button className="border px-6 py-3 rounded-lg">View Plans</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
