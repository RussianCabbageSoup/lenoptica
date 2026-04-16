import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Store() {
    return (  
        <div>
            <Hero></Hero>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
}

export default Store;