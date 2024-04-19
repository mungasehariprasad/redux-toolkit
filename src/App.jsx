import React, { useState } from "react";
import "./index.css"; // Import your updated CSS file

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbard from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import About from "./pages/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/signup"
          element={<SignupForm setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/login"
          element={<LoginForm setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
