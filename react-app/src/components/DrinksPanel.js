import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import img_gin from '../assets/home_irish_gin.jpg';
import img_whiskey from '../assets/home_irish_whiskey.jpg';
import img_poitin from '../assets/home_irish_poitin.jpg';


const PanelContainer = styled.div`
  width: 100%;
  padding: 0 10vw;
`;

const Panel = styled.div`
  text-align: center;
  width: 25vw;
`;

const Button = styled.button`
  background: none;
  border: none; 
  font-family: ${FONT.sans};
  font-weight: 700;
  font-style: 'normal';
  text-transform: uppercase;
  border-bottom: 1px solid ${COLOR.black};
`;

const Title = styled.h3`
  margin-top: 1rem;
`;

const Image = styled.img`
  border-radius: 50% 50% 0 0;
  -webkit-border-radius: 50% 50% 0 0;
  -moz-border-radius: 50% 50% 0 0;
`;

const DrinksPanel = ({ className }) => (
    <PanelContainer className={[className, `d-flex justify-content-between align-items-center`]}>
      <Panel>
        <Image src={img_gin} alt="Irish Gin" />
        <Title>Irish Gin</Title>
        <Button>Find out more</Button>
      </Panel>
      <Panel>
        <Image src={img_whiskey} alt="Irish Gin" />
        <Title>Irish Whiskey</Title>
        <Button>Find out more</Button>
      </Panel>
      <Panel>
        <Image src={img_poitin} alt="Irish Gin" />
        <Title>Poitín</Title>
        <Button>Find out more</Button>
      </Panel>
    </PanelContainer>
);

DrinksPanel.propTypes = {
  className: PropTypes.string,
};

export default DrinksPanel;