import React from "react";
import { Link, NavLink } from "react-router-dom";
import myLogo from "../images/logo/logo.svg";
import heartIco from "../images/control/heart.svg";
import cartIco from "../images/control/shoppingbag_84031.svg";
import searchIco from "../images/control/magnifier.svg";
import userIco from "../images/control/user.svg";
import promotionIco from "../images/icons/promotion.svg";
import HeaderBurger from "./HeaderBurger";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <HeaderBurger />
          <HeaderDesktop />
        </div>
      </div>
    </header>
  );
}

export default Header;