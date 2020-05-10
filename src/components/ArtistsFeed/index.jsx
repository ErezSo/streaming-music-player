import React from "react"
import InfiniteScroll from "react-infinite-scroller"
import { ArtistBox } from "../index"
import Styled from "styled-components"

const Loading = Styled.h4`
  text-align: center;
  padding: 20px 0;
`

function ArtistsFeed({ artists, loadArtists }) {
  const withDelay = 500
  return (
    <div className="container">
      <h2>Top Artists</h2>
      <hr />
      <InfiniteScroll
        className="list-group"
        loadMore={() => loadArtists(withDelay)}
        loader={<Loading>Loading...</Loading>}
        hasMore
      >
        {artists.map((artist, i) => (
          <ArtistBox key={i} artist={artist} />
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default ArtistsFeed
