import React from "react";
import Main from "./components/Main/Main.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
        <Footer/>
      </Wrapper>
    </div>
  );
}

export default App;
