import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { COLOR, FONT } from '../constants';
import { gutter, titleMedium, buttonBlank, linkUnderlined } from '../constants/styles';
import img_gin from '../assets/home_irish_gin.jpg';
import img_whiskey from '../assets/home_irish_whiskey.jpg';
import img_poitin from '../assets/home_irish_poitin.jpg';


const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${gutter}
`;

const Panel = styled.div`
  text-align: center;
  width: 25vw;
`;

const Button = styled.button` 
  ${buttonBlank}
  > a {
    ${linkUnderlined}
  }
`;

const Title = styled.h3`
  ${titleMedium}
  margin-top: 1rem;
`;

const Image = styled.img`
  max-width: 20vw;
  border-radius: 50% 50% 0 0;
  -webkit-border-radius: 50% 50% 0 0;
  -moz-border-radius: 50% 50% 0 0;
`;

const DrinksPanel = ({ className }) => {
  const navigate = useNavigate();

  const items = [
    {title: 'Irish Gin', url: '/gin', image: img_gin},
    {title: 'Irish Whiskey', url: '/whiskey', image: img_whiskey},
    {title: 'Poitín', url: '/poitin', image: img_poitin},
  ];

  const panels = items.map((item, i) => (
    <Panel key={i}>
      <Image src={item.image} alt="Irish Gin" onClick={() => navigate(item.url)} />
      <Title>{item.title}</Title>
      <Button><Link to={item.url}>Find out more</Link></Button>
    </Panel>
  ))

  return (
    <PanelContainer className={className}>
       {panels}
    </PanelContainer>
  )
};

DrinksPanel.propTypes = {
  className: PropTypes.string,
};

export default DrinksPanel;