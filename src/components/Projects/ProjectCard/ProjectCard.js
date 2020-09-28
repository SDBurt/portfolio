import React from 'react'
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
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
                <Card.Text className={classes.Text}>
                    {props.text}
                </Card.Text>
                <Card.Text className={classes.Subtext}>{props.updated}</Card.Text>
                <Link to={`projects/${props.path}`}>
                    <button type="button"> View More</button>
                </Link>
            </Card.Body>
        </Card >

    )
}

export default ProjectCard
