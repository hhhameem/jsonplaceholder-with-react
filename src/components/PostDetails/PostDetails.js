import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";

const PostDetails = () => {
  const { postId } = useParams();
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await response.json();
      setSinglePost(data);
    }
    fetchData();
  }, [postId]);

  return (
    <div>
      <h1>From post details</h1>
      <h1>Title: {singlePost.title}</h1>
      <Comments postId={postId}></Comments>
    </div>
  );
};

export default PostDetails;
