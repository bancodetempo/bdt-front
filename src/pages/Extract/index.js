import React, { useEffect, useState } from 'react';
import './index.css';

import axios from 'axios';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { Endpoints } from 'utils/Endpoints';

import Autocomplete from 'components/Autocomplete/AsyncAutocomplete';

import Table from '../../components/Table/index';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { secondToHours } from 'utils/functions';

const Extract = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [user, setUserSearch] = useState();
  const [balance, setBalance] = useState(undefined);

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: location.pathname });
  }, [location, dispatch]);

  useEffect(() => {
    if (user !== undefined && user.length !== 0) {
      axios
        .get(`${Endpoints.balance}${user.account.id}`)
        .then((res) => {
          setBalance(secondToHours(Number(res.data)));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const clearUser = () => {
    setUserSearch();
    setBalance(undefined);
  };

  console.log('USUÁRIOO', user);

  return (
    <div className="extract">
      <header className="header-extract">
        <section>
          <p className="header-title">Extrato</p>
        </section>

        <section className="search-user">
          <Autocomplete
            id="search"
            value={ user === undefined ? '' : user }
            onChange={(event, user) => {
              setUserSearch(user);
            }}
            placeholder={'Digite um nome'}
          />
          <Button
            onClick={clearUser}
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Limpar
          </Button>
        </section>

        <section>
          <p className="header-subtitle">Aqui você verá com transparência todas as transações que ocorrem no Banco do Tempo de Florianópolis.</p>
        </section>

        <section>
          {
            balance !== undefined
              ? <p>{user.name} possui <span>{balance}</span> horas</p>
              : <h5>Pesquise um usuário para visualizar o seu saldo</h5>
          }
        </section>
      </header>

      <Table user={user} />
    </div>
  );
};

export default Extract;
