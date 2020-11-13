import Icons from "../components/icons";
import SelectLink from "../components/Link";

export default function Header() {
  return (
    <header>
      <div className="splash">
        <h1>David Delahaye</h1>
        <h2>Front-End Developer</h2>
        <h2>
          <i class="fas fa-map-marker-alt"></i> North West, UK
        </h2>
        <Icons />
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
