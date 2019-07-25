import React from 'react';
import styled from 'styled-components/macro';
import { generate as generateId } from 'shortid';
import InspirationSection from '../Inspiration/';

// Styled Components
const MainWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainAbout = styled.section`
  border: 2px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.defaultBorderRadius};
  padding: ${props => props.theme.dimensions.defaultSectionPadding};
  margin-bottom: ${props => props.theme.dimensions.defaultSectionMarginY};
  width: 40%;

  h1 {
    margin-top: 0;
  }
`;

const MainSkills = styled.section`
  border: 2px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.defaultBorderRadius};
  padding: ${props => props.theme.dimensions.defaultSectionPadding};
  margin-bottom: ${props => props.theme.dimensions.defaultSectionMarginY};
  width: 40%;

  h1 {
    margin-top: 0;
  }
`;

const MainProjects = styled.section`
  border: 2px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.defaultBorderRadius};
  padding: ${props => props.theme.dimensions.defaultSectionPadding};
  margin-bottom: ${props => props.theme.dimensions.defaultSectionMarginY};
  width: 100%;

  h1 {
    margin-top: 0;
  }
`;

const ProjectsList = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
`;

const ProjectsListItem = styled.li`
  border: 1px solid ${props => props.theme.color.border};
  /* border-radius: ${props => props.theme.dimensions.defaultBorderRadius}; */
  width: 45%;
`;

const ProjectContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 8em;
`;

// Component
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
          {/* <img src="./street-support-project.png" alt="" /> */}I am a Front
          End Developer and graduate from the{' '}
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
        <h1>Technical skills</h1>
        {/* remove the back slashes below */}
        <p>\JavaScript: Node | React | Express\</p>
        <p>
          Front End skills: HTML5 | CSS3 including Grid and Flexbox | Sass and
          Gulp | Responsive Design | Photoshop | BEM
        </p>
        <p>
          Testing: TDD using Chai and Mocha | Cross-browser testing | User
          Accepted Testing
        </p>
        <p>
          Additional: Version control with Git | Pair programming | Deployment |
          WordPress | Page speed optimisation | Database experience: PostgreSQL
          & MongoDB
        </p>
      </MainSkills>
      <MainProjects>
        <h1>Projects</h1>
        <ProjectsList>
          {propsArray.map(project => {
            return (
              <ProjectsListItem
                key={generateId()}
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundPosition: `top`,
                  backgroundSize: `cover`,
                  height: `25rem`,
                  position: `relative`,
                  marginBottom: `4%`,
                  width: `100%`
                }}
              >
                <ProjectContainer>
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
                  <p className="project__description--p">
                    {project.description}
                  </p>
                </ProjectContainer>
              </ProjectsListItem>
            );
          })}
        </ProjectsList>
      </MainProjects>
      <InspirationSection />
    </MainWrapper>
  );
}

export default Main;
