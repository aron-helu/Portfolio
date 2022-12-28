import './Skill.css';

const Skill = () => (
  <div className="skill-container">
    <div className="skill-title">
      <h3>SKILLS</h3>
      <ul className="skill-ul">
        <h4 className="skill-header">Frontend</h4>
        <li className="skill-li">
          <p data-value="80" className="skill-p">HTML5</p>
          <progress max="100" value="90" className="html5">
            <div className="progress-bar">
              <span className="skill-span">80%</span>
            </div>
          </progress>
        </li>
      </ul>
    </div>
  </div>
);

export default Skill;
