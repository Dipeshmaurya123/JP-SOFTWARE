import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost/DIPSU_WEBSITE/backend/api/add_contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        },
      );

      const data = await res.json();

      if (data.status === "success") {
        alert("Message Sent ✅");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.msg || "Error ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-black text-white"
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl w-[500px] shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700"
        />

        <input
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700"
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-400 text-black py-3 rounded hover:bg-yellow-500"
        >
          Send Message 🚀
        </button>
      </div>
    </div>
  );
}

export default Contact;
