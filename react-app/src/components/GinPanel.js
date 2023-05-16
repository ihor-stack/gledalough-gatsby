import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

const GinPanel = ({ className }) => (
    <PanelContainer className={className}>
      <Panel>
        <Title>One</Title>
      </Panel>
      <Panel>
        <Title>Two</Title>
      </Panel>
    </PanelContainer>
);

GinPanel.propTypes = {
  className: PropTypes.string,
};

export default GinPanel;