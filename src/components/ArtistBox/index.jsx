import React from "react";
import { Link } from "react-router-dom";

const styles = {
  artistLink: {
    textDecoration: "none"
  },
  groupItem: {
    width: "100%",
    textAlign: "left",
    cursor: "pointer"
  },
  artistImage: {
    height: "80px",
    width: "80px"
  },
  artistDetails: {
    display: "inline-block"
  },
  artistName: {
    fontSize: "1.5em",
    paddingLeft: "1em"
  },
  countWrapper: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    float: "left",
    marginLeft: "22px"
  },
  playCount: {
    fontSize: "11px"
  }
};

const ArtistBox = ({ artist }) => {
  return (
    <Link to={{ pathname: `/songs/${artist.id}` }} style={styles.artistLink}>
      <button
        type="button"
        className="list-group-item"
        style={styles.groupItem}
      >
        <img
          src={artist.thumb}
          alt="artist"
          className="img-thumbnail"
          style={styles.artistImage}
        />
        <div style={styles.artistDetails}>
          <div style={styles.artistName}>{artist.user.username}</div>
          <ul style={styles.countWrapper}>
            <li style={styles.playCount}>
              Play Count: {artist.playback_count}
            </li>
          </ul>
        </div>
      </button>
    </Link>
  );
};

export default ArtistBox;
