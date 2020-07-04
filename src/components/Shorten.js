import React, { useState } from "react";
import usePersistedState from "../usePersistedState";
import useDimensions from "react-use-dimensions";
import bgDesktop from "../images/bg-shorten-desktop.svg";
import bgMobile from "../images/bg-shorten-mobile.svg";
import Result from "./Result";
import axios from "axios";

const Shorten = () => {
    const [urlInput, setUrlInput] = useState("");
    const [error, setError] = useState(false);
    const [results, setResults] = usePersistedState("results", []);
    const [boxRef, boxSize] = useDimensions();

    const boxHeight = boxSize.height;
    let transform = "translateY(-" + (boxHeight / 2) + "px)";
    let paddingBottom = "";
    if (window.innerWidth > 900) {
        paddingBottom = "calc(120px - " + (boxHeight / 2) + "px)";
    }
    else {
        paddingBottom = "calc(80px - " + (boxHeight / 2) + "px)";
    }

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

                    setResults(results => [...results, newResult]);
                })

            setUrlInput("");
        }
    }

    return (
        <section className="shorten" style={{
            transform: transform,
            paddingBottom: paddingBottom
        }}>
            <div className="shorten__box" ref={boxRef}>
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

            {results.length === 0 ? null : (
                <div className="shorten__results">
                    {results.map((result, index) => (
                        <Result
                            original={result.original}
                            shortened={result.shortened}
                            key={result.hashid + "" + index}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Shorten;