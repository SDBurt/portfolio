import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';

import data from '../../data/projects'

const Projects = (props) => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(data);
    }, [])

    return (
        <div>
            <h1 className="text-center extra-margin-bot">Projects</h1>
            <hr />
            <Cards
                path={props.match.path}
                cardData={projects}
                showCardImgs={true}
                showCardHeaders={false}
                showCardFooters={false}
            />
        </div>
    )
}

export default Projects;
