import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "./styles/index.css";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import { Context } from "./index";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { observer } from "mobx-react-lite";
import { check } from "./http/userAPI";
import Shop from "./pages/Shop";

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />           
          <Route path="/admin" element={<AdminPage />} />    
          <Route path="/login" element={<LoginPage />} />    
          <Route path="/reg" element={<RegistrationPage />} />    
          <Route path="*" element={<Navigate to="/" replace />} />       
        </Routes>
    </Router>
  );
})

export default App;