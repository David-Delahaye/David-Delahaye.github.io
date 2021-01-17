import "../styles/globals.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Seo from "../components/seo";
import Page from "../components/page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Seo
        title="David Delahaye"
        description="David Delahaye is a front-end developer based in the North West"
      />

      <Header />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Page key={router.route}>
          <Component {...pageProps} />
        </Page>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
