import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./Ourproduce.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import green from "../../Assets/green.png";
import organic from "../../Assets/organic.png";
import uyire from "../../Assets/Uyir-Logo.png";
import continum from "../../Assets/Continuum-logo-web.png";
import client0 from "../../Assets/client-0.png";
import client1 from "../../Assets/client-2.png";
import client2 from "../../Assets/client-3.png";
import client4 from "../../Assets/client-4.png";

// Slides for produce
const slides = [
  {
    image:
      "https://www.sigmafarmersmarket.com/wp-content/uploads/2024/02/vegtables.png",
    title: "Greens",
    description:
      "Grown naturally, our leafy greens contain only the nutrients you need, not the chemicals.",
  },
  {
    image:
      "https://www.sigmafarmersmarket.com/wp-content/uploads/2024/02/vegtables.png",
    title: "Preserves",
    description:
      "Experience the unmatched purity and goodness of Nilgiris in every luscious bite of our Preserves.",
  },
  {
    image:
      "https://www.sigmafarmersmarket.com/wp-content/uploads/2024/02/vegtables.png",
    title: "Juices",
    description:
      "Our juices are a healthy and tasty dose of goodness without compromising on taste.",
  },
];

// Client images slider
const clientSlides = [
  { id: 1, image: green },
  { id: 2, image: organic },
  { id: 3, image: uyire },
  { id: 4, image: continum },
  { id: 5, image: client0 },
  { id: 6, image: client1 },
  { id: 7, image: client2 },
  { id: 8, image: client4 },
];

function OurProduce() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-auto mt-[50px] relative">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 absolute -top-10">
        <div className="w-full md:w-1/2 NewBgSigmaOne h-auto p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-center text-white">
          <p className="text-center md:text-left text-sm sm:text-base lg:text-lg">
            Need Doorstep delivery of organic farm fresh fruits and vegetables?
          </p>
          <button className="mt-4 md:mt-0 px-4 py-3 min-w-[130px] flex justify-between items-center rounded-md bg-[#c6df3d] hover:bg-black hover:text-white shadow-md focus:ring-2 focus:outline-none font-semibold text-sm sm:text-base">
            <span>Shop Now</span>
            <FaRegArrowAltCircleRight className="ml-2 text-black" />
          </button>
        </div>
        <div className="w-full md:w-1/2 NewBgSigmaTwo h-auto p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-center text-white">
          <p className="text-center md:text-left text-sm sm:text-base lg:text-lg">
            Need Doorstep delivery of organic farm fresh fruits and vegetables?
          </p>
          <button className="mt-4 md:mt-0 px-4 py-3 min-w-[130px] flex justify-between items-center rounded-md bg-[#c6df3d] hover:bg-black hover:text-white shadow-md focus:ring-2 focus:outline-none font-semibold text-sm sm:text-base">
            <span>Shop Now</span>
            <FaRegArrowAltCircleRight className="ml-2 text-black" />
          </button>
        </div>
      </div>

      {/* Our Produce Section */}
      <div className="w-full h-auto px-4 pt-8 pb-[150px] bg-gray-900 text-white sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <h2 className="text-center text-2xl font-semibold mb-6 pt-[100px]">Our Produce</h2>
        <p className="text-center text-lg mb-8">
          Farm fresh produce every day with a long-term commitment to your health!
        </p>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full px-2">
              {/* Image Section */}
              <div className="w-full h-[280px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Card Content */}
              <div className="min-h-[200px] relative group z-30 -mt-[20px] bg-white text-black text-center shadow-lg w-[90%] max-w-sm mx-auto flex flex-col justify-between rounded-lg">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg px-3 pt-3 line-clamp-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm py-3 px-3 leading-6 line-clamp-5">
                    {slide.description}
                  </p>
                </div>

                <button className="w-full group-hover:bg-[#ffA500] bg-[#c6df3d] flex gap-2 justify-center items-center hover:bg-black hover:text-white px-4 py-2 rounded-md font-semibold text-sm mt-2">
                  Shop Now
                  <FaRegArrowAltCircleRight />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Clients Section */}
      <div className="w-full px-[50px] h-[280px] absolute top-[90%]">
        <div className="bg-white rounded-md shadow-custom   flex flex-col px-10">
          <div className="flex justify-center py-5">
            <h3 className="text-xl">Here are some of our clients</h3>
          </div>

          <Slider {...settings}>
            {clientSlides.map((client) => (
              <div key={client.id} className="w-full h-[250px] px-2 border border-[#C6DF3D]">
                {/* Image Section */}
                <div className="w-full max-w-[100%] h-[150px] py-5 flex justify-center ">
                  <img
                    src={client.image}
                    alt={`Client ${client.id}`}
                    className="w-auto max-w-[100%] h-[150px] object-cover rounded-lg shadow-md "
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurProduce;
