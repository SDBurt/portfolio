import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './containers/Layout/Layout';
import Home from './containers/pages/Home.js';
import About from './containers/pages/About';
import Projects from './containers/pages/Projects';
import Articles from './containers/pages/Articles';
import Project from './containers/pages/Project';
import Error from './containers/pages/Error';
function App() {

  let routes = (
    <Switch>
      <Route path='/about' exact component={About} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/projects/:articlePath' component={Project} />
      <Route path='/articles' exact component={Articles} />
      <Route path='/' exact component={Home} />
      <Route component={Error} />
    </Switch>
  )

  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
