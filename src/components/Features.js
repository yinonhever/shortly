import React from "react";
import Feature from "./Feature";
import iconBrand from "../images/icon-brand-recognition.svg";
import iconDetailedRecords from "../images/icon-detailed-records.svg";
import iconCustomizable from "../images/icon-fully-customizable.svg";

const Features = () => (
    <section className="features">
        <div className="features__intro">
            <h2 className="heading-2 features__heading">Advanced Statistics</h2>
            <p className="paragraph-md features__text">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
            </p>
        </div>

        <div className="features__row">
            <div className="features__items">
                <Feature
                    img={iconBrand}
                    title="Brand Recognition"
                    text="Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content."
                />
                <Feature
                    img={iconDetailedRecords}
                    title="Detailed Records"
                    text="Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions."
                />
                <Feature
                    img={iconCustomizable}
                    title="Fully Customizable"
                    text="Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement."
                />
            </div>
            <div className="features__line" />
        </div>
    </section>
)

export default Features;