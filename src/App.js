import React from 'react';

import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Search from "./components/Search";
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
