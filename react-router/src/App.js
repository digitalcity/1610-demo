import React from 'react';
import { Router, Route, hashHistory, browserHistory, Redirect, IndexRoute } from 'react-router';

import Home from './Home';
import About from './About';
import Work from './Work';
import Blog from './Blog';
import Me from './Me';
import PageNotFound from './PageNotFound';
import Index from './IndexRoute.js';

class App extends React.Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={Index} />
          <Route path="about" component={About}>
            {/* 不加 /  ，/aa/about,如果加上 / ， 就是/about */}
            <Route path="me" component={Me}/>
          </Route>
          <Route path="work" components={{main: PageNotFound, body: Work}}/>
          <Route path="blog/:title" component={Blog}/>
          <Route path='404' component={PageNotFound}/>
          {/* <Route path="*" component={PageNotFound}/> */}
          <Redirect from="*" to="404" />
        </Route>
      </Router>
    )
  }
}

export default App;

{/*
  /  Home  {this.props.children}
  /about  Home+About
  /work  Home+Work
  /me Home+About+Me
*/}
