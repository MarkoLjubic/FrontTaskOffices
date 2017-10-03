import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Avatar.css'

function Avatar ({ photo, name }) {
  return (
    <div className='avatar'>
      {photo
        ? <img src={photo} alt='office' />
        : <div className='no-avatar'>{name.slice(0,1).toUpperCase()}</div>
      }
    </div>
  );
}

Avatar.defaultProps = {
  photo: '',
}

Avatar.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
}


export default Avatar;
