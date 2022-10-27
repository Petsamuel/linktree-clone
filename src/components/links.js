import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import slack from './slack.png';
import github from './github.png';

function Links(props) {
    return (
        <>
            <div className="links">
                <a href="https://www.twitter.com/bieefilled">{props.twitter}</a>
            </div>
            <div className="links">
                <a href="https://training.zuri.team/" id="btn_zuri">{props.team}</a>
            </div>
            <div className="links">
                <a href="https://books.zuri.team/" id="books">{props.book1}</a>
            </div>
            <div className="links">
                <a href="https://books.zuri.team/" id="books_python">{props.python}</a>          </div>
            <div className="links">
                <a href="https://background.zuri.team">{props.coders}</a>
            </div>
            <div className="links">
                <a href="https://books.zuri.team/design-rules" id="pitch">{props.book2}</a>
            </div>
            <div class="social-media-container">
                <a href="https://"><img src={slack} alt="slack-icon" id="book_design"/></a>
                <a href="https://github.com/petsamuel"><img src={github} alt="github-icon" /></a>

            </div>
        </>
    )
}

export default Links
