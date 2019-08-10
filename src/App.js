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
  margin-top: ${props => props.theme.dimensions.appWrapperMarginY};
  margin-left: ${props => props.theme.dimensions.appWrapperMarginX};
  margin-bottom: ${props => props.theme.dimensions.appWrapperMarginY};
  margin-right: ${props => props.theme.dimensions.appWrapperMarginX};
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
