import React, { Component } from "react";
import {Container, Row, Col, Navbar, Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Bar_menu.css'

const image = 
"https://cdn.discordapp.com/attachments/440913023658622996/1009246802530271232/unnamed_4.webp";

class Bar_menu extends Component {
  render() {
    return (
        
      <Navbar className="shadow barMenu" expand="lg"  bg="light" sticky="top">
        <Container>
          <Row className="rowBar">
            <Col sm="auto" md="auto" lg="auto" className="NoPadding">
              <Navbar.Brand>
                <Link to="/">
                  <img className="Logo" src={image}/>
                </Link>
              </Navbar.Brand>
            </Col>
           <Col className="m-auto NoPadding" sm="auto" md="auto" lg="auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav >
                <Link to="/YetiSmash">
                  Yeti Smash
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