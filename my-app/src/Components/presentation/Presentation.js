import React from "react";
import { Row, Col, Container} from 'react-bootstrap';
import {UserCard} from 'react-ui-cards';

import './presentation.css'

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

function Home(props) {

  return (
    <div>
        {/* welcome part */}
      <div className="MainPage">

              <h1 className="title">
                Mapapa Studio
              </h1>



              <p className="presentation reveal">
                Mapapa studio à été fondé par trois étudiants lors d'une GameJam organisé par Google en 2022.<br/>
                Ces étudiants font partis du Gaming Campus à lyon et ont pour but de créer des jeux fun à jouer et drôles<br/>

              </p>



          {/* Crew presentation */}

        
        <Container fluid className="reveal">
          
          <h2 className="CrewPresentation">Présentation de l'équipe</h2>
          
          <Row className="Profile">
            {props.profiles.data && props.profiles.data.map((profiles, i) => (
            <Col sm="auto" md="auto" lg="auto" key={i} >

              {/* put className="Profile" in Col if you've a problem */}
                <div>

                    <UserCard
                        className="Card"
                        float
                        header={profiles.attributes.Cover.data.attributes.url && `http://localhost:1337${profiles.attributes.Cover.data.attributes.url}`}
                        avatar={profiles.attributes.Profiles.data.attributes.url && `http://localhost:1337${profiles.attributes.Profiles.data.attributes.url}`}
                        name={profiles.attributes.Name}
                        positionName={profiles.attributes.Description}
                    />
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