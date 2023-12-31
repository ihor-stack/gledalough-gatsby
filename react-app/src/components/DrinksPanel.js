import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import { COLOR } from '../constants';
import { gutter, titleMedium, buttonBlank, linkUnderlined } from '../constants/styles';
import img_gin from '../assets/home_irish_gin.jpg';
import img_whiskey from '../assets/home_irish_whiskey.jpg';
import img_poitin from '../assets/home_irish_poitin.jpg';


const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${gutter}
  background-color: ${COLOR.warmwhite};
`;
const SliderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
`;
const SliderItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  margin-top: 20vh;
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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 90%;
  border-radius: 50% 50% 0 0;
  -webkit-border-radius: 50% 50% 0 0;
  -moz-border-radius: 50% 50% 0 0;
`;

const responsive = {
  0: { 
      items: 1
  },
  568: { 
      items: 2
  },
  1024: {
      items: 3, 
      itemsFit: 'fill'
  },
};

const DrinksPanel = ({ className }) => {
  const navigate = useNavigate();

  const items = [
    {title: 'Irish Gin', url: '/gin', image: img_gin},
    {title: 'Irish Whiskey', url: '/whiskey', image: img_whiskey},
    {title: 'Poitín', url: '/poitin', image: img_poitin},
  ];

  const slides = items.map((item, i) => (
    <SliderItem key={i}>
      <Image src={item.image} alt="Irish Gin" onClick={() => navigate(item.url)} />
      <Title>{item.title}</Title>
      <Button><Link to={item.url}>Find out more</Link></Button>
    </SliderItem>
  ))

  return (
    <PanelContainer className={className}>
      <SliderContainer>
        <AliceCarousel mouseTracking items={slides} responsive={responsive} />
      </SliderContainer>
    </PanelContainer>
  )
};

DrinksPanel.propTypes = {
  className: PropTypes.string,
};

export default DrinksPanel;