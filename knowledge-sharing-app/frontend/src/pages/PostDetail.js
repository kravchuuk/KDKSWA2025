// frontend/src/pages/PostDetail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/posts/${id}/`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error("Post not found", err));
  }, [id]);

  if (!post) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="card">
        {post.image && (
          <img
            src={`http://127.0.0.1:8000${post.image}`}
            className="card-img-top"
            alt="Post"
          />
        )}
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
