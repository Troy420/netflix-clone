import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        <img
          className="nav__avatar"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
          alt="Profile image"
        />
      </div>
    </>
  );
};

export default Nav;
