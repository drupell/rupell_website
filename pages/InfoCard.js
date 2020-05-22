import './InfoCard.css';
import React from "react";

/**
 * InfoCard has a Card object that is used to display data in a clean-looking window.
 * @author drupell
 *
 */
export default function Card(props) {
    return(
        <object className="card">
            <div className="front">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </object>
    )
}