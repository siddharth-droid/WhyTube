import React, { Component } from "react";
import ReactDOM from "react-dom";

import YTSearch from "youtube-api-search";

import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";

const API_KEY = "AIzaSyC3pONDOEZzW0HvWeNK1SwNCHuisJRs_rc";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector(".container"));
