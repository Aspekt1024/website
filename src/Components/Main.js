import React, { Component } from 'react';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Router>
          <Switch className='body'>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
  }
}
export default Main;
    