import React from "react";

const SingleComment = (props) => {
  return (
    <div className='my-2 p-2 border-2 border-red-700 rounded-lg'>
      <p> - {props.comment.body}.</p>
      <p>
        <span className='font-bold'>From: </span> {props.comment.email}
      </p>
    </div>
  );
};

export default SingleComment;
