import SelectLink from "../components/Link";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

function useActive() {
  const [active, setActive] = useState(false);
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.current > window.innerHeight - 200) {
        setActive("active");
      } else {
        setActive("inactive");
      }
    });
  }, [active]);
  return [active];
}

export default function Nav() {
  const [active] = useActive();

  return (
    <div className={`bar ${active}`}>
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
  return "";
}
