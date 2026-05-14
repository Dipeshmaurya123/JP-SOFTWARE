import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    console.log("Login clicked", form);

    try {
      const res = await fetch(
        "http://localhost/DIPSU_WEBSITE/backend/api/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();
      console.log("Response:", data);

      if (data.status === "success") {
        alert("Login Success ✅");

        // save login
        localStorage.setItem("admin", "true");

        // redirect
        window.location.href = "/admin";
      } else {
        alert("Wrong username or password ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-2xl w-[350px] text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
          Admin Login
        </h2>

        <input
          placeholder="Username"
          className="w-full mb-3 p-3 rounded bg-gray-800 outline-none"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded bg-gray-800 outline-none"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <a href="/forgot" className="text-blue-400 hover:underline">
          Forgot Password?
        </a>

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
