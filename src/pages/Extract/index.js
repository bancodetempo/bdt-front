import React, { useEffect, useState } from 'react';
import './index.css';

import Autocomplete from 'components/Autocomplete/AsyncAutocomplete';

import Table from '../../components/Table/index';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

const Extract = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [user, setUserSearch] = useState();

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: location.pathname });
  }, [location, dispatch]);

  return (
    <div className="extract">
      <header className="header-extract">
        <section>
          <p className="header-title">Extrato</p>
        </section>

        <section className="header-update">
          <Autocomplete
            id="search"
            value={user}
            onChange={(event, user) => {
              setUserSearch(user);
            }}
            placeholder={'Digite um nome'}
          />
        </section>

        <section>
          <p className="header-subtitle">Aqui você verá com transparência todas as transações que ocorrem no Banco do Tempo de Florianópolis.</p>
        </section>
      </header>

      <Table user={user}/>
    </div>
  );
};

export default Extract;
