

import "./App.css";
import { useState } from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import main_data from './components/data.json';
import Year from "./components/year";

function App() {

  const[change,setChange]= useState(1)

  const drop = (
    <div className="drop_div">
      <span>Cours</span>
      <span>TD</span>
      <span>Exams</span>
    </div>
  );
  
  const activate=(module)=>{
    if(!module.active){
      module.active=true
    }else{
      module.active=false
    }

    setChange((prevent) => prevent * -1);

  }

 


  
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
     
   
        <Year activate={activate} drop={drop} data={main_data[0]} />
        <Year activate={activate} drop={drop} data={main_data[1]} />
      </div>
      <div className="CCS">

        <Year activate={activate} drop={drop} data={main_data[2]} />
        <Year activate={activate} drop={drop} data={main_data[3]} />
        <Year activate={activate} drop={drop} data={main_data[4]} />

      </div>
        
     
      <Footer />
    </div>
  );
}

export default App;
