import React from "react";

// Components
import MyNavbar from "./components/my-navbar/mynavbar.components";
import MyCarousal from "./components/my-carousal/mycarousal.components";
import TitleMessage from "./components/title-message/title-message.components";

import "./App.css";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
    </div>
  );
};

export default App;
