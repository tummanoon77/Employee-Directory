import React from 'react';

import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/index.js";
import Search from "./components/search.js";
function App() {
  return (
    <div className="App">
      <Wrapper>
    <Header/>
    <Search/>

      </Wrapper>
    </div>
  );
}

export default App;
