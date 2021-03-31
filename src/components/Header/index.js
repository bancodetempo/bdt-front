import React, { useState } from 'react';
import './index.css';
import TabNavigation from '../TabNavigation';
import Hourglass from '../../img/hourglass.png';
import Logo from '../../img/logo.png';

const Header = () => {
  const [tabActive] = useState(true);

  return (
    <div className="header">
      <section>
        <img src={Hourglass} alt="Hourglass emoji" />
        <img src={Logo} alt="Logo" />
      </section>

      <section>
        <TabNavigation page={'/'} isActive={tabActive} title={'Transação de Horas'} />
        <TabNavigation page={'/saldo'} isActive={false} title={'Verificar Meu Saldo'} />
        <TabNavigation page={'/extrato'} isActive={false} title={'Extrato'} />
      </section>
    </div>
  );
};

export default Header;
