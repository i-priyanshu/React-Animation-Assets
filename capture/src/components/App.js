import React from "react";
import GlobalStyle from './globalstyle';

import Nav from './Nav';
import AboutUs from "../pages/Aboutus";
import ContactUs from '../pages/ContactUs';
import OurWork from '../pages/OurWork';
import MovieDetail from '../pages/MovieDetail';


import {Switch , Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
      <Route path="/" exact>
          <AboutUs />
      </Route>
      <Route path="/work" exact>
         <OurWork />
      </Route>
      <Route path="/work/:id">
          <MovieDetail />
      </Route>
      <Route path="/contact">
         <ContactUs /> 
      </Route>
      </Switch>
    </div>
  );
};

export default App;
