import React from "react";
import Logo from "./../../assets/logo.svg";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={Logo} alt="Logo" />
      </h1>
    </header>
  );
};
