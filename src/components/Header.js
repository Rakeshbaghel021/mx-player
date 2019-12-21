import React from "react";

function Header(){
    return(
        <div>
            <header className="main-header">
                <div className="logo">
                    <img className="mx" src="https://j2apps.s.llnwi.net/assets-origin/static/images/dark-logo_main_v1.png" alt="mx"/>
                </div>
                <div className="mid">
                    <a className="home">HOME</a>
                    <a className="home">TV</a>
                    <a className="home">WEB SHOWS</a>
                    <a className="home">MOVIES</a>
                    <a className="home">MUSIC</a>
                    <a className="home">NEWS</a>
                    <a className="home">SPORTS</a>
                    <a className="home">BUZZ</a>
                </div>
                <div className="search">
                    <img className="img1" src="images/search.png" alt="search"/>
                </div>
                <div className="menu">
                    <img className="img2" src="images/menu.png" alt="menu"/>
                    <h1 className="add">MY WATCHLIST</h1>
                    <img className="set" src="images/menuset.png" alt="set"/>
                </div>
            </header>
        </div>
    )
}
export default Header;