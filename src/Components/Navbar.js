
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <NavLink exact={true} className='navbutton' activeClassName='navbutton-active' to='/'>Home</NavLink>
        <NavLink className='navbutton' activeClassName='navbutton-active' to='/projects'>Projects</NavLink>
        <NavLink className='navbutton' activeClassName='navbutton-active' to='/about'>About Me</NavLink>
        <NavLink className='navbutton' activeClassName='navbutton-active' to='/contact'>Contact</NavLink>
      </div>
    )
  }
}

export default Navbar



