import React, { Component } from "react";
import {Card, CardGroup, Row, Col, Container} from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';

import Bar_menu from "../Bar_menu/Bar_menu"

import './presentation.css'

function Home(props) {
  
    return (
        <div>
          
          <Bar_menu/>

          <div className="MainPage">

          <Row>
            <Col sm md lg>
              <h1>
              <AnimatedText
                  type='words'
                  animationType='lights'
                  interval={0.04}
                  duration={0.8}
                  animation={{
                    y: '100px',
                    ease: 'ease',
                  }}
                >
                  Bienvenue dans Mapapa Studio
                </AnimatedText>
              </h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="presentation">
                <AnimatedText
                  type='words'
                  animationType='bounce'
                  interval={0.04}
                  duration={0.8}
                  animation={{
                    y: '100px',
                    ease: 'ease',
                  }}
                >
                  Description du studio MAPAPA
                </AnimatedText>
              </p>
            </Col>
          </Row>


          <h2>Présentation de l'équipe</h2>
                <Container fluid>
                  <Row>
                  {props.profiles.data && props.profiles.data.map((profiles, i) => (
                    <Col sm md lg>
                        <div key={i}>
                            <Card className="Profile">
                            
                            <Card.Img variant="top" className="ProfileImage" src={profiles.attributes.Profiles.data.attributes.url && `http://localhost:1337${profiles.attributes.Profiles.data.attributes.url}`}/>
                            <Card.Body>
                              <Card.Title>{profiles.attributes.Name}</Card.Title>
                                <Card.Text>
                                  {profiles.attributes.Description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col> 
                    ))}          
                  </Row>
                </Container>

            </div>
          </div> 
      

    )
  
}



export default Home;