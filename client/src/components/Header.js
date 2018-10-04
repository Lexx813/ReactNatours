import React from "react";
import LOGO from "../img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={LOGO} alt="Logo" className="logo" />
        <h1 className="heading-primary">
          <span classeName="heading-primary-main">Outdoors </span>
          <span classeName="heading-primary-sub">is where life happens </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
