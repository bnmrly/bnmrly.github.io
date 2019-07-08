import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap');

html {
  background-color: ${props => props.theme.color.siteBackgroundColor}
}

body {
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.color.primaryFontColor}
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
`;

export default GlobalStyle;
