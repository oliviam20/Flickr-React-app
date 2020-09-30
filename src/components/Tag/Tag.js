import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

const Tag = ({
  tag,
  onHandleGetImages
}) => (
  <li>
    <button onClick={(e) => onHandleGetImages(e, tag)}>
      {tag}
    </button>
  </li>
);

Tag.defaultProps = {
  tag: ''
};

Tag.propTypes = {
  tag: PropTypes.string,
  onHandleGetImages: PropTypes.func.isRequired
};

export default Tag;
