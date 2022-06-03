import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="Dictionary">
          <h1>Dictionary</h1>
          <h2>What would you like to look up?</h2>
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="col-md-6 mb-4"
              placeholder="type a word"
              autoFocus="off"
              autoComplete="off"
              onChange={handleKeywordChange}
            />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
