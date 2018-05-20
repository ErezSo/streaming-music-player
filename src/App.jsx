import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ArtistsFeed from "./components/ArtistsFeed";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => <ArtistsFeed />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;