import React from 'react';
import PropTypes from 'prop-types';

function ListItem ({ office }) {

  return (
    <div>
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
