import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ArtistsFeed, Navbar, SongPage } from "./components";

class App extends Component {
  state = {
    artists: [],
    song: ""
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
              render={() => <ArtistsFeed artists={artists} />}
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
