import React, { useState } from "react";
import Zoom from "react-reveal/Zoom";
import copy from "copy-to-clipboard";

const Result = props => {
    const [btnClasses, setBtnClasses] = useState(["btn", "btn--square", "btn--md", "result__btn"]);

    const copyHandler = () => {
        copy(props.shortened);
        setBtnClasses(classes => [...classes, "copied"]);
    }

    return (
        <Zoom duration="600">
            <div className="result">
                <p className="result__url result__url--original">{props.original}</p>
                <div className="result__seperator" />
                <p className="result__url result__url--shortened">{props.shortened}</p>
                <button className={btnClasses.join(" ")} onClick={copyHandler}>
                    <span className="btn__text--copy">Copy</span>
                    <span className="btn__text--copied">Copied!</span>
                </button>
            </div>
        </Zoom>
    )
};

export default Result;