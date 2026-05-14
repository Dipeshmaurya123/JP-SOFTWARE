import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlanDetail() {
  const { id } = useParams();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_plans.php")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id == id);
        setPlan(found);
      });
  }, [id]);

  const handleBuy = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }

    const res = await fetch(
      "http://localhost/DIPSU_WEBSITE/backend/api/create_order.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          plan: plan.title,
        }),
      },
    );

    const data = await res.json();

    if (data.status === "success") {
      alert("Order placed successfully ✅");
    } else {
      alert("Error ❌");
    }
  };

  if (!plan) return <p className="text-white text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-yellow-400 mb-3">
          {plan.title}
        </h1>

        <p className="mb-3">{plan.description}</p>

        <p className="text-2xl mb-6">{plan.price}</p>

        {/* Features */}
        <ul className="mb-6">
          <li>✔ Free SSL</li>
          <li>✔ 99.9% uptime</li>
          <li>✔ 24/7 support</li>
          <li>✔ Fast hosting</li>
        </ul>

        {/* FORM */}
        <h3 className="mb-3 text-lg">Enter your details:</h3>

        <input
          id="name"
          placeholder="Name"
          className="w-full mb-2 p-2 text-black"
        />

        <input
          id="email"
          placeholder="Email"
          className="w-full mb-2 p-2 text-black"
        />

        <input
          id="phone"
          placeholder="Phone"
          className="w-full mb-4 p-2 text-black"
        />

        <button
          onClick={handleBuy}
          className="bg-yellow-400 text-black px-6 py-2 rounded"
        >
          Buy Now 🚀
        </button>
      </div>
    </div>
  );
}

export default PlanDetail;
