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

a {
  text-decoration: none;
}

h1 {
  font-weight: 300;
  text-transform: uppercase;
}

h2 {
  text-transform: uppercase;
}



`;

export default GlobalStyle;
