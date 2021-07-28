import React, { useState, useRef } from "react";
import Player from "./player";
import Song from "./song";
import "../styles/app.scss";
import data from "../assets";
import Library from "./Library";
import Nav from "./nav";
import GithubCorner from 'react-github-corner';

const App = () => {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentsong, setcurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
     <GithubCorner
        href="https://github.com/i-priyanshu/React-Animation-Assets/tree/main/ignites"
        bannerColor="#FD6C6C"
        octoColor="#fff"
        size={100}
        direction="right"
        target="_blank"
      />
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
