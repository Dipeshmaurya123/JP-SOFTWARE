import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Pricing from "./components/Pricing";
import Guarantee from "./components/Guarantee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-5 right-5 z-50 bg-yellow-400 text-black px-4 py-2 rounded"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      {/* WEBSITE */}
      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Technologies />
        <Pricing />
        <Guarantee />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Technologies from "./components/Technologies";
// import Pricing from "./components/Pricing";
// import Guarantee from "./components/Guarantee";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Services />
//       <Technologies />
//       <Pricing />
//       <Guarantee />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
