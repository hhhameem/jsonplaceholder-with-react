import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const active = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div>
      <NavLink to='/home' activeStyle={active}>
        Home
      </NavLink>
      <NavLink to='/users' activeStyle={active}>
        Users
      </NavLink>
      <NavLink to='/posts' activeStyle={active}>
        Posts
      </NavLink>
    </div>
  );
};

export default Header;
