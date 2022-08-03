import React, { Component } from "react";
import {Container, Row, Col, Navbar, Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Bar_menu.css'

class Bar_menu extends Component {
  render() {
    return (
        
      <Navbar className="shadow barMenu" expand="lg"  bg="light" sticky="top">
        <Container>
          <Row className="rowBar">
            <Col sm="auto" md="auto" lg="auto">
              <Navbar.Brand>Mapapa</Navbar.Brand>
            </Col>
           <Col className="m-auto" sm="auto" md="auto" lg="auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav >
                <Link to="/"> Accueil</Link>
                <Link to="/YetiSmash">Yeti Smash
                  <Badge className="Blink" pill bg="danger">New</Badge>
                </Link>
              </Nav>
            </Navbar.Collapse>
           </Col>

          </Row>
          
          
        </Container>
      </Navbar>
       
    )
  }
}



export default Bar_menu;