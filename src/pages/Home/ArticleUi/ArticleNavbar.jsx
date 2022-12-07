import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./ArticleUi.css";
const ArticleNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">
                  All Posts <span>(25)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Article
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Event
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Education
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Job
                </Link>
              </li>
            </ul>
            <span class="navbar-text d-flex justify-content-center align-items-center">
              <div class="dropdown ">
                <button
                  class=" dropdown-toggle post-container border-0"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Write a Post
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <NavLink class="dropdown-item" href="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" href="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" href="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </div>
              <button className="ms-4 button">button</button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ArticleNavbar;
