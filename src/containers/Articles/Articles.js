import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';

import data from '../../data/articles'

const Srticles = (props) => {

    const [articles, setarticles] = useState([])

    useEffect(() => {
        setarticles(data);
    }, [])

    return (
        <div>
            <h1 className='text-center extra-margin-bot'>Blog</h1>
            <hr />
            <Cards
                path={props.match.path}
                cardData={articles}
                showCardImgs={false}
                showCardHeaders={false}
                showCardFooters={false}
            />
        </div>
    )
}

export default Srticles;
