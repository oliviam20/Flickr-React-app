import React from 'react';
import PropTypes from 'prop-types';
import './InputText.scss';

const InputText = ({
  query,
  onHandleChange,
  onHandleKeyPress
}) => (
  <input
    type="text"
    placeholder="Search..."
    value={query}
    name="search"
    className="search-bar"
    onChange={onHandleChange}
    onKeyDown={onHandleKeyPress}
  />
);

InputText.defaultProps = {
  query: ''
};

InputText.propTypes = {
  query: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired,
  onHandleKeyPress: PropTypes.func.isRequired
};

export default InputText;
