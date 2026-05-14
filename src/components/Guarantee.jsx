import bg from "../assets/js_software.png";

function Guarantee() {
  const items = [
    {
      title: "24x7 SUPPORT",
      desc: "We are always here to help you anytime",
      icon: "💬",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "15 DAYS MONEY BACK",
      desc: "No risk, full refund guarantee",
      icon: "💰",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "99.9% UPTIME",
      desc: "Fast & reliable servers always online",
      icon: "⚡",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div
      className="py-24 text-white"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)),
          url(${bg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-14">OUR GUARANTEE</h2>

      <div className="grid md:grid-cols-3 gap-10 px-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative p-8 rounded-2xl text-center 
                       backdrop-blur-lg bg-white/10 border border-white/20 
                       shadow-lg transition-all duration-300 
                       hover:scale-105 hover:shadow-2xl"
          >
            {/* 🔥 glow background */}
            <div
              className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 
                          bg-gradient-to-br ${item.color} blur-xl transition`}
            ></div>

            {/* ICON */}
            <div className="text-5xl mb-4 relative z-10">{item.icon}</div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold mb-2 relative z-10">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-300 text-sm relative z-10">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guarantee;
