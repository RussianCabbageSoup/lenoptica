import React from "react";
import Profile from "../components/profile/Profile";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

function ProfilePage() {
    return (  
        <div className="wrapper">
            <Header />
            <Profile />
            <Footer />
        </div>
    );
}

export default ProfilePage;