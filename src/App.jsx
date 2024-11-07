import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Route, Routes } from "react-router-dom";
import Deliver from "./pages/Deliver.jsx";
import Track from "./pages/Track.jsx";
import TrackOrderPage from "./pages/TrackOrderPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/ProfilePage.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/deliver" element={<Deliver />} />
        <Route path="/track" element={<Track />} />
        <Route path="/track/:trackingNumber" element={<TrackOrderPage />} />
      </Routes>
    </div>
  );
};

export default App;
