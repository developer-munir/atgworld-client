import React from "react";
import article from "../../../../assets/✍️ Article.png";
import { BsThreeDots } from "react-icons/bs";
import "../ArticleUi.css";
import { AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
const PostCard = () => {
  return (
    <div>
      <div className="card">
        <img
          data-aos="zoom-in-up"
          src="https://images.unsplash.com/photo-1665520675869-077b84d1e5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            <img src={article} alt="" />
          </h5>
          <div className="card-text d-flex justify-content-between align-items-center">
            <p className="fw-bold">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>

            <div className="dropdown">
              <button
                className="border-0 bg-white"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                <BsThreeDots></BsThreeDots>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" href="#">
                    Edit
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Report
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Option 3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <div className="d-flex ">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="profile rounded-pill"
            />
            <div className="ms-2 mt-md-2">
              <span className=" fw-bold">Munir Hossain Juwel</span>
              <span className="d-flex align-items-center d-md-none">
                <span>
                  <AiOutlineEye></AiOutlineEye>
                </span>
                <span className="ms-2 ">1.4k views</span>
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <span className="d-flex align-items-center d-none d-md-block">
              <span>
                <AiOutlineEye></AiOutlineEye>
              </span>
              <span className="ms-2">1.4k views</span>
            </span>
            <span className="border-0 bg-white ms-2 ">
              <AiOutlineShareAlt></AiOutlineShareAlt>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
