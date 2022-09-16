import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="#">Manage Players</Link> <p className="mx-1">|</p>
      <Link to="#">Manage Player Status</Link>
    </>
  );
};

export default Navbar;
