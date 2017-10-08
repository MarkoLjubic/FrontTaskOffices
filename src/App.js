import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import { apiURL, headerLinks } from './utilities/config';
import List from './containers/List';
import { Map } from './containers/Map';
import Header from './components/Header';
import Loader from './components/Loader';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      offices: [],
      loaderShow: true,
    }

    this.getOfficies = this.getOfficies.bind(this);
  }

  componentDidMount() {
    this.getOfficies();
  }

  getOfficies() {
    axios
    .get(apiURL)
    .then(response => this.setState({
        offices: response.data,
        loaderShow: false,
      })
    )
    .catch( error =>  console.log(error));
  }

  render() {
    return (
      <div className={'app'}>
        <Header links={headerLinks} />
        <div className='route-wrapper'>
          {this.state.loaderShow
            ? <Loader />
            : <Switch>
                <Redirect exact from='/' to='/Offices/List' />
                <Route path={headerLinks.List.link} render={() => <List offices={this.state.offices} direction='list'/>} />
                <Route path={headerLinks.Grid.link} render={() => <List offices={this.state.offices} direction='grid'/>} />
                <Route path={headerLinks.Map.link} render={() => <Map offices={this.state.offices}/>} />
              </Switch>
          }
        </div>
      </div>
    );
  }
}

export default App;
