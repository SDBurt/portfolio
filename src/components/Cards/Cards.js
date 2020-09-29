import React from 'react'
import PropTypes from 'prop-types';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from './Card/Card';

const Cards = (props) => {

    let cards = <p>No projects at the moment.</p>

    if (props.cardData) {
        cards = props.cardData.map((card) => {
            return (
                <Card
                    // img={Img1}
                    key={card.path}
                    imgAlt={card.imageAlt}
                    title={card.title}
                    text={card.content}
                    updated={card.updatedAt}
                    path={`${props.path}/${card.path}`}
                />
            )
        })
    }

    return (
        <CardDeck>
            {cards}
        </CardDeck>
    )
}

// Check if props are equal, used in memo for performance optimization
const areEqual = (prevProps, nextProps) => {
    return (
        prevProps.cardData === nextProps.cardData
    );
}

Cards.propTypes = {
    cardData: PropTypes.array
}

export default React.memo(Cards, areEqual)
