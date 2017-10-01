import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';

function GridItem ({ office }) {
  const toLong = office.description.length > 60;
  return (
    <div>
      <div>
        {office.photo
          ? <Avatar imageLink={office.photo} />
        : <div>{office.name.slice(0,1).toUpperCase()}</div>
        }
      </div>
      <div>
        <div>
          {office.name}
        </div>
        <div>
          {toLong
            ? <div>{office.description.slice(0, 60)}...</div>
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
