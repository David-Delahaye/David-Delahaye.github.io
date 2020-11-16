import Link from "next/link";
import Image from "next/image";
import Page from "../components/page";

export default function Home() {
  return (
    <main>
      <section>
        <h2>Who Am I?</h2>
        <em>
          I'm a front-end web developer based in the North-West currently living
          and working In Blackpool.
        </em>
      </section>

      <section>
        <div className="line">
          <p>
            <h3>Skills</h3>I Have been learning all I can about development
            since Autumn 2019, Along the way I have gained knowledge of many{" "}
            <strong>powerful technologies </strong>
            and have built a vast array of projects by myself and with a Team, I
            am looking forward to continue progressing and look forward to the
            next steps of that journey. A list of technologies i am already
            proficient with are as follows: -
          </p>

          <div>
            <Image src="/laptop.png" width="1287" height="747" />
          </div>
        </div>
        <div className="line">
          <p>
            <h3>Goals</h3>
            My Goal for 2020/2021 is to begin working towards a full-time career
            in <strong>web-development</strong> so i can spend more time towards
            progressing myself and becoming a more competent developer. If you
            have similar interests feel free to drop me a line on my contact
            page, or feel free to take a look at some of my{" "}
            <Link href="/work" scroll={false}>
              <a>
                <strong>past projects</strong>
              </a>
            </Link>
          </p>
          <div>
            <Image src="/mobile.png" width="1287" height="747" />
          </div>
        </div>
      </section>
    </main>
  );
}
