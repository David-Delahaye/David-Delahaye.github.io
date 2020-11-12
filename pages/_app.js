import "../styles/globals.css";
import Link from "next/link";
import Icons from "../components/icons";
import Seo from "../components/seo";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Seo
        title="David Delahaye"
        description="David Delahaye is Generally considered to be a very good buy"
      />

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
            <Link href="/" activeClassName="is-active" exact>
              Home
            </Link>{" "}
            /
            <Link href="/contact" activeClassName="is-active" exact>
              Contact
            </Link>{" "}
            /
            <Link href="/work" activeClassName="is-active" exact>
              Work
            </Link>
          </nav>
        </div>
      </header>

      <Component {...pageProps} />

      <footer>
        <Icons />
      </footer>
    </div>
  );
}

export default MyApp;
