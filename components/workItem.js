export default function WorkItem(props) {
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
          <img
            src={props.image}
            alt={`responsive view of ${props.name}`}
            width="1857"
            height="900"
          />
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
