import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import Artisans from "./Pages/Artisanas";
import Catalogue from "./Pages/Catalogue";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Customize from "./Pages/Customize";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/auth");
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<Artisans />} />
        <Route path="/collection" element={<Catalogue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/customize" element={<Customize />} />
        <Route path="/auth" element={<Auth checkLoginStatus={checkLoginStatus} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
