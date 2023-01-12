import './Skill.css';

const Skill = () => (
  <section className="skill-container">
    <div className="skill-title">
      <h3>SKILLS</h3>
      <div className="skill-ul">
        <div className="skill-lang">
          <h4 className="skill-header">Frontend</h4>
          <div className="skill-li">
            <div data-value="80" className="skill-p">HTML5</div>
            <progress max="100" value="90" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">90%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">CSS</div>
            <progress max="100" value="85" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">85%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">Bootstrap</div>
            <progress max="100" value="65" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">65%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">React</div>
            <progress max="100" value="80" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">80%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">JavaScript</div>
            <progress max="100" value="80" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">80%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">JQuery</div>
            <progress max="100" value="65" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">65%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">Angular</div>
            <progress max="100" value="55" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">55%</div>
          </div>
        </div>
        <div className="skill-lang">
          <h4 className="skill-header">Backend</h4>
          <div className="skill-li">
            <div data-value="80" className="skill-p">Ruby/Rails</div>
            <progress max="100" value="70" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">70%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">Node.js</div>
            <progress max="100" value="50" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">50%</div>
          </div>
          <div className="skill-li">
            <div data-value="80" className="skill-p">Python</div>
            <progress max="100" value="60" className="html5">
              <div className="progress-bar" />
            </progress>
            <div className="skill-p p">60%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skill;
