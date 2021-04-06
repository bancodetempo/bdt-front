import React, { useEffect, useState } from 'react';
import './index.css';
import {
  Replay
} from './Styles';

import { Input } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Table from '../../components/Table/index';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

const Extract = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const searchName = () => { };

  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

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
          <section>
            <p>Atualizar</p>
            <Replay />
          </section>
          <FormControl >
            <InputLabel htmlFor="standard-adornment-password">PESQUISAR USUÁRIO</InputLabel>
            <Input
              id="search"
              value={searchValue}
              onChange={(evt) => handleSearch(evt)}
              placeholder="Digite um nome"
              color="secondary"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={searchName}
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </section>

        <section>
          <p className="header-subtitle">Aqui você verá com transparência todas as transações que ocorrem no Banco do Tempo de Florianópolis.</p>
        </section>
      </header>

      <Table />
    </div>
  );
};

export default Extract;
