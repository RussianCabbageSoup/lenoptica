import React from "react";
import Admin from "../components/admin/Admin";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { observer } from "mobx-react-lite";

const AdminPage = observer(() => {
    return (  
        <div className="wrapper">
            <Header />
            <Admin />
            <Footer />
        </div>
    );
})

export default AdminPage;