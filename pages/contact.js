import Layout from '../components/Layout'
import React from "react";
import InfoCard from "./InfoCard"


/**
 * Contact info page that is accessible via a header link.
 * Currently acts as a placeholder.
 *
 * TODO: Add InfoCards or other styling to the page for cleaner display of information.
 * @author drupell
 */

export default () => (
    <Layout>
        <InfoCard>
            <h1>Contact Info</h1>
            <h2>Email:</h2>
            <p>drupell7@gmail.com</p>
        </InfoCard>
    </Layout>
);