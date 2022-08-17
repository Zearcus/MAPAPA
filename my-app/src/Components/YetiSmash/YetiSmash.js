import React, { Component } from "react";
import {Row, Col, Container, Carousel, Button} from 'react-bootstrap';
import { Parallax} from "react-parallax"

import Bar_menu from "../Bar_menu/Bar_menu"
import Footer from "../presentation/Footer"

import './YetiSmash.css'




function YetiSmash(props){
  return(
      <div>
        <Bar_menu/>
          <div className="YetiMainPage">

            {/* first page */}

            <Container fluid >
              <Row>
                {props.yeti.data && props.yeti.data.map((yeti, i) => (
                <Col key={i} className="NoPadding" sm md lg>
                  
                    <Parallax strength={500} bgImage={yeti.attributes.Parallax.data[0].attributes.url && `http://localhost:1337${yeti.attributes.Parallax.data[0].attributes.url}`}>
                      <div className="ParallaxFront1">
                        <h2>Qu'est ce que Yeti Smash ?</h2>
                      </div>
                    </Parallax>
                  
                </Col>
                ))}
              </Row>
            </Container>

                  {/* Carousel part */}


              <Container fluid>
                  <Row>
                    {props.yeti.data && props.yeti.data.map((yeti, i) => (
                    <Col key={i} className="NoPadding" sm md lg>
                    <Parallax strength={500} bgImage={yeti.attributes.Parallax.data[1].attributes.url && `http://localhost:1337${yeti.attributes.Parallax.data[1].attributes.url}`}>
                       
                      <div className="ParallaxFront2">

                        <p className="YetiDescription">Avec l'aide de Yeti Le Bro, vous allez pouvoir voler loin, très loin, très loin. <br/>
                          Accédez à de nouveaux niveaux, de nouvelles énigmes avec des compétences à améliorer. Apprenez, améliorez et surtout : amusez-vous !<br/>
                          Chaque niveau apporte sa propre stratégie et ses propres compétences,
                          soyez chanceux ou non, améliorez vos compétences pour vous faciliter la vie,
                          et faites vos meilleurs coups !
                        </p>

                        <Carousel className="carousel">
                          
                          <Carousel.Item className="Carousel">
                            <img
                              className="d-block ImgCar"
                              src={yeti.attributes.Carousels.data[0].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[0].attributes.url}`}
                              alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                          </Carousel.Item >

                            <Carousel.Item>
                              <img
                                className="d-block ImgCar"
                                src={yeti.attributes.Carousels.data[1].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[1].attributes.url}`}
                                alt="Second slide"
                              />
                            </Carousel.Item>

                            <Carousel.Item>
                              <img
                                className="d-block ImgCar"
                                src={yeti.attributes.Carousels.data[2].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[2].attributes.url}`}
                                alt="Third slide"
                              />
                            </Carousel.Item>

                            <Carousel.Item>
                              <img
                                className="d-block ImgCar"
                                src={yeti.attributes.Carousels.data[3].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[3].attributes.url}`}
                                alt="Fourth slide"
                              />
                            </Carousel.Item>
                        </Carousel>

                        
                      </div>
                    </Parallax>
                  </Col>
                  ))}
                </Row>
              </Container>

            
            
            {/* <Container fluid>
              <Row className="FlexDownload">

                {props.yeti.data && props.yeti.data.map((yeti, i) => (
                <Col key={i} sm="auto" md="auto" lg="auto" className="download">
                  <img className="DownloadButton" src={yeti.attributes.DownloadButton.data.attributes.url && `http://localhost:1337${yeti.attributes.DownloadButton.data.attributes.url}`}></img>
                    <h3>Téléchargez Yeti Smash dès maintenant !</h3>
                </Col>
                ))}

                <Col sm="auto" md="auto" lg="auto">
                    <button class="button-62" role="button"><span class="text">Télécharge le jeu dès maintenant</span></button>
                </Col>
              </Row>
            </Container> */}

            <Footer/>
          </div>
    </div>

  )
}

export default YetiSmash;