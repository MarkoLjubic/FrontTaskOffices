import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink } from 'react-router-dom';

import './App.css';
import { axios, apiURL, headerLinks } from './utilities/utilities';
import List from './containers/List';
import Grid from './containers/Grid';
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
    );
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
                <Route path={headerLinks[0].link} render={() => <List offices={this.state.offices}/>} />
                <Route path={headerLinks[1].link} render={() => <Grid offices={this.state.offices}/>} />
                <Route path={headerLinks[2].link} render={() => <Map offices={this.state.offices}/>} />
              </Switch>
          }
        </div>
      </div>
    );
  }
}

export default App;
