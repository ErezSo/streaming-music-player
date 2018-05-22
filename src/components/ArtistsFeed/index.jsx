import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ArtistBox } from "../index";

const withDelay = 500;

function ArtistsFeed({ artists, loadArtists }) {
  return (
    <div className="container">
      <h2>Top Artists</h2>
      <hr />
      <InfiniteScroll
        className="list-group"
        dataLength={artists.length}
        next={() => loadArtists(withDelay)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {artists.map((artist, i) => <ArtistBox key={i} artist={artist} />)}
      </InfiniteScroll>
    </div>
  );
}

export default ArtistsFeed;
