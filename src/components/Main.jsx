import React from "react";
import SeasonalSection from "./SeasonalSection";
import Appointment from "./Appointment";
import Carousel from "./Carousel";
import About from "./About";
import Contacts from "./Contacts";
import Store from "../pages/Store";
import ProfilePage from "../pages/ProfilePage";

function Main() {
    return (  
        <div>
            <SeasonalSection></SeasonalSection>
            <Carousel></Carousel>
            <Appointment></Appointment>
            <About></About>
            <Contacts></Contacts>
        </div>
    );
}

export default Main;