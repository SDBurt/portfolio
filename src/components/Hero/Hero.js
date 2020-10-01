import React from 'react'

import classes from './Hero.module.css';

const Hero = (props) => {

    return (
        <div className={classes.Hero}>
            <h1 className={classes.Title}>{props.title}</h1>
            <h3 className={classes.Subtitle}>{props.subtitle}</h3>
            <p className={classes.Text}>{props.text}</p>
        </div>
    )
}

export default Hero
