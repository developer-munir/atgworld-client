import React from "react";
import article from "../../../../assets/✍️ Article.png";
import { BsThreeDots } from "react-icons/bs";
import "../ArticleUi.css";
import { AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
const PostCard = () => {
  return (
    <div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1665520675869-077b84d1e5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=901&q=80"
          class="card-img-top "
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">
            <img src={article} alt="" />
          </h5>
          <div class="card-text d-flex justify-content-between align-items-center">
            <p className="fw-bold">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            <button className="border-0 bg-white">
              <BsThreeDots></BsThreeDots>
            </button>
          </div>
          <p>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </p>
        </div>
        <div class="card-footer d-flex align-items-center justify-content-between">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="profile rounded-pill"
            />
            <span className="ms-2 fw-bold">Munir Hossain Juwel</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="d-flex align-items-center">
              <p>
                <AiOutlineEye></AiOutlineEye>
              </p>
              <p className="ms-2">1.4k views</p>
            </span>
            <p className="border-0 bg-white ms-2 ">
              <AiOutlineShareAlt></AiOutlineShareAlt>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
