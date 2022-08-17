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
                        <Col className="colFooter" sm="auto" md="auto" lg="auto">
                            <h5>Navigation</h5>

                            <Link to="/" className="LinkMDR">Accueil</Link>
                            <Link to="/" className="LinkMDR">Contact</Link>

                        </Col>

                        <Col className="colFooter" sm="auto" md="auto" lg="auto">
                            <h5>Nos jeux</h5>

                            <Link to="/YetiSmash" className="LinkMDR">Yeti Smash</Link>
                        </Col>

                        {/* Scocial media part */}

                        <Col className="colFooter" sm="auto" md="auto" lg="auto">
                            <h5>Plus d'infos</h5>

                        <a href="https://twitter.com"  target="_blank" className="SocialFooter">twitter</a>
                            <a href="https://play.google.com/store/apps/details?id=com.mapapastudio.yetismash&gl=FR"  target="_blank" className="SocialFooter">Playstore</a>
                        </Col>
                    </Row>

                    <Container fluid className="FooterCopyright" sm="auto" md="auto" lg="auto">
                        &copy; {new Date().getFullYear()} Copyright: 
                        <Link to="/" className="LinkMDR"> MAPAPA.com </Link>
                    </Container>

                </Container>

                
            </div>
        </div>
    )
  }
}



export default Footer;