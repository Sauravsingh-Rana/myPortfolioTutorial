import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

// Components
import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCarousal from "./components/my-carousal/mycarousal.components";
import TitleMessage from "./components/title-message/title-message.components";
import About from "./pages/about/about.component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      {/* About me section */}
      <div>
        <Parallax bgImage="./assets/img/parallex/download.jpg" strength={100}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
    </div>
  );
};

export default App;
