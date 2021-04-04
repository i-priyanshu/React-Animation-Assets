import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/globalStyles";
import { Route } from "react-router-dom";
import Nav from "./components/nav";
import GithubCorner from "react-github-corner";

const App = () => {
  return (
    <div className="App">
      <GithubCorner
        href="https://github.com/i-priyanshu/React-Animation-Assets/tree/main/ignites"
        bannerColor="#FD6C6C"
        octoColor="#fff"
        size={100}
        direction="right"
        target="_blank"
      />
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
