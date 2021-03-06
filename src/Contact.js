import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <span className="contact">
      <a
        className="contact-link"
        href="https://github.com/cmw-dev/dictionary-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        open-source code
      </a>{" "}
      by{" "}
      <a
        className="contact-link"
        href="https://www.linkedin.com/in/webercopy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chelsea Weber
      </a>
    </span>
  );
}
