import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Tag.scss';

const Tag = ({
  tag,
  onHandleSearch
}) => {
  const handleGetImages = (e) => {
    onHandleSearch(e, tag)
  }
  return (
    <li>
      <Button
        className="tag-button"
        onClick={handleGetImages}
      >
        {tag}
      </Button>
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
