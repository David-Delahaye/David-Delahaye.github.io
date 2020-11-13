import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Page({ children }) {
  if (typeof window !== "undefined") {
    const bar = Math.floor((window.innerHeight / 100) * 60);
    console.log(bar);
    if (window.scrollY > bar) {
      console.log(window.scrollY, bar);
      window.scrollTo(0, bar);
      console.log(window.scrollY);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
