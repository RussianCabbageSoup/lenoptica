import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "./styles/index.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { Context } from "./index";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />           
          <Route path="/admin" element={<AdminPage />} />    
          <Route path="/login" element={<LoginPage />} />    
          <Route path="/reg" element={<RegistrationPage />} />    
          <Route path="*" element={<Navigate to="/" replace />} />       
        </Routes>
      </div>
    </Router>
  );
}

export default App;