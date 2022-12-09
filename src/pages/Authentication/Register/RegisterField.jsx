import React, { useContext, useState } from "react";
import "../Authentication.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import facebook from "../../../assets/f_logo_RGB-Blue_1024.png";
import google from "../../../assets/search.png";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
const RegisterField = () => {
  const [togglePassword, setTogglePassword] = useState("password");
  const toggleEyeBtn = () => {
    togglePassword === "password"
      ? setTogglePassword("text")
      : setTogglePassword("password");
  };
  //create user with email password
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    /* 
    confirm
email
first
last
password 
    */
    if (data?.password === data?.confirm) {
      return toast.error("password did not match!!");
    }

    console.log(data);
  };

  const { googleLogin, facebookLogin } = useContext(AuthContext);
  // facebook login
  const facebookProvider = new FacebookAuthProvider();
  const handleFacebookLogin = () => {
    facebookLogin(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("login successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error);
      });
  };
  // google login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("login successfully");
      })
      .catch((error) => {
        toast.error(error);
        console.error(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main-group">
          <div className="input-group ">
            <input
              {...register("first")}
              type="text"
              className="form-control py-2 name"
              placeholder="First Name"
              aria-label="Username"
              name="first"
              required
            />
            <input
              {...register("last")}
              type="text"
              className="form-control py-2 name-2"
              placeholder="Last Name"
              aria-label="Server"
              name="last"
              required
            />
          </div>
          <input
            {...register("email")}
            type="email"
            className="form-control py-2 from-style "
            placeholder="Email"
            aria-label="Server"
            name="email"
            required
          />
          <div className="input-group">
            <input
              {...register("password")}
              type={togglePassword}
              className="form-control py-2 from-style"
              placeholder="Password"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              name="password"
              required
            />
            <span
              className="eye-btn me-2 mt-2"
              type="button"
              id="button-addon2"
              onClick={toggleEyeBtn}
            >
              {togglePassword === "password" ? (
                <AiOutlineEyeInvisible size={20}></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye size={20}></AiOutlineEye>
              )}
            </span>
          </div>
          <input
            {...register("confirm")}
            type="password"
            className="form-control py-2 from-style last-input"
            placeholder="Confirm Password"
            aria-label="Server"
            name="confirm"
            required
          />
        </div>
        <div className="row">
          <div className="col-6 col-md-10 col-lg-12">
            <button
              type="submit"
              className="my-3 px-4 py-2 rounded-pill border-0 create-account-btn w-100"
            >
              Create Account
            </button>
          </div>
          <span
            className="col-6 col-md-2 d-lg-none mt-4 text-end singnInBtn"
            data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            or, Sign In
          </span>
        </div>
      </form>

      <div className="row my-3 border py-2 mx-1" onClick={handleFacebookLogin}>
        <div className="col-4 text-end">
          <img src={facebook} alt="" />
        </div>
        <div className="col-8">Sign up with Facebook</div>
      </div>
      <div
        className="row mt-3 border py-2 mx-1 d-flex flex-row justify-content-between"
        onClick={handleGoogleLogin}
      >
        <div className="col-4 text-end">
          <img src={google} alt="" />
        </div>
        <div className="col-8 ">Sign up with Google</div>
      </div>
      <p className="privacy-text text-center d-md-none">
        By signing up, you agree to our Terms & <br /> conditions, Privacy
        policy
      </p>
    </div>
  );
};

export default RegisterField;
