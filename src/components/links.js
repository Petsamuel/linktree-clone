import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import slack from "./slack.png";
import github from "./github.png";

function Links(props) {
  return (
    <>
      <a href="https://www.twitter.com/bieefilled" className="links" id="twitter">
        <span>{props.twitter}</span>
      </a>
      <a className="links" href="https://training.zuri.team/" id="btn_zuri">
        <span>{props.team}</span>
      </a>
      <a className="links" href="https://books.zuri.team/" id="books">
        <span>{props.book1}</span>
      </a>
      <a className="links" href="https://books.zuri.team/" id="books_python">
        <span>{props.python}</span>
      </a>
      <a className="links" href="https://background.zuri.team">
        <span>{props.coders}</span>
      </a>
      <a
        className="links"
        href="https://books.zuri.team/design-rules"
        id="pitch"
      >
        <span>{props.book2}</span>
      </a>
      <div class="social-media-container">
        <a href="https://">
          <img src={slack} alt="slack-icon" id="book_design" />
        </a>
        <a href="https://github.com/petsamuel">
          <img src={github} alt="github-icon" />
        </a>
      </div>
    </>
  );
}

export default Links;
