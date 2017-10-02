export const axios = require('axios');

export const googleMapURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA7IsXjBoZVuf_9F8Xtn0swTg_UIeckIZo&v=3.exp&libraries=geometry,drawing,places';

export const apiURL = 'https://itk-exam-api.herokuapp.com/api/offices';

export const headerLinks = [
  {
    link: '/Offices/List',
    name: 'List',
  },
  {
    link: '/Offices/Grid',
    name: 'Grid',
  },
  {
    link: '/Offices/Map',
    name: 'Map',
  },
];
