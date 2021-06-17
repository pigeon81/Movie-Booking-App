import React from 'react';
import "./Header.css";
import logo from "./logo.svg";

const Header = () => {
    return (
        <div className="header">
          <img src={logo} className="headerLogo" alt= "logo" ></img>
        </div>
    )
}

export default Header
