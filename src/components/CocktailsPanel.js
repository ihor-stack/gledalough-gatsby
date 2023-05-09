import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.png';

const PanelContainer = styled.div`
  min-height: 220px;
`;
const ThumbContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Thumbnail = styled.div`
  background-image: url(${placeholder});
  background-position: center;
  background-size: cover;
  width: 25%;
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export default function CocktailsPanel() {
  return (
    <PanelContainer>
      <div className="text-center">
        <h2>Cocktails</h2>
      </div>
      <ThumbContainer>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </ThumbContainer>
      <div className="text-center">
        <p>Discover more</p>
      </div>
    </PanelContainer>
  );
}
