import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import data from '../../data/articles'
import classes from './Article.module.css'


const Article = (props) => {

    const [article, setarticle] = useState(null)

    const articlePath = props.match.params.articlePath

    useEffect(() => {
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
    let renderUpdated = null;



    if (article !== null) {

        if (article.icon) {
            renderImage = (
                <Row className="justify-content-center">
                    <Col>
                        <img className={classes.Img} src={article.icon.fields.file.url} alt={article.icon.fields.title} />
                    </Col>
                </Row>
            )
        }
        if (article.title) {
            renderTitle = (
                <Row className="justify-content-center">
                    <Col>
                        <h1>{article.title}</h1>
                    </Col>
                </Row>
            )
        }
        if (article.content) {
            renderContent = (
                <Row>
                    <Col>
                        <ReactMarkdown source={article.content} />
                    </Col>
                </Row>
            )
        }

        if (article.updatedAt) {
            const updated = moment(article.updatedAt).format("MMM. Do, YYYY");
            renderUpdated = (
                <Row>
                    <Col>
                        <p className="text-muted">{updated}</p>
                    </Col>
                </Row>);
        }

    }

    return (
        <Row className="justify-content-center">
            <Col lg={8}>
                {renderImage}
                {renderTitle}
                {renderUpdated}
                {renderContent}
            </Col>
        </Row>
    )
}

export default Article
