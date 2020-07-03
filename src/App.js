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
    const newArray = [...results, newResult];
    setResults(newArray);
    console.log(newArray);
    console.log(results);
  }

  const resultList = () => {
    if (results.length === 0) {
      return null;
    }
    else {
      return (
        <div className="results">
          {results.map(result => {

          })}
        </div>
      )
    }
  }

  return (
    <Auxilliary>
      <Intro />
      <Main>
        <Shorten submit={submitHandler} />
        {resultList}
        <Features />
      </Main>
      {/* 
      <Cta />
      <Footer /> */}
    </Auxilliary>
  );
}

export default App;
