import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TrackOrder from "../components/TrackOrder/TrackOrder";

const TrackOrderPage = () => {
  return (
    <>
      <Navbar />
      <div className="my-16"></div>
      <TrackOrder />
      <div className="my-16"></div>
      <Footer />
    </>
  );
};

export default TrackOrderPage;
