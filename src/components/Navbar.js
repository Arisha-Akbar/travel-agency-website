import "./NavbarStyles.css";
import { Routes } from "react-router";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router";
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
         
    this.setState({clicked: !this.state.clicked});
    }
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                <i className={items.icon}></i> {items.title}
             
                </Link>
              </li>
            );
          })}
          <li>
            <button>Sign Up</button>
            </li>

        </ul>
      </nav>
    );
  }
}
export default Navbar;
