import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/List.css';
import ListItem from '../components/ListItem';

class List extends Component {
  render() {
    const { offices } = this.props;
    console.log(offices);
    return (
      <div>
        {offices.map( office => <ListItem key={office.id} office={office} />)}
      </div>
    );
  }
}

List.defaultProps = {
  offices: [],
};

List.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object),
};


export default List;
