import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./styles/home.css";
import useTypewriter from "react-typewriter-hook";
import ScrollAnimation from "react-animate-on-scroll";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import homeImage from "./images/home/home.png";
import pdf1 from "./file/pdf1.pdf";
import pdf2 from "./file/pdf2.pdf";

//Update wordsDisplay data
const wordsDisplay = [
  "Yo, did you see that?",
  "Fine, I' ll show you again.",
  "1",
  "2",
  "3",
  "事不过三，bye."
];
let index = 0;

function Home() {
  const [displayName, setDisplayName] = useState("Welcome to my webpage");
  const intervalRef = useRef({});
  const name = useTypewriter(displayName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = Math.floor(Math.random() * wordsDisplay.length);
      // index = index > 2 ? 0 : ++index;
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
            <h2>Hello, my name is</h2>
            <h1>Name</h1>
            <p>
              and I'm <span>{name}</span>
            </p>
            <p>
              <span img="Pick Me" /> 👇👇👇 Pick me 👇👇👇
            </p>
            <Button
              className="button-home"
              variant="dark"
              size="lg"
              target="_blank"
              href={pdf1}
              download
            >
              <PictureAsPdfIcon fontSize="large" />
              Button 1
            </Button>
            <Button
              className="button-home "
              variant="secondary"
              size="lg"
              target="_blank"
              href={pdf2}
              download
            >
              <PictureAsPdfIcon fontSize="large" />
              Button 2
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
