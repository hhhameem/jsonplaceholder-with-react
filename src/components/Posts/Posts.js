import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div className='container mx-auto my-4'>
      <div className='mx-2 grid grid-cols-1 gap-4 md:grid-cols-3 md:mx-4 lg:grid-cols-3 lg:mx-8'>
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
