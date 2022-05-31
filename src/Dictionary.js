import React from "react";
import "./Dictionary.css";

export default function () {
  function search(event) {
    event.preventDefault();
    alert("searching");
  }
  return (
    <div className="container">
      <h1>Dictionary</h1>
      <h2>What would you like to look up?</h2>
      <form className="search-bar" onSubmit={search}>
        <input
          type="text"
          className="col-sm-6 mb-4"
          placeholder="type a word"
          autoFocus="off"
          autoComplete="off"
        />
        <input type="submit" value="Search" className="btn btn-dark" />
      </form>
    </div>
  );
}
