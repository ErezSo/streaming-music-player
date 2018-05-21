import React from "react";
import ReactAudioPlayer from "react-audio-player";

const styles = {
  player: {
    paddingRight: "2em",
    float: "right"
  }
};

const MusicPlayer = ({ song }) => {
  return (
    <div className="navbar-text navbar-right" style={styles.player}>
      <ReactAudioPlayer src={song} autoPlay controls />
    </div>
  );
};

export default MusicPlayer;
