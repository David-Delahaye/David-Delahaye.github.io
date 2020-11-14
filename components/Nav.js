import SelectLink from "../components/Link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
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
  );
}
