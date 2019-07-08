import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Normalize } from 'styled-normalize';

const AppWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  return (
    <Fragment>
      <Normalize />
      <AppWrapper>
        <h1>hello world</h1>
      </AppWrapper>
    </Fragment>
  );
}

export default App;
