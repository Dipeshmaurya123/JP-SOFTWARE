import bg from "../assets/js_software.png";

function Services() {
  const items = [
    {
      title: "DOMAIN NAME REGISTRATIONS",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "WEB HOSTING",
      img: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
    },
    {
      title: "RESELLER HOSTING",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png",
    },
    {
      title: "WEB DESIGNING",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
    {
      title: "WEB DEVELOPMENT",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    },
    {
      title: "VPS & DEDICATED SERVER",
      img: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    },
    {
      title: "LOGO DESIGN",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "BANNER DESIGN",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    },
  ];

  return (
    <div
      id="services"
      className="py-24 bg-white text-black dark:bg-gray-900 dark:text-white"
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
            className="group p-6 rounded-xl text-center cursor-pointer 
                       bg-gradient-to-br from-blue-500 to-purple-600 text-white
                       shadow-lg transition-all duration-300 
                       hover:from-yellow-400 hover:to-orange-500 
                       hover:text-black hover:scale-105"
          >
            <img
              src={item.img}
              className="w-16 h-16 mx-auto mb-4 
                         transition-transform duration-300 
                         group-hover:scale-110"
            />

            <h3 className="font-semibold text-sm tracking-wide">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

// import bg from "../assets/js_software.png";

// // 🔥 NEW IMAGES (alag-alag icons)
// import domain from "../assets/domain.png";
// import hosting from "../assets/hosting.png";
// import reseller from "../assets/reseller.png";
// import design from "../assets/design.png";
// import dev from "../assets/development.png";
// import server from "../assets/server.png";
// import logo from "../assets/logo.png";
// import banner from "../assets/banner.png";

// function Services() {
//   const items = [
//     { title: "DOMAIN NAME REGISTRATIONS", img: domain },
//     { title: "WEB HOSTING", img: hosting },
//     { title: "RESELLER HOSTING", img: reseller },
//     { title: "WEB DESIGNING", img: design },
//     { title: "WEB DEVELOPMENT", img: dev },
//     { title: "VPS & DEDICATED SERVER", img: server },
//     { title: "LOGO DESIGN", img: logo },
//     { title: "BANNER DESIGN", img: banner },
//   ];

//   return (
//     <div
//       id="services"
//       className="py-24 text-white"
//       style={{
//         backgroundImage: `
//           linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)),
//           url(${bg})
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <h2 className="text-4xl font-bold text-center mb-14">
//         OUR AWESOME SERVICES
//       </h2>

//       <div className="grid md:grid-cols-4 gap-8 px-10">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white/10 backdrop-blur-lg border border-white/20
//                        p-6 rounded-xl text-center
//                        hover:bg-yellow-400 hover:text-black
//                        transition duration-300 cursor-pointer
//                        shadow-lg hover:scale-105"
//           >
//             <img src={item.img} className="w-14 h-14 mx-auto mb-4" />

//             <h3 className="font-semibold text-sm">{item.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Services;
