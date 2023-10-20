import React, { useState } from 'react';
import styled from 'styled-components';
import Map from 'react-map-gl';
import { COLOR, FONT } from '../constants';
import { gutter, gutterMobile,  gutterLeft, gutterRight, respondTo, buttonRounded, linkUnderlined } from '../constants/styles';
//import { locations as location_items, retailers as retailer_items} from '../constants/menu_items';

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efefef;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  &.map {
    ${gutterMobile}
  }
  ${respondTo.md`
    flex-direction: row;
    &.map {
      padding: 0;
    }
  `}
`;
const MapHeader = styled.div`
  margin: 5vh 0 0 0;
  width: 100%;
  ${gutter}
`;
const MapFooter = styled.div`
  margin: 5vh 0 5vh 0;
  width: 100%;
  ${gutter}
  p {
    font-size: 1rem;
    font-family: ${FONT.sans};
    font-weight: 400;
    font-style: 'normal';
  }
`;
const Heading = styled.h3`
  width: 100%;
  text-align: center;
  color: ${COLOR.black};
  font-size: 1rem;
  font-family: ${FONT.sans};
  font-weight: 500;
  font-style: 'normal';
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  &.left{
    text-align: left;
  }
`;
const LocationHeading = styled.h3`
  width: 100%;
  font-family: ${FONT.serif};
  font-style: 'normal';
`;
const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: ${COLOR.black};
  font-family: ${FONT.serif};
  font-size: 3.6rem;
  font-style: 'normal';
  &.left{
    text-align: left;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  &.locations {
    height: 20vh;
    overflow: hidden;
    overflow-y: scroll;
  }
  &:last-child {
    height: 30vh;
  }
  width: 100%;
  ${respondTo.md`
    width: 50%;
    ${gutterLeft}
    &.locations {
      height: 60vh;
    }
    &:last-child {
      height: 60vh;
      padding: 0;
      ${gutterRight}
    }
  `}
  .map {
    width: 100%;
    height: 60vh;
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
      padding: 0.5rem;
      margin: 0 0 1rem 0;
      &.active {
        color: ${COLOR.offwhite};
        background: ${COLOR.wbgreen};
      }
      div {
        font-size: 1rem;
        font-family: ${FONT.sans};
        font-weight: 500;
        font-style: 'normal';
        //letter-spacing: 0.05rem;
      }
    }
`;

const FilterMenu = styled.div`
  margin: 1.5rem 0;
  ${gutter}
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

const Button = styled.button`
  ${buttonRounded}
  margin-right: 1rem;
`;

const RetailMenu = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  ${respondTo.md`
    flex-direction: row;
  `}
`
const RetailItem = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: start;
  justify-content: center;
  ${respondTo.md`
    flex-wrap: wrap;
  `}
`

const RetailImage = styled.img`
  width: 20vw;
  mix-blend-mode: multiply;
`
const RetailLink = styled.a`
  ${linkUnderlined}
`


const MapPanel = ({ locations, retailers }) => {

  const [viewState, setViewState] = useState({
    index: 0,
    latitude: 37.8,
    longitude: -122.4,
    zoom: 12
  }); 

  const locationItems = locations.map((item, i) => (
    <li key={i} className={`${viewState.index === i ? 'active' : ''}`} onClick={() => setViewState({ index: i, latitude: item.lat.text, longitude: item.lng.text, zoom: 12 })}>
      <LocationHeading>{item?.title?.text}</LocationHeading>
      <div>{item?.address1?.text}</div>
      <div>{item?.address2?.text}</div>
      <div>{item?.phone?.text}</div>
    </li>
  ))

  const retailerItems = retailers.map((item, i) => (
    <RetailItem key={i}>
      <RetailImage src={item?.image?.url} alt='' className='img-fluid' />
      <RetailLink href={item?.url?.url}>Buy on {item?.title?.text}</RetailLink>
    </RetailItem>
  ))

  return (
    <PanelContainer className='page' style={{ backgroundColor: `${COLOR['cream']}` }}>
      <Row>
        <MapHeader>
          <Heading>Glendalough Distillery</Heading>
          <Title>Find Glendalough</Title>
        </MapHeader>
      </Row>
      <Row>
        <FilterMenu>
          <Button>Location</Button>
          <Button>Any Flavor</Button>
        </FilterMenu>
      </Row>
      <Row className='map'>
        <Panel className='locations'>
          <LocationList>
            {locationItems}
          </LocationList>
        </Panel>
        <Panel>
          <Map
            {...viewState}
            className='map'
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken='pk.eyJ1Ijoic2VvbnpvbyIsImEiOiJjbGk4ejZzZnExZ3k5M2RrYnhsaHB2cHhlIn0.TDLTRrdsalrU5XM5yhtweA'
          />
        </Panel>
      </Row>
      <Row>
        <MapFooter>
          <Heading className='left'>Glendalough Distillery</Heading>
          <Title className='left'>Buy Glendalough Online</Title>
          <p>Have a bottle of Glendalough delivered directly to you door.</p>
          <RetailMenu>
            {retailerItems}
          </RetailMenu>
        </MapFooter>
      </Row>
    </PanelContainer>
  )
};


export default MapPanel;
