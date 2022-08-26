import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css'

function Footer (props) {
    return (
        <div>
            <div className="mainFooter">
                <Container>
                    <Row>

                        {/* More part */}
                        <Col className="colFooter" sm="auto" md="auto" lg="auto">
                            
                            <h5>Navigation</h5>

                            <Link to="/" className="LinkNavigation">Accueil</Link>

                        </Col>

                        <Col className="colFooter" sm="auto" md="auto" lg="auto">
                            
                            <h5>Nos jeux</h5>

                            <Link to="/YetiSmash" className="LinkGame">Yeti Smash</Link>
                        </Col>

                        {/* Scocial media part */}
                            {/* ici */}
                        {props.logos.data && props.logos.data.map((logos, i) => (
                        <Col className="colFooter" sm="auto" md="auto" lg="auto" key={i}>
                            
                            <h5>Plus d'infos</h5>

                            <a href="https://twitter.com"  target="_blank" className="SocialFooter">
                                <img className="LogoFooter" src={logos.attributes.logo.data[2].attributes.url && `http://localhost:1337${logos.attributes.logo.data[2].attributes.url}`} alt="Mapapa Twitter logo"/>
                                Twitter
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.mapapastudio.yetismash&gl=FR"  target="_blank" className="SocialFooter">
                                <img className="LogoFooter" src={logos.attributes.logo.data[0].attributes.url && `http://localhost:1337${logos.attributes.logo.data[0].attributes.url}`} alt="Mapapa Playstore logo"/>
                                Playstore
                            </a>
                        </Col>
                        ))}
                    </Row>

                    <Container fluid className="FooterCopyright" sm="auto" md="auto" lg="auto">
                        &copy; {new Date().getFullYear()} Copyright: 
                        <Link to="/" className="LinkMapapa"> MAPAPA.com </Link>
                    </Container>

                </Container>
            </div>
        </div>
    )
}

export default Footer;