import React from "react";
import "./sass/_main.scss";
import Auxilliary from "./hoc/Auxilliary";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Shorten from "./components/Shorten";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <Auxilliary>
      <Intro />
      <Main>
        <Shorten />
        <Features />
      </Main>
      <Cta />
      <Footer />
    </Auxilliary>
  );
}

export default App;
