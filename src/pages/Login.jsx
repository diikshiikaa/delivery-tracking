import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      window.location.href = "/";
      toast.success("User logged in successfully", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center",
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
            Login
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="relative my-4">
              <input
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
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <label htmlFor="Remember Me">Remember Me</label>
              </div>
              <Link to="/register" className="text-blue-500">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            >
              Login
            </button>
            <div>
              <span className="m-4">
                New Here?{" "}
                <Link to="/register" className="text-blue-500">
                  Create an account
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
