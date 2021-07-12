import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="David Delahaye - Blackpool Developer"
          content="David Delahaye is a Front-End Web-Developer currently working out of Blackpool, UK."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="nav-right">Get in Touch</div>
      </nav>
      <header>
        <div>
          <h1></h1>
          <p></p>
          <ul>
            <li>Reason1</li>
            <li>Reason2</li>
            <li>Reason3</li>
          </ul>
          <button>cta</button>
        </div>
        <div>
          <img src="./heroimg.jpg" />
        </div>
      </header>

      <main className={styles.main}>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
