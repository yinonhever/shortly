import React, { useState } from "react";
import Shorten from "./Shorten";
import Result from "./Result";
import Features from "./Features";

const Main = () => {
    const [results, setResults] = useState([]);

    const submitHandler = newResult => {
        setResults(results => [...results, newResult]);
    }

    return (
        <main className="main">
            <Shorten submit={submitHandler} />
            {results.length === 0 ? null : (
                <div className="results">
                    {results.map((result, index) => (
                        <Result
                            original={result.original}
                            shortened={result.shortened}
                            key={result.hashid + "" + index}
                        />
                    ))}
                </div>
            )}
            <Features />
        </main>
    )
}

export default Main;