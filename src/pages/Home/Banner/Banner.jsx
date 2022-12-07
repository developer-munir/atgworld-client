import React from "react";
import banner from "../../../assets/Rectangle 2.svg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className=" ">
      <div class="banner_img position-relative">
        <div class="icon_box  text-white position-absolute w-100 px-2">
          <div class="d-flex justify-content-between ">
            <span>arrow</span>
            <button type="button" class="btn btn-primary">
              Primary
            </button>
          </div>
        </div>
        <div class="text-area position-absolute text-white">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
