import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';

import './App.css';
import { axios } from './utilities/utilities';
import List from './containers/List';
import Grid from './containers/Grid';
import Map from './containers/Map';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      offices: [],
    }

    this.getOfficies = this.getOfficies.bind(this);
  }

  componentDidMount() {
    this.getOfficies();
  }

  getOfficies() {
    axios.get('https://itk-exam-api.herokuapp.com/api/offices').then(response => this.setState({offices: response.data}))
  }

  render() {
    return (
      <div className={'app'}>
        <div className={'app-heading'}>
          <h2 className={'app-header'}>Offices</h2>
          <div className={'nav'}>
              <NavLink to={'/Offices/List'}>List</NavLink>
              <NavLink to={'/Offices/Grid'}>Grid</NavLink>
              <NavLink to={'/Offices/Map'}>Map</NavLink>
          </div>
        </div>
        <div className='route-wrapper'>
          <Switch>
            <Redirect exact from='/' to='/Offices/List' />
            <Route path='/Offices/List' render={() => <List offices={this.state.offices}/>} />
            <Route path='/Offices/Grid' render={() => <Grid offices={this.state.offices}/>} />
            <Route path='/Offices/Map' render={() => <Map />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
