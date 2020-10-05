import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from './Card/Card';

const Cards = (props) => {

    let cards = <p>No projects at the moment.</p>

    const [isLoading, setLoading] = useState(false)

    const { cardData } = props;

    useEffect(() => {
        setLoading(true);

        if (cardData !== null) {
            setLoading(false)
        }

    }, [cardData])

    if (isLoading) {
        cards = <p>loading...</p>
    }

    if (props.cardData) {
        cards = props.cardData.map((card) => {
            const iconUrl = typeof card.icon !== 'undefined' ? card.icon.fields.file.url : null
            return (
                <Card
                    key={card.title}
                    className="transition-card"
                    img={iconUrl}
                    imgAlt={card.imageAlt}
                    title={card.title}
                    text={card.content}
                    updated={card.updatedAt}
                    footer={card.footer}
                    path={`${props.path}/${card.path}`}
                    showImg={props.showCardImgs}
                    showHeader={props.showCardHeaders}
                    showFooter={props.showCardFooters}
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

const areEqual = (prevProps, nextProps) => {
    return (
        prevProps.cardData === nextProps.cardData
    );
}

Cards.propTypes = {
    path: PropTypes.string.isRequired,
    cardData: PropTypes.array.isRequired,
    showCardImgs: PropTypes.bool.isRequired,
    showCardHeaders: PropTypes.bool.isRequired,
    showCardFooters: PropTypes.bool.isRequired,

}

export default React.memo(Cards, areEqual)
