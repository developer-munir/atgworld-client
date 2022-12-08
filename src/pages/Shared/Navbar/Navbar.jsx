import React from "react";
import navbarBrandIcon from "../../../assets/Union 1.png";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid navbar-sizing">
          <p className="navbar-brand fs-3 brand-container py-4 d-none d-md-block">
            <span className="brand">ATG</span>
            <span>W</span>
            <span>
              <img src={navbarBrandIcon} alt="" />
            </span>
            <span>RLD</span>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <div className="input-group  flex-nowrap form-style">
                <span className="btn form-bg border-0 " id="addon-wrapping">
                  <AiOutlineSearch></AiOutlineSearch>
                </span>
                <input
                  type="text"
                  className="form-control border-0 form-bg "
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </ul>

            <span className="navbar-end">
              <span className="account-text-color-black">Create account. </span>
              <span className="dropdown">
                <span
                  className=" dropdown-toggle account-text-color-blue"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  It's free!
                </span>
              </span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
