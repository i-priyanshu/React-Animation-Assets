import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/globalStyles";
import { Route } from "react-router-dom";
import Nav from "./components/nav";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
