import React, { memo } from 'react';
import './Loader.scss';

const Loader = memo(() => (
  <div className="loader-wrapper">
    <div className="loader" />
  </div>
));

export default Loader;
