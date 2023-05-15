import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bgImage from '../assets/placeholder.png';

const PanelContainer = styled.div`
  display: flex;
  background-color: #900;
  background-image: url(${bgImage});
  min-height: 220px;
`;

const NewsPanel = ({ className }) => (
  <PanelContainer className={className}>
      <div className="text-left">
        <h2>Distillery News</h2>
        <p>Get the latest news and cocktails straight to your inbox</p>
      </div>
      <hr />
    </PanelContainer>
);

NewsPanel.propTypes = {
  className: PropTypes.string,
};

export default NewsPanel;
