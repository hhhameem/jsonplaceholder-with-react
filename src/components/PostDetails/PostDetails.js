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
    <div className='container mx-auto my-4'>
      <div className='mx-2 md:mx-4 custom-shadow rounded-lg p-2'>
        <div className='mb-4'>
          <h1>
            <span className='font-bold'>Title</span> : {singlePost.title}.
          </h1>
          <h1>
            <span className='font-bold'>Details</span> : {singlePost.body}.
          </h1>
        </div>
        <div>
          <h2 className='font-bold border-gray-900 border-b-2'>Comments:</h2>
          <Comments postId={postId}></Comments>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
