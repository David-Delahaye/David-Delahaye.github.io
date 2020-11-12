import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <h2>Who Am I?</h2>
          <em>
            I'm a front-end web developer based in the North-West currently
            living and working In Blackpool.
          </em>
        </section>

        <section>
          <h3>Skills</h3>
          <div className="line">
            <p>
              I Have been learning all I can about development since Autumn
              2019, Along the way I have gained knowledge of many different
              technologies and have built a vast array of projects by myself and
              with a Team, I am looking forward to continue progressing and look
              forward to the next steps of that journey. A list of technologies
              i am already proficient with are as follows: -
            </p>
            <div className="logos">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"
                alt="git"
              />
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML5"
              />
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
                alt="CSS3"
              />
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JS"
              />
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt="React"
              />
              <img
                className="logo"
                src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"
                alt="Sass"
              />
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/1280px-Node.js_logo_2015.svg.png"
                alt="NodeJS"
              />
              <img
                className="logo"
                src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"
                alt="MongoDB"
              />
              <img
                className="logo"
                src="https://wiki.postgresql.org/images/thumb/a/a4/PostgreSQL_logo.3colors.svg/540px-PostgreSQL_logo.3colors.svg.png"
                alt="PSQL"
              />
            </div>
          </div>
          <h3>Goals</h3>
          <p>
            My Goal for 2020/2021 is to begin working towards a full-time career
            in web-development so i can spend more time towards progressing
            myself and becoming a more competent developer. If you have similar
            interests feel free to drop me a line on my contact page, or feel
            free to take a look at past projects.
          </p>
          <Link href="/work">
            <button>See my Work</button>
          </Link>
        </section>
      </main>
    </div>
  );
}
