import React from 'react';
import './HeaderLogo.scss';
import logo from './img/Logo.png';

const HeaderLogo = () => (
  <div className="HeaderLogo HeaderLogo_padding">
    <img className="HeaderLogo__logo" src={logo} alt="Лого" />
  </div>
);

export default HeaderLogo;
