import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Item.css'
import Avatar from './Avatar';

function Item ({ office, direction }) {
  const toLong = direction === 'list'
    ? office.description.length > 60
    : office.description.length > 90;
  return (
    <div className={`${direction}-item`}>
      <div className={`${direction === 'grid' ? 'grid-avatar-wrapper' : ''}`}>
        <Avatar photo={office.photo} name={office.name}/>
      </div>
      <div className={`${direction}-item-main`}>
        <div className={`${direction}-item-main-name`}>
          {office.name}
        </div>
        <div className={`${direction}-item-main-description`}>
          {toLong
            ? <div>{office.description.slice(0, 60)}...</div>
            : office.description
          }
        </div>
      </div>
    </div>
  );
}

Item.defaultProps = {
  photo: '',
}

Item.propTypes = {
  office: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    description: PropTypes.string.isRequired,
  }),
  direction: PropTypes.string.isRequired,
}


export default Item;
