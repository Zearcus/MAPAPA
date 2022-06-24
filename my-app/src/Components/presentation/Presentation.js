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

                <h2>Présentation de l'équipe</h2>
                <Container sm="12" md="6" lg="6">
                  <Row>
                    <Col>
                      {props.profiles.data && props.profiles.data.map((profiles, i) => (
                        <div key={i}>
                            <Card className="Profile">
                            
                            <Card.Img variant="top" className="ProfileImage" src={profiles.attributes.Profiles.data.attributes.url && `http://localhost:1337${profiles.attributes.Profiles.data.attributes.url}`}/>
                            <Card.Body>
                              <Card.Title>{profiles.attributes.Name}</Card.Title>
                                <Card.Text>
                                  {}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>

                      ))} 
                    </Col>          
                  </Row>
                </Container>

            </div>
          </div> 
      

    )
  
}



export default Home;