import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function HeaderTop() {
  return (
    <div className="w-full h-auto sm:h-[50px]  bg-black text-white">
      <div className="w-full h-full  hidden   sm:flex sm:justify-between sm:items-center   max-w-[1440px] mx-auto">
        <div className="flex gap-6 px-[65px] ">
          <div className="flex items-center gap-1 text-[#ffffffb3] font-manrope font-normal text-[15px]">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mr-2  text-[#c6df3d] size-[18px] "
            />
            <Link
              to="mailto:interestingprema@gmail.com "
              classname="text-[#ffffffb3]   size-[18px] "
            >
              sigmafarmersmarket@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-1  text-[#ffffffb3]  font-manrope font-normal text-[15px]">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="mr-2 fa-rotate-90 text-[#c6df3d] size-[18px] "
            />
            <span> Call : +91 6384330303 </span>
          </div>
        </div>

        <div className="flex gap-[20px] mr-[35px] ">
          <Link to="https://www.facebook.com/people/Sigma-Farmers-Market/100091489702147/">
            <FontAwesomeIcon
              icon={faFacebook}
              className="hover:text-[#c6df3d]  size-[19px]  text-[#ffffffb3]"
            />
          </Link>
          <Link to="https://www.instagram.com/sigmafarmersmarket/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-[#c6df3d] size-[19px] text-[#ffffffb3]"
            />
          </Link>
          <Link to="https://www.youtube.com/@SigmaFarmersMarket">
            <FontAwesomeIcon
              icon={faYoutube}
              className="hover:text-[#c6df3d] size-[19px] text-[#ffffffb3]"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/kumaragurumanickavasagam/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-[#c6df3d] size-[19px]  text-[#ffffffb3]"
            />
          </Link>
        </div>
      </div>
      <div className="w-full h-auto sm:hidden  relative p-4 flex justify-between  items-center max-w-[1440px]">
        <div className="flex  gap-[70px] items-center justify-between w-full  ">
          <div className="flex items-center ">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="mr-2 fa-rotate-90 size-[14px] text-[#c6df3d] "
            />
            <span className="text-[#ffffffb3]  text-[14px]">
          
              call : +91 6384330303
            </span>
          </div>
          <div className="flex ">
            <button className=" h-[40px] w-full  flex gap-1 px-3 hover:bg-black  text-[#000] items-center rounded-md bg-[#c6df3d] text-[14px] ">
              <span className="item-center w-[70px] font-semibold ">
                shop now
              </span>
              <span>
                <FaRegArrowAltCircleRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
