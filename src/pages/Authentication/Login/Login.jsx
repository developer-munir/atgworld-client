import React from "react";
import "../Authentication.css";
import { AiOutlineEye } from "react-icons/ai";
import facebook from "../../../assets/f_logo_RGB-Blue_1024.png";
import google from "../../../assets/search.png";
const Login = () => {
  return (
    <div>
      <div className="main-group">
        <input
          type="email"
          className="form-control py-2 from-style "
          placeholder="Email"
          aria-label="Server"
          name="email"
        />
        <div className="input-group">
          <input
            type="password"
            className="form-control py-2 from-style"
            placeholder="Password"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            name="password"
          />
          <span className="eye-btn me-2 mt-2" type="button" id="button-addon2">
            <AiOutlineEye size={20}></AiOutlineEye>
          </span>
        </div>
      </div>

      <div className="row">
        <div className="col-6 col-md-8 col-lg-12">
          <button className="my-3 px-4 py-2 rounded-pill border-0 create-account-btn w-100">
            Sign In
          </button>
        </div>
        <span
          className="col-6 col-md-4 d-lg-none mt-4 singnInBtn text-end"
          data-bs-target="#exampleModal"
          data-bs-toggle="modal"
          data-bs-dismiss="modal"
        >
          or, Create Account
        </span>
      </div>
      <div className="row my-3 border py-2 mx-1">
        <div className="col-4 text-end">
          <img src={facebook} alt="" />
        </div>
        <div className="col-8 ">Sign up with Facebook</div>
      </div>
      <div className="row mt-3 border py-2 mx-1 d-flex flex-row justify-content-between">
        <div className="col-4 text-end">
          <img src={google} alt="" />
        </div>
        <div className="col-8 ">Sign up with Google</div>
      </div>
      <p className="text-center mt-3 fw-bold">Forgot Password?</p>
    </div>
  );
};

export default Login;
