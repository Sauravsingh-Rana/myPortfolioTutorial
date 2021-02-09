import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";

// Components
import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCarousal from "./components/my-carousal/mycarousal.components";
import TitleMessage from "./components/title-message/title-message.components";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import { particlesOptions } from "./particlesOptions";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      {/* About me section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/download.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* skills section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
      {/* contact section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
      </div>
      <div>
        <hr />
        <FooterPanel />
      </div>
    </div>
  );
};

export default App;
