import React, { Fragment, Component } from 'react';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          
          <div className='navbar'>
            <NavLink exact={true} className='navbutton' activeClassName='navbutton-active' to='/'>Home</NavLink>
            <NavLink className='navbutton' activeClassName='navbutton-active' to='/projects'>Projects</NavLink>
            <NavLink className='navbutton' activeClassName='navbutton-active' to='/about'>About Me</NavLink>
            <NavLink className='navbutton' activeClassName='navbutton-active' to='/contact'>Contact</NavLink>
          </div>

          <Switch className='body'>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>

        </Fragment>   
      </Router>
    )
  }
}
export default Main;
    