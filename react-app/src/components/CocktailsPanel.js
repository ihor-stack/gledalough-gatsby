import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT } from '../constants';
import { gutter, titleMedium, buttonBlank, linkUnderlined } from '../constants/styles';
import { capitilize } from '../utils/filters';
import img_bg_texture from '../assets/bg_textured_paper.jpg';

const PanelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${img_bg_texture});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PanelHeader = styled.h3`
  text-align: center;
  width: 100%;
  padding-top: 4rem;
  font-family: ${FONT.serif};
  font-style: 'normal';
  font-weight: 400;
  font-size: 3rem;
  line-height: 3.2rem;
`;

const ItemsContainer = styled.div`
  ${gutter}
  width: 100%;
  display: flex;
  flex: 1;
`;

const Item = styled.div`
  text-align: center;
  width: 25vw;
  padding: 2vw;
`;

const Button = styled.button` 
  ${buttonBlank}
  > a {
    ${linkUnderlined}
  }
`;

const Title = styled.h3`
  margin-top: 1rem;
  ${titleMedium}
`;

const Image = styled.img`
  border-radius: 50% 50% 0 0;
  -webkit-border-radius: 50% 50% 0 0;
  -moz-border-radius: 50% 50% 0 0;
`;

const CocktailsPanel = ({ className, theme='', items }) => {

  const cocktails = items.map((item, i) => (
    <Item key={i}>
        <Image className='img-fluid' src={item.image} alt={item.title} />
        <Title>{item.title}</Title>
        <Button><Link to={item.url}>View Recipe</Link></Button>
    </Item>
  ))

  return (
    <PanelContainer className={className}>
      <PanelHeader>{capitilize(theme)} Cocktails</PanelHeader>
      <ItemsContainer>{ cocktails }</ItemsContainer>
    </PanelContainer>
  )
};

CocktailsPanel.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  items: PropTypes.array,
};

export default CocktailsPanel;