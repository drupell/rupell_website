import './InfoCard.css';
import Link from "next/link";
import React from "react";

// noinspection JSUnusedLocalSymbols
/**
 * InfoCard has a Card object that is used to display data in a clean-looking window.
 * @author drupell
 *
 * TODO: Needs to become more generic for reuse. Likely needs to do something similar to Layout.
 */
const Card = (props) =>  (
    <object className="card" width="50%">
        <div className="front">
            <div className="container">
                    <h3>About Me</h3>
                <p>
                    I graduated from Camden County College (CCC) after Fall of 2019 with a double major in
                    Computer Science and Mathematics, and a cumulative GPA of 3.957. Currently, I am studying
                    full time at Rowan University as a Computer Science major with a minor in Mathematics and
                    a concentration in Cyber Security Defense. I currently have a GPA of 4.000 and continue to remain
                    involved on campus as a member of Rowan's Association of Computing Machinery and
                    Cyber Security Club.<br/><br/>
                    <Link href={"/resume"}>
                        <button>Resume</button>
                    </Link>
                    <br/><br/>
                    I am currently attending with the New Jersey STARS II scholarship, and I am a member of the Phi
                    Theta Kappa Honors Society. I have been recognized at CCC through the Miller Mathematics Award
                    and Program Excellence Awards following my graduation. I have also been recognized on the
                    President's List at CCC for each term that I have attended.<br/>
                </p>
            </div>
        </div>
    </object>
);

export default Card;