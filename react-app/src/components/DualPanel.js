import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import placeholder from '../assets/placeholder.png';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 380px;
  background-image: url(${placeholder});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

const DualPanel = ({ className }) => (
    <PanelContainer className={className}>
      <Panel>
        <Title>One</Title>
      </Panel>
      <Panel>
        <Title>Two</Title>
      </Panel>
    </PanelContainer>
);

DualPanel.propTypes = {
  className: PropTypes.string,
};

export default DualPanel;