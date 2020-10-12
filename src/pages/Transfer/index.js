import React from 'react';
import './index.css';

import axios from 'axios';
import { Endpoints } from 'Endpoints';

import { ThemeProvider } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';

import Autocomplete from 'components/Autocomplete/AsyncAutocomplete';
import InputOrder from 'components/Input/index';

import {
  OrderSubtitle,
  OrderTitle,
  OrderContent,
  CardOrder,
  Button,
  Theme
} from './Styles';

import Clock from 'img/clock.svg';
import Swap from 'img/repeat.svg';
import Arrow from 'img/arrow.png';

import useForm from 'hooks/Form';

import OrderSection from 'components/OrderSection/index';

const Transfer = (props) => {
  const { form, onChange, resetForm } = useForm({
    requester: '',
    grantor: '',
    orderPrice: '',
    description: ''
  });

  const submitForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = async () => {
    const body = {
      requester: form.requester.id,
      grantor: form.grantor.id,
      order_price: form.orderPrice,
      description: form.description
    };
    axios
      .post(Endpoints.orders, body)
      .then((res) => {
        console.log(res);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={Theme}>
      <CardOrder>

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
                    name={'orderPrice'}
                    onChange={handleChange}
                    value={form.orderPrice}
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

      </CardOrder>
    </ThemeProvider>
  );
};

export default Transfer;
