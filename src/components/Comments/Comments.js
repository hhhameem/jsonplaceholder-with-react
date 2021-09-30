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
      const commentArr = CommentPerPost(data, postId);
      console.log(commentArr);
      setComments(commentArr);
    }
    fetchData();
  }, [postId]);

  function CommentPerPost(comments, id) {
    let commentArr = [];
    for (const comment of comments) {
      if (comment.postId === parseInt(id)) {
        commentArr.push(comment);
      }
    }
    return commentArr;
  }

  return (
    <div>
      <h1>from comments</h1>
      {comments.map((comment) => (
        <SingleComment comment={comment}></SingleComment>
      ))}
    </div>
  );
};

export default Comments;
