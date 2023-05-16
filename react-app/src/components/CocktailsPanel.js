import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR, FONT } from '../constants';
import img_bg_texture from '../assets/bg_textured_paper.jpg';
import img_cocktail1 from '../assets/cocktail_irish_mule.jpg';
import img_cocktail2 from '../assets/cocktail_a_long_way.jpg';
import img_cocktail3 from '../assets/cocktail_tom_collins.jpg';


const PanelContainer = styled.div`
  width: 100%;
  padding: 0 10vw;
  display: flex;
  background-image: url(${img_bg_texture});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

const CocktailsPanel = ({ className }) => (
    <PanelContainer className={[className, `d-flex justify-content-between align-items-center`]}>
      <Panel>
        <Image src={img_cocktail1} alt="Irish Mule" />
        <Title>Irish Mule</Title>
        <Button>View Recipe</Button>
      </Panel>
      <Panel>
        <Image src={img_cocktail2} alt="A Long Way" />
        <Title>A Long Way</Title>
        <Button>View Recipe</Button>
      </Panel>
      <Panel>
        <Image src={img_cocktail3} alt="Tom Collins" />
        <Title>Tom Collins</Title>
        <Button>View Recipe</Button>
      </Panel>
    </PanelContainer>
);

CocktailsPanel.propTypes = {
  className: PropTypes.string,
};

export default CocktailsPanel;