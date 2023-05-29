import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Map from 'react-map-gl';
import { COLOR } from '../constants';
import { locations as items } from '../constants/menu_items';


const PanelContainer = styled.div`
  display: flex;
  background-color: #efefef;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 12.5vw;
  &:last-child {
    margin: 0 12.5vw 0 0;
  }
`;

const LocationList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    > li {
      color: ${COLOR.wbgreen};
      background: ${COLOR.offwhite};
      list-style-type: none;
      padding: 0.5rem;;
      margin: 1rem 0 0 0;
      &.active {
        color: ${COLOR.offwhite};
        background: ${COLOR.wbgreen};
      }
    }
`;

const MapPanel = ({ className, bgColor }) => {

  const [viewState, setViewState] = useState({
    index: 0,
    latitude: 37.8,
    longitude: -122.4,
    zoom: 12
  });

  const location_items = items.map((item, i) => (
    <li key={i} className={`${viewState.index === i ? 'active': ''}`} onClick={() => setViewState({index: i, latitude: item.lat, longitude: item.lng, zoom: 12 }) }>
      <h3>{ item.title }</h3>
      <div>{ item.address1 }</div>
      <div>{ item.address2 }</div>
      <div>{ item.phone }</div>
    </li>
  ))

  return (
    <PanelContainer className={className} style={{ backgroundColor: `${COLOR[bgColor]}` }}>
      <Panel>
        <LocationList>
          { location_items }
        </LocationList>
      </Panel>
      <Panel>
        <Map
          {...viewState}
          style={{ width: '100%', height: '100vh' }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken='pk.eyJ1Ijoic2VvbnpvbyIsImEiOiJjbGk4ejZzZnExZ3k5M2RrYnhsaHB2cHhlIn0.TDLTRrdsalrU5XM5yhtweA'
        />
      </Panel>
    </PanelContainer>
  )
};

MapPanel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  bgColor: PropTypes.string,
};

export default MapPanel;
