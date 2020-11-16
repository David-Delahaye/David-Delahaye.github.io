import Image from "next/image";

export default function Technologies() {
  return (
    <div className="logos">
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/git.png"
          alt="git"
          width="1280"
          height="535"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/html.png"
          alt="HTML5"
          width="512"
          height="512"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/css.png"
          alt="CSS3"
          width="800"
          height="1128"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/js.png"
          alt="JS"
          width="500"
          height="500"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/react.png"
          alt="React"
          width="1200"
          height="848"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/sass.png"
          alt="Sass"
          width="820"
          height="400"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/node.png"
          alt="NodeJS"
          width="1280"
          height="344"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/mongo.png"
          alt="MongoDB"
          width="2226"
          height="601"
        />
      </div>
      <div className="logo-wrapper">
        <Image
          className="logo"
          src="/techs/psql.png"
          alt="PSQL"
          width="556"
          height="540"
        />
      </div>
    </div>
  );
}
