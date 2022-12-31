

import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import main_data from './components/data.json';
import Year from "./components/year";

function App() {

  

 


  
  return (
    <div className="App">
      <div className="blur1"></div>
      <div className="blur2"></div>
      <img src="/left1.svg" className="left1" loading="lazy"/>
      <img src="/left2.svg" className="left2" loading="lazy"/>
      <img src="/right.svg" className="right" loading="lazy"/>
      <Navbar />
      <Intro />
      <div className="CCP">
     
   
        <Year   data={main_data[0]} />
        <Year   data={main_data[1]} />
      </div>
      <div className="CCS">

        <Year  data={main_data[2]} />
        <Year   data={main_data[3]} />
        <Year   data={main_data[4]} />

      </div>
        
     
      <Footer />
    </div>
  );
}

export default App;
