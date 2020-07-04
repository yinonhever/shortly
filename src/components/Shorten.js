import React, { useState } from "react";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import bgMobile from "../images/bg-shorten-mobile.svg";
import axios from "axios";

const Shorten = props => {
    const [urlInput, setUrlInput] = useState("");
    const [error, setError] = useState(false);

    const changeHandler = event => {
        setUrlInput(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        if (urlInput === "") {
            setError(true);
        }
        else {
            setError(false);

            axios.post("https://rel.ink/api/links/", {
                url: urlInput
            })
                .then(response => {
                    const newResult = {
                        original: urlInput,
                        shortened: "https://rel.ink/" + response.data.hashid,
                        hashid: response.data.hashid
                    }

                    props.submit(newResult);
                })

            setUrlInput("");
        }
    }

    return (
        <div className="shorten">
            <img src={bgDesktop} alt="shorten-bg" className="shorten__bg shorten__bg--desktop"></img>
            <img src={bgMobile} alt="shorten-bg" className="shorten__bg shorten__bg--mobile"></img>
            <form
                className={error ? "shorten__form error" : "shorten__form"}
                onSubmit={event => submitHandler(event)}>
                <div className="shorten__input-container">
                    <input
                        type="text"
                        className="shorten__input"
                        placeholder="Shorten a link here..."
                        value={urlInput}
                        onChange={event => changeHandler(event)}>
                    </input>
                </div>
                <button className="btn btn--square btn--hg shorten__btn">Shorten It!</button>
            </form>
        </div>
    )
}

export default Shorten;