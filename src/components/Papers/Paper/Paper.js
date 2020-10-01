import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import classes from './Paper.module.css';

const Paper = props => {
    return (
        <div className={classes.Paper}>
            <div className={classes.Inner}>
                <Row className={classes.Header}>
                    <Col>
                        <h5>{props.header}</h5>
                    </Col>
                </Row>
                <Row className={classes.Content} style={{ minHeight: '50px' }}>
                    <Col>{props.content.slice(0, 100)}...</Col>
                </Row>
                <Row className={classes.Footer}>
                    <Col>{props.footer}</Col>
                </Row>
            </div>
        </div>
    )
}

export default Paper
