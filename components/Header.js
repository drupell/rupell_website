import Link from 'next/link';
import  './Layout.css'
import React from "react";

/**
 * Creates a header that displays CCC and RU logos (schools attended) and my name as the title, followed by links
 * on the right side of the window.
 *
 * @author drupell
 */

const Header = () => (

    //title component sets the title text displayed on the browser tab
    <div className="App">
        <header className="header">
            <title>David Rupell</title>
            <div className="static-group">
                <img src="/static/logo-CCC.png"
                     className="logo" alt="CCCLogo"
                />
                <img src="/static/logo-RU.png"
                     className="logo" alt="RULogo"
                />

                <h className="title">David Rupell</h>
            </div>
            <nav>
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
                <Link href={"/contact"}>
                    <a>Contact</a>
                </Link>
            </nav>
        </header>
    </div>
);

export default Header;