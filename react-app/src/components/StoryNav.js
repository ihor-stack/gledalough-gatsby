import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import placeholder from '../assets/placeholder.png';

const PanelContainer = styled.div`
  display: flex;
  background-color: #efefef;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StoryNavigation = ({ className, active }) => (
  <PanelContainer className={className}> 
    <div className="text-center">
      <ul>
        <li>
          <Link to="/story/first-article" className="nav-link">
            First article
          </Link>
        </li>
        <li>
          <Link to="/story/second-article" className="nav-link">
            Second article
          </Link>
        </li>
        <li>
          <Link to="/story/third-article" className="nav-link">
            Third article
          </Link>
        </li>
      </ul>
    </div>
  </PanelContainer>
);

StoryNavigation.propTypes = {
  active: PropTypes.string,
};

export default StoryNavigation;
