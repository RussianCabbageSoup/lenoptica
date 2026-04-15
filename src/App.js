import React from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "./styles/index.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="Wrapper">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
