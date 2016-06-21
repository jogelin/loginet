import React from 'react';
//import MAppBar from 'material-ui/AppBar';

const NavBar = () => (
  <nav className="transparent">
    <a href="#" className="brand">
      <img className="logo" src="/assets/img/logo.png" />
    </a>

    <input id="bmenub" type="checkbox" className="show" />
    <label for="bmenub" className="burger pseudo button">menu</label>

    <div className="menu">
      <a href="#" className="button">Demo</a>
      <a href="#">Plugins</a>
    </div>
  </nav>
);

export default NavBar;
