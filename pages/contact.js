import Layout from '../components/Layout'
import React from "react";
import InfoCard from "./InfoCard"


/**
 * Contact info page that is accessible via a header link.
 * Currently acts as a placeholder.
 *
 * @author drupell
 */

export default () => (
    <Layout>
        <InfoCard>
            <h1>Contact Info</h1>
            <h2>Email:</h2>
            <p>drupell7@gmail.com</p>
            <h2>Other links:</h2>
            <a href={"https://github.com/drupell"}>
                <button>Github</button>
            </a>
            <a href={"https://www.linkedin.com/in/david-rupell-40ab5a14b/"}>
            <button>LinkedIn</button>
            </a>
        </InfoCard>
    </Layout>
);