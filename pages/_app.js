import "../styles/globals.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Seo from "../components/seo";
import Page from "../components/page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="siteWrapper">
      <Header />

      <Seo
        title="David Delahaye"
        description="David Delahaye is Generally considered to be a very good guy"
      />

      <AnimatePresence exitBeforeEnter>
        <Page key={router.route}>
          <Component {...pageProps} />
        </Page>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default MyApp;
