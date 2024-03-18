import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar  navbar-expand-lg justify-content-center border-bottom mb-5">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link" activeClassName="active" to="/">
            All
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="fsd">
            FULL STACK DEVELOPMENT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="ds">
            DATA SCIENCE
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="cs">
            CYBER SECURITY
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="careers">
            CAREER
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
