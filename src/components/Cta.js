import React from "react";
import bgDesktop from "../images/bg-boost-desktop.svg";
import bgMobile from "../images/bg-boost-mobile.svg";

const Cta = () => (
    <section className="cta">
        <img src={bgDesktop} alt="boost-bg" className="cta__bg cta__bg--desktop" />
        <img src={bgMobile} alt="boost-bg" className="cta__bg cta__bg--mobile" />
        <div className="cta__content">
            <h2 className="heading-2 cta__text">Boost your links today</h2>
            <a href="/" className="btn btn--round btn--lg">Get Started</a>
        </div>
    </section>
)

export default Cta;