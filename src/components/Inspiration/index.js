import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import * as api from '../../api';

// Styled Components

const InspirationSection = styled.section`
  border: 2px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.borderRadius};
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
`;

const PhotoBox = ({ url }) => {
  return (
    <div className="inspiration-image-container">
      <img className="inspiration-image" src={url} alt="" />
    </div>
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
    <div style={{ overflowY: 'scroll' }}>
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
      <p>
        Please click
        <button onClick={() => setInspirationShowing(true)}>here</button>
        to view images of things that inspire me...
      </p>

      {inspirationShowing && <InspirationPhotos />}
    </InspirationSection>
  );
}

export default Inspiration;
