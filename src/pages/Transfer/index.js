import React, { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { Endpoints } from 'utils/Endpoints';
import CardActions from '@material-ui/core/CardActions';
import Autocomplete from 'components/Autocomplete/AsyncAutocomplete';
import InputOrder from 'components/Input/index';

import * as Fn from 'utils/functions';

import {
  OrderSubtitle,
  OrderTitle,
  OrderContent,
  Button
} from './Styles';

import Clock from 'img/clock.svg';
import Swap from 'img/repeat.svg';
import Arrow from 'img/arrow.png';

import useForm from 'hooks/Form';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import OrderSection from 'components/OrderSection/index';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Transfer = (props) => {
  const [openSucess, setOpenSucess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [sucessMessage, setSucessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const { form, onChange, resetForm } = useForm({
    requester: '',
    grantor: '',
    hours: '',
    description: ''
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
    setOpenSucess(false);
  };

  useEffect(() => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: location.pathname });
  }, [location, dispatch]);

  const submitForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = async () => {
    const source = form.requester.account.id;
    const destination = form.grantor.account.id;

    if (source === destination) {
      return alert('O nome do Remetente e do Destinatário não podem ser iguais! Por favor escolha os nomes corretos');
    } else {
      const body = {
        source_account_id: source,
        destination_account_id: destination,
        amount: Fn.hoursToSeconds(form.hours),
        description: form.description
      };
      axios
        .post(Endpoints.orders, body)
        .then((res) => {
          setSucessMessage('Transferência foi realizada com sucesso!');
          setOpenSucess(true);
          resetForm();
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage('Algo deu errado. Por favor tente novamente');
          setOpenError(true);
        });
    }
  };

  return (
    <div className="transfer-container">
      <OrderContent>
        <OrderTitle
          color="textSecondary"
          gutterBottom
        >
          Transação de Horas
        </OrderTitle>
        <OrderSubtitle>
          Realizou uma troca pelo Banco do Tempo? Faça aqui sua transferência
          de créditos.
        </OrderSubtitle>
        <form onSubmit={submitForm}>
          <section className="container-input">
            <OrderSection
              title={'De'}
              text={<p>Insira o nome de quem <b>pediu</b> o serviço</p>}
              slot={
                <Autocomplete
                  value={form.requester}
                  onChange={(event, value) => {
                    onChange('requester', value);
                  }}
                  placeholder={'Nome do requisitante'}
                />
              }
            />

            <img id="arrow" src={Arrow} alt="Arrow icon" />

            <OrderSection
              title={'Para'}
              text={<p>Insira o nome de quem <b>realizou</b> o serviço</p>}
              slot={
                <Autocomplete
                  value={form.grantor}
                  onChange={(event, value) => {
                    onChange('grantor', value);
                  }}
                  placeholder={'Nome do concedente'}
                />
              }
            />
          </section>

          <hr />

          <section className="container-input">
            <OrderSection
              image={Clock}
              title={'Horas'}
              text={'Quantas horas em divisão de 0,5'}
              slot={
                <InputOrder
                  type={'number'}
                  placeholder={'0.0'}
                  name={'hours'}
                  onChange={handleChange}
                  value={form.hours}
                  width={'22vw'}
                  step={0.5}
                  min={0}
                />
              }
            />
            <OrderSection
              image={Swap}
              title={'O que foi trocado'}
              text={'Que serviço, produto ou ajuda'}
              slot={
                <InputOrder
                  placeholder={'Descrição'}
                  name={'description'}
                  onChange={handleChange}
                  value={form.description}
                  width={'22vw'}
                />
              }
            />
          </section>
        </form>
      </OrderContent>

      <CardActions>
        <Button onClick={handleSubmit}>
          SOLICITAR
        </Button>
      </CardActions>

      <Snackbar open={openSucess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {sucessMessage}
        </Alert>
      </Snackbar>

      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Transfer;
