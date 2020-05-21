import Header from './Header';
import Footer from './Footer';
import React from "react";
import Head from 'next/head';

/**
 * Creates the layout of the pages using the Header and Footer objects as well as the css from Layout.css which
 * serves as styling for the header and footer pieces and adds the background.
 *
 * @author drupell
 * @param props - data to display within the layout's center (the body).
 * @return {boolean}
 */

export default function Layout(props) {

    return (

        <div>
            <Head>
                <title>David Rupell</title>
                <link rel="icon" type="image/png"  sizes="16x16" href="/static/title-icon16.png" />
                <link rel="icon" type="image/png"  sizes="32x32" href="/static/title-icon32.png" />
            </Head>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}