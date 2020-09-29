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
            <h1>Projects</h1>
            <Cards path={props.match.path} cardData={projects} />
        </div>
    )
}

export default Projects;
