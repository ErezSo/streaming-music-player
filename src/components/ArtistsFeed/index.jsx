import React from "react";
import { ArtistBox } from "../index";

function ArtistsFeed({ artists }) {
  return (
    <div className="container">
      <h2>Top Artists</h2>
      <hr />
      <div className="list-group">
        {artists.map((artist, i) => <ArtistBox key={i} artist={artist} />)}
      </div>
    </div>
  );
}

export default ArtistsFeed;
