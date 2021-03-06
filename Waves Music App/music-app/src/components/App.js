import React, { useState, useRef } from "react";
import Player from "./player";
import Song from "./song";
import "../styles/app.scss";
import data from "../assets";
import Library from "./Library";
import Nav from "./nav";

const App = () => {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentsong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentsong={currentsong} />
      <Player
        setisPlaying={setisPlaying}
        isPlaying={isPlaying}
        currentsong={currentsong}
        audioRef={audioRef}
        songs={songs}
        setcurrentSong={setcurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setcurrentSong={setcurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
};

export default App;
