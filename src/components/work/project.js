import recentWork from '../recent-Work/recentWork';
import './project.css';

const Project = () => (
  <div className="project-container">
    {recentWork.map((item) => (
      <div className="multi-post" key={item.id}>
        <div className="text-work">
          <div className="text-project-content">
            <h2>{item.project_title}</h2>
            <p className="text-project-description">{item.description}</p>
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
            </ul>
            <div>
              <a href={item.liveLink} alt="aron" >Hello</a>
            </div>
          </div>
        </div>
        <div className="screen-container">
          <div className="screen">
            <img className="image-placeholder" src={item.picFile} alt="hello" />
          </div>
        </div>

      </div>
    ))}
  </div>
);

export default Project;
