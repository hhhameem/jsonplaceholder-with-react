import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to home</h1>
      <h3>
        Here You can see Users data & Post data extracted from{" "}
        <a href='https://jsonplaceholder.typicode.com/'>JSONPLACEHOLDER</a>
      </h3>
      <h3>Select what you want to see from below.</h3>

      <Link to='/users'>Users</Link>
      <Link to='/posts'>Posts</Link>
    </div>
  );
};

export default Home;
