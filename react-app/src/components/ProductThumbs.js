import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.png';

const PanelContainer = styled.div`
  display: flex;
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
  width: 32%;
  margin-bottom: 2%;
  &:last-child:nth-child(3n + 2) {
    margin-right: 34%;
  }
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const ProductThumbs = ({ items }) => (
  <PanelContainer>
    <ThumbContainer>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </ThumbContainer>
  </PanelContainer>
);

ProductThumbs.propTypes = {
  items: PropTypes.array,
};

export default ProductThumbs;
