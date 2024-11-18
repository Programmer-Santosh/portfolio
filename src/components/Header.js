import React from "react";
import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className=" py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <a href="www.facebook.com">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm">Work With Me</button> 
        </div>
      </div>
    </header>
  );
};

export default Header;
