import React, { Component } from "react";

function NavBar({ itemCounter }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NavBar
          <span className="badge badge-pill badge-secondary m-2">
            {itemCounter}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
