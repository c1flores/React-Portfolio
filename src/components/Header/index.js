import React from 'react';
import { Link } from "react-router-dom"
import NavBar from "../NavBar";

function Header() {

  return (
    <header className="flex-row px-1">
      <div className="logo">
        <h1>
        <Link to="/">Christian Flores</Link>
        </h1>
      </div>
      <NavBar></NavBar>
    </header>
  );
}

export default Header;
