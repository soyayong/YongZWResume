import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Badge,
  ProgressBar
} from "react-bootstrap";
import "./styles/contact.css";
import interest from "./data/interest.js";
import language from "./data/language.js";
import contacts from "./data/contact.js";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <Container>
        <h1>Interests & Languages</h1>
        <h6>What I like and can speak</h6>
        <Row className="contact-row">
          <Col lg="6" className="contact-col">
            <Carousel>
              {interest.map((interestCarousel, index) => (
                <Carousel.Item
                  key={index}
                  interval={3000}
                  className="contact-img"
                >
                  <img
                    className="d-block w-100"
                    src={interestCarousel.src}
                    alt={interestCarousel.alt}
                  />
                  <Carousel.Caption>
                    <h3>
                      <Badge variant="dark">
                        {interestCarousel.icon}
                        {"  "}
                        {interestCarousel.title}
                      </Badge>
                    </h3>
                    <p>
                      <Badge variant="dark">{interestCarousel.detail}</Badge>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col lg="6" className="contact-col">
            {language.map((languages, index) => (
              <div key={index}>
                <h3>{languages.title}</h3>
                <h6>{languages.detail}</h6>
                <ProgressBar
                  striped
                  variant="success"
                  now={languages.percentage}
                />
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Contact</h1>
            <h6>My social media link</h6>
            <Col className="contact-col">
              {contacts.map((contact, index) => (
                <a key={index} className="contact-a" href={contact.url}>
                  {contact.icon}
                </a>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
