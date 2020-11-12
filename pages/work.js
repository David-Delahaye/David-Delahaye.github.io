function Work(props) {
  let technologies = props.techs.map((e, i) => {
    return <p key={i}>{e}</p>;
  });
  return (
    <section>
      <div className="work">
        <div className="half">
          <h3>
            {props.name} - {props.year}
          </h3>
          <img src={props.image} alt="responsive site" />
          <h4>Technologies utilized</h4>
          <div className="tags">{props.techs ? technologies : ""}</div>
        </div>
        <div className="half">
          <h4>Summary</h4>
          <p>{props.description || "N/A"}</p>
          <h4>Problems</h4>
          <p>{props.problem || "N/A"}</p>
          <h4>Solutions</h4>
          <p>{props.solution || "N/A"}</p>
          <div className="links">
            <a href={props.code} target="_blank" rel="noopener noreferrer">
              <i class="fas fa-code"></i> View Code
            </a>
            <a href={props.live} target="_blank" rel="noopener noreferrer">
              {" "}
              <i class="fas fa-desktop"></i> View Live Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Works() {
  return (
    <main>
      <section>
        <h2>Work</h2>
        <em>
          These are a selection of my most recent Work, The ones that currently
          make me most proud.
        </em>
      </section>
      <Work
        name="UK Houseplants"
        live="https://uk-houseplants.herokuapp.com/"
        year="2020"
        code="https://github.com/David-Delahaye/UKH"
        image="/UKHResponsive.png"
        techs={["ReactJS", "Redux", "Sass", "NodeJS", "Postgres", "PassportJS"]}
        description="UKH is my first larger scale full stack CRUD Application. Users can create an account, add posts about their favourite plants, care tips and where to purchase them from. Other users can then comment on these posts leaving a score. It is meant as a hub for houseplant loving enthusiasts"
        problem="I started this project without much of an idea of what it would be about, adding little by little. But after a week of work i had made things to verbose that i had to scrap the project and start afresh."
        solution="When restarting, i planned out on paper all my project features, and had a clear Design structure for both the back-end API & database management, and created a coherent front-end design."
      />
      <Work
        name="Maze Game"
        year="2020"
        live="https://david-delahaye.github.io/Maze-Game"
        code="https://github.com/David-Delahaye/Maze-Game"
        image="/MGResponsive.png"
        techs={["JS", "HTML", "Sass"]}
        description="This Project was built as a fully responsive game to play on any device with a browser. It was made using the canvas API and stores user scores in local storage"
        problem="While building this project, i realised that it would only run on some browsers, and did not work on my girlfriends phone when tested."
        solution="I discovered this was due to safari not supporting ES6 Class syntax, and learnt about using compilers such as babel to make my project browser compatible."
      />
      <Work
        name="Online Library"
        year="2020"
        live="https://david-delahaye.github.io/Online-Library/"
        code="https://github.com/David-Delahaye/Online-Library"
        image="/OLResponsive.png"
        techs={["JS", "HTML", "Sass"]}
        description=" Online Library is an open source project utilizing the google books api to search for and gain information about books online, all books also have link to buy or view for free."
        problem="When testing out this application, many of the results were not relevant to the search query or were not the most obvious results."
        solution="I scoured through the GoogleBooks API docs to find that you could limit results by their status as an e-book, this much improved the results of searches to more relevant titles"
      />
    </main>
  );
}
