import React, { Component } from "react";
import {Row, Col, Container, Carousel} from 'react-bootstrap';
import { Parallax} from "react-parallax"

import Bar_menu from "../Bar_menu/Bar_menu"
import Footer from "../presentation/Footer"

import './YetiSmash.css'


const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";



function YetiSmash(props){
  return(
            <div>
            <Bar_menu/>
          <div className="YetiMainPage">
                <Container fluid>
                  <Row>
                    <Col sm md lg>
                      <Parallax bgImage={image1} strength={500}>
                        <div style={{ height: 500 }}></div>
                      </Parallax>
                    </Col>
                  </Row>
                </Container>

                <h2>Qu'est ce que Yeti Smash ?</h2>
                
                <p className="YetiDescription">In his tractibus navigerum nusquam visitur
                  flumen sed in locis plurimis aquae suapte natura 
                  calentes emergunt ad usus aptae multiplicium medelarum. verum has 
                  quoque regiones pari sorte Pompeius Iudaeis domitis et Hierosolymis captis in 
                  provinciae speciem delata iuris dictione formavit.</p>

                <Carousel>
                  {props.yeti.data && props.yeti.data.map((yeti, i) => (
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100"
                      src={yeti.attributes.Carousels.data[0].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[0].attributes.url}`}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  ))}
                </Carousel>

                <h3 className="download">Téléchargez Yeti Smash dès maintenant !</h3>

                <Footer/>
              </div>
        </div>

  )
}

export default YetiSmash;