import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Orders from "../components/Orders/Orders";

const Track = () => {
  return (
    <>
      <Navbar />
      <div className="my-16"></div>
      <Orders />
      <div className="my-24"></div>
      <Footer />
    </>
  );
};

export default Track;
