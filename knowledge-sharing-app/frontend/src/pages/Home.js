// frontend/src/pages/Home.js

import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error("Error loading posts:", err);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">All Posts</h2>
      {posts.length === 0 && <p>No posts yet.</p>}
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 mb-4">
            <div className="card">
              {post.image && (
                <img
                  src={`http://127.0.0.1:8000${post.image}`}
                  className="card-img-top"
                  alt="Post"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content.slice(0, 100)}...</p>
                <a href={`/post/${post.id}`} className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
