import React, { memo } from 'react';
import './ErrorMessage.scss';

const ErrorMessage = memo(() => (
  <p className="error-text">
    Oh no! Something went wrong <span role="img" aria-label="crying-face">😭</span>
  </p>
));

export default ErrorMessage;

