import React from 'react'
import { Link } from "react-scroll"
import './Nav.css'

function Nav() {
  let menu = React.useRef();
  let mobile = React.useRef();

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Navigation */}
      <ul className="desktop-nav">
        <Link to="home" smooth={true} activeClass='active' spy={true} duration={500}><li>Home</li></Link>
        <Link to="about" smooth={true} activeClass='active' spy={true} duration={500}><li>About</li></Link>
        <Link to="project" smooth={true} activeClass='active' spy={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" smooth={true} activeClass='active' spy={true} duration={500}><li>Contact</li></Link>
      </ul>

      {/* Hamburger Menu */}
      <div
        className="hamburger"
        ref={menu}
        onClick={() => {
          mobile.current.classList.toggle("activemobile");
          menu.current.classList.toggle("activeham");
        }}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Navigation */}
      <ul className="mobile-nav" ref={mobile}>
        <Link to="home" smooth={true} activeClass='active' spy={true} duration={500}><li>Home</li></Link>
        <Link to="about" smooth={true} activeClass='active' spy={true} duration={500}><li>About</li></Link>
        <Link to="project" smooth={true} activeClass='active' spy={true} duration={500}><li>Projects</li></Link>
        <Link to="contact" smooth={true} activeClass='active' spy={true} duration={500}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
