import React from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { MusicPlayer } from "../index";
const styles = {
  header: {
    display: "inline-block"
  },
  link: {
    padding: "22px 34px"
  },
  text: {
    paddingRight: "2em",
    float: "right"
  }
};

function Navbar({ song = "" }) {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header" style={styles.header}>
          <Link className="navbar-brand" style={styles.link} to="/">
            Home
          </Link>
        </div>
        <MusicPlayer song={song} />
      </div>
    </nav>
  );
}

export default Navbar;
