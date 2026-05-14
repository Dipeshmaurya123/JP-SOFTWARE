function Technologies() {
  const techs = [
    {
      name: "HTML",
      img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg",
    },
    {
      name: "PHP",
      img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg",
    },
    {
      name: "WORDPRESS",
      img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Wordpress.svg",
    },
    {
      name: "CODEIGNITER",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/codeigniter-icon.png",
    },
    {
      name: "ANGULAR",
      img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Angular-Dark.svg",
    },
    {
      name: "REACT",
      img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg",
    },
    {
      name: "NODE JS",
      img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg",
    },
    {
      name: "LARAVEL",
      img: "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Laravel-Dark.svg",
    },
  ];

  return (
    <div
      id="technologies"
      className="py-28 text-white"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)),
          url('https://media.istockphoto.com/id/2150800876/photo/web-hosting-ai-privacy-platform-service-website-provider-support-business-icon-ai-technology.jpg?s=612x612&w=0&k=20&c=BnRWNvK68oB8mI-2mEgHwzJIV04UjBjq-_zVoa2AF-0=')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-20">
        TECHNOLOGIES WE USE
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-4 gap-12 px-10">
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center group">
            {/* Circle */}
            <div
              className="w-36 h-36 rounded-full 
              bg-white/10 backdrop-blur-xl border border-white/20 
              flex items-center justify-center 
              shadow-xl transition duration-500
              group-hover:scale-110 
              group-hover:shadow-[0_0_30px_rgba(255,255,0,0.6)]"
            >
              <img
                src={tech.img}
                alt=""
                className="w-16 h-16 object-contain transition duration-500 group-hover:scale-125"
              />
            </div>

            {/* Name */}
            <p className="mt-4 text-sm font-semibold text-gray-300 group-hover:text-yellow-400">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
