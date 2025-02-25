// import React from "react";
// import Corn from "../../Assets/Images/corn.png";
// import Slider from "react-slick"; // Import react-slick
// import farm from "../../Assets/farm.png";
// import field from "../../Assets/field.png";
// import harvest from "../../Assets/harvest.png";
// import oder from "../../Assets/order-delivered.png";
// import man from "../../Assets/Images/stati-scaled.jpg";
// import "./Statistics.css";

// const Statistics = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   // Sample statistics data
//   const statisticsData = [
//     { id: 1, title: "Acre Farm", value: "18.9", image: farm },
//     { id: 2, title: "Crop Varieties", value: "50+", image: field },
//     { id: 3, title: "Tones of harvest", value: "2000+", image: harvest },
//     { id: 4, title: "Oders delivered", value: "3000+", image: oder },
    
//   ];

//   return (
//     <div className="mt-[80px]">
//       <div className="flex  gap-[30px] p-[60px] ">
//         <div className="w-[65%] h-full block ">
//           <div className="flex gap-4">
//             <div>
//               <img src={Corn} alt="corn" className="w-full h-full" />
//             </div>
//             <div className="mt-2">
//               <p className="text-[22px] font-normal underline">Statistics</p>
//             </div>
//           </div>
//           <div className="w-[40%] h-[100px] py-4">
//             <p className="text-[18px] font-medium leading-none">
//               Some numbers that reflect our present and motivate us for the
//               future
//             </p>
//           </div>

//           <div className="">
//             <Slider {...settings}>
           
//               {statisticsData.map((stat) => (
//                 <div
//                   key={stat.id}
//                   className="w-[70px]  flex flex-wrap flex-col items-start justify-center shadow-sm bg-[#f8f6ef] p-8 mx-2  my-2 h-full rounded-lg  transition-all duration-200 hover:bg-black hover:text-white"
//                 >
//                   <div className=" w-[70px] flex items-center justify-center  h-[70px] bg-[#C6DF3D] rounded-full">
//                     <img
//                       src={stat.image}
//                       alt=""
//                       className="w-[40px] h-[40px] object-cover "
//                     />
//                   </div>
//                   <div className="py-2">
//                     <p className=" font-bold  text-[24px]">{stat.value}</p>
//                   </div>
//                   <div className="py-2">
//                     <p className=" font-normal text-[18px]">{stat.title}</p>
//                   </div>
//                 </div>
//               ))}
            
//             </Slider>
//           </div>
//         </div>
//         <div className="w-full h-[500px] gap-3">
//           <img src={man} alt="" className="w-[90%] rounded-2xl h-[500px] " />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Statistics;
import React, { useState, useEffect } from "react";
import Corn from "../../Assets/Images/corn.png";
import Slider from "react-slick"; // Import react-slick
import farm from "../../Assets/farm.png";
import field from "../../Assets/field.png";
import harvest from "../../Assets/harvest.png";
import oder from "../../Assets/order-delivered.png";
import man from "../../Assets/Images/stati-scaled.jpg";
import "./Statistics.css";

const Statistics = () => {
  const [statisticsData, setStatisticsData] = useState([
    { id: 1, title: "Tones of harvest", value: 1, max: 2000, image: farm }, // Start with 200
    { id: 2, title: "Orders Delivered", value:1, max: 3000, image: field }, // Up to 4000
    { id: 3, title: "Acre Farm", value: 1, max: 18.9, image: harvest }, // Up to 20
    { id: 4, title: "Crop Varieties", value: 1, max: 50, image: oder }, // Up to 100
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatisticsData((prevData) =>
        prevData.map((stat) => {
          switch (stat.id) {
            case 1:
              return { ...stat, value: Math.min(stat.value + 1, stat.max) }; 
            case 2:
              return { ...stat, value: Math.min(stat.value + 1, stat.max) }; 
            case 3:
              return { ...stat, value: Math.min(stat.value + 1, stat.max) }; 
            case 4:
              return { ...stat, value: Math.min(stat.value + 1, stat.max) }; 
              return stat; // Return unchanged if not matched
          }
        })
      );
    }, 10); // milliseconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mt-[80px]">
      <div className="flex gap-[30px] p-[60px]">
        <div className="w-[65%] h-full block">
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
              Some numbers that reflect our present and motivate us for the future
            </p>
          </div>

          <div>
            <Slider {...settings}>
              {statisticsData.map((stat) => (
                <div
                  key={stat.id}
                  className="w-[70px] flex sm:block flex-wrap flex-col items-start justify-center shadow-sm bg-[#f8f6ef] p-8 mx-2 my-2 h-full rounded-lg transition-all duration-200 hover:bg-black hover:text-white"
                >
                  <div className="w-[70px] flex items-center justify-center h-[70px] bg-[#C6DF3D] rounded-full">
                    <img
                      src={stat.image}
                      alt=""
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </div>
                  <div className="py-2 font-medium text-[25px]">
                  {stat.id === 3 ? stat.value.toFixed(1) : `${stat.value}+`}                  </div>
                  <div className="py-2">
                    <p className="font-normal text-[18px]">{stat.title}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full h-[500px] gap-3 sm:block">
          <img src={man} alt="" className="w-[90%] rounded-2xl h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;