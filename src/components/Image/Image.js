import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  thumbnail,
  title
}) => (
  <img src={thumbnail} alt={title} />
);

Image.defaultProps = {
  thumbnail: '',
  title: ''
};

Image.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string
};

export default Image;