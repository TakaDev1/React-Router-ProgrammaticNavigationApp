import React from "react";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold text-blue-500" : "text-gray-500")}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "font-bold text-blue-500" : "text-gray-500")}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "font-bold text-blue-500" : "text-gray-500")}
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
