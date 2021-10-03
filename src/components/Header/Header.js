import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const active = {
    fontWeight: "bold",
    color: "red",
    borderBlockStart: "2px solid #ff0000",
    borderBlockEnd: "2px solid #ff0000",
  };
  return (
    <div className='header-navbar'>
      <div className='container mx-auto text-center text-white flex justify-center'>
        <NavLink to='/home' activeStyle={active} className='nav-item'>
          Home
        </NavLink>
        <NavLink to='/users' activeStyle={active} className='nav-item'>
          Users
        </NavLink>
        <NavLink to='/posts' activeStyle={active} className='nav-item'>
          Posts
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
