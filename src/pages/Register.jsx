import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock, AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits.", {
        position: "top-right",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          phoneNo: phone,
          address: address,
        });
      }
      toast.success("User registered successfully", {
        position: "top-left",
      });
      window.location.href = "/";
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
      });
    }
  };

  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{
        backgroundColor: "#FF3CAC",
        backgroundImage:
          "linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
      }}
    >
      <div>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-10">
            Register
          </h1>
          <form action="" onSubmit={handleRegister}>
            <div className="relative my-4">
              <input
                required
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="block w-72 py-2.3 px-0 pt-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black peer"
              />
              <label
                htmlFor=""
                className="absolute text-xl text-white duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 peer-placeholder-shown:text-3xl"
              >
                Your Name
              </label>
              <BiUser className="absolute top-0 right-4" />
            </div>
            <div className="relative my-4 mt-8">
              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-72 py-2.3 px-0 pt-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black peer"
              />
              <label
                htmlFor=""
                className="absolute text-xl text-white duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 peer-placeholder-shown:text-3xl"
              >
                Your Email
              </label>
              <BiUser className="absolute top-0 right-4" />
            </div>
            <div className="relative my-4 mt-8">
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-72 py-2.3 px-0 pt-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black peer"
              />
              <label
                htmlFor=""
                className="absolute text-xl text-white duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 peer-placeholder-shown:text-3xl"
              >
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-0 right-4" />
            </div>

            <div className="relative my-4 mt-8">
              <input
                required
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                className="block w-72 py-2.3 px-0 pt-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black peer"
              />
              <label
                htmlFor=""
                type="tel"
                maxLength="10"
                minLength="10"
                className="absolute text-xl text-white duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 peer-placeholder-shown:text-3xl"
              >
                Your Phone Number
              </label>
              <AiOutlinePhone className="absolute top-0 right-4" />
            </div>
            <div className="relative my-4 mt-8">
              <input
                required
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                className="block w-72 py-2.3 px-0 pt-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus:text-white focus:border-black peer"
              />
              <label
                htmlFor=""
                className="absolute text-xl text-white duration-300 transform -translate-y-10 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10 peer-placeholder-shown:text-3xl"
              >
                Your Address
              </label>
              <MdLocationOn className="absolute top-0 right-4" />
            </div>
            <button
              type="submit"
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            >
              Register
            </button>
            <div>
              <span className="m-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
