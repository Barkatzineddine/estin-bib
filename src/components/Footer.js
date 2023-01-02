import "./footer.css";

const Footer = () => {
  return (
    <>
      <div class="bottom-page">
        <div class="first-part">
          <div class="left-column">
            <div class="collect-content">
              <div class="content">
                <p>“Sharing is caring”</p>

                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSccoCvtx3B7JIcNkaw9HmhAslbD_AtH61yetyYeUkrLGrVdwA/viewform?usp=sf_link">
                    <button>
                    Contribuer
                   </button>
                </a>
              </div>
              <div class="content">
                <img
                  className="img-gdsc"
                  src="./img-gdsc.svg"
                  alt="img"
                  loading="lazy"
                />
                <div class="social-img">
                  <a href="https://www.linkedin.com/company/gdsc-estin/">
                    {" "}
                    <img
                      class="linkdin"
                      src="./linkdin.svg"
                      alt="img"
                      loading="lazy"
                    />{" "}
                  </a>
                  <a href="https://www.instagram.com/gdsc_estin/">
                    {" "}
                    <img
                      class="insta"
                      src="./insta.svg"
                      alt="img"
                      loading="lazy"
                    />{" "}
                  </a>
                  <a href="https://facebook.com/gdscestin">
                    {" "}
                    <img
                      class="fb"
                      src="./fb.svg"
                      alt="img"
                      loading="lazy"
                    />{" "}
                  </a>
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

        <img class="second-part" src="./estin.svg" alt="img" loading="lazy" />
        <div class="third-part">
          <p>Made by</p>
          <img src="./gdsc-tall.svg" alt="" class="img" loading="lazy" />
        </div>
      </div>

      <div className="footer_mobile">
        <p>"SHARING IS CARING"</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSccoCvtx3B7JIcNkaw9HmhAslbD_AtH61yetyYeUkrLGrVdwA/viewform?usp=sf_link"><button>Contribuer</button></a>
        <h2>Contact Us</h2>
        <form class="content">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea name="" id="" placeholder="Message"></textarea>
        </form>
        <button>
          Send<a href=""></a>
        </button>
        <img
          className="img-gdsc"
          src="./img-gdsc.svg"
          alt="img"
          loading="lazy"
        />
        <div class="social-img">
          <a href="https://www.linkedin.com/company/gdsc-estin/">
            {" "}
            <img
              class="linkdin"
              src="./linkdin.svg"
              alt="img"
              loading="lazy"
            />{" "}
          </a>
          <a href="https://www.instagram.com/gdsc_estin/">
            {" "}
            <img
              class="insta"
              src="./insta.svg"
              alt="img"
              loading="lazy"
            />{" "}
          </a>
          <a href="https://facebook.com/gdscestin">
            {" "}
            <img class="fb" src="./fb.svg" alt="img" loading="lazy" />{" "}
          </a>
        </div>
        <img class="second-part" src="./estin.svg" alt="img" loading="lazy" />
        <div class="third-part">
          <p>Made by</p>
          <img src="./gdsc-tall.svg" alt="" class="img" loading="lazy" />
        </div>
      </div>
    </>
  );
};
export default Footer;
