import { useState } from "react";
import PlanModal from "./PlanModal";

function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "BASIC HOSTING",
      price: "₹299/Yr",
      desc: "Perfect for beginners",
    },
    {
      title: "STARTER HOSTING",
      price: "₹499/Yr",
      desc: "Best for small websites",
    },
    {
      title: "PROFESSIONAL HOSTING",
      price: "₹650/Yr",
      desc: "Popular hosting solution",
      popular: true,
    },
    {
      title: "BUSINESS HOSTING",
      price: "₹999/Yr",
      desc: "For growing businesses",
    },
    {
      title: "RESELLER HOSTING",
      price: "₹500/Mo",
      desc: "Start your hosting business",
    },
    {
      title: "VPS SERVER",
      price: "₹1500/Mo",
      desc: "High performance server",
    },
    {
      title: "DEDICATED SERVER",
      price: "₹5000/Mo",
      desc: "Full control server",
    },
    {
      title: "G-SUITE",
      price: "₹210/Mo",
      desc: "Professional email service",
    },
  ];

  return (
    <div
      className="py-28 text-white"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)),
          url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        BEST WEB HOSTING SERVICES
      </h2>

      {/* FULL GRID */}
      <div className="grid md:grid-cols-4 gap-10 px-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl text-center 
            backdrop-blur-xl border border-white/20 shadow-2xl
            transition duration-500 hover:scale-105
            ${
              plan.popular
                ? "bg-yellow-400 text-black scale-105 shadow-yellow-400/50"
                : "bg-white/10"
            }
            `}
          >
            {/* Popular Tag */}
            {plan.popular && (
              <span className="absolute top-3 right-3 bg-black text-white px-2 py-1 text-xs rounded">
                POPULAR
              </span>
            )}

            <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>

            <p className="text-gray-300 text-sm mb-4">{plan.desc}</p>

            <div className="text-3xl font-bold mb-5 text-yellow-400">
              {plan.price}
            </div>

            <button
              onClick={() => setSelectedPlan(plan)}
              className="w-full py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <PlanModal plan={selectedPlan} close={() => setSelectedPlan(null)} />
    </div>
  );
}

export default Pricing;
