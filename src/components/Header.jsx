import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../styles/Header.css'

function Header ({ links }) {
  return (
    <div className={'app-heading'}>
      <h2 className={'app-header'}>Offices</h2>
      <div className={'nav'}>
        {Object.keys(links).map(key => <NavLink key={links[key].name} to={links[key].link}>{links[key].name}</NavLink>)}
      </div>
    </div>
  );
}

Header.defaultProps = {
  links: {},
}

Header.propTypes = {
  links: PropTypes.object,
}


export default Header;
