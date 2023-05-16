import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR } from '../constants';


const PanelContainer = styled.div`
  display: flex;
  background-color: #efefef;
  > div {
    margin: 0 20vw;
  }
  h2 {
    text-align: center;
  }
`; 

const Hero = ({ className, title, bgColor }) => {
 
  return (
    <PanelContainer className={className} style={{backgroundColor: `${COLOR[bgColor]}`}}>
      <div className="d-flex justify-content-center align-items-center">
          <h2>{title}</h2>
      </div>
    </PanelContainer>
  )
};

Hero.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Hero;
