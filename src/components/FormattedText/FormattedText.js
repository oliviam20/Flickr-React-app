import React, { memo } from 'react';
import PropTypes from 'prop-types';

const FormattedText = memo(({ text }) => <p>{text.match(/"(.*?)"/)[1]}</p>);

FormattedText.defaultProps = {
  text: ''
};

FormattedText.propTypes = {
  text: PropTypes.string
};

export default FormattedText;
