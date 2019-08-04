import React, { Component } from 'react';
import styled from 'styled-components/macro';
import * as api from '../../api';
import { generate as generateId } from 'shortid';

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

const InspirationContainer = styled.div`
  overflow-y: scroll;
  margin-top: 3rem;
`;

const InspirationPhotosContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${props => props.theme.dimensions.inspirationContainerMargin};
  margin-left: auto;
  margin-right: auto;
`;

const InspirationPhotoContainer = styled.div`
  margin: ${props => props.theme.dimensions.inspirationContainerMargin};
`;

const ImageButton = styled.button`
  background-color: transparent;
  height: ${props => props.theme.dimensions.buttonHeight};
  padding-right: 1rem;
  padding-left: 1rem;
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

class Inspiration extends Component {
  state = {
    photoUrls: [],
    buttonClicked: false,
    buttonText: 'Show Images'
  };

  async handleShowPhotosClick() {
    const response = await api.getPhotos();
    this.setState({
      photoUrls: response,
      buttonClicked: true,
      buttonText: 'Hide Images'
    });
  }

  render() {
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
          {!this.state.buttonClicked && (
            <React.Fragment>
              <ImageButton
                onClick={() => {
                  this.handleShowPhotosClick();
                }}
              >
                {this.state.buttonText}
              </ImageButton>
              <InspirationPhotosContainer>
                {this.state.photoUrls.map(url => (
                  <InspirationPhotoContainer key={generateId()}>
                    <img
                      className="inspiration-image"
                      src={url}
                      alt="inspiration"
                    />
                  </InspirationPhotoContainer>
                ))}
              </InspirationPhotosContainer>
            </React.Fragment>
          )}
          {this.state.buttonClicked && (
            <ImageButton
              onClick={() =>
                this.setState({
                  buttonText: 'Show Images',
                  inspirationShowing: false,
                  buttonClicked: false
                })
              }
            >
              {this.state.buttonText}
            </ImageButton>
          )}
        </InspirationContainer>
      </InspirationSection>
    );
  }
}

export default Inspiration;
