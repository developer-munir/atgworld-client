import React from "react";
import "./Banner.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Banner = () => {
  return (
    <div>
      <div className="banner_img position-relative">
        <div className="icon_box  text-white position-absolute w-100 px-2">
          <div className="d-flex justify-content-between ">
            <span>
              <AiOutlineArrowLeft></AiOutlineArrowLeft>
            </span>
            <button type="button" className="btn btn-outline-light">
              Join Group
            </button>
          </div>
        </div>
        <div className="text-area position-absolute text-white">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
