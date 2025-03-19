import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import "../index.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  return (
    <div className="container">
      <h1>Все посты</h1>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <a href={`/post/${post.id}`} className="button">Читать дальше</a>
        </div>
      ))}
    </div>
  );
};

export default Home;