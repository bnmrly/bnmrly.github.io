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
  margin-top: 3rem;
`;

const InspirationPhotosContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${props => props.theme.dimensions.inspirationContainerMargin};
  margin-left: auto;
  margin-right: auto;
`;

const PhotoContainer = styled.div`
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
    const { buttonClicked } = this.state;
    if (!buttonClicked) {
      const response = await api.getPhotos();
      this.setState({
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
            {this.state.buttonText}
          </ImageButton>
          {this.state.buttonClicked && (
            <React.Fragment>
              <InspirationPhotosContainer>
                {this.state.photoUrls.map(url => (
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
