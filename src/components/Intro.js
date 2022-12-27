import "./Intro.css";
export default function Intro() {
  return (
    <div id="accueil" className="intro">
      <h1>Lorem ipsum yaaaaw</h1>
      <p>
        {" "}
        “ The greatest glory in living lies not in never falling, but in rising
        every time we fall”
      </p>
      <img className="bib" src="/estinBib.svg" />
      <img src="/estinBib_mobile.svg" className="bib_mobile" />
      <img className="vecteur" src="/vecteur.svg" />
    </div>
  );
}
