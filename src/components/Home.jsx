import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./styles/home.css";
import useTypewriter from "react-typewriter-hook";
import ScrollAnimation from "react-animate-on-scroll";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import EmailIcon from "@material-ui/icons/Email";
import homeImage from "./images/home/ResumeHaftBody.png";

const wordsDisplay = [
  "Database Developer",
  "Data Analyst",
  "Data Science",
  "Web Developer",
  "Full-stack LabVIEW Developer"
];
let index = 0;

function Home() {
  const [displayName, setDisplayName] = useState(
    "Full-stack LabVIEW Developer"
  );
  const intervalRef = useRef({});
  const name = useTypewriter(displayName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > wordsDisplay.length ? 0 : ++index;
      setDisplayName(wordsDisplay[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [displayName]);

  return (
    <section className="section home" id="home">
      <Row>
        <Col lg={6} className="home-col">
          <ScrollAnimation animateIn="animate__backInLeft">
            <h2>Hello and welcome to my webpage, my name is</h2>
            <h1>Yong Zong Wei</h1>
            <p>
              and I'm <span>{name}</span>
            </p>
            <Button
              className="button-home"
              variant="dark"
              size="lg"
              target="_blank"
              href="https://u.pcloud.link/publink/show?code=XZduG9XZFS6lHsiNudjjOnj1w5Un8zrCApQy"
              download
            >
              <PictureAsPdfIcon fontSize="large" />
              Resume
            </Button>
            <Button
              className="button-home "
              variant="secondary"
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
        <Col lg={6}>
          <img className="image-home" src={homeImage} alt="homeImage" />
        </Col>
      </Row>
    </section>
  );
}

export default Home;
