import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  className: PropTypes.string,
  title: PropTypes.string,
};

export default StoryPanel;
