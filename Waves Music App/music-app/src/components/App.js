import React from "react";

import Player from "./player";
import Song from "./song";
import "../styles/app.scss";

const App = () => {
  return (
    <div className="App">
      <Player />
      <Song />
    </div>
  );
};

export default App;
