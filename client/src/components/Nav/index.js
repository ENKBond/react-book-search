import React from "react";
import "./style.css";

function Nav () {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">BookShelf</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className= {window.location.pathname === "/" || window.location.pathname === "/books" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/">Search</a>
                    </li>
                    <li className={window.location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
                        <a className="nav-link" href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;