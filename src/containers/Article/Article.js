import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import data from '../../data/articles'
import classes from './Article.module.css'

const Article = (props) => {

    const [article, setarticle] = useState(null)

    const articlePath = props.match.params.articlePath

    useEffect(() => {
        console.log('[article] useEffect');
        setarticle(
            data.find(article => {
                return (
                    article.path === articlePath
                )
            })
        );
    }, [articlePath])

    let renderImage = null;
    let renderTitle = null;
    let renderContent = null;

    if (article !== null) {

        if (article.icon) {
            renderImage = (
                <Row className="justify-content-center">
                    <img className={classes.Img} src={article.icon.fields.file.url} alt={article.icon.fields.title} />
                </Row>
            )
        }
        if (article.title) {
            renderTitle = (
                <Row className="justify-content-center">
                    <h1>{article.title}</h1>
                </Row>
            )
        }
        if (article.content) {
            renderContent = (
                <Row >
                    <p>{article.content}</p>
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

export default Article
