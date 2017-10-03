import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/List.css';
import Item from '../components/Item';

class List extends Component {
  render() {
    const { offices, direction } = this.props;
    return (
      <div className={`${direction}`}>
        {offices.map( office => <Item key={office.id} office={office} direction={direction} />)}
      </div>
    );
  }
}

List.defaultProps = {
  offices: [],
  direction: 'list',
};

List.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object),
  direction: PropTypes.string,
};


export default List;
