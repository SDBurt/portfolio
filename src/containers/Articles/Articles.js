import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';

import data from '../../data/articles'

const Srticles = (props) => {

    const [articles, setarticles] = useState([])

    useEffect(() => {
        console.log('[articles] Data is ', data);
        console.log('[articles] useEffect');
        setarticles(data);
    }, [])

    return (
        <div>
            <h1>articles</h1>
            <Cards path={props.match.path} cardData={articles} />
        </div>
    )
}

export default Srticles;
