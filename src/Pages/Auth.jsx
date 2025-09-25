import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const [form, setForm] = useState({ name: "", email: "", password: "", sector: "", description: "", specialty: "" });
  const [userForm, setUserForm] = useState({ name: "", email: "", password: "" });
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [activeTab, setActiveTab] = useState("artisan");
  const navigate = useNavigate();

  // Destructure checkLoginStatus from props
  const { checkLoginStatus } = props;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleUserChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send role from active tab so backend persists it
        body: JSON.stringify({ ...form, type: activeTab }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        setMessage("Registered successfully!");
        setProfile({ _id: data._id, name: data.name, email: data.email, role: activeTab });
        localStorage.setItem("token", data.token);
        checkLoginStatus(); // Update login status
        navigate("/profile");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Error registering.");
    }
  };

  const login = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        setMessage("Logged in successfully!");
        setProfile({ _id: data._id, name: data.name, email: data.email, role: data.borderLeft });
        localStorage.setItem("token", data.token);
        checkLoginStatus(); // Update login status
        navigate("/profile");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Error logging in.");
    }
  };

  const getProfile = async () => {
    if (!token) return setMessage("No token, please login first.");
    try {
      const res = await fetch("http://localhost:3000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setProfile(data);
      else setMessage(data.message);
    } catch (err) {
      console.error(err);
      setMessage("Error fetching profile.");
    }
  };

  // User registration handler
  const registerUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userForm, type: activeTab }),
      });
      const data = await res.json();
      if (res.ok) {
        setUserMessage("Registered successfully!");
        localStorage.setItem("token", data.token);
        checkLoginStatus(); // Update login status
        navigate("/profile");
      } else {
        setUserMessage(data.message || "Registration failed.");
      }
    } catch (err) {
      setUserMessage("Error registering user.");
    }
  };

  return (
    <div className="min-h-[110vh] flex flex-col items-center justify-center bg-gray-100 px-4 py-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md z-10 flex flex-col justify-center items-center">
        {/* Tabs */}
        <div className="flex mb-6 w-full">
          <button
            className={`flex-1 py-2 font-semibold rounded-l-lg border transition-colors duration-200 ${activeTab === "artisan"
              ? "text-white"
              : "text-gray-700"}`}
            style={{
              backgroundImage: activeTab === "artisan"
                ? "linear-gradient(135deg, hsla(15,75%,55%,0.9) 0%, hsla(15,70%,25%,0.9) 100%)"
                : "linear-gradient(135deg, #f3f4f6 0%, #f3f4f6 100%)",
              borderRight: 0
            }}
            onClick={() => setActiveTab("artisan")}
          >
            Artisan
          </button>
          <button
            className={`flex-1 py-2 font-semibold rounded-r-lg border transition-colors duration-200 ${activeTab === "user"
              ? "text-white"
              : "text-gray-700"}`}
            style={{
              backgroundImage: activeTab === "user"
                ? "linear-gradient(135deg, hsla(15,75%,55%,0.9) 0%, hsla(15,70%,25%,0.9) 100%)"
                : "linear-gradient(135deg, #f3f4f6 0%, #f3f4f6 100%)",
              borderLeft: 0
            }}
            onClick={() => setActiveTab("user")}
          >
            User
          </button>
        </div>
        {/* ARTISAN & USER FORM (shared design) */}
        {(activeTab === "artisan" || activeTab === "user") && (
          <>
            <h2
              className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)",
              }}
            >
              {isRegister ? "Register" : "Login"}
            </h2>
            <div className="space-y-4">
              {isRegister && (
                <>
                  <input
                    name="name"
                    placeholder="Name"
                    value={activeTab === "artisan" ? form.name : userForm.name}
                    onChange={activeTab === "artisan" ? handleChange : handleUserChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  {activeTab === "artisan" && (
                    <>
                      <input
                        name="sector"
                        placeholder="Sector"
                        value={form.sector}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                      <input
                        name="specialty"
                        placeholder="Specialty"
                        value={form.specialty}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                      <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                      />
                    </>
                  )}
                </>
              )}
              <input
                name="email"
                placeholder="Email"
                value={activeTab === "artisan" ? form.email : userForm.email}
                onChange={activeTab === "artisan" ? handleChange : handleUserChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={activeTab === "artisan" ? form.password : userForm.password}
                onChange={activeTab === "artisan" ? handleChange : handleUserChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="mt-6 flex justify-center">
              {isRegister ? (
                <button
                  onClick={activeTab === "artisan" ? register : registerUser}
                  className="min-w-[180px] py-2 text-white rounded-lg shadow-md hover:opacity-90 transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)",
                  }}
                >
                  Register
                </button>
              ) : (
                <button
                  onClick={login}
                  className="min-w-[180px] py-2 text-white rounded-lg shadow-md hover:opacity-90 transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)",
                  }}
                >
                  Login
                </button>
              )}
            </div>
            <p className="mt-4 text-center text-gray-600">
              {isRegister ? "Already have an account?" : "Don't have an account?"} {" "}
              <button
                className="font-medium"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                onClick={() => setIsRegister(!isRegister)}
              >
                {isRegister ? "Login" : "Register"}
              </button>
            </p>
            {activeTab === "artisan" && (
              <>
                <button
                  onClick={getProfile}
                  className="mt-4 w-full py-2 text-white rounded-lg shadow-md hover:opacity-90 transition"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)",
                  }}
                >
                  Get Profile
                </button>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                {profile && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                    <h3
                      className="font-semibold mb-2"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, hsla(15,75%,55%,0.5) 0%, hsla(15,70%,25%,0.5) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Profile:
                    </h3>
                    <p>
                      <span className="font-medium">ID:</span> {profile._id}
                    </p>
                    <p>
                      <span className="font-medium">Name:</span> {profile.name}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> {profile.email}
                    </p>
                  </div>
                )}
              </>
            )}
            {activeTab === "user" && userMessage && (
              <p className="mt-4 text-center text-red-500">{userMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
