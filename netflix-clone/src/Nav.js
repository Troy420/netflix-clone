import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav__black"}`}>
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
