import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import "./styles/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImage from "./images/about/ResumeFullBody.png";
import EmailIcon from "@material-ui/icons/Email";

function About() {
  return (
    <div className="section about" id="about">
      <h1>About</h1>
      <h6>A small introduction about myself</h6>
      <Row className="about-row">
        <Col lg={4} className="about-col text-center">
          <ScrollAnimation animateIn="animate__bounceInLeft">
            <Image
              className="about-image"
              src={aboutImage}
              thumbnail
              alt="aboutImage"
            />
          </ScrollAnimation>
        </Col>
        <Col lg={8} className="about-row">
          <ScrollAnimation animateIn="animate__bounceInRight">
            <h3>Yong Zong Wei</h3>
            <p>
              Design and develop full-stack projects for Shimano Components
              (Malaysia) Sdn.Bhd.
            </p>
            <p>
              I was born on 10 April 1993 in Kuala Pilah, Negeri Sembilan,
              Malaysia, and Bachelor of Mechatronic Engineering at University
              Malaysia Pahang, Pekan, Pahang in 2017 June. Currently, work as
              Shimano Process Control at Shimano Components (Malaysia) Sdn. Bhd.
              , Pekan Nenas, Pontian, Johor.
            </p>
            <p>
              Experienced LabVIEW full-stack developer with Microsoft SQL Server
              and data analyst with Qlik Sense in the current company from 2017
              August. Master skill in javascript, Html, LabVIEW, Qlik Sense, and
              Microsoft SQL Server that includes performance tuning, data
              structure, and dynamic SQL.
            </p>
            <p>
              Self-education starting from 2018 to improve developer skills such
              as SQL Server, Data Science, Javascript, and Qlik. Currently new
              in a web developer while using ReactJS and ReactNative.
            </p>
            <p>
              Lastly, the most important thing is to apply soft skills like
              self-motivation, teamwork, responsibility, problem-solving,
              communication, leadership, able to work under pressure, and time
              management in my life or working area.
            </p>
            <Button
              variant="dark"
              size="lg"
              target="_blank"
              href="mailto:soyayong@gmail.com"
              download
            >
              <EmailIcon fontSize="large" />
              Hire Me
            </Button>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default About;
