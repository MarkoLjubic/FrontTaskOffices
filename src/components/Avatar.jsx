import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Avatar.css'

function Avatar ({ imageLink }) {
  return (
    <div className='avatar'>
      <img src={imageLink} alt='office' />
    </div>
  );
}

Avatar.propTypes = {
  imageLink: PropTypes.string.isRequired,
}


export default Avatar;
