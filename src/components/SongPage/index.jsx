import React from "react";

const styles = {
  listItem: {
    position: "relative",
    height: "13em"
  },
  imageContainer: {
    float: "left"
  },
  image: {
    height: "150px",
    width: "150px",
    position: "absolute"
  },
  button: {
    fontSize: "2em",
    borderRadius: "50%",
    position: "absolute",
    top: "3.5em",
    left: "3.8em"
  },
  deatilsList: {
    position: "absolute",
    left: "12em",
    listStyleType: "none"
  }
};

const song = { id: "", title: "", user: { username: "" } };

function findSong(artists, id) {
  return artists.length > 0
    ? artists.find(artist => artist.id === id, 10)
    : song;
}

const convertToYear = date => new Date(date).getFullYear();

// Source: https://stackoverflow.com/a/37096512/4640352
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? `${h}:` : "";
  var mDisplay = m > 0 ? `${m}:` : "";
  var sDisplay = s > 0 ? s : "";
  return hDisplay + mDisplay + sDisplay;
}

function SongPage({
  artists,
  match: {
    match: {
      params: { id }
    }
  },
  playSong
}) {
  const song = findSong(artists, id);
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <strong>
          {song.user.username} - {song.title}
        </strong>
      </div>
      <ul className="list-group">
        <li className="list-group-item" style={styles.listItem}>
          <div style={styles.imageContainer}>
            <img
              src={song.artwork_url}
              alt="song"
              className="img-rounded"
              style={styles.image}
            />
            <button
              style={styles.button}
              className="btn btn-warning glyphicon glyphicon-play-circle"
              onClick={() => playSong(song.stream_url)}
            />
          </div>
          <div>
            <ul style={styles.deatilsList}>
              <li>Genre: {song.genre}</li>
              <li>Year released: {convertToYear(song.release_date)}</li>
              <li>Song duration {secondsToHms(song.duration)}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SongPage;
