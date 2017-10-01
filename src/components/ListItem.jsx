import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

function ListItem ({ office }) {

  return (
    <div>
      <div>
        {office.photo
          ? <Avatar imageLink={office.photo} />
        : <div className='No-avatar'></div>  
        }
      </div>
      <div>
        {office.name}
      </div>
      <div>
        {office.description}
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
