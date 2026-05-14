import React from "react";
import Main from "../components/Main";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

function Home() {
    return (  
        <div className="wrapper">
            <Header />
            <Main></Main>
            <Footer />
        </div>
    );
}

export default Home;