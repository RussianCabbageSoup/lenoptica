import React from "react";
import Hero from "../components/Hero";
import Products from "../components/products/Products";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

function Store() {
    return (  
        <div>
            <Header />
            <Hero></Hero>
            <Products></Products>
            <Footer />
        </div>
    );
}

export default Store;