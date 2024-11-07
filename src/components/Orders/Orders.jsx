import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { db, auth } from "../../firebase"; // Ensure you import auth for fetching the user
import { collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const Orders = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
        console.log("User UID:", user.uid); // Debug log
      } else {
        console.error("No user is signed in");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userUid) {
      fetchDeliveries();
    }
  }, [userUid]);

  const fetchDeliveries = async () => {
    try {
      const deliveriesCollection = collection(db, "Deliveries");
      const q = query(deliveriesCollection, where("userId", "==", userUid)); // Updated to use 'userId'
      const deliveriesSnapshot = await getDocs(q);
      const deliveriesData = deliveriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched deliveries:", deliveriesData); // Debug log
      setDeliveries(deliveriesData);
    } catch (error) {
      console.error("Error fetching deliveries: ", error);
      toast.error("Error fetching deliveries");
    }
  };

  return (
    <>
      {deliveries.length > 0 ? (
        deliveries.map((delivery) => (
          <ProductCard key={delivery.id} product={delivery} />
        ))
      ) : (
        <h1>No deliveries found for this user.</h1>
      )}
    </>
  );
};

export default Orders;
