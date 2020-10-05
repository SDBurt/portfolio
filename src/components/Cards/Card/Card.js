import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment'
import { Link } from 'react-router-dom';

import classes from './Card.module.css';

const SingleCard = (props) => {

    const [cardHighlighted, setCardHighlighted] = useState(false)

    const renderHeader = props.showHeader && props.header ? (
        <Card.Header>
            <h1>{props.header}</h1>
        </Card.Header>
    ) : null

    const renderFooter = props.showFooter && props.footer ? (
        <Card.Footer>
            <Link to={props.path}>
                <Button variant="primary">See More</Button>
            </Link>
        </Card.Footer>
    ) : null

    const renderImg = props.showImg && props.img ? (
        <Card.Img
            className={classes.CardImg}
            variant="top"
            src={props.img}
            alt={props.imgAlt}
        />
    ) : null

    let cardAnimationCSS = cardHighlighted ? classes.cardHighlighted : "";
    const updated = moment(props.updated).fromNow();


    return (
        <Card
            className={[classes.Card, cardAnimationCSS].join(' ')}
            onMouseEnter={() => setCardHighlighted(true)}
            onMouseLeave={() => setCardHighlighted(false)}
        >
            <Link to={props.path} style={{ textDecoration: 'none' }}>
                {renderImg}
                {renderHeader}
                <Card.Body>
                    <Card.Title className={classes.Title}>{props.title}</Card.Title>
                    <Card.Text className={[classes.Subtext, "text-muted"].join(' ')}>Updated: {updated}</Card.Text>
                    <Card.Text className={classes.Text}>{props.text.slice(0, 200)}...</Card.Text>
                </Card.Body>
                {renderFooter}
            </Link>
        </Card>
    )
}

SingleCard.propTypes = {
    showImg: PropTypes.bool.isRequired,
    showHeader: PropTypes.bool.isRequired,
    showFooter: PropTypes.bool.isRequired,
}

export default SingleCard
