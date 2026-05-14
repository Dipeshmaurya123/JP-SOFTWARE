import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_orders.php")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_contacts.php")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  const filteredOrders = orders.filter(
    (o) =>
      o.name.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase()),
  );

  const indexOfLast = currentPage * itemsPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfLast - itemsPerPage,
    indexOfLast,
  );
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const deleteOrder = (id) => {
    if (!window.confirm("Delete this order?")) return;

    fetch("http://localhost/DIPSU_WEBSITE/backend/api/delete_order.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).then(() => {
      setOrders((prev) => prev.filter((o) => o.id !== id));
    });
  };

  const updateStatus = (id, status) => {
    fetch("http://localhost/DIPSU_WEBSITE/backend/api/update_status.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const totalRevenue = orders
    .filter((o) => o.status === "Complete")
    .reduce((total, o) => {
      return total + (o.price ? Number(o.price) : 0);
    }, 0);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-yellow-400">Admin Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            window.location.href = "/login";
          }}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full p-3 mb-6 bg-gray-800 rounded"
      />

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-700 p-6 rounded">Orders: {orders.length}</div>

        <div className="bg-green-700 p-6 rounded">
          Contacts: {messages.length}
        </div>

        <div className="bg-purple-700 p-6 rounded">
          Revenue: ₹{totalRevenue}
        </div>
      </div>

      {/* 🔥 ORDERS TABLE (ONLY DESIGN IMPROVED) */}
      <div className="bg-gray-900 p-6 rounded mb-8">
        <h2 className="text-yellow-400 mb-4">Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Plan</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentOrders.map((o, i) => (
                <tr
                  key={o.id}
                  className={`border-b border-gray-800 transition hover:bg-gray-800 ${
                    i % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
                  }`}
                >
                  <td className="p-3 text-left font-medium">{o.name}</td>

                  <td className="p-3 text-left text-gray-400 break-all">
                    {o.email}
                  </td>

                  <td className="p-3 text-left">{o.phone}</td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs text-black ${
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

                  {/* ✅ STATUS SAME AS ORIGINAL */}
                  <td className="p-3">
                    <select
                      value={o.status || "Start"}
                      onChange={(e) => updateStatus(o.id, e.target.value)}
                      className={`px-2 py-1 rounded text-xs text-black ${
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

                  <td className="p-3 text-gray-500 text-xs">{o.created_at}</td>

                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteOrder(o.id)}
                      className="bg-red-500 px-3 py-1 rounded text-xs"
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
        <div className="mt-4 flex justify-center gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 ${
                currentPage === i + 1
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 CONTACT TABLE (ONLY DESIGN IMPROVED) */}
      <div className="bg-gray-900 p-6 rounded">
        <h2 className="text-green-400 mb-4">Contact Messages</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((m, i) => (
                <tr
                  key={m.id}
                  className={`border-b border-gray-800 transition hover:bg-gray-800 ${
                    i % 2 === 0 ? "bg-gray-900" : "bg-gray-950"
                  }`}
                >
                  <td className="p-3 text-left font-medium">{m.name}</td>

                  <td className="p-3 text-left text-gray-400 break-all">
                    {m.email}
                  </td>

                  <td className="p-3 text-left text-gray-300 max-w-xs truncate">
                    {m.message}
                  </td>

                  <td className="p-3 text-left text-gray-500 text-xs">
                    {m.created_at}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;

// import { useEffect, useState } from "react";

// function Admin() {
//   const [orders, setOrders] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   const itemsPerPage = 5;

//   // GET ORDERS
//   useEffect(() => {
//     fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_orders.php")
//       .then((res) => res.json())
//       .then((data) => setOrders(data));
//   }, []);

//   // GET CONTACTS
//   useEffect(() => {
//     fetch("http://localhost/DIPSU_WEBSITE/backend/api/get_contacts.php")
//       .then((res) => res.json())
//       .then((data) => setMessages(data));
//   }, []);

//   // 🔥 SEARCH
//   const filteredOrders = orders.filter(
//     (o) =>
//       o.name.toLowerCase().includes(search.toLowerCase()) ||
//       o.email.toLowerCase().includes(search.toLowerCase()),
//   );

//   // 🔥 PAGINATION
//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

//   // 🔥 DELETE
//   const deleteOrder = (id) => {
//     if (!window.confirm("Delete this order?")) return;

//     fetch("http://localhost/DIPSU_WEBSITE/backend/api/delete_order.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === "success") {
//           setOrders((prev) => prev.filter((o) => o.id !== id));
//         } else {
//           alert("Delete failed");
//         }
//       })
//       .catch(() => {
//         alert("Server error");
//       });
//   };

//   // 🔥 DYNAMIC REVENUE (NO HARD CODE)
//   const totalRevenue = orders.reduce((total, o) => {
//     return total + (o.price ? Number(o.price) : 0);
//   }, 0);
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
//         <h1 className="text-3xl font-bold text-yellow-400">Admin Dashboard</h1>

//         <button
//           onClick={() => {
//             localStorage.removeItem("admin");
//             window.location.href = "/login";
//           }}
//           className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>

//       {/* SEARCH */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="🔍 Search orders..."
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none"
//         />
//       </div>

//       {/* CARDS */}
//       <div className="grid md:grid-cols-3 gap-6 mb-10">
//         <div className="bg-blue-700 p-6 rounded-xl shadow-lg">
//           <h2>Total Orders</h2>
//           <p className="text-3xl font-bold">{orders.length}</p>
//         </div>

//         <div className="bg-green-700 p-6 rounded-xl shadow-lg">
//           <h2>Contacts</h2>
//           <p className="text-3xl font-bold">{messages.length}</p>
//         </div>

//         <div className="bg-purple-700 p-6 rounded-xl shadow-lg">
//           <h2>Revenue</h2>
//           <p className="text-3xl font-bold">₹{totalRevenue}</p>
//         </div>
//       </div>

//       {/* ORDERS TABLE */}
//       <div className="bg-gray-900 rounded-xl p-6 mb-10">
//         <h2 className="text-yellow-400 mb-4">Orders</h2>

//         <table className="w-full text-sm">
//           <thead className="border-b border-gray-700 text-gray-400">
//             <tr>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Phone</th>
//               <th className="p-3 text-left">Plan</th>
//               <th className="p-3 text-left">Date</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {currentOrders.map((o) => (
//               <tr
//                 key={o.id}
//                 className="border-b border-gray-800 hover:bg-gray-800"
//               >
//                 <td className="p-3">{o.name}</td>
//                 <td className="p-3 text-gray-400">{o.email}</td>
//                 <td className="p-3">{o.phone}</td>

//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded text-xs ${
//                       o.plan === "Pro Hosting"
//                         ? "bg-yellow-400 text-black"
//                         : "bg-gray-700"
//                     }`}
//                   >
//                     {o.plan}
//                   </span>
//                 </td>

//                 <td className="p-3 text-gray-500">{o.created_at}</td>

//                 <td className="p-3 text-center">
//                   <button
//                     onClick={() => deleteOrder(o.id)}
//                     className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* PAGINATION */}
//         <div className="flex justify-center mt-4 gap-2">
//           {[...Array(totalPages)].map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded ${
//                 currentPage === i + 1
//                   ? "bg-yellow-400 text-black"
//                   : "bg-gray-700"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* CONTACTS */}
//       <div className="bg-gray-900 rounded-xl p-6">
//         <h2 className="text-green-400 mb-4">Contact Messages</h2>

//         <table className="w-full text-sm">
//           <thead className="border-b border-gray-700 text-gray-400">
//             <tr>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Message</th>
//               <th className="p-3 text-left">Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {messages.map((m) => (
//               <tr
//                 key={m.id}
//                 className="border-b border-gray-800 hover:bg-gray-800"
//               >
//                 <td className="p-3">{m.name}</td>
//                 <td className="p-3 text-gray-400">{m.email}</td>
//                 <td className="p-3">{m.message}</td>
//                 <td className="p-3 text-gray-500">{m.created_at}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Admin;
