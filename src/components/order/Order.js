import React from 'react';

import axios from 'axios';
import '../Components.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { Styles, Theme } from './Styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonM from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Clock from 'img/clock.svg';
import Swap from 'img/repeat.svg';
import Arrow from 'img/arrow.png';

import useForm from 'hooks/Form';

import Autocomplete from './Autocomplete';

const inputProps = {
  step: 0.5,
  min: 0
};

const Order = (props) => {
  const classes = Styles();

  const { form, onChange, resetForm } = useForm({
    requester: null,
    grantor: null,
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
      .post('https://bdt-backend.herokuapp.com/api/v0/orders/', body)
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
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Transação de Horas
          </Typography>
          <Typography className={classes.subtitle}>
            Realizou uma troca pelo Banco do Tempo? Faça aqui sua transferência
            de créditos.
          </Typography>
          <form onSubmit={submitForm}>
            <section className="container-input">
              <article>
                <p className="title-input">De</p>
                <p className="subtitle-input">
                  Insira o nome de quem <b>pediu</b> o serviço
                </p>
                <Autocomplete
                  value={form.requester}
                  onChange={ (event, value) => {
                    onChange('requester', value);
                  }}
                  placeholder="Nome do requisitante"
                />
              </article>
              <img id="arrow" src={Arrow} alt="Arrow icon" />
              <article>
                <p className="title-input">Para</p>
                <p className="subtitle-input">
                  Insira o nome de quem <b>realizou</b> o serviço
                </p>
                <Autocomplete
                  value={form.grantor}
                  onChange={ (event, value) => {
                    onChange('grantor', value);
                  }}
                  placeholder="Nome do concedente"
                />
              </article>
            </section>

            <hr />

            <section className="container-input">
              <article>
                <img src={Clock} className="icone-troca" alt="Clock icon" />
                <span className="title-input">Horas</span>
                <p className="subtitle-input">
                  Quantas horas em divisão de 0.5
                </p>
                <TextField
                  required
                  type="number"
                  variant="filled"
                  className={classes.input}
                  inputProps={inputProps}
                  placeholder="0.0"
                  name="orderPrice"
                  onChange={handleChange}
                  value={form.orderPrice}
                />
              </article>
              <article>
                <img src={Swap} className="icone-troca" alt="Swap icon" />
                <span className="title-input">O que foi trocado</span>
                <p className="subtitle-input">Que serviço, produto ou ajuda</p>
                <TextField
                  required
                  placeholder="Descrição"
                  variant="filled"
                  className={classes.input}
                  name="description"
                  onChange={handleChange}
                  value={form.description}
                />
              </article>
            </section>
          </form>
        </CardContent>
        <CardActions>
          <ButtonM onClick={handleSubmit} className={classes.button}>
            SOLICITAR
          </ButtonM>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}; ;

export default Order;
