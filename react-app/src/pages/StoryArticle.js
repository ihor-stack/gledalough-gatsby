import React from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const StoryArticle = () => {
  const { slug } = useParams('slug');
  return <h1>Article {slug}</h1>;
};
// StoryArticle.propTypes = {
//   slug: PropTypes.string,
// };

export default StoryArticle;
