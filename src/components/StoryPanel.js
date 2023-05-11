import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import placeholder from '../assets/placeholder.png';

const PanelContainer = styled.div`
  display: flex;
  background-color: #efefef;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1em;
`;

const StoryPanel = ({ className, title }) => (
  <PanelContainer className={className}> 
    <div className="text-center">
      <h2>{title}</h2>
    </div>
  </PanelContainer>
);

StoryPanel.propTypes = {
  title: PropTypes.string,
};

export default StoryPanel;
