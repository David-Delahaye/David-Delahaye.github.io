// Design inspi https://www.cassie.codes/
// https://www.behance.net/gallery/118925541/UI-Lidmo?tracking_source=search_projects_recommended%7Cweb%20developer

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
        <div className="nav-right">cta1</div>
      </nav>
      <header>
        <div>
          <h1>clean, concise, front end code</h1>
          <p>why am i better than competition</p>
          <ul>
            <li>Reason1</li>
            <li>Reason2</li>
            <li>Reason3</li>
          </ul>
          <button>cta1</button>
        </div>
        <div>
          <img src="./heroimg.jpg" />
        </div>
      </header>

      <main className={styles.main}>
        <section>
          <div>
            <img src="dgfggdsf.jpg" />
          </div>

          <div>
            <h4>Unique</h4>
            <h2>Unique selling point catch</h2>
            <p>What things do i do to produce good work for the client</p>
            <ul>
              <li>Thing1</li>
              <li>Thing2</li>
              <li>Thing3</li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h4>Services</h4>
            <h2>What services catch</h2>
            <p>Description of services I offer</p>
            <div className="table">
              {/* // ~ 8 of these */}
              <div>
                <img src="jkodadf.com" />
                <h5>Service name</h5>
                <p>Service description</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h4>Sales/design process</h4>
            <h2>What can be expected going forward</h2>
            <p>description of my attitude towards design process</p>
            <div className="process">
              {/* // ~ 4 of these */}
              <div>
                <svg>circle with step number</svg>
                <h5>step name</h5>
                <p>step description</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h4>case studies</h4>
            <h2>work i'm proud of</h2>
            <div className="carousel">
              {/* // ~ 6-10 of these */}
              <div>
                <img src="fkfskf.com" />
                <ul>
                  <li>tag1</li>
                  <li>tag2</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>Clients/Experience</section>
        <section>Testamonials</section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://david-delahaye.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="David Delahaye"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
