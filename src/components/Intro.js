import React from "react";
import Header from "./Header";
import illustration from "../images/illustration-working.svg";

const Intro = () => (
    <section className="intro">
        <Header />
        <div className="intro__container">
            <div className="intro__content">
                <h1 className="heading-1 intro__heading">More than just shorter links</h1>
                <p className="paragraph-lg intro__text">
                    Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </p>
                <a href="/" className="btn btn--round btn--lg">Get Started</a>
            </div>
            <div className="intro__img">
                <img src={illustration} alt="illustration-working"></img>
            </div>

        </div>
    </section>
)

export default Intro;