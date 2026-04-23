import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
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

function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />           
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;