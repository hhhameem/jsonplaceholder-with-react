import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, userId, title, body } = props.post;
  return (
    <div>
      <h1>UserID: {userId}</h1>
      <h1>
        Title: <Link to={`/posts/${id}`}>{title.slice(0, 20)}...</Link>
      </h1>
      <h1>Body: {body.slice(0, 40)}...</h1>
    </div>
  );
};

export default Post;
