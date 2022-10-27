import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

function Links(props) {
    return (
        <>
            <div className="links">
                <Link to="">{props.twitter}</Link>
            </div>
            <div className="links">
                <Link to="https://training.zuri.team/">{props.team}</Link>
            </div>
            <div className="links">
                <Link to="https://books.zuri.team/">{props.book1}</Link>
            </div>
            <div className="links">
                <Link to="https://books.zuri.team/">{props.python}</Link>
            </div>
            <div className="links">
                <Link to="https://background.zuri.team">{props.coders}</Link>
            </div>
            <div className="links">
                <Link to="https://books.zuri.team/design-rules">{props.book2}</Link>
            </div>
        </>
    )
}

export default Links
