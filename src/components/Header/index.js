import React from 'react';
import './index.css';
import HourGlass from 'img/hourglass.png';

const Header = () =>
  <div className="title">
    <img src={HourGlass}
      alt="Hourglass emoji"
      style={{ height: '2em' }}
    /> &nbsp;&nbsp;
    <p><b>Banco de Tempo</b> Florianópolis</p>
  </div>;

export default Header;
