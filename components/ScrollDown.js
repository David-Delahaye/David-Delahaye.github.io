import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ScrollDown() {
  return (
    <motion.div
      className="scroll"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={() => {
        if (typeof window !== "undefined") {
          console.log("here");
          window.scroll({
            top: window.innerHeight - 50,
            left: 0,
            behavior: "smooth",
          });
        }
      }}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="scroll-arrow"
        viewBox="0 0 512 512"
      >
        <path
          fill="white"
          d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"
        ></path>
      </svg>
      <div className="scroll-text">Scroll Down</div>
    </motion.div>
  );
}
