import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`posts/${id}/`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <h1>Загрузка...</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
