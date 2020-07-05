import React from "react";
import logo from "../images/logo-white.svg";

const Footer = () => (
    <footer className="footer">
        <img src={logo} alt="logo" className="logo footer__logo" />
        <div className="footer__nav">
            <div className="footer__column">
                <h4 className="footer__title">Features</h4>
                <a href="/" className="footer__link">Link Shortening</a>
                <a href="/" className="footer__link">Branded Links</a>
                <a href="/" className="footer__link">Analytics</a>
            </div>
            <div className="footer__column">
                <h4 className="footer__title">Resources</h4>
                <a href="/" className="footer__link">Blog</a>
                <a href="/" className="footer__link">Developers</a>
                <a href="/" className="footer__link">Support</a>
            </div>
            <div className="footer__column">
                <h4 className="footer__title">Company</h4>
                <a href="/" className="footer__link">About</a>
                <a href="/" className="footer__link">Our Team</a>
                <a href="/" className="footer__link">Careers</a>
                <a href="/" className="footer__link">Contact</a>
            </div>
        </div>
        <div className="footer__social">
            <a href="/" className="footer__social-link">
                <i className="footer__social-icon fab fa-facebook-square"></i>
            </a>
            <a href="/" className="footer__social-link">
                <i className="footer__social-icon fab fa-twitter"></i>
            </a>
            <a href="/" className="footer__social-link">
                <i className="footer__social-icon fab fa-pinterest"></i>
            </a>
            <a href="/" className="footer__social-link">
                <i className="footer__social-icon fab fa-instagram"></i>
            </a>
        </div>
    </footer>
)

export default Footer;