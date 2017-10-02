import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Loader.css'

function Loader ({ imageLink }) {
  return (
    <div className='loader-wrapper'>
      <div className='loader' />
    </div>
  );
}

export default Loader;
