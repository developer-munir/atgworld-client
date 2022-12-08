import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ArticleUi.css";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const ArticleNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light border-bottom">
        <div className="container-fluid  d-md-none">
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  All Posts <span>(25)</span>
                </Link>
              </li>
            </ul>
            <span className="navbar-text d-flex justify-content-center align-items-center">
              <div className="dropdown ">
                <button
                  className=" dropdown-toggle post-container border-0 "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter: All
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
        <div className="container-fluid d-none d-md-block">
          <div className="collapse navbar-collapse " id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  All Posts <span>(25)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Article
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Event
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Job
                </Link>
              </li>
            </ul>
            <span className="navbar-text d-flex justify-content-center align-items-center">
              <div className="dropdown ">
                <button
                  className=" dropdown-toggle post-container border-0 "
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Write a Post
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" href="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </div>
              <button className="ms-4 px-2 button text-white">
                <AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>
                <span className=" group-btn ">Join Group</span>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ArticleNavbar;
