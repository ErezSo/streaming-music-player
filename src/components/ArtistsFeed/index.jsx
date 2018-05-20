import React, { Component } from "react";
import { ArtistBox } from "../index";

class ArtistsFeed extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    return fetch(
      "https://api-v2.hearthis.at/feed/?type=popular&page=1&count=20"
    )
      .then(res => res.json())
      .then(data => this.setState({ artists: data }))
      .catch(error => {
        throw error;
      });
  }

  render() {
    const { artists } = this.state;
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
}

export default ArtistsFeed;
