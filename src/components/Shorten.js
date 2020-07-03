import React, { useState } from "react";
import bgDesktop from "../images/bg-shorten-desktop.svg";
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
                        shortened: "https://rel.ink/" + response.data.hashid
                    }

                    props.submit(newResult);
                })
                
            setUrlInput("");
        }
    }

    return (
        <div className="shorten" onSubmit={event => submitHandler(event)}>
            <img src={bgDesktop} alt="shorten-bg" className="shorten__bg shorten__bg--desktop"></img>
            <form className={error ? "shorten__form error" : "shorten__form"}>
                <input
                    type="text"
                    className="shorten__input"
                    placeholder="Shorten a link here..."
                    value={urlInput}
                    onChange={event => changeHandler(event)}>
                </input>
                <button className="btn btn--square btn--hg">Shorten It!</button>
            </form>

        </div>
    )
}

export default Shorten;