import React, { useState } from "react";
import logo from "../images/logo.svg";

const Header = () => {
    let [navOpen, setNavOpen] = useState(false);

    const toggleHandler = () => {
        const isActive = !navOpen;
        setNavOpen(isActive);
        document.querySelector("body").classList.toggle("no-scroll");
    }

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo header__logo"></img>
            <div className="header__nav-toggle" onClick={toggleHandler}>
                <div className="header__nav-toggle--line"></div>
                <div className="header__nav-toggle--line"></div>
                <div className="header__nav-toggle--line"></div>
            </div>
            <nav className={navOpen ? "header__navigation active" : "header__navigation"}>
                <div className="header__nav-list">
                    <div className="header__nav-start">
                        <a href="/" className="header__nav-link">Features</a>
                        <a href="/" className="header__nav-link">Pricing</a>
                        <a href="/" className="header__nav-link">Resources</a>
                    </div>
                    <div className="header__seperator"></div>
                    <div className="header__nav-end">
                        <a href="/" className="header__nav-link">Login</a>
                        <a href="/" className="btn btn--round btn--sm header__btn">Sign Up</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;