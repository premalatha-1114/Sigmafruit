import React, { useEffect } from "react";
import Slider from "react-slick"; // Import react-slick
import Img1 from "../../Assets/Images/sigma-ban-2_.jpg";
import Img2 from "../../Assets/Images/sigma-ban-1_.jpg";
import Img3 from "../../Assets/Images/sigma-ban-3_.jpg";
import Img4 from "../../Assets/Images/sigma-ban-4.jpg";
import Img5 from "../../Assets/Images/banner432.jpg";
import Buttons from "../button page/Buttons";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "typeface-dancing-script";
import { Link } from "react-router-dom";

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
    AOS.refresh();
  }, []);

  // Slick slider settings
  const settings = {
    dots: true,
   infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    className: "partner-slider",
  };

  return (
    <section className="w-full h-full overflow-hidden">
      <Slider {...settings} className="relative">
        {/* Image 1 */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          {/* Image with overlay */}
          <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(34,34,34,0.75)] before:to-[rgba(34,34,34,0.45)] before:z-10 rounded-lg"></div>

          <img
            src={Img1}
            className="w-full h-full object-cover opacity-100"
            alt="Banner 1"
          />

          {/* Text Content  */}
           <div className="absolute top-[22%] sm:ml-[335px] px-5 w-full  text-white font-manrope z-20">
            <h1
              className="
              text-[28px] md:text-[40px] lg:text-[40px] sm:font-[800] "
              data-aos="zoom-in"
            >
              Farm Fresh Organic Produce
            </h1>
            <div className="flex gap-2 items-center py-4" data-aos="fade-up">
              <div className="w-[5px] h-[29px] bg-[#c6df3d]"></div>
              <p className="text-[18px] font-[400]" data-aos="zoom-in">
                Delivered at your doorstep
              </p>
            </div>
            <div className="flex gap-1 py-4" data-aos="fade-right">
              <Buttons Content="Shop Now" classNames="h-[47px] w-[150px] "/>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(34,34,34,0.75)] before:to-[rgba(34,34,34,0.45)] before:z-10 rounded-lg"></div>

          {/* Background Image */}
          <img
            src={Img2}
            className="w-full h-full object-cover"
            alt="Banner 1"
          />

          {/* Text Content */}
          <div className="absolute top-[27%] ml-[348px] w-full text-white font-manrope z-20">
            <h1
              className="sm:text-[50px] md:text-[40px] lg:text-[40px] font-bold"
              data-aos="zoom-in"
            >
              Farm Life Experience at its Best
            </h1>
            <div className="flex gap-3 items-center py-4" data-aos="fade-up">
              <div className="w-[5px] h-[32px] bg-[#c6df3d]"></div>
              <p className="text-[18px] font-[400]" data-aos="zoom-in">
                Schedule a visit with your loved one
              </p>
            </div>
            <div className="flex gap-5 py-4 " data-aos="fade-right">
              <Buttons
                Content="Visit"
                classNames="h-[47px] w-[100px] rounded-lg font-medium text-[17px]  rounded-md bg-[#c6df3d] text-[14px]  hover:bg-black hover:text-white shadow-md focus:ring-2   focus:outline-none focus:ring-opacity-100"
              />
              <div className="flex items-center gap-2">
                <Link
                  to=""
                  className="fas fa-play-circle text-[35px] hover:text-[#c6df3d] hover:bg-black  font-medium text-white"
                ></Link>
                <span className="font-dancing-script text-[24px] font-medium normal-case text-white">
                  Watch Now
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* img3 */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(34,34,34,0.75)] before:to-[rgba(34,34,34,0.45)] before:z-10 rounded-lg"></div>

          {/* Background Image */}
          <img
            src={Img3}
            className="w-full h-full object-cover"
            alt="Banner 1"
          />

          {/* Text Content */}
          <div className="absolute top-[27%] ml-[348px] w-full text-white font-manrope z-20">
            <h1
              className="sm:text-[50px] md:text-[40px] lg:text-[40px] font-bold"
              data-aos="zoom-in"
            >
              Partner to sell, if you are buying
            </h1>
            <div className="flex gap-3 items-center py-4" data-aos="fade-up">
              <div className="w-[5px] h-[29px] bg-[#c6df3d]"></div>
              <p className="text-[18px] font-[400]" data-aos="zoom-in">
                Enjoying smoking recipes from fresh produce
              </p>
            </div>
            <div className="flex gap-5 py-4" data-aos="fade-right">
              <Buttons
                Content="Visit"
                classNames="h-[47px] w-[110px]  rounded-md bg-[#c6df3d] text-[14px] hover:bg-black-700 hover:text-white shadow-md focus:ring-2   focus:outline-none focus:ring-opacity-100 font-medium text-[16px]"
              />
            </div>
          </div>
        </div>
        {/* imag4 */}

        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(34,34,34,0.75)] before:to-[rgba(34,34,34,0.45)] before:z-10 rounded-lg"></div>

          {/* Background Image */}
          <img
            src={Img4}
            className="w-full h-full object-cover"
            alt="Banner 1"
          />

          {/* Text Content */}
          <div className="absolute top-[10%] ml-[348px] w-full text-white font-manrope z-20">
            <h1
              className="sm:text-[50px] md:text-[40px] lg:text-[40px] font-semibold"
              data-aos="zoom-in"
            >
              Partner to buy, if you are a
            </h1>

            {/* List of Categories */}
            {[
              "Retailer",
              "Food Processing",
              "Exports",
              "Hotels/Cloud Kitchens",
            ].map((item, index) => (
              <div
                className="flex gap-2 items-center py-4"
                data-aos="fade-up"
                key={index}
              >
                <div className="w-[4px] h-[29px]  bg-[#c6df3d]"></div>
                <p className="text-[18px] font-[400]" data-aos="zoom-in">
                  {item}
                </p>
              </div>
            ))}

            {/* Sign-Up Button */}
            <div className="flex gap-1 py-3" data-aos="fade-right">
              <Buttons Content="Sign Up" classNames="h-[47px] w-[150px]  rounded-md bg-[#c6df3d] text-[14px] hover:bg-black-700 hover:text-white shadow-md focus:ring-2   focus:outline-none focus:ring-opacity-100" />
            </div>
          </div>
        </div>

        {/* img5 */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(34,34,34,0.75)] before:to-[rgba(34,34,34,0.45)] before:z-10 rounded-lg"></div>

          {/* Background Image */}
          <img
            src={Img5}
            className="w-full h-full object-cover"
            alt="Banner 1"
          />

          {/* Text Content */}
          <div className="absolute top-[27%] ml-[348px] w-full text-white font-manrope z-20">
            <h1
              className="sm:text-[50px] md:text-[40px] lg:text-[40px] font-semibold"
              data-aos="zoom-in"
            >
              Partner to sell, if you are a
            </h1>

            {/* List of Categories */}
            {["Farmer", "FPC's Farmer Groups"].map((item, index) => (
              <div
                className="flex gap-4 items-center py-4"
                data-aos="fade-up"
                key={index}
              >
                <div className="w-[5px] h-[29px] bg-[#c6df3d]"></div>
                <p className="text-[18px] font-[400]" data-aos="zoom-in">
                  {item}
                </p>
              </div>
            ))}

            {/* Sign-Up Button */}
            <div className="flex gap-2 py-4" data-aos="fade-right">
              <Buttons Content="Sign Up" classNames="h-[47px] w-[150px]  rounded-md bg-[#c6df3d] text-[14px] hover:bg-black hover:text-white shadow-md focus:ring-2   focus:outline-none focus:ring-opacity-100" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Banner;
