import "../styles/globals.css";
import SelectLink from "../components/Link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Icons from "../components/icons";
import Seo from "../components/seo";
import Page from "../components/page";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Seo
        title="David Delahaye"
        description="David Delahaye is Generally considered to be a very good guy"
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

      <AnimatePresence exitBeforeEnter>
        <Page key={router.route}>
          <Component {...pageProps} />
        </Page>
      </AnimatePresence>

      <footer>
        <Icons />
      </footer>
    </motion.div>
  );
}

export default MyApp;
