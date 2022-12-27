import "./footer.css";

export default function Footer() {
  return (
    <>
      <div class="bottom-page">
        <div class="first-part">
          <div class="left-column">
            <div class="collect-content">
              <div class="content">
                <p>“Sharing is caring”</p>
                <button>
                  Contribuer<a href=""></a>
                </button>
              </div>
              <div class="content">
                <img className="img-gdsc" src="./img-gdsc.svg" alt="" />
                <div class="social-img">
                  <img class="linkdin" src="./linkdin.svg" alt="" />
                  <img class="insta" src="./insta.svg" alt="" />
                  <img class="fb" src="./fb.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="right-column">
            <form class="content">
              <h2>Contact us</h2>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea name="" id="" placeholder="Message"></textarea>
              <button>
                Send<a href=""></a>
              </button>
            </form>
          </div>
        </div>

        <img class="second-part" src="./estin.svg" alt="" />
        <div class="third-part">
          <img src="./blur.svg" alt="" class="corner" />
          <p>Made by</p>
          <img src="./gdsc-tall.svg" alt="" class="img" />
        </div>
      </div>

      <div className="footer_mobile">
        <p>"SHARING IS CARING"</p>
        <button>Contribuer</button>
        <h2>Contact Us</h2>
        <form class="content">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea name="" id="" placeholder="Message"></textarea>
        </form>
        <button>
          Send<a href=""></a>
        </button>
        <img className="img-gdsc" src="./img-gdsc.svg" alt="" />
        <img class="second-part" src="./estin.svg" alt="" />
        <div class="third-part">
          <img src="./blur.svg" alt="" class="corner" />
          <p>Made by</p>
          <img src="./gdsc-tall.svg" alt="" class="img" />
        </div>
      </div>
    </>
  );
}
