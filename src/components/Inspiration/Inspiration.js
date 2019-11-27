import React, { Component } from 'react';
import styled from 'styled-components/macro';
import * as api from '../../api';
import { generate as generateId } from 'shortid';

// Styled Components

const InspirationSection = styled.section`
  border: 2px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.defaultBorderRadius};
  padding: ${props => props.theme.dimensions.defaultSectionSpacing};
  margin-bottom: ${props => props.theme.dimensions.lastSectionMarginY};
  width: 100%;
  h1 {
    margin-top: 0;
  }
`;

const InspirationContainer = styled.div`
  margin-top: 3rem;
`;

const InspirationPhotosContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

const PhotoContainer = styled.div`
  margin: ${props => props.theme.dimensions.inspirationContainerMargin};
`;

const ImageButton = styled.button`
  background-color: transparent;
  height: ${props => props.theme.dimensions.buttonHeight};
  padding-right: ${props => props.theme.dimensions.smallSpacing};
  padding-left: ${props => props.theme.dimensions.smallSpacing};
  border: 1px solid ${props => props.theme.color.border};
  border-radius: ${props => props.theme.dimensions.buttonBorderRadius};
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    border-color: ${props => props.theme.color.linkHover};
  }
`;

const LoadingMessage = styled.div`
  margin-top: 2rem;
`;

// Component

class Inspiration extends Component {
  state = {
    loading: false,
    photoUrls: [],
    buttonClicked: false,
    buttonText: 'Show Images'
  };

  async handleShowPhotosClick() {
    const { buttonClicked } = this.state;
    if (!buttonClicked) {
      this.setState({ loading: true });
      const response = await api.getPhotos();
      this.setState({
        loading: false,
        photoUrls: response,
        buttonClicked: true,
        buttonText: 'Hide Images'
      });
    } else {
      this.setState({
        buttonClicked: false,
        buttonText: 'Show Images'
      });
    }
  }

  render() {
    const { loading, photoUrls, buttonClicked, buttonText } = this.state;
    return (
      <InspirationSection>
        <h1>Inspiration</h1>
        <p>
          Amongst other things, I'm inspired by 70s American Cinema,
          skateboarding, Modernist design, Italian red wine, Golden age hip hop,
          fell walking and my children.
        </p>
        <p>Please click below to view images of things that inspire me...</p>
        <InspirationContainer>
          <ImageButton
            onClick={() => {
              this.handleShowPhotosClick();
            }}
          >
            {buttonText}
          </ImageButton>
          {loading && <LoadingMessage>Loading...</LoadingMessage>}
          {buttonClicked && (
            <React.Fragment>
              <InspirationPhotosContainer>
                {photoUrls.map(url => (
                  <PhotoContainer key={generateId()}>
                    <img
                      className="inspiration-image"
                      src={url}
                      alt="inspiration"
                    />
                  </PhotoContainer>
                ))}
              </InspirationPhotosContainer>
            </React.Fragment>
          )}
        </InspirationContainer>
      </InspirationSection>
    );
  }
}

export default Inspiration;
