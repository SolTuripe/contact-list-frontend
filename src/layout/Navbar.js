import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark d-flex bg-secondary">
        <div className="container-fluid d-flex justify-content-around">
          <Link className="navbar-brand" to={"/"}>
            Contact List
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn btn-outline-light" to="/adduser">
            Add contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
