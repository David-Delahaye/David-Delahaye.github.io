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
        <div className="text-image">
          <div className="text">
            <h2>Design</h2>
            <p>
              I have learnt many different skills to help bring a project to
              fruition, from intuitive <strong> Web Design</strong> to the
              importance of accessibility and <strong>UI/UX </strong>. I have
              become proficient at front end development and have become a
              specialist in <strong>ReactJS</strong>. I am looking forward to
              continue progressing and look forward to the next steps of that
              journey.
            </p>
          </div>

          <div className="image">
            <Image src="/laptop.png" alt="Design" width="1287" height="747" />
          </div>
        </div>
        <div className="text-image  reverse">
          <div className="text">
            <h2>Development</h2>
            <p>
              My Goal for 2020/2021 is to begin working towards a full-time
              career in <strong>Web-Development</strong>. I spend my time
              building <strong>Responsive & Mobile Friendly</strong> projects
              with an emphasis on building efficient and{" "}
              <strong>Scalable</strong> codebases. working mainly with react
              front-end and NodeJS backend.
            </p>
          </div>
          <div className="image">
            <Image
              src="/mobile.png"
              alt="Development"
              width="1287"
              height="747"
            />
          </div>
        </div>
        <div className="text-image">
          <div className="text">
            <h2>Marketing</h2>
            <p>
              The key of getting any project off the ground is to be able to
              market it to the right audience, <strong>SEO</strong> is a key
              skill for this and one i take pride in.{" "}
              <strong>Digital Marketing</strong> is the future, with online
              tools, we are now able to track and analyse your audience and make
              use of <strong>Social-Media Campaigns</strong> to spread your
              project to a wider audience cost-effectively.
            </p>
          </div>

          <div className="image">
            <Image
              src="/marketing.png"
              alt="Marketing"
              width="1287"
              height="747"
            />
          </div>
        </div>

        <Link href="/work" scroll={false}>
          <button className="center">
            <strong>View My Work</strong>
          </button>
        </Link>
      </section>
    </main>
  );
}
