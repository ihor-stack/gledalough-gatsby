import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import { COLOR, FONT } from '../constants';
import ic_instagram from '../assets/ic_instagram.png';
import ic_facebook from '../assets/ic_facebook.png';
import ic_twitter from '../assets/ic_twitter.png';

const SocialList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const SocialItem = styled.li`
  display: flex;
  margin-right: 1rem;
  cursor: pointer;
  a {

    text-decoration: none;
    border-bottom: none;
  }
  a:hover, a:focus, a:active {
    text-decoration: none;
    border-bottom: none;
  }
  img {
    max-width: 1.6rem;
  }
`;

const SocialNav = ({className}) => {

    const items = [
        { title: 'Instagram', url: `https://instagram.com/`, image: ic_instagram},
        { title: 'Facebook', url: `https://facebook.com/`, image: ic_facebook},
        { title: 'Twitter', url: `https://twitter.com/`, image: ic_twitter},
    ];

    return (
        <SocialList className={className}>
            {items.map((item, i) => (
                <SocialItem key={i}>
                    <Link to={item.url} target='_blank'><img src={ item.image } alt={`${item.title}`} /></Link>
                </SocialItem>
            ))}
        </SocialList>
    )
};

SocialNav.propTypes = {
    className: PropTypes.string,
};

export default SocialNav;