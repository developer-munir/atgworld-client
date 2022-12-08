import React, { useContext } from "react";
import { CiLocationOn, CiEdit } from "react-icons/ci";
import vector from "../../../../assets/Vector.png";
import { AuthContext } from "../../../../context/AuthContext/AuthProvider";
import crossIcon from "../../../../assets/Vector (2).png";
import likeIcon from "../../../../assets/Vector (3).png";

const Location = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-2">
      <div className="input-group border-bottom">
        <span className="input-group-text bg-white border-0">
          <CiLocationOn></CiLocationOn>
        </span>
        <input
          type="text"
          aria-label="First name"
          className="form-control border-0"
          placeholder="type location"
        />
        {user?.uid ? (
          <>
            <button className="input-group-text bg-white border-0">
              <img src={crossIcon} alt="" />
            </button>
          </>
        ) : (
          <>
            <button className="input-group-text bg-white border-0">
              <CiEdit></CiEdit>
            </button>
          </>
        )}
      </div>
      <div className="my-4 row">
        <div className="col-1">
          <img src={vector} alt="" />
        </div>
        <div className="col-11">
          <p className="fs-6">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center">
          <span>
            <img src={likeIcon} alt="" />
          </span>
          <span className="re-commended ms-1 text-uppercase">
            REcommended Groups
          </span>
        </div>
        {/* recommended groups */}
        <div className="my-4 row">
          <div className="col-8">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="profile rounded-pill"
            />
            <span className="ms-2">MHJ</span>
          </div>
          <div className="col-4 ">
            <button className="px-2 bg-light btn rounded-pill">Follow</button>
          </div>
        </div>
        <div className="my-4 row">
          <div className="col-8">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="profile rounded-pill"
            />
            <span className="ms-2">MBA</span>
          </div>
          <div className="col-4 ">
            <button className="px-2 bg-light btn rounded-pill">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
