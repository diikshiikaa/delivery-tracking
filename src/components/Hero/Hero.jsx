import React from "react";
import yellowCar from "../../assets/website/deliv.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px] rounded-3xl "
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">📦Packages</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Dilevered</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Your Package, Our Priority at{" "}
              <span className="text-primary">FastTrack</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Partner with FastTrack to streamline your delivery process from
              start to finish. Our cutting-edge tracking system ensures
              transparency, reliability, and timely deliveries, keeping your
              business running smoothly and your customers satisfied.
            </p>
            <div className="mt-12">
              <Link to="/track">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-offset="0"
                  className="primary-btn mr-8"
                >
                  Track Package
                </button>
              </Link>
              <Link to="/deliver">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-offset="0"
                  className="primary-btn"
                >
                  Deliver Package
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
