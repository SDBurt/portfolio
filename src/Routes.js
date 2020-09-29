import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home/Home.js';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Project from './containers/Project/Project';
import Articles from './containers/Articles/Articles';
import Article from './containers/Article/Article';
import Error from './containers/Error';

export default () => {
    return (
        <Switch>
            <Route path='/about' exact component={About} />
            <Route path='/projects' exact render={(props) => <Projects {...props} />} />
            <Route path='/projects/:projectPath' render={(props) => <Project {...props} />} />
            <Route path='/articles' exact render={(props) => <Articles {...props} />} />
            <Route path='/articles/:articlePath' render={(props) => <Article {...props} />} />
            <Route path='/' exact component={Home} />
            <Route component={Error} />
        </Switch>)

}