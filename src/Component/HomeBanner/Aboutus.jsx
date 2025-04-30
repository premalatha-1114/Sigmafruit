import React, { useEffect } from "react";
import Image1 from "../../Assets/Images/abt-1.jpg";
import Image2 from "../../Assets/Images/abt-2.jpg";
import corn from "../../Assets/Images/corn.png";
import Farm from "../../Assets/Farm-tour-2.png";
import cafeImage from "../../Assets/Cafe.png";
import Workshop from "../../Assets/workshop-1-1.png";
import Cultivation from "../../Assets/cultivation.png";
import { Link } from "react-router-dom";
import "./Aboutus.css";
import { motion } from "framer-motion"; // Make sure to import from framer-motion
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  const farmTours = [
    {
      id: 1,
      title: "Farm Tours",
      image: Farm,
      link: "https://www.sigmafarmersmarket.com/farm-visit/",
    },
    {
      id: 2,
      title: "Cafe",
      image: cafeImage,
      link: "https://www.sigmafarmersmarket.com/farm-cafe/",
    },
    {
      id: 3,
      title: "Workshops",
      image: Workshop,
      link: "https://www.sigmafarmersmarket.com/workshop/",
    },
    {
      id: 4,
      title: "Cultivation",
      image: Cultivation,
      link: "https://www.sigmafarmersmarket.com/our-produce/",
    },
    {
      id: 5,
      title: "Farm Tours",
      image: Farm,
      link: "https://www.sigmafarmersmarket.com/farm-visit/",
    },
    {
      id: 6,
      title: "Cafe",
      image: cafeImage,
      link: "https://www.sigmafarmersmarket.com/farm-cafe/",
    },
    {
      id: 7,
      title: "Workshops",
      image: Workshop,
      link: "https://www.sigmafarmersmarket.com/workshops/",
    },
    {
      id: 8,
      title: "Cultivation",
      image: Cultivation,
      link: "https://www.sigmafarmersmarket.com/our-produce/",
    },
  ];

  return (
    <>
      <div className="w-full h-full MaxWidth overflow-hidden mt-[70px] px-[20px] md:px-[40px]">
        <div className="w-full h-full flex flex-col lg:flex-row  gap-[40px]">
          <div className="relative w-full">
            <div className="w-full h-full flex justify-center gap-7">
              <div
                className="w-[40%] sm:w-[45%] md:w-[40%] lg:w-[40%] h-[40%] sm:h-[240px] md:h-[300px] lg:h-[350px] rounded-xl"
                data-aos="zoom-in"
              >
                <img
                  src={Image1}
                  className="w-full h-full object-cover rounded-xl"
                  alt="About 1"
                />
              </div>
              <div
                className="w-[60%] sm:w-[45%] md:w-[40%] lg:w-[60%] h-[60%] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl"
                data-aos="zoom-in"
              >
                <img
                  src={Image2}
                  className="w-full h-full object-cover rounded-xl"
                  alt="About 2"
                />
              </div>
            </div>

            <div
              className="absolute top-[20%] left-[13%] sm:top-[50%] sm:left-[25%] lg:top-[40%] bg-[#1F1E17] w-[150px] h-[140px]  lg:w-[250px] lg:h-[200px] p-4 flex justify-center items-center rounded-3xl"
              data-aos="zoom-in-left"
            >
              <p className="text-white leading-7 line-clamp-4 text-start lg:text-3xl font-thin lg:leading-10">
                Pioneer in Organic Farming for the past 7 Years
              </p>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex ">
              <div className="w-full h-full flex gap-3 ">
                <div className="">
                  <img src={corn} alt="corn" className="w-full h-full" />
                </div>
                <div className="mt-2">
                  <p className="text-[20px] font-normal underline">About Us</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p className="font-semibold text-[20px]">
                We are passionate organic farmers
              </p>
              <p className="py-3 text-[15px] font-normal leading-7">
                Sigma Estates is an 18.9 acre Organic farm located in Kotagiri,
                a quietly tucked away hill station in the Western Ghats of Tamil
                Nadu (The Nilgiris), Southern India.
              </p>
              <p className="py-2 text-[15px] font-normal leading-7">
                Sigma Estates is a product of our love and passion for Travel,
                Permaculture, Farm Stays & Gastronomy. Permaculture Design was
                applied to the planning and layout of the farm. By implementing
                permaculture techniques, practising natural farming, and using
                natural resources while preserving traditional knowledge, we
                have been demonstrating a road back to nature.
              </p>
            </div>
            <div className="mt-4">
              <marquee behavior="scroll" direction="left">
                {farmTours.map((tour, index) => (
                  <motion.div
                    key={tour.id}
                    className="inline-block w-[170px] h-[170px] rounded-md border border-transparent p-[20px] mx-2 bg-[#C6DF3D] hover:bg-white hover:border-[#C6DF3D] hover:border-2 transition-all duration-200"
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                  >
                    <Link
                      className="flex flex-col justify-center items-center gap-4"
                      to={tour.link}
                    >
                      <div className="w-[100px] h-[100px]">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p>{tour.title}</p>
                    </Link>
                  </motion.div>
                ))}
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
