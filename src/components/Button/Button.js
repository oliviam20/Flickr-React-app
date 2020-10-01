import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  className,
  onClick
}) => (
  <button
    type="submit"
    name="search"
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
