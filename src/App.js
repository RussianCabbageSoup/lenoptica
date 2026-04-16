import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "./styles/index.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="Wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;