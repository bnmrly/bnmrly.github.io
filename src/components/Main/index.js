import React from 'react';
import styled from 'styled-components/macro';

const MainWrapper = styled.main`
  border: 1px solid green;
`;

const MainAbout = styled.section`
  border: 1px solid blue;
`;

const MainSkills = styled.section`
  border: 1px solid green;
`;

const MainProjects = styled.section`
  border: 1px solid yellow;
`;

function Main(props) {
  // convert props argument object to array
  const propsArray = [];
  Object.keys(props).forEach(function(prop) {
    propsArray.push(...props[prop]);
  });

  return (
    <MainWrapper>
      <MainAbout>
        <h1>About</h1>
        <p>
          I am a Front End Developer and graduate from the{' '}
          <a href="https://northcoders.com/">Northcoders</a> full stack coding
          bootcamp.
        </p>
        <p>
          I previously worked in an agile environment as Junior Front End
          Developer for the Manchester homelessness start up
          <a href="https://streetsupport.net/"> Street Support Network</a> as
          well as working as a freelance front end developer, specialising in
          custom WordPress sites.
        </p>
        <p>
          I have a broad range of professional skills, having retrained in
          development following a successful career in London's Fine Art
          Industry, at the UK's largest commercial art gallery,{' '}
          <a href="https://www.theguardian.com/artanddesign/2011/sep/26/white-cube-empire-record-gallery">
            {' '}
            White Cube{' '}
          </a>
          and for the Turner Prize winning artist,
          <a
            className="link accent"
            href="https://www.theguardian.com/artanddesign/2017/apr/16/chris-ofili-trinidad-is-really-exciting-tapestry-the-caged-bird-sings-interview"
          >
            {' '}
            Chris Ofili.
          </a>
        </p>
      </MainAbout>
      <MainSkills>
        <h1 className="h1">Technical skills</h1>
        {/* remove the back slash below */}
        <p className="p">\JavaScript: Node | React | Express\</p>
        <p className="p">
          Front End skills: HTML5 | CSS3 including Grid and Flexbox | Sass and
          Gulp | Responsive Design | Photoshop | BEM
        </p>
        <p className="p">
          Testing: TDD using Chai and Mocha | Cross-browser testing | User
          Accepted Testing
        </p>
        <p className="p">
          Additional: Version control with Git | Pair programming | Deployment |
          WordPress | Page speed optimisation | Database experience: PostgreSQL
          & MongoDB
        </p>
      </MainSkills>
      <MainProjects>
        <h1>Projects</h1>
        {propsArray.map(project => {
          return (
            <ul className="projects-list">
              <li className="projects-list__item" />
              <div className="project__container">
                <p className="project__description">
                  <a
                    className="project__link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </p>
                <p className="project__description--p">{project.description}</p>
              </div>
            </ul>
          );
        })}
      </MainProjects>
      {/* <MainProjects>
        <h1 className="h1">Projects</h1>
        <ul className="projects-list list">
          <li className="projects-list__item projects-list__item--news-today-fe image-bg odd">
            <div className="container-project">
              <p className="p center project__description--p">
                <a
                  className="link accent"
                  href="https://news-today-ben-marley.herokuapp.com/"
                >
                  News Today: Front End &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                Front End for my final full stack solo project for the
                Northcoders coding bootcamp. Built with React.js and vanilla
                CSS.
              </p>
            </div>
          </li>
          <li className="projects-list__item projects-list__item--news-today-be image-bg even">
            <div className="container-project">
              <p className="p center project__description--p">
                <a
                  className="link accent"
                  href="https://ben-nc-news.herokuapp.com/API"
                >
                  News Today: Back End &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                RESTful API built with Node.js, Express.js, MongoDB and
                Mongoose.
              </p>
            </div>
          </li>
          <li className="projects-list__item projects-list__item--creditwise image-bg--creditwise odd">
            <div className="container-project">
              <p className="p center project__description--p">
                <a
                  className="link accent"
                  href="https://github.com/bnmrly/project-game-FE"
                >
                  CreditWise &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                Financial Education Progressive Web App game for Key Stage 2
                children. Built in a group of six, with Node.js, React.js, Redux
                and Firebase.
              </p>
            </div>
          </li>
          <li className="projects-list__item projects-list__item--google-books-api image-bg even">
            <div className="container-project">
              <p className="p center project__description--p">
                <a
                  className="link accent"
                  href="https://tranquil-hollows-48024.herokuapp.com/"
                >
                  Google Books API Data Visualisation &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                React app that calls the Google Books API to retrieve book data.
                Built with React.js and react-chartjs-2.
              </p>
            </div>
          </li>
          <li className="projects-list__item projects-list__item--ssn image-bg odd">
            <div className="container-project">
              <p className="p center project__description--p">
                <a
                  className="link accent"
                  href="https://news.streetsupport.net"
                >
                  Street Support Network News Site &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                WordPress site for the Manchester homelessness start up. Built
                with Sass, HTML5 and PHP.
              </p>
            </div>
          </li>
          <li className="projects-list__item projects-list__item--illustrator image-bg even">
            <div className="container-project">
              <p className="p center project__description--p">
                <a className="link accent" href="http://jimnewcombe.co.uk">
                  Illustrator's website &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                Responsive, custom WordPress site for the London based artist
                and writer, Jim Newcombe
              </p>
            </div>
          </li>
          <li className="projects-list__item projects-list__item--nowave image-bg odd">
            <div className="container-project">
              <p className="p center project__description--p">
                <a
                  className="link accent"
                  href="http://benmarley.co.uk/no-wave/"
                >
                  no-wave: Mouseover experiment &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                Dom Mouseover experiment built using CSS Grid and vanilla
                JavaScript.
              </p>
            </div>
          </li>
          <li className="projects-list__item projects-list__item--myphotography image-bg even">
            <div className="container-project">
              <p className="p center project__description--p">
                <a
                  className="link accent"
                  href="http://benmarleyphotography.co.uk"
                >
                  WordPress Photography Theme &rarr;
                </a>
              </p>
              <p className="p center project__description--p">
                Responsive WordPress site of my film photography, built with the
                underscores starter theme
              </p>
            </div>
          </li>
        </ul>
      </MainProjects> */}
    </MainWrapper>
  );
}

export default Main;
