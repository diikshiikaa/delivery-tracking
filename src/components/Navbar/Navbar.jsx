import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/Vector.svg";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Track",
    link: "/track",
  },
  {
    id: 3,
    name: "Deliver",
    link: "/deliver",
  },
];

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          console.log("No such document!");
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a href="/" className="flex items-center gap-3">
            <img src={Logo} alt="FastTrack Logo" className="w-5" />
            <span className="text-2xl sm:text-3xl font-semibold">
              FastTrack
            </span>
          </a>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
              {user ? (
                <li className="py-4">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary dark:hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    <BiUserCircle className="text-2xl text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-500" />
                    <span>{user.name || "Profile"}</span>
                  </Link>
                </li>
              ) : (
                <Link to="/login">
                  <button className="primary-btn">Sign Up/Login</button>
                </Link>
              )}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
