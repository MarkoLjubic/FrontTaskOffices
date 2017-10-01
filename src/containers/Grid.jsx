import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/Grid.css';
import GridItem from '../components/GridItem';

class Grid extends Component {
  render() {
    const { offices } = this.props;
    console.log(offices);
    return (
      <div className='grid'>
        {offices.map( office => <GridItem key={office.id} office={office} />)}
      </div>
    );
  }
}

Grid.defaultProps = {
  offices: [],
};

Grid.propTypes = {
  offices: PropTypes.arrayOf(PropTypes.object),
};


export default Grid;
