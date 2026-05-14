import server from "../assets/server.png";

function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h5 className="text-sm mb-2">NO.1 WEB HOSTING COMPANY</h5>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Reliable Web Hosting Company
          </h1>

          <p className="mb-4">Trusted by over 10,000 domains</p>

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
            <button className="bg-white text-black px-5 py-2 rounded">
              Get Started
            </button>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded font-semibold">
              View Plans
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="text-center">
          <img src={server} alt="server" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
