import React from 'react';
import PropTypes from 'prop-types';

import '../styles/ListItem.css'
import Avatar from './Avatar';

function ListItem ({ office }) {
  const toLong = office.description.length > 60;
  return (
    <div className='list-item'>
      <div>
        {office.photo
          ? <Avatar imageLink={office.photo} />
        : <div className='no-avatar'>{office.name.slice(0,1).toUpperCase()}</div>
        }
      </div>
      <div className='list-item-main'>
        <div className='list-item-main-name'>
          {office.name}
        </div>
        <div className='list-item-main-description'>
          {toLong
            ? <div>{office.description.slice(0, 60)}...</div>
            : office.description
          }
        </div>
      </div>
    </div>
  );
}

ListItem.defaultProps = {
  office: {},
}

ListItem.propTypes = {
  office: PropTypes.object,
}


export default ListItem;
