import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioPage = props => {
  return (
    <div>
      <h1>My Work</h1>
      Check out the following things I've done:
      <p>
        <NavLink to='/portfolio/1'>Project 1</NavLink>
        <NavLink to='/portfolio/2'>Project 2</NavLink>
      </p>
    </div>
  );
};

export default PortfolioPage;
