import React, { useState, useEffect } from "react";
import { playAudio } from "../util";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentsong,
  isPlaying,
  setisPlaying,
  audioRef,
  songs,
  setcurrentSong,
  setSongs,
}) => {
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentsong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentsong]);

  const playerSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();

      setisPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setisPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setsongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const [songInfo, setsongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setsongInfo({ ...songInfo, currentTime: current, duration });
  };

  const SkipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentsong.id);
    if (direction === "skip-forward") {
      setcurrentSong(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setcurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      setcurrentSong(songs[(currentIndex - 1) % songs.length]);
      playAudio(isPlaying, audioRef);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => SkipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          onClick={playerSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => SkipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentsong.audio}
      ></audio>
    </div>
  );
};

export default Player;
