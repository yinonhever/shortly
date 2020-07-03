import React, { useState } from 'react';
import './sass/_main.scss';
import Auxilliary from "./components/Auxilliary";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Shorten from "./components/Shorten";
import Result from "./components/Result";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState([]);

  const submitHandler = newResult => {
    setResults(results => [...results, newResult]);
  }

  return (
    <Auxilliary>
      <Intro />
      <Main>
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
      </Main>
      {/* 
      <Cta />
      <Footer /> */}
    </Auxilliary>
  );
}

export default App;
