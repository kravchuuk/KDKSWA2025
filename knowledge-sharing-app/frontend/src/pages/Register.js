import React from "react";
import "../index.css";

const Register = () => {
  return (
    <div className="auth-container">
      <h1>Регистрация</h1>
      <form className="auth-form">
        <input type="text" placeholder="Логин" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Пароль" className="input-field" />
        <button type="submit" className="auth-button">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;