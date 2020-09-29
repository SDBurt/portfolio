import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const SingleCard = (props) => {
    return (
        <Card className={classes.Card}>
            <Card.Img
                className={classes.CardImg}
                variant="top"
                src={props.img}
                alt={props.imgAlt}
            />
            <Card.Body>
                <Card.Title className={classes.Title}>{props.title}</Card.Title>
                <Card.Text className={[classes.Subtext, "text-muted"].join(' ')}>{props.updated}</Card.Text>
                <Card.Text className={classes.Text}>
                    {props.text.slice(0, 200)}...
                </Card.Text>

            </Card.Body>
            <Card.Footer>
                <Link to={props.path}>
                    <Button variant="primary">See More</Button>
                </Link>
            </Card.Footer>
        </Card >
    )
}

export default SingleCard
