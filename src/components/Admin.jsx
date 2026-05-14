import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // GET ORDERS
  const fetchOrders = () => {
    fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_orders.php")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // GET CONTACTS
  useEffect(() => {
    fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_contacts.php")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  // SEARCH FILTER
  const filteredOrders = orders.filter(
    (o) =>
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase()),
  );

  // PAGINATION
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  // DELETE ORDER
  const deleteOrder = (id) => {
    if (!window.confirm("Delete this order?")) return;

    fetch("http://localhost/DIPSU_WEBSITE/backend/api/delete_order.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setOrders((prev) => prev.filter((o) => o.id !== id));
        }
      });
  };

  // 🔥 STATUS UPDATE (FIXED)
  const updateStatus = async (id, status) => {
    await fetch(
      "http://localhost/DIPSU_WEBSITE/backend/api/update_status.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      },
    );

    // 🔥 reload from DB
    fetchOrders();
  };

  // 🔥 REVENUE (ONLY COMPLETE)
  const totalRevenue = orders
    .filter((o) => o.status === "Complete")
    .reduce((total, o) => {
      return total + Number(o.price || 0);
    }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-3xl font-bold text-yellow-400 tracking-wide">
          Admin Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            window.location.href = "/login";
          }}
          className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700"
        />
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-800 p-6 rounded-xl">
          Orders: {orders.length}
        </div>

        <div className="bg-green-800 p-6 rounded-xl">
          Contacts: {messages.length}
        </div>

        <div className="bg-purple-800 p-6 rounded-xl">
          Revenue: ₹{totalRevenue}
        </div>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-gray-900 rounded-2xl p-6 mb-10 shadow-lg border border-gray-800">
        <h2 className="text-yellow-400 mb-4 text-lg font-semibold tracking-wide">
          Orders
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm rounded-lg overflow-hidden">
            {/* HEADER */}
            <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Plan</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {currentOrders.map((o, index) => (
                <tr
                  key={o.id}
                  className={`border-b border-gray-800 transition hover:bg-gray-800 ${
                    index % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
                  }`}
                >
                  <td className="p-3 font-medium">{o.name}</td>

                  <td className="p-3 text-gray-400">{o.email}</td>

                  <td className="p-3">{o.phone}</td>

                  {/* PLAN BADGE */}
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-black ${
                        o.plan === "Basic Hosting"
                          ? "bg-blue-400"
                          : o.plan === "Pro Hosting"
                            ? "bg-yellow-400"
                            : "bg-green-400"
                      }`}
                    >
                      {o.plan}
                    </span>
                  </td>

                  {/* PRICE */}
                  <td className="p-3 text-green-400 font-semibold">
                    ₹{o.price}
                  </td>

                  {/* STATUS */}
                  <td className="p-3">
                    <select
                      value={o.status || "Start"}
                      onChange={(e) => updateStatus(o.id, e.target.value)}
                      className={`px-2 py-1 rounded text-xs text-black font-semibold ${
                        o.status === "Complete"
                          ? "bg-green-500"
                          : o.status === "Process"
                            ? "bg-yellow-400"
                            : "bg-orange-500"
                      }`}
                    >
                      <option value="Start" className="bg-white text-black">
                        Start
                      </option>
                      <option value="Process" className="bg-white text-black">
                        Process
                      </option>
                      <option value="Complete" className="bg-white text-black">
                        Complete
                      </option>
                    </select>
                  </td>

                  {/* DATE */}
                  <td className="p-3 text-gray-500 text-xs">{o.created_at}</td>

                  {/* DELETE */}
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteOrder(o.id)}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-xs font-semibold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-5 gap-2 flex-wrap">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* CONTACTS */}
      <div className="bg-gray-900 rounded-xl p-6">
        <h2 className="text-green-400 mb-4">Contact Messages</h2>

        <table className="w-full text-sm">
          <thead className="border-b border-gray-700 text-gray-400">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((m) => (
              <tr key={m.id} className="border-b border-gray-800">
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.message}</td>
                <td>{m.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;

// import { useEffect, useState } from "react";

// function Admin() {
//   const [orders, setOrders] = useState([]);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // ORDERS
//     fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_orders.php")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Orders:", data);
//         setOrders(data);
//       })
//       .catch((err) => console.error(err));

//     // CONTACTS
//     fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_contacts.php")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Messages:", data);
//         setMessages(data);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div
//       style={{
//         padding: "20px",
//         background: "#000",
//         color: "#fff",
//         minHeight: "100vh",
//       }}
//     >
//       <h2>Orders</h2>

//       {orders.length === 0 ? (
//         <p>No Orders Found</p>
//       ) : (
//         orders.map((o, i) => (
//           <div
//             key={i}
//             style={{
//               border: "1px solid gray",
//               padding: "10px",
//               margin: "10px 0",
//             }}
//           >
//             {o.name} | {o.email} | {o.plan} | {o.phone}
//           </div>
//         ))
//       )}

//       <h2 style={{ marginTop: "30px" }}>Messages</h2>

//       {messages.length === 0 ? (
//         <p>No Messages Found</p>
//       ) : (
//         messages.map((m, i) => (
//           <div
//             key={i}
//             style={{
//               border: "1px solid gray",
//               padding: "10px",
//               margin: "10px 0",
//             }}
//           >
//             <b>{m.name}</b> ({m.email}) <br />
//             {m.message}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Admin;
