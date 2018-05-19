import React, { Component } from "react";
import { Navbar, ArtistsFeed } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ArtistsFeed />
      </div>
    );
  }
}

export default App;
