import React, { useContext } from "react";
import navbarBrandIcon from "../../../assets/Union 1.png";
import { AiOutlineSearch, AiFillHome, AiOutlineLogin } from "react-icons/ai";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container-fluid d-md-none navbar-sizing py-2">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className="navbar-end ms-auto">
              <Link to="/home">
                <button className="border-0 bg-white me-4">
                  <AiFillHome size={30}></AiFillHome>
                </button>
              </Link>
              <button className="border-0 bg-white me-4">
                <AiOutlineSearch size={30}></AiOutlineSearch>
              </button>
              <button
                className="border-0 bg-white "
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <AiOutlineLogin size={30}></AiOutlineLogin>
              </button>
            </span>
          </div>
        </div>
      </nav>
      <nav className="navbar  fixed-top navbar-expand-md d-none d-md-block navbar-light bg-white border-bottom">
        <div className="container-fluid navbar-sizing">
          <p className="navbar-brand fs-3 brand-container  d-none d-md-block">
            <span className="brand">ATG</span>
            <span>W</span>
            <span>
              <img src={navbarBrandIcon} alt="" />
            </span>
            <span>RLD</span>
          </p>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <div className="input-group   flex-nowrap form-style">
                <span
                  className="btn form-bg border-0 search-bar-icon"
                  id="addon-wrapping"
                >
                  <AiOutlineSearch></AiOutlineSearch>
                </span>
                <input
                  type="text"
                  className="form-control border-0 form-bg search-bar"
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </ul>
            {user?.uid ? (
              <span className="navbar-end d-flex align-items-center">
                <span>
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="profile rounded-pill"
                  />
                </span>
                <div className="dropdown ms-3">
                  {user?.displayName}
                  <span
                    className="account-text-color-black profileName "
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button className="dropdown-item bg-white ">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </span>
            ) : (
              <span className="navbar-end">
                <span className="account-text-color-black">
                  Create account.{" "}
                </span>
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
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
