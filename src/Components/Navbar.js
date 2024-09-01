import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaBars } from "react-icons/fa";
import "../index.css";
import "./Navbar.css";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showNavIcon, setShowNavIcon] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Plans",
      path: "/plans",
    },
    {
      name: "Trainers",
      path: "/trainers",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className={`nav_links ${showNavIcon ? "show_nav" : "hide_nav"} `}>
          {links.map(function ({ name, path }, index) {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => {
                    setShowNavIcon(!showNavIcon);
                  }}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav_toggle-btn"
          onClick={() => {
            setShowNavIcon(!showNavIcon);
          }}
        >
          {showNavIcon ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
