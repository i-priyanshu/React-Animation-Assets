import React, { useState, useRef } from "react";
import Player from "./player";
import Song from "./song";
import "../styles/app.scss";
import data from "../assets";
import Library from "./Library";

const App = () => {
  const audioRef = useRef(null);
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
        audioRef={audioRef}
      />
      <Library
        songs={songs}
        setcurrentSong={setcurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
    </div>
  );
};

export default App;
