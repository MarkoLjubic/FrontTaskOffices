import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import '../styles/Header.css'

function Header ({ links }) {
  return (
    <div className={'app-heading'}>
      <h2 className={'app-header'}>Offices</h2>
      <div className={'nav'}>
        {links.map(link => <NavLink to={link.link}>{link.name}</NavLink>)}
      </div>
    </div>
  );
}

Header.defaultProps = {
  links: {},
}

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}


export default Header;
