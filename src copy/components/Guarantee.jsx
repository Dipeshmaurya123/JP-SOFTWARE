function Guarantee() {
  const items = [
    {
      title: "24x7 SUPPORT",
      desc: "We are always here to help you anytime",
      icon: "💬",
    },
    {
      title: "15 DAYS MONEY BACK",
      desc: "No risk, full refund guarantee",
      icon: "💰",
    },
    {
      title: "99.9% UPTIME",
      desc: "Fast & reliable servers always online",
      icon: "⚡",
    },
  ];

  return (
    <div
      className="py-24 text-white"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)),
          url('https://images.unsplash.com/photo-1518770660439-4636190af475')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-16">OUR GUARANTEE</h2>

      <div className="grid md:grid-cols-3 gap-10 px-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl border border-white/20 
                       p-8 rounded-xl text-center 
                       hover:scale-105 transition duration-500 
                       shadow-lg hover:shadow-yellow-400/30"
          >
            <div className="text-5xl mb-4">{item.icon}</div>

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guarantee;
