import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "/src/assets/webhostpage6.png",
    "/src/assets/webhostpage5.png",
    "/src/assets/webhostpage1.jpg",
    "/src/assets/webhostpage2.jpg",
    "/src/assets/webhostpage3.png",
    "/src/assets/webhostpage4.png",
    "/src/assets/webhostpage5.png",
    "/src/assets/webhostpage6.png",
  ];

  const [current, setCurrent] = useState(0);

  // 🔥 AUTO CHANGE IMAGE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden"
    >
      {/* 🔥 BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 transition-all duration-1000">
        <img
          src={images[current]}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-4">
        <p className="text-yellow-400 mb-2 tracking-wider">
          WEB HOSTING COMPANY
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          RELIABLE WEB <br />
          <span className="text-yellow-400">HOSTING COMPANY</span>
        </h1>

        <p className="mt-4 text-gray-300">
          Trusted by over 10,000 domains worldwide
        </p>

        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollTo("pricing")}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Plans
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// function Hero() {
//   const scrollTo = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 80,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div
//       id="home"
//       className="h-screen flex items-center justify-center text-center text-white relative"
//       style={{
//         backgroundImage: "url('/src/assets/js_software.png')",
//         backgroundSize: "cover",

//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay FIX */}
//       <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

//       <div className="relative z-10">
//         <p className="text-yellow-400 mb-2">WEB HOSTING COMPANY</p>

//         <h1 className="text-5xl font-bold">
//           RELIABLE WEB <br />
//           <span className="text-yellow-400">HOSTING COMPANY</span>
//         </h1>

//         <p className="mt-4 text-gray-300">
//           Trusted by over 10,000 domains worldwide
//         </p>

//         <div className="mt-6 flex gap-4 justify-center">
//           {/* ✅ WORKING BUTTON */}
//           <button
//             onClick={() => scrollTo("contact")}
//             className="bg-yellow-400 text-black px-6 py-3 rounded hover:bg-yellow-300"
//           >
//             Get Started
//           </button>

//           {/* ✅ WORKING BUTTON */}
//           <button
//             onClick={() => scrollTo("pricing")}
//             className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black"
//           >
//             View Plans
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
