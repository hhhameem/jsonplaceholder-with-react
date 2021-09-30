import React from "react";

const SingleComment = (props) => {
  console.log(props.comment);
  return (
    <div>
      <p>{props.comment.body}</p>
      <h3>{props.comment.email}</h3>
    </div>
  );
};

export default SingleComment;
