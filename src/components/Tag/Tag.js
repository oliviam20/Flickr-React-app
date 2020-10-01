import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

const Tag = ({
  tag,
  onHandleSearch
}) => {
  const handleGetImages = () => {
    onHandleSearch(tag)
  }
  return (
    <li>
      <button onClick={handleGetImages}>
        {tag}
      </button>
    </li>
  );
};

Tag.defaultProps = {
  tag: ''
};

Tag.propTypes = {
  tag: PropTypes.string,
  onHandleSearch: PropTypes.func.isRequired
};

export default Tag;
