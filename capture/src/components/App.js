import React from "react";
import AboutUs from "../pages/Aboutus";
import GlobalStyle from './globalstyle';
import Nav from './Nav';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
