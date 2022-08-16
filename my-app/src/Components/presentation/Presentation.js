import React, { Component } from "react";
import { Row, Col, Container} from 'react-bootstrap';
import AnimatedText from 'react-animated-text-content';
import {UserCard} from 'react-ui-cards';

import Bar_menu from "../Bar_menu/Bar_menu"
import Footer from "./Footer"

import './presentation.css'

function Home(props) {
  
    return (
      <div>
          
        <Bar_menu/>

          {/* welcome part */}
        <div className="MainPage">
          <Container fluid>
          <Row>
            <Col sm="auto" md="auto" lg="auto" className="title"> 
              <AnimatedText
                  type='words'
                  animationType='lights'
                  interval={0.04}
                  duration={1.75}
                  animation={{
                    y: '100px',
                    ease: 'ease',
                  }}
                >
                  Bienvenue dans Mapapa Studio
                </AnimatedText>
                {/* <h1 >Bienvenue dans Mapapa Studio</h1> */}
            </Col>
        </Row>

          <Row className="presentation">
            <Col sm="auto" md="auto" lg="auto">
                <AnimatedText
                  type='words'
                  animationType='blocks'
                  interval={0.04}
                  duration={0.8}
                  tag="p"
                  threshold={0.1}
                  rootMargin="20%"  
                  animation={{
                    y: '100px',
                    scale: 1,
                    ease: 'ease-in-out',
                  }}
                >
                  
                   Description du studio MAPAPA

                  In his tractibus navigerum nusquam visitur
                  flumen sed in locis plurimis aquae suapte natura 
                  calentes emergunt ad usus aptae multiplicium medelarum. verum has 
                  quoque regiones pari sorte Pompeius Iudaeis domitis et Hierosolymis captis in 
                  provinciae speciem delata iuris dictione formavit.
                  
                </AnimatedText>
            </Col>
          </Row>
        </Container>


            {/* Crew presentation */}

          <h2 className="CrewPresentation">Présentation de l'équipe</h2>
          <Container fluid>
            
            <Row className="Profile">
              {props.profiles.data && props.profiles.data.map((profiles, i) => (
              <Col sm="auto" md="auto" lg="auto" >

                {/* put className="Profile" in Col if you've a problem */}
                  <div key={i}>

                      <UserCard
                          float
                          header={profiles.attributes.Cover.data.attributes.url && `http://localhost:1337${profiles.attributes.Cover.data.attributes.url}`}
                          avatar={profiles.attributes.Profiles.data.attributes.url && `http://localhost:1337${profiles.attributes.Profiles.data.attributes.url}`}
                          name={profiles.attributes.Name}
                          positionName={profiles.attributes.Description}
                      />

                      {/* <Card className="Profile">
                      
                      <Card.Img variant="top" className="ProfileImage" src={profiles.attributes.Profiles.data.attributes.url && `http://localhost:1337${profiles.attributes.Profiles.data.attributes.url}`}/>
                      <Card.Body>
                        <Card.Title>{profiles.attributes.Name}</Card.Title>
                          <Card.Text>
                            {profiles.attributes.Description}
                          </Card.Text>
                      </Card.Body>
                  </Card> */}
                  </div>
              </Col> 
              ))}
            </Row>
          </Container>

          <Footer/>

        </div>
      </div> 
      

    )
  
}



export default Home;