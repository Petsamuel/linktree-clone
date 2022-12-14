import React from 'react'
import { Link } from "react-router-dom";
import zuri_png from "../assets/Zuri.Internship_Logo.png"
import ingressive_png from "../assets/I4G.png"
function Footer() {
    return (
        <>
       
            <div className="footer-container">
                <div className="zuri-logo">
                    <img src={zuri_png} alt="zuri-logo"/>
                </div>
                <div className="footer-text">
                    <Link to=""><p>Hng Internship Frontend Task</p></Link>
                </div>
                <div className="ingressive-for-good">
                    <img src={ingressive_png} alt="ingressive-png"/>
                </div>

            </div>

        </>
    )
}

export default Footer
