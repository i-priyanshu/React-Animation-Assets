import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/globalStyles";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
