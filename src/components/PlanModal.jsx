function PlanModal({ plan, close }) {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
      <div
        className="relative w-full max-w-2xl mx-4 p-10 rounded-2xl 
        bg-white/10 backdrop-blur-xl border border-white/20 text-white
        shadow-[0_0_40px_rgba(255,255,255,0.1)]"
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-5 text-xl hover:text-yellow-400"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">{plan.title}</h2>

        <p className="text-gray-300 mb-6">{plan.desc}</p>

        {/* Price */}
        <div className="text-5xl font-bold mb-6 text-yellow-400">
          {plan.price}
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <p>✔ Free Domain</p>
          <p>✔ 24x7 Support</p>
          <p>✔ SSL Certificate</p>
          <p>✔ High Speed Server</p>
          <p>✔ Daily Backup</p>
          <p>✔ Easy Control Panel</p>
        </div>

        {/* Button */}
        <button className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
          Buy Now 🚀
        </button>
      </div>
    </div>
  );
}

export default PlanModal;
