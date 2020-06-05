import React from 'react';

import './App.css';
import Wrapper from "./components/Wrapper";
import Main from "./components/Main.js";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
function App() {
  return (
    <div className="App">
      <Wrapper>
    <Header/>
    <SearchBox/>
     <Main/>
      </Wrapper>
    </div>
  );
}

export default App;
