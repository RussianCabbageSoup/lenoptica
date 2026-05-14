import React from "react";
import Hero from "../components/Hero";
import Products from "../components/products/Products";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { observer } from "mobx-react-lite";

const Shop = observer(() => {
    return (  
        <div className="wrapper">
            <Header />
            <Hero></Hero>
            <Products></Products>
            <Footer />
        </div>
    );
})

export default Shop;