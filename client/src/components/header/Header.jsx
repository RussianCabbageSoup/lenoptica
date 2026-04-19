import React from "react";
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