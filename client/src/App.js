import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import ProtectedRoutes from "./components/routes/ProtectedRoutes";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      user.setIsAuth(false);
      user.setUser({});
      setLoading(false);
      return;
    }

    check()
      .then(data => {
        if (data?.email) {
          user.setUser(data);
          user.setIsAuth(true);
        }
      })
      .catch(error => {
        console.log("Пользователь не авторизован:", error);
        user.setIsAuth(false);
        user.setUser({});
        localStorage.removeItem('token'); 
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>Загрузка...</div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reg" element={<RegistrationPage />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <ProfilePage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoutes requiredRole="ADMIN">
              <AdminPage />
            </ProtectedRoutes>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
});

export default App;