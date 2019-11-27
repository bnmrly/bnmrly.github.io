import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';
import projectData from './data/projectData';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import { Normalize } from 'styled-normalize';

// Components

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// Styled Components

const AppWrapper = styled.div`
  padding-top: ${props => props.theme.dimensions.appWrapperSpacingY};
  padding-right: ${props => props.theme.dimensions.appWrapperSpacingX};
  padding-bottom: ${props => props.theme.dimensions.appWrapperSpacingY};
  padding-left: ${props => props.theme.dimensions.appWrapperSpacingX};
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.layout.xLargeWidth};

  @media screen and (min-width: ${props => props.theme.layout.largeWidth}) {
    padding-top: ${props => props.theme.dimensions.appWrapperSpacingYLarge};
    padding-right: ${props => props.theme.dimensions.appWrapperSpacingXLarge};
    padding-bottom: ${props => props.theme.dimensions.appWrapperSpacingYLarge};
    padding-left: ${props => props.theme.dimensions.appWrapperSpacingXLarge};
  }
`;

// Component

function App() {
  return (
    <Fragment>
      <Normalize />
      <ThemeProvider theme={Theme}>
        <AppWrapper>
          <Header />
          <Main props={projectData} />
          <GlobalStyle />
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
