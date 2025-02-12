import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Buttons({ Content, classNames,advance,third }) {
  return (
    <div className="flex ">
      <button
        className={`flex gap-2   justify-center px-2 py-2 ${classNames} ${advance} ${third} text-[#000] items-center  rounded-md bg-[#c6df3d] text-[14px] hover:bg-black hover:text-white shadow-md focus:ring-2   focus:outline-none focus:ring-opacity-100 `}
      >
        <span className="font-medium text-[17px] ">{Content}</span>
        <span className="mt-1 font-medium">
          <FaRegArrowAltCircleRight />
        </span>
      </button>
    </div>
  );
}

export default Buttons;
