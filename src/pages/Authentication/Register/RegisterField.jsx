import React from "react";
import "../Authentication.css";
import { AiOutlineEye } from "react-icons/ai";
import facebook from "../../../assets/f_logo_RGB-Blue_1024.png";
import google from "../../../assets/search.png";
const RegisterField = () => {
  return (
    <div>
      <div className="main-group">
        <div class="input-group ">
          <input
            type="text"
            class="form-control py-3 name"
            placeholder="First Name"
            aria-label="Username"
            name="first-name"
          />
          <input
            type="text"
            class="form-control py-3 name-2"
            placeholder="Last Name"
            aria-label="Server"
            name="second-name"
          />
        </div>
        <input
          type="email"
          class="form-control py-3 from-style "
          placeholder="Email"
          aria-label="Server"
          name="email"
        />
        <div class="input-group">
          <input
            type="password"
            class="form-control py-3 from-style"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="password"
          />
          <span class="eye-btn me-2 mt-3" type="button" id="button-addon2">
            <AiOutlineEye size={20}></AiOutlineEye>
          </span>
        </div>
        <input
          type="password"
          class="form-control py-3 from-style last-input"
          placeholder="Confirm Password"
          aria-label="Server"
          name="confirm-password"
        />
      </div>
      <button className="my-3 py-2 rounded-pill border-0 create-account-btn">
        Create Account
      </button>
      <div class="row my-3 border py-2 mx-1">
        <div className="col-4 text-end">
          <img src={facebook} alt="" />
        </div>
        <div className="col-8 ">Sign up with Facebook</div>
      </div>
      <div class="row mt-3 border py-2 mx-1">
        <div className="col-4 text-end">
          <img src={google} alt="" />
        </div>
        <div className="col-8 ">Sign up with Google</div>
      </div>
    </div>
  );
};

export default RegisterField;
