import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    push(ref(db, "contacts"), { name, email });

    alert("Saved ✅");
    setName("");
    setEmail("");
  };

  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-6">CONTACT US</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 py-2">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
