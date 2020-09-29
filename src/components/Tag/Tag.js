import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';

const Tag = ({
  tag
}) => (
  <li>{tag}</li>
)

Tag.defaultProps = {
  tag: ''
}

Tag.propTypes = {
  tag: PropTypes.string
}

export default Tag;
