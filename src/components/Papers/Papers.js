import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Paper from './Paper/Paper';

import classes from './Papers.module.css';

const Papers = props => {

    const renderPapers = props.paperData.map((data) => {
        return (
            <Col key={data.title} md={6} className={classes.Paper}>
                <Link to={props.path ? `${props.path}/${data.path}` : data.path} style={{ textDecoration: 'none' }}>
                    <Paper
                        header={data.title}
                        content={data.content || data.summary}
                    />
                </Link>
            </Col>
        )
    })

    return (
        <Row style={{ margin: "10px auto" }}>
            {renderPapers}
        </Row>
    )
}

export default Papers
