import React from "react";
import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Cp1 from "./components/Cp1";
import Cp2 from "./components/Cp2";
import Cs1 from "./components/Cs1";
import Cs2 from "./components/Cs2";
import Cs3 from "./components/Cs3";
import Footer from "./components/Footer";

function App() {
  const [change, setChange] = useState(1);
  const drop = (
    <div className="drop_div">
      <span>Cours</span>
      <span>TD</span>
      <span>Exams</span>
    </div>
  );

  const activate = (module) => {
    if (!module.active) {
      module.active = true;
    } else {
      module.active = false;
    }

    setChange((prevent) => prevent * -1);
  };

  return (
    <div className="App">
      <div className="blur1"></div>
      <div className="blur2"></div>
      <img src="/left1.svg" className="left1" />
      <img src="/left2.svg" className="left2" />
      <img src="/right.svg" className="right" />
      <Navbar />
      <Intro />
      <div className="CCP">
        <Cp1 activate={activate} drop={drop} />
        <Cp2 activate={activate} drop={drop} />
      </div>
      <div className="CCS">
        <Cs1 activate={activate} drop={drop} />
        <Cs2 activate={activate} drop={drop} />
        <Cs3 activate={activate} drop={drop} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
