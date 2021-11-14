import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/searchBar";

const API_KEY = "AIzaSyC3pONDOEZzW0HvWeNK1SwNCHuisJRs_rc";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector(".container"));
