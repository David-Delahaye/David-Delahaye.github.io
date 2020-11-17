import { motion } from "framer-motion";
import Image from "next/image";

export default function Icons() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="icons">
      <motion.a
        variants={item}
        href="https://github.com/David-Delahaye"
        className="social"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
        <Image src="/github.svg" alt="github" width="16" height="16" />
      </motion.a>
      <motion.a
        variants={item}
        href="https://www.linkedin.com/in/david-delahaye-5643381b8/"
        className="social"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
        <Image src="/linkedin.svg" alt="linkedIn" width="16" height="16" />
      </motion.a>
      <motion.a
        variants={item}
        href="https://twitter.com/DavDelahaye"
        className="social"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
        <Image src="/twitter.svg" alt="twitter" width="16" height="16" />
      </motion.a>
      <motion.a
        variants={item}
        href="https://drive.google.com/file/d/1Q8H-iQLuyZKyWx3NHJXiicH_xiWT-bpQ/view?usp=sharing"
        className="social"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
        <Image src="/cv.svg" alt="cv" width="16" height="16" />
      </motion.a>
    </div>
  );
}
