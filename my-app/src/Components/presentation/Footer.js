import React, { useState, useEffect, Component } from "react";
import {Container, Row, Col, Navbar, Nav, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import './Footer.css'
class Footer extends Component {
  render() {
    return (
        <div>
            <div className="mainFooter">
                <Container>
                    <Row>
                        <Col className="colFooter">
                            <h5>A propos</h5>
                        </Col>

                        <Col className="colFooter">
                            <h5>Réseau Scocial</h5>

                            
                        </Col>

                        <Col className="colFooter">
                            <h5>Footer</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
  }
}



export default Footer;