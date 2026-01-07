import "./NavbarStyles.css";
import { Routes } from "react-router";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <ul className="nav-menu">
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <i className={items.icon}></i> {items.title}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
