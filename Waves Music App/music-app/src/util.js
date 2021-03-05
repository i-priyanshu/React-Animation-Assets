export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const PlayPromise = audioRef.current.play();
    if (PlayPromise !== undefined) {
      PlayPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
