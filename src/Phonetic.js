import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-circle-play"></i>
      </a>{" "}
      {""}
      {props.phonetic.text}
    </div>
  );
}
