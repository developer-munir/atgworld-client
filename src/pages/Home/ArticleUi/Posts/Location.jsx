import React, { useContext } from "react";
import { CiLocationOn, CiEdit } from "react-icons/ci";
import vector from "../../../../assets/Vector.png";
import { AuthContext } from "../../../../context/AuthContext/AuthProvider";
import crossIcon from "../../../../assets/Vector (2).png";
const Location = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
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
    </div>
  );
};

export default Location;
