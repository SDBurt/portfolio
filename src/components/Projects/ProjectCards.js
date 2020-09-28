import React from 'react'
import PropTypes from 'prop-types';

import CardDeck from 'react-bootstrap/CardDeck';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = (props) => {

    let projects = <p>No projects at the moment.</p>

    if (props.projects) {
        console.log(props.projects)
        projects = props.projects.map((project) => {
            return (
                <ProjectCard
                    // img={Img1}
                    key={project.fields.path}
                    imgAlt={project.fields.imageAlt}
                    title={project.fields.title}
                    text={project.fields.content}
                    updated={project.sys.updatedAt}
                    path={project.fields.path}
                />
            )
        })
    }


    return (
        <CardDeck>
            {projects}
        </CardDeck>
    )
}

// Check if props are equal, used in memo for performance optimization
const areEqual = (prevProps, nextProps) => {
    return (
        prevProps.projects === nextProps.projects
    );
}

Projects.propTypes = {
    projects: PropTypes.array
}

export default React.memo(Projects, areEqual)
