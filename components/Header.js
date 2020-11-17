import Icons from "../components/icons";
import Image from "next/image";
import ScrollDown from "../components/ScrollDown";
import SelectLink from "../components/Link";
import Nav from "../components/Nav";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [loaded, setLoaded] = useState("");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.header variants={container} initial="hidden" animate="show">
      <div className="splash">
        <motion.div className="splash-text">
          <motion.h1 key="title" variants={item}>
            David Delahaye
          </motion.h1>

          <motion.h2 key="job" variants={item}>
            Front-End Developer
          </motion.h2>

          <motion.h2 key="location" variants={item}>
            <Image
              className="icon"
              src="/location.svg"
              alt="blackpool"
              width="25"
              height="25"
            />{" "}
            North West, UK
          </motion.h2>
          <Icons />
        </motion.div>
        <div className="splash-image-wrapper">
          <Image
            className={`splash-image ${loaded}`}
            onLoad={() => {
              console.log("loaded");
              setLoaded("loaded");
            }}
            src="/splash2.jpg"
            alt="David Delahaye"
            width="5304"
            height="7952"
            layout="responsive"
          />
        </div>
      </div>
      <ScrollDown />
    </motion.header>
  );
}
