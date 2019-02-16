
import React, { Component } from 'react';
import {HashRouter as Router, NavLink} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <Router>
        <div className='navbar'>
            <NavLink exact={true} className='navbutton' activeClassName='navbutton-active' to='/'>Home</NavLink>
            <NavLink className='navbutton' activeClassName='navbutton-active' to='/projects'>Projects</NavLink>
            <NavLink className='navbutton' activeClassName='navbutton-active' to='/about'>About Me</NavLink>
            <NavLink className='navbutton' activeClassName='navbutton-active' to='/contact'>Contact</NavLink>
        </div>
      </Router>
    )
  }
}

export default Navbar



