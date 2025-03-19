import React, { useState } from "react";
import axios from "axios"; // ✅ Импортируем axios

const API_BASE_URL = "http://127.0.0.1:8000/api/"; // ✅ Убедитесь, что порт правильный

const CreatePost = () => {
  const [title, setTitle] = useState(""); // ✅ Добавляем состояние
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Форма отправлена!"); // ✅ Проверяем, работает ли обработчик

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Вы не авторизованы!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }

    console.log("Отправляем данные:", Object.fromEntries(formData.entries())); // ✅ Проверяем отправляемые данные

    try {
      const response = await axios.post(`${API_BASE_URL}posts/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Пост создан:", response.data);
      alert("Пост успешно опубликован!");
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error("Ошибка создания поста:", error.response ? error.response.data : error);
      alert("Ошибка создания поста!");
    }
  };

  return (
    <div className="post-container">
      <h1>Создать пост</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Содержание" value={content} onChange={(e) => setContent(e.target.value)} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  );
};

export default CreatePost;
