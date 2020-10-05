import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Hero from '../../components/Hero/Hero';
import homeData from '../../data/home'
import projectData from '../../data/projects'
import articleData from '../../data/articles'
import Cards from '../../components/Cards/Cards';

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
                    <Col md={12}>
                        {renderHero}
                    </Col>
                </Row>
            </header>
            <section className={classes.Content}>
                <h1 className='text-center'>Projects</h1>
                <hr />
                <Cards
                    path='projects'
                    cardData={projectData}
                    showCardImgs={false}
                    showCardHeaders={false}
                    showCardFooters={false}
                />
            </section>
            <section className={classes.Content}>
                <h1 className='text-center'>Projects</h1>
                <hr />
                <Cards
                    path='articles'
                    cardData={articleData}
                    showCardImgs={false}
                    showCardHeaders={false}
                    showCardFooters={false}
                />
            </section>
        </div>
    )
}

export default Home
