import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <nav className="nav-wrap">
          <ul className="nav flex flex-row justify-center">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#resume">Resume</a></li>
            <li className="nav-item"><a href="#work">Works</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
