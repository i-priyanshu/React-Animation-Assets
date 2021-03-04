import React, { useState } from "react";

import Player from "./player";
import Song from "./song";
import "../styles/app.scss";
import data from "../assets";

const App = () => {
  const [songs, setSongs] = useState(data());
  const [currentsong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentsong={currentsong} />
      <Player
        setisPlaying={setisPlaying}
        isPlaying={isPlaying}
        currentsong={currentsong}
      />
    </div>
  );
};

export default App;
