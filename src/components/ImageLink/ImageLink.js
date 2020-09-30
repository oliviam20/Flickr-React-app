import React from 'react';
import PropTypes from 'prop-types';
import './ImageLink.scss';

const ImageLink = ({
  link,
  thumbnail,
  title
}) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    <img className="image" src={thumbnail} alt={title} />
    <div className="overlay">
      <span className="overlay-text">Open</span>
    </div>
  </a>
);

ImageLink.defaultProps = {
  thumbnail: '',
  title: ''
};

ImageLink.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string
};

export default ImageLink;