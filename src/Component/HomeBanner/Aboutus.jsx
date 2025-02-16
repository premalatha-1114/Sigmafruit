import React from "react";
import Image1 from "../../Assets/Images/abt-1.jpg";
import Image2 from "../../Assets/Images/abt-2.jpg";
import corn from "../../Assets/Images/corn.png";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Aboutus = () => {
  return (
    <>
      <div className="w-full h-full MaxWidth overflow-hidden mt-[100px]">
        <div className="w-full h-full flex gap-10 ">
          <div className="relative">
            <div className="w-full h-full flex gap-7">
              <div className="w-[220px] h-[300px] rounded-xl ">
                <img
                  src={Image1}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-[300px] h-[400px] rounded-xl ">
                <img
                  src={Image2}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute top-[40%] left-[20%] bg-black w-[250px] h-[200px] p-4 flex justify-center items-center rounded-3xl">
              <p className="text-white text-3xl text-start">
                Pioneer in Organic Farming for the past 7 Years
              </p>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex  ">
              <div className="w-full h-full flex gap-3 ">
                <div className="">
                  <img src={corn} alt="corn" className="w-full h-full " />
                </div>
                <div className="mt-2">
                  <p className=" text-[20px] font-normal underline">About Us</p>
                </div>
              </div>
            </div>
            <div className="py-2">
              <p className="font-medium text-[18px]">
                We are passionate organic farmers
              </p>
              <p className="py-2 text-[16px] font-normal leading-7">
                Sigma Estates is an 18.9 acre Organic farm located in Kotagiri,
                a quietly tucked away hill station in the Western Ghats of Tamil
                Nadu (The Nilgiris), Southern India.
              </p>
              <p className="py-2 text-[16px] font-normal leading-7">
                Sigma Estates is a product of our love and passion for Travel,
                Permaculture, Farm Stays & Gastronomy. Permaculture Design was
                applied to the planning and layout of the farm. By implementing
                permaculture techniques, practising natural farming, and using
                natural resources while preserving traditional knowledge, we
                have been demonstrating a road back to nature.
              </p>
            </div>
            <div className="">
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Slider>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Aboutus;
