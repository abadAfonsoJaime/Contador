import React from "react";

// Stateless Functional component => sfc shortcut
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="http://localhost:3000/" className="navbar-brand">
        <span> Navbar </span>
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
