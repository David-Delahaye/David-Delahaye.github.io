import Link from "next/link";
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
        <h3>Skills</h3>
        <div className="line">
          <p>
            I Have been learning all I can about development since Autumn 2019,
            Along the way I have gained knowledge of many different technologies
            and have built a vast array of projects by myself and with a Team, I
            am looking forward to continue progressing and look forward to the
            next steps of that journey. A list of technologies i am already
            proficient with are as follows: -
          </p>
          <div className="logos">
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/git.png"
                alt="git"
                width="1280"
                height="535"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/html.png"
                alt="HTML5"
                width="512"
                height="512"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/css.png"
                alt="CSS3"
                width="800"
                height="1128"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/js.png"
                alt="JS"
                width="500"
                height="500"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/react.png"
                alt="React"
                width="1200"
                height="848"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/sass.png"
                alt="Sass"
                width="820"
                height="400"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/node.png"
                alt="NodeJS"
                width="1280"
                height="344"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/mongo.png"
                alt="MongoDB"
                width="2226"
                height="601"
              />
            </div>
            <div className="logo-wrapper">
              <img
                className="logo"
                src="/techs/psql.png"
                alt="PSQL"
                width="556"
                height="540"
              />
            </div>
          </div>
        </div>
        <h3>Goals</h3>
        <p>
          My Goal for 2020/2021 is to begin working towards a full-time career
          in web-development so i can spend more time towards progressing myself
          and becoming a more competent developer. If you have similar interests
          feel free to drop me a line on my contact page, or feel free to take a
          look at past projects.
        </p>
        <Link href="/work">
          <button>See my Work</button>
        </Link>
      </section>
    </main>
  );
}
