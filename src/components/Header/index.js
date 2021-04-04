import React from 'react';
import './index.css';

import TabNavigation from '../TabNavigation';
import Hourglass from '../../img/hourglass.png';
import Logo from '../../img/logo.png';

const Header = () => <div className="header">
  <section>
    <img src={Hourglass} alt="Hourglass emoji" />
    <img src={Logo} alt="Logo" />
  </section>

  <section>
    <TabNavigation path={'/'} title={'Transação de Horas'} />
    <TabNavigation path={'/saldo'} title={'Verificar Meu Saldo'} />
    <TabNavigation path={'/extrato'} title={'Extrato'} />
  </section>
</div>;

export default Header;
