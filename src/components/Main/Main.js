import React from "react";
import styled from "styled-components/macro";
import { generate as generateId } from "shortid";
import InspirationSection from "../Inspiration/Inspiration";

// Styled Components
const MainWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainAbout = styled.section`
  border: 2px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.dimensions.defaultBorderRadius};
  padding: ${(props) => props.theme.dimensions.defaultSectionSpacing};
  margin-bottom: ${(props) => props.theme.dimensions.defaultSectionMarginY};
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.layout.largeWidth}) {
    width: 40%;
  }

  h1 {
    margin-top: 0;
  }
`;

const MainSkills = styled.section`
  border: 2px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.dimensions.defaultBorderRadius};
  padding: ${(props) => props.theme.dimensions.defaultSectionSpacing};
  margin-bottom: ${(props) => props.theme.dimensions.defaultSectionMarginY};
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.layout.largeWidth}) {
    width: 40%;
  }

  h1 {
    margin-top: 0;
  }
`;

const MainSkillsListItem = styled.li`
  margin-bottom: ${(props) => props.theme.dimensions.smallSpacing};
`;

const MainProjects = styled.section`
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.dimensions.defaultBorderRadius};
  padding-top: ${(props) => props.theme.dimensions.defaultSectionSpacing};
  padding-right: ${(props) => props.theme.dimensions.defaultSectionSpacing};
  padding-bottom: 0;
  padding-left: ${(props) => props.theme.dimensions.defaultSectionSpacing};
  margin-bottom: ${(props) => props.theme.dimensions.defaultSectionMarginY};

  h1 {
    margin-top: 0;
  }

  p {
    padding-bottom: ${(props) => props.theme.dimensions.introParagraphPadding};
  }
`;

const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -${(props) => props.theme.dimensions.smallSpacing};
  margin-right: -${(props) => props.theme.dimensions.smallSpacing};
  margin-bottom: 0;
`;

const ProjectsListItem = styled.li`
  border: 1px solid ${(props) => props.theme.color.border};
  border-top-left-radius: ${(props) =>
    props.theme.dimensions.defaultBorderRadius};
  border-top-right-radius: ${(props) =>
    props.theme.dimensions.defaultBorderRadius};
  margin-bottom: ${(props) => props.theme.dimensions.defaultSectionSpacing};
  margin-left: ${(props) => props.theme.dimensions.smallSpacing};
  margin-right: ${(props) => props.theme.dimensions.smallSpacing};

  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.layout.largeWidth}) {
    width: 45%;
    flex-grow: 1;
  }
`;

const ProjectContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  /* bottom is -1px due to parent border-width */
  bottom: -1px;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.color.border};
  border-bottom: 1px solid ${(props) => props.theme.color.border};
  height: 12rem;

  @media screen and (min-width: ${(props) => props.theme.layout.smallWidth}) {
    height: 8rem;
  }

  @media screen and (min-width: ${(props) => props.theme.layout.mediumWidth}) {
    height: 10rem;
  }
`;

const ProjectDescriptionContainer = styled.div`
  padding-left: ${(props) => props.theme.dimensions.smallSpacing};
  padding-right: ${(props) => props.theme.dimensions.smallSpacing};

  p {
    padding-bottom: 0;
  }
`;

// Component

function Main({ props }) {
  return (
    <MainWrapper>
      <MainAbout>
        <h1>About</h1>
        <p>
          I am a Manchester based Front End Developer and graduate from the{" "}
          <a href="https://northcoders.com/">Northcoders</a> full-stack
          JavaScript bootcamp with experience of working in agency and start up
          environments.
        </p>
        {/* <p>
          I am currently working at the B2B Digital Marketing agency{' '}
          <a href="https://www.dontbeshy.com">Don't be Shy</a>, Manchester.
        </p> */}
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
        <p>
          Recent projects I've worked on have been under NDA but here are some
          examples of my personal projects:
        </p>
        <ProjectsList>
          {props.map((project) => {
            return (
              <ProjectsListItem
                key={generateId()}
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundPosition: `top`,
                  backgroundSize: `cover`,
                  height: `25rem`,
                  position: `relative`,
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
