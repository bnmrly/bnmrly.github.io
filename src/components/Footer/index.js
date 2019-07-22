import React from 'react';
import styled from 'styled-components/macro';

// Styled Components

const SiteFooter = styled.footer`
  background-color: inherit;
`;

const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  li:first-of-type {
    font-size: ${props => props.theme.dimensions.copyrightFontSize};
  }
`;

// Component

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <SiteFooter>
      <FooterList>
        <li>Copyright &copy; {getYear()} Ben Marley</li>
        <li>
          <a href="mailto:hello@benmarley.co.uk">hello@benmarley.co.uk</a>
        </li>
      </FooterList>
    </SiteFooter>
  );
}

export default Footer;
