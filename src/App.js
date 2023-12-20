import './App.css';

function App() {
  return (
    <div className="App">
      <div className="contentWrapper">
        <section id="main">
          <header id="title">
            <div className="mainTitle">
              <h1>Anton Grigorenko</h1>
              <span className="subtitle">Web developer</span>
              <br/>
                <br/>
                  <div className="mainDescription">
                    I am a 3rd-year student, studying software
                    engineering at CSTU
                    Interested in web technologies, and am fond of
                    creating websites
                    I want to learn typescript and deepen my
                    knowledge of creating websites, and also
                    want to learn how to develop cross-platform
                    applications
                  </div>
            </div>
            <img src='avatar.jpg' alt="Avatar" className="avatarImage" />
          </header>
          <section className="main-block">
            <h2>
              <i className="fa fa-suitcase"></i> Experiences
            </h2>
            <section className="blocks">
              <div className="date">
                <span>For Now</span><span>01.08.2023</span>
              </div>
              <div className="decorator">
              </div>
              <div className="details">
                <header>
                  <h3>Unibrix</h3>
                  <span className="place">Web developer</span>
                  <span className="location">Cherkasy</span>
                </header>
                <div>
                  <ul>
                    <li>
                      Project development on React, NextJS, NextUI, Nest, Prisma, PostgresSQL
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
          <section className="main-block concise">
            <h2>
              <i className="fa fa-graduation-cap"></i> Education
            </h2>
            <section className="blocks">
              <div className="date">
                <span>For Now</span><span>2021</span>
              </div>
              <div className="decorator">
              </div>
              <div className="details">
                <header>
                  <h3>Cherkasy state technological university</h3>
                  <span className="place">Cherkasy University</span>
                  <span className="location">Cherkasy</span>
                </header>
                <br/>
                  <ul>
                    <li>The Basics Of Programming</li>
                    <li>Operating Systems</li>
                    <li>Computer Architecture</li>
                    <li>The Basics Of Programming</li>
                    <li>Databases</li>
                    <li>Learning JavaScript at learn.javascript.ru</li>
                    <li>Studying of CSS and HTML at developer.mozilla.org</li>
                    <li>Basics Of JavaScript</li>
                    <li>Basics Of Web Development</li>
                    <li>Object-oriented programming</li>
                    <li>Object</li>
                    <li>Basics of creating web applications</li>
                    <li>Web technologies</li>
                  </ul>
              </div>
            </section>
            <section className="blocks">
              <div className="date">
                <span>2010</span><span>2021</span>
              </div>
              <div className="decorator">
              </div>
              <div className="details">
                <header>
                  <h3>Dubiiv school</h3>
                  <span className="place">School</span>
                  <span className="location">Dubiyivka</span>
                </header>
              </div>
            </section>
          </section>
        </section>
        <aside id="sidebar">
          <div className="side-block" id="contact">
            <h1>
              Contact Info
            </h1>
            <ul>
              <li><i className="fa fa-linkedin"></i><a className="linkedInLink" href="https://www.linkedin.com/in/anton-hryhorenko-081a39299/"> Anton</a></li>
              <li><i className="fa fa-envelope"></i>grigorenko.net@gmail.com</li>
              <li><i className="fa fa-phone"></i> 380968065072</li>
            </ul>
          </div>
          <div className="side-block" id="skills">
            <h1>
              Skills
            </h1>
            <ul>
              <li>JS</li>
              <li>TS</li>
              <li>React</li>
              <li>Next JS</li>
              <li>Node JS</li>
              <li>Nest JS</li>
              <li>Prisma</li>
              <li>Java</li>
              <li>C++</li>
              <li>.NET</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
