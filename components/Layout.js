import Header from './Header';
import Footer from './Footer';
import React from "react";

/**
 * Creates the layout of the pages using the Header and Footer objects as well as the css from Layout.css which
 * serves as styling for the header and footer pieces and adds the background.
 *
 * @author drupell
 * @param props - data to display within the layout's center (the body).
 */

export default function Layout(props) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}