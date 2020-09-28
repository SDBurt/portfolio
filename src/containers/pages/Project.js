import React, { useState, useEffect } from 'react'
import * as contentful from 'contentful'


const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN;

const client = contentful.createClient({
    space: SPACE,
    accessToken: TOKEN
});

const Project = (props) => {

    const [article, setArticle] = useState(null)

    const articlePath = props.match.params.articlePath

    useEffect(() => {
        console.log('[Project] useEffect');
        client.getEntries().then((articles) => {
            setArticle(articles.items.find(article => {
                return (
                    article.fields.path === articlePath
                )
            }));
        })
    }, [articlePath])

    let renderArticle = (<p>Loading...</p>)

    if (article !== null) {
        console.log(article);

        if (article.fields.icon) {
            renderArticle = (
                <React.Fragment>
                    <img src={article.fields.icon.fields.file.url} alt={article.fields.icon.fields.title} />
                    <h1>{article.fields.title}</h1>
                    <p>{article.fields.content}</p>
                </React.Fragment>
            )
        }
        else {
            renderArticle = (
                <React.Fragment>
                    <h1>{article.fields.title}</h1>
                    <p>{article.fields.content}</p>
                </React.Fragment>
            )
        }

    }


    return (
        <div>
            {renderArticle}

        </div>
    )
}

export default Project
