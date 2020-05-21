import './index.css';
import React from 'react';
import data from '../data/data.json';
import InfoCard from './InfoCard';
import Layout from "../components/Layout";


/**
 * The home page of the project.
 * Uses the Layout class to display header, footer, and background.
 * Currently renders InfoCard props through the use of a map that creates an instance for each object in data.json
 * and assigns the key as the given id.
 * @author drupell
 */

export default class Index extends React.Component{
    static async getInitialProps() { //How you would initialize state with next.js
        return {infoCards: data} //Gets data and passes it to infoCards prop that we will create.
    }

    render() {
        // noinspection JSUnresolvedFunction
        return(
                <Layout>
                    <div>
                        {
                            this.props.infoCards.map((infoCard)=>( //Creates an InfoCard for each object in data.json
                                <InfoCard key={infoCard.id}/> //designates the key as the card's id (from data.json)
                            ))
                        }
                    </div>
                </Layout>
        )
    }

};

