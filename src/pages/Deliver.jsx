import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useDeliveries } from "../context/DeliveriesContext";
import { generateRandomTrackingNumber } from "../utils/trackingUtils";
import { toast } from "react-toastify";

const Deliver = () => {
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [packageSize, setPackageSize] = useState("");
  const { addDelivery, deliveries } = useDeliveries(); // Destructure addDelivery and deliveries from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user) {
      console.error("User not logged in");
      return;
    }

    const newDelivery = {
      userId: user.uid,
      trackingNumber: generateRandomTrackingNumber(),
      receiverName,
      receiverPhone,
      receiverAddress,
      packageSize,
    };

    try {
      await addDoc(collection(db, "Deliveries"), newDelivery);
      console.log("Delivery added successfully");
      toast.success("Delivery added successfully");
      addDelivery(newDelivery); // Add to context or state

      // Log deliveries here to verify the update
      console.log("Updated deliveries:", deliveries);
    } catch (error) {
      console.error("Error adding delivery:", error);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-20">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="receiver_name"
            id="receiver_name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Receiver's Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="receiver_phone"
            id="receiver_phone"
            value={receiverPhone}
            onChange={(e) => setReceiverPhone(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Receiver's Phone Number
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="receiver_address"
            id="receiver_address"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Receiver's Address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="size"
            id="size"
            value={packageSize}
            onChange={(e) => setPackageSize(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Package Size (in inches)
          </label>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary-hover dark:focus:ring-primary"
          >
            Deliver
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Deliver;
