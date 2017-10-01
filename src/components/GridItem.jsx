import React from 'react';
import PropTypes from 'prop-types';

import '../styles/GridItem.css';
import Avatar from './Avatar';

function GridItem ({ office }) {
  const toLong = office.description.length > 90;
  return (
    <div className='grid-item'>
      <div className='grid-avatar-wrapper'>
        {office.photo
          ? <Avatar imageLink={office.photo} />
        : <div className='no-avatar'>{office.name.slice(0,1).toUpperCase()}</div>
        }
      </div>
      <div className='grid-item-main'>
        <div className='grid-item-main-name'>
          {office.name}
        </div>
        <div className='grid-item-main-description'>
          {toLong
            ? <div>{office.description.slice(0, 90)}...</div>
            : office.description
          }
        </div>
      </div>
    </div>
  );
}

GridItem.defaultProps = {
  office: {},
}

GridItem.propTypes = {
  office: PropTypes.object,
}


export default GridItem;
