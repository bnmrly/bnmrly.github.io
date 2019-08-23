import React from 'react';
import styled from 'styled-components/macro';
import { generate as generateId } from 'shortid';
import InspirationSection from '../Inspiration/Inspiration';

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
  width: 100%;

  @media screen and (min-width: ${props => props.theme.layout.largeWidth}) {
    width: 40%;
  }

  h1 {
    margin-top: 0;
  }
`;

const MainSkills = styled.section`
  border: 2px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.defaultBorderRadius};
  padding: ${props => props.theme.dimensions.defaultSectionPadding};
  margin-bottom: ${props => props.theme.dimensions.defaultSectionMarginY};
  width: 100%;

  @media screen and (min-width: ${props => props.theme.layout.largeWidth}) {
    width: 40%;
  }

  h1 {
    margin-top: 0;
  }
`;

const MainSkillsListItem = styled.li`
  margin-bottom: 1rem;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProjectsListItem = styled.li`
  border: 1px solid ${props => props.theme.color.border};
  border-top-left-radius: ${props =>
    props.theme.dimensions.defaultBorderRadius};
  border-top-right-radius: ${props =>
    props.theme.dimensions.defaultBorderRadius};
  margin-bottom: ${props => props.theme.dimensions.defaultSectionPadding};

  width: 100%;

  @media screen and (min-width: ${props => props.theme.layout.largeWidth}) {
    width: 45%;
  }
`;

const ProjectContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  /* bottom is -1px due to parent border-width */
  bottom: -1px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.color.border};
  border-bottom: 1px solid ${props => props.theme.color.border};
  height: 14rem;

  @media screen and (min-width: ${props => props.theme.layout.mediumWidth}) {
    height: 10rem;
  }

  @media screen and (min-width: ${props => props.theme.layout.largeWidth}) {
    height: 9rem;
  }
`;

const ProjectDescriptionContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
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
          I am a Manchester based Front End Developer and graduate from the{' '}
          <a href="https://northcoders.com/">Northcoders</a> full-stack
          JavaScript bootcamp.
        </p>
        <p>
          I am currently working at the B2B Digital Marketing agency{' '}
          <a href="https://www.dontbeshy.com">Don't be Shy</a>, Manchester.
        </p>
        <p>
          I have retrained in Front End Development, following a successful
          career within London’s Contemporary Art industry, and am proficient in
          JavaScript, HTML5, and CSS, as well as having additional exposure to a
          range of front and back end technologies.
        </p>
      </MainAbout>
      <MainSkills>
        <h1>Technical skills</h1>
        <ul>
          <MainSkillsListItem>
            React | ES6 | DOM manipulation
          </MainSkillsListItem>
          <MainSkillsListItem>
            Sass | CSS3 | Flexbox | Grid | BEM | HTML5
          </MainSkillsListItem>
          <MainSkillsListItem>
            Responsive design | Page speed optimisation
          </MainSkillsListItem>
          <MainSkillsListItem>
            Cross-browser testing | UAT | TDD with Chai and Mocha
          </MainSkillsListItem>
          <MainSkillsListItem>
            Node | Express | PHP | WordPress
          </MainSkillsListItem>
          <MainSkillsListItem>NPM | Yarn | Composer | Gulp</MainSkillsListItem>
          <MainSkillsListItem>
            Back End exposure: PostgreSQL | MongoDB | Umbraco | .NET
          </MainSkillsListItem>
        </ul>
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
                  position: `relative`
                }}
              >
                <ProjectContainer>
                  <ProjectDescriptionContainer>
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
                  </ProjectDescriptionContainer>
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
