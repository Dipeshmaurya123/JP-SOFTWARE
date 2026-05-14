import { useEffect, useState } from "react";

function Pricing() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_plans.php")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBuy = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(form.email)) {
      alert("Enter valid email");
      return;
    }

    if (!phoneRegex.test(form.phone)) {
      alert("Enter valid phone number");
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
          name: form.name,
          email: form.email,
          phone: form.phone,
          plan: selectedPlan.title,
        }),
      },
    );

    const data = await res.json();

    if (data.status === "success") {
      setSuccess(true);

      setTimeout(() => {
        setSelectedPlan(null);
        setShowForm(false);
        setSuccess(false);
      }, 2000);
    }
  };

  return (
    <div id="pricing" className="bg-black text-white py-20 px-4 ">
      <h2 className="text-3xl md:text-5xl text-center font-bold mb-16 tracking-wide">
        BEST WEB HOSTING SERVICES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="
              bg-gradient-to-b from-gray-800 to-gray-900
              p-8 rounded-2xl text-center
              shadow-lg hover:shadow-yellow-500/20
              hover:-translate-y-2 transition duration-300
            "
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>

            <p className="text-gray-400 mb-3">{plan.description}</p>

            <p className="text-yellow-400 text-2xl font-bold mb-6">
              {plan.price}
            </p>

            <button
              onClick={() => {
                setSelectedPlan(plan);
                setShowForm(false);
                setSuccess(false);
              }}
              className="
                bg-yellow-400 text-black
                px-6 py-2 rounded-full
                hover:bg-yellow-300 transition
              "
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="
            bg-gradient-to-br from-gray-900 to-black text-white
            p-8 rounded-3xl
            w-[95%] sm:w-[500px] md:w-[650px]
            shadow-2xl border border-white/10
          "
          >
            {/* SUCCESS */}
            {success && (
              <div className="text-center py-10">
                <div className="text-green-400 text-5xl mb-3">✔</div>
                <h2 className="text-2xl font-bold">Order Successful</h2>
                <p className="text-gray-400 mt-2">
                  We will contact you soon 🚀
                </p>
              </div>
            )}

            {/* DETAILS */}
            {!showForm && !success && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                  {selectedPlan.title}
                </h2>

                <p className="text-gray-300 mb-4">{selectedPlan.description}</p>

                <p className="text-3xl font-bold mb-6">{selectedPlan.price}</p>

                {/* 🔥 DIFFERENT DETAILS FOR EACH PLAN */}
                <ul className="space-y-2 mb-6 text-gray-300">
                  {selectedPlan.title === "Basic Hosting" && (
                    <>
                      <li>✔ Host 1 Domain</li>
                      <li>✔ 10 GB SSD Diskspace</li>
                      <li>✔ Unmetered Bandwidth</li>
                      <li>✔ 10 Email Accounts</li>
                      <li>✔ 10 MySQL Database</li>
                      <li>✔ PHP 4.x, 5.x, 7.x</li>
                      <li>✔ cPanel + Softaculous</li>
                    </>
                  )}

                  {selectedPlan.title === "Pro Hosting" && (
                    <>
                      <li>✔ Host 5 Domains</li>
                      <li>✔ 50 GB SSD Diskspace</li>
                      <li>✔ Unlimited Bandwidth</li>
                      <li>✔ 50 Email Accounts</li>
                      <li>✔ 50 MySQL Database</li>
                      <li>✔ Latest PHP</li>
                      <li>✔ Free SSL</li>
                    </>
                  )}

                  {selectedPlan.title === "Business Hosting" && (
                    <>
                      <li>✔ Unlimited Domains</li>
                      <li>✔ 200 GB SSD Diskspace</li>
                      <li>✔ Unlimited Bandwidth</li>
                      <li>✔ Unlimited Emails</li>
                      <li>✔ Unlimited Database</li>
                      <li>✔ High Performance Server</li>
                      <li>✔ Priority Support</li>
                    </>
                  )}
                </ul>

                <div className="flex gap-4">
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-yellow-400 text-black px-6 py-2 rounded-full"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => setSelectedPlan(null)}
                    className="border border-gray-500 px-6 py-2 rounded-full"
                  >
                    Close
                  </button>
                </div>
              </>
            )}

            {/* FORM */}
            {showForm && !success && (
              <>
                <h2 className="text-xl font-bold mb-4 text-yellow-400">
                  Enter Details
                </h2>

                <input
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  className="w-full mb-3 p-3 rounded bg-gray-800 border border-gray-700"
                />

                <input
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full mb-3 p-3 rounded bg-gray-800 border border-gray-700"
                />

                <input
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full mb-5 p-3 rounded bg-gray-800 border border-gray-700"
                />

                <div className="flex gap-4">
                  <button
                    onClick={handleBuy}
                    className="bg-yellow-400 text-black px-6 py-2 rounded-full"
                  >
                    Confirm Buy
                  </button>

                  <button
                    onClick={() => setShowForm(false)}
                    className="border border-gray-500 px-6 py-2 rounded-full"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing;

// import { useEffect, useState } from "react";

// function Pricing() {
//   const [plans, setPlans] = useState([]);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   useEffect(() => {
//     fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_plans.php")
//       .then((res) => res.json())
//       .then((data) => setPlans(data));
//   }, []);

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleBuy = async () => {
//     // 🔥 ONLY VALIDATION ADD (NO OTHER CHANGE)
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^[6-9]\d{9}$/;

//     if (!emailRegex.test(form.email)) {
//       alert("Enter valid email");
//       return;
//     }

//     if (!phoneRegex.test(form.phone)) {
//       alert("Enter valid phone number");
//       return;
//     }

//     const res = await fetch(
//       "http://localhost/DIPSU_WEBSITE/backend/api/create_order.php",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           phone: form.phone,
//           plan: selectedPlan.title,
//         }),
//       },
//     );

//     const data = await res.json();

//     if (data.status === "success") {
//       setSuccess(true);

//       setTimeout(() => {
//         setSelectedPlan(null);
//         setShowForm(false);
//         setSuccess(false);
//       }, 2000);
//     }
//   };

//   return (
//     <div id="pricing" className="bg-black text-white py-20 px-4">
//       {/* TITLE */}
//       <h2 className="text-3xl md:text-5xl text-center font-bold mb-16 tracking-wide">
//         BEST WEB HOSTING SERVICES
//       </h2>

//       {/* GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {plans.map((plan) => (
//           <div
//             key={plan.id}
//             className="
//               bg-gradient-to-b from-gray-800 to-gray-900
//               p-8 rounded-2xl text-center
//               shadow-lg hover:shadow-yellow-500/20
//               hover:-translate-y-2 transition duration-300
//             "
//           >
//             <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>

//             <p className="text-gray-400 mb-3">{plan.description}</p>

//             <p className="text-yellow-400 text-2xl font-bold mb-6">
//               {plan.price}
//             </p>

//             <button
//               onClick={() => {
//                 setSelectedPlan(plan);
//                 setShowForm(false);
//                 setSuccess(false);
//               }}
//               className="
//                 bg-yellow-400 text-black
//                 px-6 py-2 rounded-full
//                 hover:bg-yellow-300 transition
//               "
//             >
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {selectedPlan && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
//           <div
//             className="
//             bg-gradient-to-br from-gray-900 to-black text-white
//             p-8 rounded-3xl
//             w-[95%] sm:w-[500px] md:w-[650px]
//             shadow-2xl border border-white/10
//             animate-fadeIn
//           "
//           >
//             {/* SUCCESS */}
//             {success && (
//               <div className="text-center py-10">
//                 <div className="text-green-400 text-5xl mb-3">✔</div>
//                 <h2 className="text-2xl font-bold">Order Successful</h2>
//                 <p className="text-gray-400 mt-2">
//                   We will contact you soon 🚀
//                 </p>
//               </div>
//             )}

//             {/* DETAILS */}
//             {!showForm && !success && (
//               <>
//                 <h2 className="text-2xl font-bold mb-4 text-yellow-400">
//                   {selectedPlan.title}
//                 </h2>

//                 <p className="text-gray-300 mb-4">{selectedPlan.description}</p>

//                 <p className="text-3xl font-bold mb-6">{selectedPlan.price}</p>

//                 <ul className="space-y-2 mb-6 text-gray-400">
//                   <li>✔ Free SSL Certificate</li>
//                   <li>✔ 99.9% Uptime</li>
//                   <li>✔ 24/7 Support</li>
//                   <li>✔ Fast SSD Servers</li>
//                 </ul>

//                 <div className="flex gap-4">
//                   <button
//                     onClick={() => setShowForm(true)}
//                     className="bg-yellow-400 text-black px-6 py-2 rounded-full"
//                   >
//                     Buy Now
//                   </button>

//                   <button
//                     onClick={() => setSelectedPlan(null)}
//                     className="border border-gray-500 px-6 py-2 rounded-full"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </>
//             )}

//             {/* FORM */}
//             {showForm && !success && (
//               <>
//                 <h2 className="text-xl font-bold mb-4 text-yellow-400">
//                   Enter Details
//                 </h2>

//                 <input
//                   name="name"
//                   placeholder="Your Name"
//                   onChange={handleChange}
//                   className="w-full mb-3 p-3 rounded bg-gray-800 border border-gray-700"
//                 />

//                 <input
//                   name="email"
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                   className="w-full mb-3 p-3 rounded bg-gray-800 border border-gray-700"
//                 />

//                 <input
//                   name="phone"
//                   placeholder="Phone Number"
//                   onChange={handleChange}
//                   className="w-full mb-5 p-3 rounded bg-gray-800 border border-gray-700"
//                 />

//                 <div className="flex gap-4">
//                   <button
//                     onClick={handleBuy}
//                     className="bg-yellow-400 text-black px-6 py-2 rounded-full"
//                   >
//                     Confirm Buy
//                   </button>

//                   <button
//                     onClick={() => setShowForm(false)}
//                     className="border border-gray-500 px-6 py-2 rounded-full"
//                   >
//                     Back
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Pricing;
