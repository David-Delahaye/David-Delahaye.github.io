import Icons from "../components/icons";
import ScrollDown from "../components/ScrollDown";
import SelectLink from "../components/Link";
import Nav from "../components/Nav";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header>
      <div className="splash">
        <motion.div className="splash-text">
          <h1>David Delahaye</h1>
          <h2>Front-End Developer</h2>
          <h2>
            <img className="icon" src="/location.svg" /> North West, UK
          </h2>
          <Icons />
        </motion.div>
        <div className="splash-image-wrapper">
          <img
            className="splash-image"
            src="/splash2.jpg"
            alt="David Delahaye"
          />
        </div>
      </div>
      <Nav />
      <ScrollDown />
    </header>
  );
}
