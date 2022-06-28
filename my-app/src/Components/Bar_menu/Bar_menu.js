import React, { Component } from "react";
import {Container, Row, Col, Navbar, Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Bar_menu.css'

class Bar_menu extends Component {
  render() {
    return (
        
      <Navbar className="shadow barMenu" expand="lg"  bg="light">
          <Navbar.Brand className="Title">Mapapa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="navBar">
              <Link to="/Admin">Yeti Smash<Badge className="Blink" pill bg="danger">New</Badge></Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
       
    )
  }
}



export default Bar_menu;