import "../styles/globals.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Seo from "../components/seo";
import Page from "../components/page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav";
import * as gtag from "../lib/gtag";
import Router from "next/router";
Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Notice how we track pageview when route is changed

  return (
    <>
      <Seo
        title="David Delahaye"
        description="David Delahaye is Generally considered to be a very good guy"
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
