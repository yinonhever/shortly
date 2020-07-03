import React from 'react';
import './sass/_main.scss';
import Auxilliary from "./components/Auxilliary";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <Auxilliary>
      <Intro />
      <Main />
      <Cta />
      <Footer />
    </Auxilliary>
  );
}

export default App;
