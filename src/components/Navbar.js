import "./Navbar.css";

import { useState } from "react";

const Navbar = ()=> {
  const [hamburger, setHamburger] = useState(false);
  var lastScrollTop = 0;
  setTimeout(() => {
    const nav = document.querySelector(".Navbar");


    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
       
        nav.style.transform="translateY(-100%)";
      } else {
       
       nav.style.transform="translateY(0)"

       nav.style.background =
          "linear-gradient(to right,rgba(122, 152, 220, 0.565) 10% ,rgb(56, 103, 214,1)  )";
          
      }
      if (scrollTop <= 20) {
       
        nav.style.transform="translateY(0)"
        nav.style.background = "#ffffff00";
        
      }
      
      lastScrollTop = scrollTop;
    })

  }, 1000);

  return (
    <>
      <nav className="Navbar">
        <img className="logo" src="/logo.png" loading="lazy"/>
        <div className="navbarRight">
          <span className="navSpan ">
            <a href="#accueil">Accueil</a>
          </span>
          <span className="navSpan ">
            <a href="#1CP">1CP</a>
          </span>
          <span className="navSpan ">
            <a href="#2CP">2CP</a>
          </span>
          <span className="navSpan ">
            <a href="#1CS">1CS</a>
          </span>
          <span className="navSpan ">
            <a href="#2CS">2CS</a>
          </span>
          <span className="navSpan ">
            <a href="#3CS">3CS</a>
          </span>
          <button className="contribuer">
            <a href="">Contribuer</a>
          </button>
        </div>
        <img className="hamburger" src="/hamburger.svg" alt="hamburger" onClick={()=>{setHamburger(true)}}/>
        <div className={hamburger?"mobile_nav_clicked":"mobile_nav"}>
          <div className="head_nav">
            <img className="logo_nav" src="/logo_nav.png" loading="lazy" />
            <img className="close" src="/close.svg" loading="lazy" onClick={()=>{setHamburger(false)}}/>
          </div>
          <div className="main_nav">
            <span>
              <a href="#accueil" onClick={()=>{setHamburger(false)}}>Accueil</a>
            </span>
            <span>
              <a href="#1CP" onClick={()=>{setHamburger(false)}}>1CP</a>
            </span>
            <span>
              <a href="#2CP" onClick={()=>{setHamburger(false)}}>2CP</a>
            </span>
            <span>
              <a href="#1CS" onClick={()=>{setHamburger(false)}}>1CS</a>
            </span>
            <span>
              <a href="#2CS" onClick={()=>{setHamburger(false)}}>2CS</a>
            </span>
            <span>
              <a href="#3CS" onClick={()=>{setHamburger(false)}}>3CS</a>
            </span>
            <button>
              <a href="#" onClick={()=>{setHamburger(false)}}>Contribuer</a>
            </button>
          </div>
        </div>

        <div className="mobile_nav_container"></div>
      </nav>
    </>
  );
}
export default Navbar;