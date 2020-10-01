import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactMarkdown from 'react-markdown';

import aboutData from '../../data/about'

import './About.module.css';
import classes from './About.module.css';

const About = () => {

    const renderAbout = aboutData.map((data) => {
        return (
            <Row key={data.header} className={classes.Section}>
                <Col lg={4} className="text-center text-lg-left">
                    <h1 className={classes.Header}>{data.header}</h1>
                </Col>
                <Col lg={8}>
                    <ReactMarkdown source={data.content} />
                </Col>

            </Row>
        )
    });

    return (
        <Row className={classes.About}>
            <Col>
                {renderAbout}
            </Col>
        </Row>
    )
}

export default About
