import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ProductCard = ({ product, darkMode }) => {
  const [deliverDetails, setDeliverDetails] = useState(null);

  useEffect(() => {
    console.log("Product:", product);
    if (product.id) {
      fetchDeliverData(product.id);
    } else {
      console.error("Invalid delivery ID:", product.id);
    }
  }, [product]);

  const fetchDeliverData = async (deliveryId) => {
    try {
      const docRef = doc(db, "Deliveries", deliveryId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDeliverDetails(docSnap.data());
        console.log("Delivery details:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching delivery data: ", error);
      toast.error("Error fetching delivery data");
    }
  };

  const cardClass = `bg-white dark:bg-black dark:text-white duration-300 rounded-md p-4 flex justify-around items-center`;
  const textClass = `text-lg font-semibold text-black dark:text-white`;
  const descriptionClass = `text-sm font-semibold ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`;
  const linkClass = `text-white ${
    darkMode
      ? "bg-primary-dark hover:bg-primary-hover-dark focus:ring-primary-dark"
      : "bg-primary hover:bg-primary-hover focus:ring-4"
  } focus:outline-none focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-4`;

  return (
    <>
      {deliverDetails ? (
        <div className={cardClass}>
          <div>
            <h2 className={textClass}>
              Tracking Number: {deliverDetails.trackingNumber}
            </h2>
            <h2 className={descriptionClass}>
              Receiver Name: {deliverDetails.receiverName}
            </h2>
            <h2 className={descriptionClass}>
              Receiver Address: {deliverDetails.receiverAddress}
            </h2>
            <h2 className={descriptionClass}>
              Receiver Phone: {deliverDetails.receiverPhone}
            </h2>
            <h2 className={descriptionClass}>
              Package Size: {deliverDetails.packageSize}
            </h2>
          </div>
          <Link
            to={`/track/${deliverDetails.trackingNumber}`}
            className={linkClass}
          >
            <button>Track Order</button>
          </Link>
        </div>
      ) : (
        <p>No delivery details available</p>
      )}
    </>
  );
};

export default ProductCard;
