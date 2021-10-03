import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const { id, userId, title, body } = props.post;
  const [userData, setUserData] = useState({});
  const { name } = userData;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUserData(data);
    }
    fetchData();
  }, [userId]);

  return (
    <div className='custom-shadow flex flex-col rounded-lg p-2'>
      <h1>
        <span className='font-bold'>Title: </span>
        {title.slice(0, 20)}...
      </h1>
      <h1>
        <span className='font-bold'>Details: </span> {body.slice(0, 60)}...{" "}
        <Link to={`/posts/${id}`} className='link'>
          See more
        </Link>
      </h1>
      <p className='mt-2'>
        {"  "}-By:{" "}
        <Link to={`/users/${userId}`} className='link'>
          {name}
        </Link>
      </p>
    </div>
  );
};

export default Post;
