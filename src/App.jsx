import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ArtistsFeed, Navbar, SongPage } from "./components";

class App extends Component {
  state = {
    artists: [],
    page: 1,
    song: ""
  };

  componentDidMount() {
    this.loadArtists();
  }

  loadArtists = (delay = 0) => {
    const { page, artists } = this.state;
    return fetch(
      `https://api-v2.hearthis.at/feed/?type=popular&page=${page}&count=20`
    )
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          this.setState({
            artists: artists.concat(data),
            page: page + 1
          });
        }, delay);
      })
      .catch(error => {
        throw error;
      });
  };

  playSong = song => this.setState({ song });

  render() {
    const { artists } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Navbar song={this.state.song} />
          <div className="container-fluid">
            <Route
              exact
              path="/"
              render={() => (
                <ArtistsFeed artists={artists} loadArtists={this.loadArtists} />
              )}
            />
            <Route
              exact
              path="/songs/:id"
              render={match => (
                <SongPage
                  artists={artists}
                  playSong={this.playSong}
                  match={match}
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
