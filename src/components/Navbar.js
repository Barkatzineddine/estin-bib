import "./Navbar.css";

export default function Navbar() {
  var lastScrollTop = 0;
  setTimeout(() => {
    const nav = document.querySelector(".Navbar");
    const mobile_nav = document.querySelector(".mobile_nav");
    const mobile_nav_container = document.querySelector(
      ".mobile_nav_container"
    );
    const hamburger = document.querySelector(".hamburger");
    const close = document.querySelector(".close");
    const mobile_nav_spans = document.querySelectorAll(".main_nav span");

    window.addEventListener("scroll", function () {
      var scrollTop =
        window.pageYOffset || this.document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        nav.style.top = "-80px";
      } else {
        nav.style.top = "0";
        nav.style.background =
          "linear-gradient(to right,rgba(122, 152, 220, 0.565) 10% ,rgb(56, 103, 214,1)  )";
      }
      if (scrollTop === 0) {
        nav.style.top = "0";
        nav.style.background = "#ffffff00";
      }
      console.log(nav.style.backgroundColor);
      lastScrollTop = scrollTop;
    });

    hamburger.addEventListener("click", function () {
      mobile_nav.style.top = "0px";
      mobile_nav_container.style.display = "block";

      document.body.style.overflowY = "hidden";
    });

    close.addEventListener("click", function () {
      mobile_nav.style.top = "-90vh";
      mobile_nav_container.style.display = "none";

      document.body.style.overflowY = "scroll";
    });
    for (let i = 0; i < 6; i++) {
      mobile_nav_spans[i].addEventListener("click", function () {
        mobile_nav.style.top = "-90vh";
        mobile_nav_container.style.display = "none";

        document.body.style.overflowY = "scroll";
      });
    }
  }, 1000);

  return (
    <>
      <nav className="Navbar">
        <img className="logo" src="/logo.svg" />
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
        <img className="hamburger" src="/hamburger.svg" alt="hamburger" />
        <div className="mobile_nav">
          <div className="head_nav">
            <img className="logo_nav" src="/logo_nav.svg" />
            <img className="close" src="/close.svg" />
          </div>
          <div className="main_nav">
            <span>
              <a href="#accueil">Accueil</a>
            </span>
            <span>
              <a href="#1CP">1CP</a>
            </span>
            <span>
              <a href="#1CP">2CP</a>
            </span>
            <span>
              <a href="#1CP">1CS</a>
            </span>
            <span>
              <a href="#1CP">2CS</a>
            </span>
            <span>
              <a href="#1CP">3CS</a>
            </span>
            <button>
              <a href="">Contribuer</a>
            </button>
          </div>
        </div>

        <div className="mobile_nav_container"></div>
      </nav>
    </>
  );
}
