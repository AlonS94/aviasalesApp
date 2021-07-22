import React from 'react';
import './HeaderLogo.scss';
import logo from '../../assets/headerImg/Logo.png';

const HeaderLogo = () => (
  <div className="HeaderLogo HeaderLogo_padding">
    <img className="HeaderLogo__logo" src={logo} alt="Лого" />
  </div>
);

export default HeaderLogo;
