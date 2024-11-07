import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Thompson - Logistics Manager, BrightWave Industries",
    text: "FastTrack has revolutionized our delivery process. Their real-time tracking and route optimization features have significantly reduced our delivery times and improved customer satisfaction. They truly feel like a partner in our success.",
    img: "../../src/assets/website/person1.jpg",
  },
  {
    id: 2,
    name: "Michael Lee - CEO, FreshMart Groceries",
    text: "The package security and efficiency provided by FastTrack have been outstanding. Our customers appreciate the reliable service and timely deliveries. FastTrack's support has been instrumental in scaling our business operations smoothly.",
    img: "../../src/assets/website/person2.jpg",
  },
  {
    id: 3,
    name: "Emily Davis - Operations Director, TechWave Solutions",
    text: "The results have been incredible. With FastTrack, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "../../src/assets/website/person3.jpg",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
