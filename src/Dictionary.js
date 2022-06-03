import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000169cbd1eb88a2474fb770a080983e042d";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=1`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
