import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const { name, id } = props.user;
  return (
    <div>
      <h1>From user</h1>
      <h1>Name: {name}</h1>
      <Link to={`/user/${id}`}>Details</Link>
    </div>
  );
};

export default User;
