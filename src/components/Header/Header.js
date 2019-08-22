import React from 'react';
import styled from 'styled-components/macro';
// import gitHubLogo from './github-logo.png';
// import linkedInLogo from './linkedin-logo.png';

// Styled Components

const Header = styled.header`
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.dimensions.defaultSectionPadding};
`;

const HeaderAboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    margin: 0;

    a {
      color: ${props => props.theme.color.primaryFont};
    }

    a:hover {
      color: ${props => props.theme.color.linkHover};
    }
  }

  h2 {
    font-size: 1em;
    letter-spacing: ${props => props.theme.dimensions.letterSpacingOverride};
  }
`;

const HeaderLinksWrapper = styled.div`
  display: flex;

  div:first-of-type {
    margin-right: 0.5rem;
  }

  img {
    height: ${props => props.theme.dimensions.iconHeight};
  }
`;

// Component

function AppHeader() {
  return (
    <Header className="header">
      <HeaderAboutMeWrapper>
        <div className="header-about-me-wrapper__heading">
          <h1>
            <a href="/">Ben Marley</a>
          </h1>
        </div>
        <div>
          <h2 className="header-about-me-wrapper__sub-heading">
            Front End Developer
          </h2>
        </div>
      </HeaderAboutMeWrapper>
      <HeaderLinksWrapper>
        <div className="header-links__link-container">
          <a
            className="header__link"
            href="https://github.com/bnmrly"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="header_link__image"
              src="./github-logo.png"
              alt="github logo"
            />
          </a>
        </div>
        <div className="header-links__link-container">
          <a
            className="header__link"
            href="https://www.linkedin.com/in/benmarley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="header_link__image"
              src="./linkedin-logo.png"
              alt="linkedin logo"
            />
          </a>
        </div>
      </HeaderLinksWrapper>
    </Header>
  );
}

export default AppHeader;
