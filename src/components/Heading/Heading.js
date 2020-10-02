import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = memo(({ text }) => <h1>{text}</h1>);

Heading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Heading;
