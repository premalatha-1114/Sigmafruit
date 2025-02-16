import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import react-slick
import Img1 from "../../Assets/Images/sigma-ban-2_.jpg";
import Img2 from "../../Assets/Images/sigma-ban-1_.jpg";
import Img3 from "../../Assets/Images/sigma-ban-3_.jpg";
import Img4 from "../../Assets/Images/sigma-ban-4.jpg";
import Img5 from "../../Assets/Images/banner432.jpg";
import Img6 from "../../Assets/Images/Farm-to-home-in-less-than-24hrs.png";
import Buttons from "../button page/Buttons";
import AOS from "aos";
import "aos/dist/aos.css";

function Banner() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    beforeChange: (current, next) => {
      setIsAnimating(false); // Start animation
    },
    afterChange: () => {
      setIsAnimating(true); // End animation
      AOS.refresh(); // Refresh AOS
    },
  };

  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    beforeChange: (current, next) => {
      setIsAnimating(false); // Start animation
    },
    afterChange: () => {
      setIsAnimating(true); // End animation
      AOS.refresh(); // Refresh AOS
    },
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const sliderdown = [
    {
      img: Img6,
      title: "Nutrient Dense Produce",
    },
    {
      img: Img6,
      title: "Nutrient Dense Produce",
    },
    {
      img: Img6,
      title: "Nutrient Dense Produce",
    },
    {
      img: Img6,
      title: "Nutrient Dense Produce",
    },
  ];

  const slides = [
    {
      img: Img1,
      title: "Farm Fresh Organic Produce",
      description: "Delivered at your doorstep",
      buttonText: "Shop Now",
      aos: "fade-up",
    },
    {
      img: Img2,
      title: "Farm Life Experience at its Best",
      description: "Schedule a visit with your loved one",
      buttonText: "Visit",
      aos: "fade-up",
    },
    {
      img: Img3,
      title: "Partner to sell, if you are buying",
      description: "Enjoy smoking recipes from fresh produce",
      buttonText: "Visit",
      aos: "fade-up",
    },
    {
      img: Img4,
      title: "Partner to buy, if you are a",
      description: "Retailer, Food Processing, Exports, Hotels/Cloud Kitchens",
      buttonText: "Sign Up",
      aos: "fade-up",
    },
    {
      img: Img5,
      title: "Partner to sell, if you are a",
      description: "Farmer, FPC's Farmer Groups",
      buttonText: "Sign Up",
      aos: "fade-up",
    },
  ];

  return (
    <>
      <section className="w-full h-full overflow-hidden">
        <Slider {...settings} className="relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full h-[500px] rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(34,34,34,0.75)] before:to-[rgba(34,34,34,0.45)] before:z-10 rounded-lg"></div>
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt={`Banner ${index + 1}`}
              />
              <div className="absolute top-[22%] lg:ml-[330px] px-5 w-full text-white font-manrope z-20">
                <h1
                  className={`text-[28px] md:text-[40px] font-semibold ${
                    isAnimating ? "opacity-100" : "opacity-100"
                  }`}
                  data-aos={slide.aos}
                >
                  {slide.title}
                </h1>
                <div
                  className={`flex gap-2 items-center py-4 ${
                    isAnimating ? "opacity-100" : "opacity-100"
                  }`}
                  data-aos={slide.aos}
                >
                  <div className="w-[5px] h-[29px] bg-[#c6df3d]"></div>
                  <p className="text-[18px] font-[400]">{slide.description}</p>
                </div>
                <div
                  className={`flex gap-1 py-4 ${
                    isAnimating ? "opacity-100" : "opacity-100"
                  }`}
                  data-aos={slide.aos}
                >
                  <Buttons
                    Content={slide.buttonText}
                    classNames="h-[47px] w-[150px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
<section>
        <div className="w-full h-full overflow-hidden -mt-[6px] ">
          <Slider {...settingss} className="relative">
            {sliderdown.map((slide, index) => (
              <div
                key={index}
                className="relative w-full h-[150px] overflow-hidden"
              >
                <div className="w-full h-[150px] border-[1px] border-gray-300 px-4">
                  <div className="w-full h-full flex gap-5 justify-center items-center">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={slide.img}
                        alt={slide.title}
                        loading="lazy"
                      />
                      <p className="text-2xl font-semibold text-start">{slide.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Banner;
