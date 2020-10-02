import React, { memo } from 'react';
import './Error.scss';

const Error = memo(() => (
  <p className="error-text">
    Oh no! Something went wrong <span role="img" aria-label="crying-face">😭</span>
  </p>
));

export default Error;
