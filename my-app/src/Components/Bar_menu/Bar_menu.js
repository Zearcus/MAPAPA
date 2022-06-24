import React, { Component } from "react";
import {Container, Row, Col, Navbar, Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Bar_menu.css'

class Bar_menu extends Component {
  render() {
    return (
        
      <Navbar className="shadow barMenu" expand="lg" variant="light" bg="light">
        <Container>
          <Row>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse> */}
            <Col sm={6} md={12} lg={12}>
              <Nav className="navBar">
                <Navbar.Brand className="Title">Mapapa</Navbar.Brand>
                <Link to="/Admin">Yeti Smash<Badge className="Blink" pill bg="danger">New</Badge></Link>
              </Nav>
            </Col>

          </Row>
        </Container>
      </Navbar>
       
    )
  }
}



export default Bar_menu;