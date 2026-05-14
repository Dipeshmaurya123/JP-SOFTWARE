import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [realOtp, setRealOtp] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 SEND OTP
  const sendOtp = () => {
    if (!email) {
      alert("Enter email first");
      return;
    }

    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setRealOtp(generatedOtp);

    emailjs
      .send(
        "service_3hlrl9e",
        "template_cgkzamo",
        {
          email: email,
          otp: generatedOtp,
        },
        "JjKbp1f4Zk9bnxYz4",
      )
      .then(() => {
        alert("OTP sent ✅");
        setShowPopup(true);
        setStep(2);
      })
      .catch((err) => {
        console.error(err);
        alert("Email failed ❌");
      });
  };

  // 🔥 VERIFY OTP
  const verifyOtp = () => {
    if (otp === String(realOtp)) {
      setStep(3);
    } else {
      alert("Wrong OTP ❌");
    }
  };

  // 🔥 RESET PASSWORD (FORMDATA FIX)
  const resetPassword = async () => {
    if (!password) {
      alert("Enter new password");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost/DIPSU_WEBSITE/backend/api/reset_password.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      );

      const data = await res.json();
      console.log("RESET RESPONSE:", data); // 🔥 debug

      if (data.status === "success") {
        alert("Password Reset Successful 🎉");

        // 👉 optional: login flag set
        localStorage.setItem("admin", "true");

        // 👉 login page पर भेज
        window.location.href = "/login";
      } else {
        alert(data.msg || "Server error ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-xl w-[350px] shadow-lg">
        <h2 className="text-xl font-bold text-yellow-400 mb-6 text-center">
          Forgot Password
        </h2>

        <input
          placeholder="Enter Email"
          className="w-full p-3 mb-4 rounded bg-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={sendOtp}
          className="w-full bg-yellow-400 text-black py-2 rounded"
        >
          Send OTP
        </button>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl w-[350px]">
            {step === 2 && (
              <>
                <h3 className="text-yellow-400 mb-4 text-center">Enter OTP</h3>

                <input
                  placeholder="Enter OTP"
                  className="w-full p-3 mb-4 rounded bg-gray-800"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button
                  onClick={verifyOtp}
                  className="w-full bg-yellow-400 py-2 rounded"
                >
                  Verify OTP
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="text-green-400 mb-4 text-center">
                  Set New Password
                </h3>

                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 mb-4 rounded bg-gray-800"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  onClick={resetPassword}
                  className="w-full bg-green-500 py-2 rounded"
                >
                  Reset Password
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
