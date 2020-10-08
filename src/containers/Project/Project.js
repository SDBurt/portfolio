import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import data from '../../data/projects'
import classes from './Project.module.css'

const Project = (props) => {

    const [project, setproject] = useState(null)

    const projectPath = props.match.params.projectPath

    useEffect(() => {
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
    let renderUpdated = null;

    if (project !== null) {

        if (project.icon) {
            renderImage = (
                <Row className="justify-content-center">
                    <Col><img className={classes.Img} src={project.icon.fields.file.url} alt={project.icon.fields.title} /></Col>
                </Row>
            )
        }

        if (project.title) {
            renderTitle = (
                <Row className="justify-content-center">
                    <Col>
                        <h1>{project.title}</h1>
                    </Col>
                </Row>
            )
        }

        if (project.content) {
            renderContent = (
                <Row >
                    <Col>
                        <ReactMarkdown source={project.content} />
                    </Col>
                </Row>
            )
        }

        if (project.updatedAt) {
            const updated = moment(project.updatedAt).format("MMM. Do, YYYY");
            renderUpdated = (
                <Row>
                    <Col>
                        <p className="text-muted">Last Updated: {updated}</p>
                    </Col>
                </Row>);
        }
    }

    return (
        <Row className="justify-content-center">
            <Col md={8}>
                {renderImage}
                {renderTitle}
                {renderUpdated}
                {renderContent}
            </Col>
        </Row>
    )
}

export default Project
