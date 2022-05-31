import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyWord}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="container">
      <h1>Dictionary</h1>
      <h2>What would you like to look up?</h2>
      <form className="search-bar" onSubmit={search}>
        <input
          type="text"
          className="col-md-6 mb-4"
          placeholder="type a word"
          autoFocus="off"
          autoComplete="off"
          onChange={handleKeywordChange}
        />

        <input
          type="submit"
          value="🔎"
          aria-label="Default"
          className="btn btn-light"
        />
      </form>
    </div>
  );
}
