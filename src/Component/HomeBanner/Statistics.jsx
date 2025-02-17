import React from "react";
import Corn from "../../Assets/Images/corn.png";
import Slider from "react-slick"; // Import react-slick
import farm from "../../Assets/farm.png";
import field from "../../Assets/field.png";
import harvest from "../../Assets/harvest.png";
import oder from "../../Assets/order-delivered.png";
import man from "../../Assets/Images/stati-scaled.jpg";

const Statistics = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Sample statistics data
  const statisticsData = [
    { id: 1, title: "Acre Farm", value: "18.9", image: farm },
    { id: 2, title: "Crop Varieties", value: "50+", image: field },
    { id: 3, title: "Tones of harvest", value: "2000+", image: harvest },
    { id: 4, title: "Oders delivered", value: "3000+", image: oder },
    
  ];

  return (
    <div className="mt-[80px]">
      <div className="flex  gap-[30px] p-[60px] ">
        <div className="w-[65%] h-full block ">
          <div className="flex gap-4">
            <div>
              <img src={Corn} alt="corn" className="w-full h-full" />
            </div>
            <div className="mt-2">
              <p className="text-[22px] font-normal underline">Statistics</p>
            </div>
          </div>
          <div className="w-[40%] h-[100px] py-4">
            <p className="text-[18px] font-medium leading-none">
              Some numbers that reflect our present and motivate us for the
              future
            </p>
          </div>

          <div className="">
            <Slider {...settings}>
           
              {statisticsData.map((stat) => (
                <div
                  key={stat.id}
                  className=" flex flex-col items-start justify-center shadow-sm bg-[#f8f6ef] p-8 h-full rounded-lg m-2.5 transition-all duration-200 "
                >
                  <div className=" w-[70px] flex items-center justify-center  h-[70px] bg-[#C6DF3D] rounded-full">
                    <img
                      src={stat.image}
                      alt=""
                      className="w-[40px] h-[40px] object-cover "
                    />
                  </div>
                  <div className="py-2">
                    <p className=" font-bold  text-[24px]">{stat.value}</p>
                  </div>
                  <div className="py-2">
                    <p className=" font-normal text-[18px]">{stat.title}</p>
                  </div>
                </div>
              ))}
            
            </Slider>
          </div>
        </div>
        <div className="w-full h-[500px] gap-3">
          <img src={man} alt="" className="w-[90%] rounded-2xl h-[500px] " />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
