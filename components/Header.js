import  './Layout.css'
import React from "react";
import Link from 'next/link';

/**
 * Creates a header that displays CCC and RU logos (schools attended) and my name as the title, followed by links
 * on the right side of the window.
 *
 * @author drupell
 */

const Header = () => (

        <header className="header" id="customHeader">
            <span className="static-group">
                <img src="/static/logo-CCC.png"
                     className="logo" alt="CCCLogo"
                />
                <img src="/static/logo-RU.png"
                     className="logo" alt="RULogo"
                />

                <p className="title">David Rupell</p>
            </span>
            
            <nav>
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
                <Link href={"/contact"}>
                    <a>Contact</a>
                </Link>
            </nav>
        </header>
);


export default Header;