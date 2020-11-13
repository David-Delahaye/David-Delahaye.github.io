import Icons from "../components/icons";
import Image from "next/image";
import SelectLink from "../components/Link";

export default function Header() {
  return (
    <header>
      <div className="splash">
        <div className="splash-text">
          <h1>David Delahaye</h1>
          <h2>Front-End Developer</h2>
          <h2>
            <img className="icon" src="/location.svg" /> North West, UK
          </h2>
          <Icons />
        </div>
        <Image
          className="splash-image"
          src="/splash2.jpg"
          alt="David Delahaye"
          width="5304"
          height="7952"
        />
      </div>
      <div className="bar">
        <nav className="nav">
          <SelectLink href="/" className="is-active">
            <a>Home</a>
          </SelectLink>{" "}
          /
          <SelectLink href="/contact" className="is-active">
            <a>Contact</a>
          </SelectLink>{" "}
          /
          <SelectLink href="/work" className="is-active">
            <a>Work</a>
          </SelectLink>
        </nav>
      </div>
    </header>
  );
}
