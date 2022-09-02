import React from "react";
import {Container, Row, Col, Navbar, Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Bar_menu.css'




function Bar_menu (props){

  return (
      
    <Navbar className="shadow barMenu" expand="lg"  bg="light" sticky="top">
      <Container>
        <Row className="rowBar">
          {props.logos.data && props.logos.data.map((logos, i) => (
          <Col sm="auto" md="auto" lg="auto" className="NoPadding" key={i}>
            <Navbar.Brand>
              Mapapa
              <Link to="/">
                  <img className="Logo"  
                    src={logos.attributes.logo.data[1].attributes.url && `http://localhost:1337${logos.attributes.logo.data[1].attributes.url}`}
                    alt="Mapapa logo"
                  />
              </Link>
            </Navbar.Brand>
          </Col>
          ))}

          <Col className="m-auto NoPadding" sm="auto" md="auto" lg="auto">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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

export default Bar_menu;