import React, { useEffect, useState } from "react";
import SingleComment from "../SingleComment/SingleComment";

const Comments = (props) => {
  const postId = props.postId;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const data = await response.json();
      setComments(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>from comments</h1>
      <h1>{postId}</h1>
      {comments.forEach((comment) => (
        <SingleComment comment={comment}></SingleComment>
      ))}
    </div>
  );
};

export default Comments;
