import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/Profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row className="pt-2.5 pb-5 align-items-center">
            {/* Profile pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                {/* description */}
                Hi there! Myself <strong> &nbsp;Sauravsingh Rana ,</strong>
                <br />A passionate programmer and data enthusiast, born and
                brought up in India.
                <br />
                In 2021, I will be successfully completing my Engineering with
                specialization in 'Electronics and Communication'.
                <br />
                Working with my fellow mates, my goal is always driven towards
                providing amazing experience with the best level of quality and
                if possible I'll try my best to be a helping hand.
                <br />
                Along with that, I also contribute in open source communities to
                help and explore new diversities. I love learning about new
                technologies, what problems are they solving and How can I use
                them to build better and scalable products.
                <br /> <br />
                {/* buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/16Bj4uMFBKEXAcI08jDpegBsg6ZlXQix9/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/ranasauravsingh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/ranasauravsingh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
