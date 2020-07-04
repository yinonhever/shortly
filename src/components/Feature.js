import React from "react";

const Feature = props => (
    <div className="feature features__item">
        <div className="feature__icon">
            <img src={props.img} alt="feature-icon" />
        </div>

        <div className="feature__box">
            <h3 className="heading-3 feature__title">{props.title}</h3>
            <p className="paragraph-sm feature__text">{props.text}</p>
        </div>
    </div>
)

export default Feature;