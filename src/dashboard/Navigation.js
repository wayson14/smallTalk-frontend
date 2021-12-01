import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.scss';


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar-n">
        <div className="containerNav">
          <NavLink to="/">
            <div className="navbar-brand">
            <img src="./logo.png" className="logo" />
             Chad Chat 
            </div>
          </NavLink>
          <div className="allLink">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/chat">
                ??Chat/Wiadmomości/Pokoje?? 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Log in
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;