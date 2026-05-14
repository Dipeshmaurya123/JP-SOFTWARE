import server from "../assets/server.png";

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-16 overflow-hidden">
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      {/* 🔥 GRID DOT EFFECT */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h5 className="text-sm mb-2 text-yellow-300 tracking-wide">
            NO.1 WEB HOSTING COMPANY
          </h5>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Reliable Web Hosting Company
          </h1>

          <p className="mb-4 text-gray-300">Trusted by over 10,000 domains</p>

          <div className="grid grid-cols-2 gap-4 mb-6 text-sm md:text-base">
            <ul className="space-y-2">
              <li>✔ Linux Hosting with cPanel</li>
              <li>✔ Softaculous Installer</li>
              <li>✔ PHP & MySQL</li>
              <li>✔ Free Migration</li>
            </ul>

            <ul className="space-y-2">
              <li>✔ Daily Malware Scan</li>
              <li>✔ SSD Storage</li>
              <li>✔ 99.99% Uptime</li>
              <li>✔ 24x7 Support</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-black px-5 py-2 rounded-lg hover:scale-105 transition">
              Get Started
            </button>

            <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/50 transition">
              View Plans
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="text-center relative">
          {/* glow behind image */}
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl rounded-full"></div>

          <img
            src={server}
            alt="server"
            className="relative w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

// import server from "../assets/server.png";

// function Hero() {
//   return (
//     <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
//         {/* LEFT */}
//         <div>
//           <h5 className="text-sm mb-2">NO.1 WEB HOSTING COMPANY</h5>

//           <h1 className="text-3xl md:text-5xl font-bold mb-4">
//             Reliable Web Hosting Company
//           </h1>

//           <p className="mb-4">Trusted by over 10,000 domains</p>

//           <div className="grid grid-cols-2 gap-4 mb-6 text-sm md:text-base">
//             <ul className="space-y-2">
//               <li>✔ Linux Hosting with cPanel</li>
//               <li>✔ Softaculous Installer</li>
//               <li>✔ PHP & MySQL</li>
//               <li>✔ Free Migration</li>
//             </ul>

//             <ul className="space-y-2">
//               <li>✔ Daily Malware Scan</li>
//               <li>✔ SSD Storage</li>
//               <li>✔ 99.99% Uptime</li>
//               <li>✔ 24x7 Support</li>
//             </ul>
//           </div>

//           <div className="flex gap-4">
//             <button className="bg-white text-black px-5 py-2 rounded">
//               Get Started
//             </button>
//             <button className="bg-yellow-400 text-black px-5 py-2 rounded font-semibold">
//               View Plans
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="text-center">
//           <img src={server} alt="server" className="w-full max-w-md mx-auto" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
