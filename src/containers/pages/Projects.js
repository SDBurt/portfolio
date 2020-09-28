import React, { useState, useEffect } from 'react'

import ProjectCards from '../../components/Projects/ProjectCards';
import * as contentful from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN;

const client = contentful.createClient({
    space: SPACE,
    accessToken: TOKEN
});

const Projects = () => {

    const [projects, setProjects] = useState([])


    useEffect(() => {
        console.log('[Projects] useEffect');
        client.getEntries().then((res) => {
            setProjects(res.items)
        })
    }, [])

    return (
        <div>
            <h1>Projects</h1>
            <ProjectCards projects={projects} />
        </div>
    )
}

export default Projects;
