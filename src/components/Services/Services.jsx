import React from "react";
import { MdSpatialTracking } from "react-icons/md";
import { FaRoute } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
const skillsData = [
  {
    name: "Real-Time Tracking",
    icon: <MdSpatialTracking className="text-4xl text-primary" />,
    link: "#",
    description:
      "Keep an eye on your shipments with our advanced tracking system that provides real-time updates and accurate ETAs. Ensure peace of mind for you and your customers with precise and timely information.",
    aosDelay: "0",
  },
  {
    name: "Route Optimization",
    icon: <FaRoute className="text-4xl text-primary" />,
    link: "#",
    description:
      "Maximize efficiency with our state-of-the-art route optimization technology. Reduce delivery times, lower fuel costs, and improve overall service quality with intelligent route planning.",
    aosDelay: "300",
  },
  {
    name: "Package Security",
    icon: <FiPackage className="text-4xl text-primary" />,
    link: "#",
    description:
      "Our delivery services include robust security measures to ensure that your packages arrive safely. From tamper-proof packaging to secure handling, we prioritize the safety and integrity of your shipments.",
    aosDelay: "500",
  },
  {
    name: "Same-Day Delivery",
    icon: <TbTruckDelivery className="text-4xl text-primary" />,
    link: "#",
    description:
      "Meet the demands of your customers with our reliable same-day delivery service. Ensure urgent shipments are delivered promptly, increasing customer satisfaction and loyalty with our fast and dependable service.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We provide comprehensive delivery and tracking solutions designed
              to streamline your logistics and enhance customer satisfaction.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Services;
