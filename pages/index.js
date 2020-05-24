import './index.css';
import React from 'react';
import Layout from "../components/Layout";
import InfoCard from './InfoCard';
import Link from "next/link";


/**
 * The home page of the project.
 * Uses the Layout class to display header, footer, and background.
 * Currently renders InfoCard props through the use of a map that creates an instance for each object in data.json
 * and assigns the key as the given id.
 * @author drupell
 */

export default class Index extends React.Component{

    render() {
        return(
                <Layout>
                    <InfoCard>
                        <h1>About Me</h1>
                        <p>
                            I graduated from Camden County College (CCC) after Fall of 2019 with a double major in
                            Computer Science and Mathematics, and a cumulative GPA of 3.959. Currently, I am studying
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
                    </InfoCard>
                </Layout>
        )
    }

};

