import bg from "../assets/js_software.png";
import php from "../assets/php.svg";
import react from "../assets/react.svg";

function Services() {
  const items = [
    { title: "DOMAIN NAME REGISTRATIONS", img: php },
    { title: "WEB HOSTING", img: react },
    { title: "RESELLER HOSTING", img: php },
    { title: "WEB DESIGNING", img: react },
    { title: "WEB DEVELOPMENT", img: php },
    { title: "VPS & DEDICATED SERVER", img: react },
    { title: "LOGO DESIGN", img: php },
    { title: "BANNER DESIGN", img: react },
  ];

  return (
    <div
      id="services"
      className="py-24 text-white"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)),
          url(${bg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-14">
        OUR AWESOME SERVICES
      </h2>

      <div className="grid md:grid-cols-4 gap-8 px-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 
                       p-6 rounded-xl text-center 
                       hover:bg-yellow-400 hover:text-black 
                       transition duration-300 cursor-pointer 
                       shadow-lg hover:scale-105"
          >
            <img src={item.img} className="w-14 h-14 mx-auto mb-4" />

            <h3 className="font-semibold text-sm">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
