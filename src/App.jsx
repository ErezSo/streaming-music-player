import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { ArtistsFeed, Navbar, SongPage } from "./components";

class App extends Component {
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
      <BrowserRouter>
        <div>
          <Navbar song={this.props.song} />
          <div className="container-fluid">
            <Route
              exact
              path="/"
              render={() => <ArtistsFeed artists={artists} />}
            />
            <Route
              exact
              path="/songs/:id"
              render={match => <SongPage artists={artists} match={match} />}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
