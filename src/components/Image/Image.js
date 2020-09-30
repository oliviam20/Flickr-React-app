import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({
  link,
  thumbnail,
  title
}) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    <img className="image" src={thumbnail} alt={title} />
    <div className="overlay">
      <p className="overlay-text">Open</p>
    </div>
  </a>
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