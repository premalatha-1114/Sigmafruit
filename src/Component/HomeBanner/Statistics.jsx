import React, { useState, useEffect } from "react";
import Corn from "../../Assets/Images/corn.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import
import "swiper/swiper-bundle.css"; // Updated CSS import
import farm from "../../Assets/farm.png";
import field from "../../Assets/field.png";
import harvest from "../../Assets/harvest.png";
import order from "../../Assets/order-delivered.png";
import man from "../../Assets/Images/stati-scaled.jpg";
import "./Statistics.css";

const Statistics = () => {
  const [statisticsData, setStatisticsData] = useState([
    { id: 1, title: "Tones of harvest", value: 1, max: 2000, image: farm },
    { id: 2, title: "Orders Delivered", value: 1, max: 3000, image: field },
    { id: 3, title: "Acre Farm", value: 1, max: 18.9, image: harvest },
    { id: 4, title: "Crop Varieties", value: 1, max: 50, image: order },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatisticsData((prevData) =>
        prevData.map((stat) => ({
          ...stat,
          value: Math.min(stat.value + 1, stat.max),
        }))
      );
    }, 10); // milliseconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="mt-[80px] px-[30px] sm:px-[40px]">
      <div className="flex flex-col lg:flex-row gap-[30px] lg:p-[60px]">
        <div className="w-full lg:w-[65%] h-full">
          <div className="flex gap-4">
            <div>
              <img src={Corn} alt="corn" className="w-full h-full" />
            </div>
            <div className="mt-2">
              <p className="text-[22px] font-normal underline">Statistics</p>
            </div>
          </div>
          <div className="py-4">
            <p className="text-[16px] font-semibold leading-6">
              Some numbers that reflect our present and motivate us for the future
            </p>
          </div>

          {/* Mobile View: Grid of Cards */}
          <div className="w-full grid grid-cols-2 gap-6 lg:hidden">
            {statisticsData.map((stat) => (
              <div
                key={stat.id}
                className=" Statisticsshadow bg-[#f8f6ef] rounded-2xl transition-all duration-200 hover:bg-black hover:text-white p-6 flex flex-col items-center"
              >
                <div className="w-[70px] flex items-center justify-center h-[70px] bg-[#C6DF3D] rounded-full">
                  <img
                    src={stat.image}
                    alt=""
                    className="w-[40px] h-[40px] object-cover"
                  />
                </div>
                <div className="py-2 text-[25px] font-semibold">
                  {stat.id === 3 ? stat.value.toFixed(1) : `${stat.value}+`}
                </div>
                <div className="py-2 text-[14px] sm:text-[16px]">
                  <p className="font-normal">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Swiper */}
          <div className="hidden lg:block">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {statisticsData.map((stat) => (
                <SwiperSlide
                  key={stat.id}
                  className="max-w-[250px]  flex flex-col items-start justify-center Statisticsshadow bg-[#f8f6ef] rounded-2xl transition-all duration-200 hover:bg-black hover:text-white p-6 my-1"
                >
                  <div className="w-[70px] flex items-center justify-center h-[70px] bg-[#C6DF3D] rounded-full">
                    <img
                      src={stat.image}
                      alt=""
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </div>
                  <div className="py-2 text-[25px] font-semibold">
                    {stat.id === 3 ? stat.value.toFixed(1) : `${stat.value}+`}
                  </div>
                  <div className="py-2">
                    <p className="font-normal text-[18px]">{stat.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full h-[400px] lg:h-[500px] ">
          <img src={man} alt="" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
