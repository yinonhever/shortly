import React, { useState, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import logo from "../images/logo.svg";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef();

    const toggleHandler = () => {
        if(!navOpen) {
            disableBodyScroll(navRef);
        }
        else {
            enableBodyScroll(navRef);
        }

        setNavOpen(!navOpen);
    }

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo header__logo" />
            <div className="header__nav-toggle" onClick={toggleHandler}>
                <div className="header__nav-toggle--line" />
                <div className="header__nav-toggle--line" />
                <div className="header__nav-toggle--line" />
            </div>
            <nav
                className={navOpen ? "header__navigation active" : "header__navigation"}
                ref={navRef}>
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