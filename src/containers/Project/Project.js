import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import data from '../../data/projects'
import classes from './Project.module.css'

const Project = (props) => {

    const [project, setproject] = useState(null)

    const projectPath = props.match.params.projectPath

    useEffect(() => {

        console.log('[Project] useEffect');
        setproject(
            data.find(project => {
                return (
                    project.path === projectPath
                )
            })
        );
    }, [projectPath])

    let renderImage = null;
    let renderTitle = null;
    let renderContent = null;

    if (project !== null) {

        if (project.icon) {
            renderImage = (
                <Row className="justify-content-center">
                    <img className={classes.Img} src={project.icon.fields.file.url} alt={project.icon.fields.title} />
                </Row>
            )
        }
        if (project.title) {
            renderTitle = (
                <Row className="justify-content-center">
                    <h1>{project.title}</h1>
                </Row>
            )
        }
        if (project.content) {
            renderContent = (
                <Row >
                    <p>{project.content}</p>
                </Row>
            )
        }
    }

    return (
        <Row className="justify-content-center">
            <Col md={8}>
                {renderImage}
                {renderTitle}
                {renderContent}
            </Col>
        </Row>
    )
}

export default Project
