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
  },
  downloadLink: {
    textDecoration: "none"
  }
};

const song = { id: "", title: "", user: { username: "" } };

const findSong = (artists, id) => {
  return artists.length > 0
    ? artists.find(artist => artist.id === id, 10)
    : song;
};

const convertToYear = date => new Date(date).getFullYear();

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
              {song.downloadable && (
                <li>
                  Download:{" "}
                  <a
                    href={song.download_url}
                    className="glyphicon glyphicon-circle-arrow-down"
                    alt="download song"
                    download
                    style={styles.downloadLink}
                  />
                </li>
              )}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SongPage;
