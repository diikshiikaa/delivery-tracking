import React, { useEffect, useState } from "react";
import { BiUser, BiEnvelope, BiPhone, BiMap } from "react-icons/bi";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async (user) => {
    try {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData(user);
      } else {
        console.log("User is not logged in");
        toast.error("User is not logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully");
    } catch (error) {
      console.log("Error logging out:", error.message);
    }
  }

  return (
    <>
      <div>
        {userDetails ? (
          <>
            <div className="m-24 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <BiUser className="text-2xl text-gray-700 mr-2 dark:text-white" />
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {userDetails.name}
                  </h2>
                </div>
                <div className="flex items-center mb-4">
                  <BiEnvelope className="text-2xl text-gray-700 mr-2 dark:text-white" />
                  <p className="text-gray-700 dark:text-white">
                    {userDetails.email}
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <BiPhone className="text-2xl text-gray-700 mr-2 dark:text-white" />
                  <p className="text-gray-700 dark:text-white">
                    {userDetails.phoneNo}
                  </p>
                </div>
                <div className="flex items-center">
                  <BiMap className="text-2xl text-gray-700 mr-2 dark:text-white" />
                  <p className="text-gray-700 dark:text-white">
                    {userDetails.address}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-10">
                <button
                  className="primary primary-btn mt-9"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
