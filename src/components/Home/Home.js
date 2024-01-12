import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className='container my-4 text-center lg:mx-auto'>
      <div className='mx-2'>
        <h1 className='text-4xl mb-4'>
          Welcome to{" "}
          <span className='text-red-600'>JSONPlaceholder With React</span>
        </h1>
        <h3 className='font-medium mb-4'>
          Here You can see <span className='font-extrabold'>Users</span> list &
          details, <span className='font-extrabold'>Post</span> list & details
          extracted from{" "}
          <a
            className='link'
            href='https://jsonplaceholder.typicode.com/'
            title='jsonplaceholder.typicode.com'
          >
            JSONPlaceholder
          </a>
        </h3>
        <p>
          <Link to='/users' className='link'>
            Users
          </Link>{" "}
          take you to users data and{" "}
          <Link to='/posts' className='link'>
            Posts
          </Link>{" "}
          take you to posts data.
        </p>
      </div>
    </div>
  );
};

export default Home;
