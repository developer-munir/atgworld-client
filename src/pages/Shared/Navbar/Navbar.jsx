import React from "react";
import navbarBrandIcon from "../../../assets/Union 1.png";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid navbar-sizing">
          <p className="navbar-brand fs-3 brand-container py-4 ">
            <span className="brand">ATG</span>
            <span>W</span>
            <span>
              <img src={navbarBrandIcon} alt="" />
            </span>
            <span>RLD</span>
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <div class="input-group  flex-nowrap form-style">
                <span class="btn form-bg border-0 " id="addon-wrapping">
                  <AiOutlineSearch></AiOutlineSearch>
                </span>
                <input
                  type="text"
                  class="form-control border-0 form-bg "
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </ul>

            <span className="navbar-end">
              <span className="account-text-color-black">Create account.</span>
              <span class="dropdown">
                <span
                  class=" dropdown-toggle account-text-color-blue"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  It's free!
                </span>
                <ul
                  class="dropdown-menu p-8"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </span>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
