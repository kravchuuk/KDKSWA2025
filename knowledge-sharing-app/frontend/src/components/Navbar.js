import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/login">Вход</Link>
      <Link to="/register">Регистрация</Link>
      <Link to="/create-post">Создать пост</Link>
    </nav>
  );
};

export default Navbar;