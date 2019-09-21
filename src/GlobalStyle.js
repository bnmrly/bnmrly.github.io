import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,600&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  font-size: ${props => props.theme.dimensions.smallBodyFontSize};
  color: ${props => props.theme.color.primaryFontColor};
  background-color: ${props => props.theme.color.siteBackground};
}

h1 {
  font-weight: 300;
  text-transform: uppercase;
}

h2 {
  font-weight: 200;
  text-transform: uppercase;
}

a {
  text-decoration: none;
  font-weight: 600;
  color: ${props => props.theme.color.link};
}

a:hover {
  color: ${props => props.theme.color.linkHover};
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul, p {
  line-height: ${props => props.theme.dimensions.smallLineHeight};
}

@media (min-width: 985px) {
  ul, p {
    line-height: ${props => props.theme.dimensions.largeLineHeight};
    }

    body {
      font-size: ${props => props.theme.dimensions.largeBodyFontSize};
    }
}
`;

export default GlobalStyle;
