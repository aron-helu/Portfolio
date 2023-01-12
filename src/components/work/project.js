import recentWork from '../recent-Work/recentWork';
import './project.css';

const Project = () => (
  <div className="project-container">
    {recentWork.map((item) => (
      <div className="book-container" key={item.id}>
        <div className="book">
          <div className="back" />
          <div className="page6">
            <div className="project-title">
              <h3>{item.project_title}</h3>
            </div>
            <div className="project-description">{item.description}</div>
            <div className="project-links">
              <a href={item.links[0]} alt="live" className="links">
                Live link
              </a>
              <a href={item.links[1]} alt="github-link" className="links">
                Source link
              </a>
            </div>
          </div>
          <div className="page5">
            <img
              src={item.picFile}
              alt={item.project_title}
              className="project-book"
            />
          </div>
          <div className="page4" />
          <div className="page3" />
          <div className="page1" />
          <div className="front">
            <h3>{item.project_title}</h3>
            <img
              src={item.picFile}
              alt={item.project_title}
              className="project-front-book"
            />
            <div className="project-description-mob">{item.description}</div>
            <ul className="project-skill">
              <li className="project-skill-lang">
                <p>{item.skill[0]}</p>
              </li>
              <li className="project-skill-lang">
                <p>{item.skill[1]}</p>
              </li>
              <li className="project-skill-lang">
                <p>{item.skill[2]}</p>
              </li>
              <li className="project-skill-lang">
                <p>{item.skill[3]}</p>
              </li>
            </ul>
            <div className="project-links-mob">
              <a href={item.links[0]} alt="live-link" className="links">
                Live link
              </a>
              <a href={item.links[1]} alt="github-link" className="links">
                Source link
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Project;
