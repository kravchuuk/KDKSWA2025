import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("token/", {  // Убедитесь, что путь правильный
        username,
        password,
      });

      localStorage.setItem("token", response.data.access); // Сохраняем токен
      navigate("/"); // Перенаправляем на главную
    } catch (error) {
      console.error("Ошибка входа:", error.response ? error.response.data : error);
    }
  };

  return (
    <div className="auth-container">
      <h1>Вход</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Логин" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Пароль" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="auth-button">Войти</button>
      </form>
    </div>
  );
};

export default Login;
