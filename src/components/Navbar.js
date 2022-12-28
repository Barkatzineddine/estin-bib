import "./Navbar.css";

export default function Navbar({hamburger,hamb_click}) {
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
      if (scrollTop === 0) {
       
        nav.style.transform="translateY(0)"
        nav.style.background = "#ffffff00";
      }
      
      lastScrollTop = scrollTop;
    })

  }, 1000);

  return (
    <>
      <nav className="Navbar">
        <img className="logo" src="/logo.svg" loading="lazy"/>
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
        <img className="hamburger" src="/hamburger.svg" alt="hamburger" onClick={()=>{hamb_click()}}/>
        <div className={hamburger?"mobile_nav_clicked":"mobile_nav"}>
          <div className="head_nav">
            <img className="logo_nav" src="/logo_nav.svg" loading="lazy" />
            <img className="close" src="/close.svg" loading="lazy" onClick={()=>{hamb_click()}}/>
          </div>
          <div className="main_nav">
            <span>
              <a href="#accueil">Accueil</a>
            </span>
            <span>
              <a href="#1CP">1CP</a>
            </span>
            <span>
              <a href="#2CP">2CP</a>
            </span>
            <span>
              <a href="#1CS">1CS</a>
            </span>
            <span>
              <a href="#2CS">2CS</a>
            </span>
            <span>
              <a href="#3CS">3CS</a>
            </span>
            <button>
              <a href="#">Contribuer</a>
            </button>
          </div>
        </div>

        <div className="mobile_nav_container"></div>
      </nav>
    </>
  );
}
