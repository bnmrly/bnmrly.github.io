import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import * as api from '../../api';

// Styled Components

const InspirationSection = styled.section`
  border: 2px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.defaultBorderRadius};
  padding: ${props => props.theme.dimensions.defaultSectionPadding};
  margin-bottom: ${props => props.theme.dimensions.lastSectionMarginY};
  width: 100%;
  h1 {
    margin-top: 0;
  }
`;

const InspirationPhotoContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${props => props.theme.dimensions.inspirationContainerMargin};
  margin-left: auto;
  margin-right: auto;
`;

const InspirationImageContainer = styled.div`
  margin: ${props => props.theme.dimensions.inspirationContainerMargin};
`;

const ImageButton = styled.button`
  background-color: transparent;
  height: ${props => props.theme.dimensions.buttonHeight};
  padding-right: 1rem;
  padding-left: 1rem;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.buttonBorderRadius};

  :focus {
    outline: none;
  }

  :hover {
    border-color: ${props => props.theme.color.linkHover};
  }
`;

const PhotoBox = ({ url }) => {
  return (
    <InspirationImageContainer>
      <img className="inspiration-image" src={url} alt="inspiration" />
    </InspirationImageContainer>
  );
};

const InspirationPhotos = () => {
  const [photoUrls, setPhotoUrls] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.getPhotos();
      console.log(response);
      setPhotoUrls(response);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        overflowY: 'scroll',
        marginTop: '3rem',
        border: `2px solid ${props => props.theme.color.border}`,
        // border: '2px solid red',
        borderRadius: `${props => props.theme.dimensions.defaultBorderRadius}`
      }}
    >
      <InspirationPhotoContainer>
        {photoUrls.length === 0 ? (
          <div>Loading...</div>
        ) : (
          photoUrls.map((url, i) => <PhotoBox url={url} key={i} />)
        )}
      </InspirationPhotoContainer>
    </div>
  );
};

// Component

function Inspiration() {
  const [inspirationShowing, setInspirationShowing] = useState(false);
  return (
    <InspirationSection>
      <h1>Inspiration</h1>
      <p>
        Amongst other things, I'm inspired by 70s American Cinema,
        skateboarding, Modernist design, Italian red wine, Golden age hip hop,
        fell walking and my children.
      </p>
      <p>Please click below to view images of things that inspire me...</p>
      <ImageButton onClick={() => setInspirationShowing(true)}>
        Show images
      </ImageButton>
      {inspirationShowing && <InspirationPhotos />}
    </InspirationSection>
  );
}

export default Inspiration;
