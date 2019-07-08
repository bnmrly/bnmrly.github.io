import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import { Normalize } from 'styled-normalize';

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
          <GlobalStyle />
        </AppWrapper>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
