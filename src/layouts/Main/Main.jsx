import React from "react";
import { Outlet } from "react-router-dom";
import Register from "../../pages/Authentication/Register/Register";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Register></Register>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
