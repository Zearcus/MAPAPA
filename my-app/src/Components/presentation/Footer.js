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

                        {/* More part */}
                        <Col className="colFooter" sm md lg>
                            <h5>Navigation</h5>

                            <Link to="/" className="LinkMDR">Accueil</Link>
                            <Link to="/" className="LinkMDR">Contact</Link>

                        </Col>

                        <Col className="colFooter" sm md lg>
                            <h5>Nos jeux</h5>

                            <Link to="/YetiSmash">Yeti Smash</Link>
                        </Col>

                        {/* Scocial media part */}

                        <Col className="colFooter" sm md lg>
                            <h5>Plus d'infos</h5>

                            <a href="https://twitter.com"  target="_blank">twitter</a>
                            <a href="https://twitter.com"  target="_blank">Playstore</a>
                        </Col>
                    </Row>

                    <Container fluid className="FooterCopyright" sm md lg>
                        &copy; {new Date().getFullYear()} Copyright: 
                        <Link to="/"> MAPAPA.com </Link>
                    </Container>

                </Container>

                
            </div>
        </div>
    )
  }
}



export default Footer;