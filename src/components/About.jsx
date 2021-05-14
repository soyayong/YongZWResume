import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImage from "./images/about/about.png";

function About() {
  return (
    <div className="section about" id="about">
      <h1>About</h1>
      <Row className="about-row">
        <Col lg={4} className="about-col text-center">
          <ScrollAnimation
            animateIn="animate__bounceInLeft"
            // animateOut="animate__bounceOutLeft"
          >
            <Image
              className="about-image"
              src={aboutImage}
              thumbnail
              alt="aboutImage"
            />
          </ScrollAnimation>
        </Col>
        <Col lg={8} className="about-row">
          <ScrollAnimation
            animateIn="animate__bounceInRight"
            // animateOut="animate__bounceOutRight"
          >
            <h3>12345678</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              placeat inventore rerum tempore cupiditate, amet adipisci aut eius
              facilis quisquam magni ratione maxime officiis earum blanditiis
              magnam illum obcaecati vero? Odit ipsa facilis officiis fuga
              voluptate similique sunt exercitationem voluptatibus, illo et
              fugit eveniet provident quo atque, nesciunt explicabo tenetur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              placeat inventore rerum tempore cupiditate, amet adipisci aut eius
              facilis quisquam magni ratione maxime officiis earum blanditiis
              magnam illum obcaecati vero? Odit ipsa facilis officiis fuga
              voluptate similique sunt exercitationem voluptatibus, illo et
              fugit eveniet provident quo atque, nesciunt explicabo tenetur!
            </p>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default About;
