import React from "react";
import {Row, Col, Container, Carousel} from 'react-bootstrap';

import './YetiSmash.css'

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
    if (elementTop > windowHeight - elementVisible) {
      reveals[i].classList.remove("active");
    }
  }

}
window.addEventListener("scroll", reveal);

function YetiSmash(props){
  return(
      <div>
          <div className="YetiMainPage">

            {/* first page */}

            <h2 className="titleYetiSmash">Qu'est ce que Yeti Smash ?</h2>
          
            <p className="YetiDescription reveal">
              Avec l'aide de Yeti Le Bro, vous allez pouvoir voler loin, très loin, très loin. <br/><br/>
              Accédez à de nouveaux niveaux, de nouvelles énigmes avec des compétences à améliorer. Apprenez, améliorez et surtout : amusez-vous !<br/><br/>
              Chaque niveau apporte sa propre stratégie et ses propres compétences,
              soyez chanceux ou non, améliorez vos compétences pour vous faciliter la vie,
              et faites vos meilleurs coups !
            </p>

              <Container fluid>
                  <Row>
                    {props.yeti.data && props.yeti.data.map((yeti, i) => (
                    <Col key={i} className="NoPadding reveal" >
                        
                      <Carousel className="carousel " variant="dark">
                        
                        <Carousel.Item>
                          <img
                            className="d-block ImgCar"
                            src={yeti.attributes.Carousels.data[0].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[0].attributes.url}`}
                            alt="Mapapa Carousel images"
                          />
                        </Carousel.Item >

                          <Carousel.Item>
                            <img
                              className="d-block ImgCar"
                              src={yeti.attributes.Carousels.data[1].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[1].attributes.url}`}
                              alt="Mapapa Carousel images"
                            />
                          </Carousel.Item>

                          <Carousel.Item>
                            <img
                              className="d-block ImgCar"
                              src={yeti.attributes.Carousels.data[2].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[2].attributes.url}`}
                              alt="Mapapa Carousel images"
                            />
                          </Carousel.Item>

                          <Carousel.Item>
                            <img
                              className="d-block ImgCar"
                              src={yeti.attributes.Carousels.data[3].attributes.url && `http://localhost:1337${yeti.attributes.Carousels.data[3].attributes.url}`}
                              alt="Mapapa Carousel images"
                            />
                          </Carousel.Item>
                      </Carousel>

                      <button className="DownloadButton">
                        <a href="https://play.google.com/store/apps/details?id=com.mapapastudio.yetismash&gl=FR" rel="noreferrer" target="_blank">Télécharge le jeu gratuitement !</a>
                      </button>
                  </Col>
                  ))}
                </Row>
              </Container>
          </div>
    </div>

  )
}

export default YetiSmash;