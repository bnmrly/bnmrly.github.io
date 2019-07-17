import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';
import projectData from './data/projectData';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import { Normalize } from 'styled-normalize';

// Components

import Header from './components/Header';
import Main from './components/Main';

const AppWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  return (
    <Fragment>
      <Normalize />
      <ThemeProvider theme={Theme}>
        <AppWrapper>
          <Header />
          <Main props={projectData} />
          <GlobalStyle />
        </AppWrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
