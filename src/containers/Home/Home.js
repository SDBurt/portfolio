import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Papers from '../../components/Papers/Papers';

import Hero from '../../components/Hero/Hero';
import homeData from '../../data/home'
import projectData from '../../data/projects'
import articleData from '../../data/articles'

import classes from './Home.module.css';

const Home = () => {

    const renderHero = homeData.map((data) => {
        return (
            <Hero key={data.title} title={data.title} subtitle={data.subtitle} text={data.summary} />
        )
    })

    return (
        <div>
            <header>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {renderHero}
                    </Col>
                </Row>
            </header>
            <section className={classes.Content}>
                <Row>
                    <Col>
                        <h2 className="text-center extra-margin-bot">Projects</h2>
                        <hr />
                        <Papers path="projects" paperData={projectData} />
                    </Col>

                </Row>
            </section>
            <section className={classes.Content}>
                <Row>
                    <Col>
                        <h2 className="text-center extra-margin-bot">Articles</h2>
                        <hr />
                        <Papers path="articles" paperData={articleData} />
                    </Col>

                </Row>
            </section>
        </div>
    )
}

export default Home
