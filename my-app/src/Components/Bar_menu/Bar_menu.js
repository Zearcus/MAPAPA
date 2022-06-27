import React, { Component } from "react";
import {Container, Row, Col, Navbar, Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Bar_menu.css'

class Bar_menu extends Component {
  render() {
    return (
        
      <Navbar className="No shadow barMenu" expand="lg" variant="light" bg="light">
          <Row>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse> */}
            <Col sm md lg>
              <Nav className="navBar">
                <Navbar.Brand className="Title">Mapapa</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Link to="/Admin">Yeti Smash<Badge className="Blink" pill bg="danger">New</Badge></Link>
                </Navbar.Collapse>
                
              </Nav>
            </Col>
          </Row>
      </Navbar>
       
    )
  }
}



export default Bar_menu;