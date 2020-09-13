import React, { useState } from 'react';
import './Components.css';
import axios from 'axios';
import { Endpoints } from 'Endpoints';
import { createMuiTheme, ThemeProvider, withTheme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonM from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';


import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import Clock from 'img/clock.svg';
import Swap from 'img/repeat.svg';
import Arrow from 'img/arrow.png';

import useForm from 'hooks/Form';

const useStyles = makeStyles({
  root: {
    width: "54vw",
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2%",
  },
  content: {
    width: "90%",
    padding: "0",
  },
  title: {
    fontFamily: "IBM Plex Sans",
    fontWeight: "bold",
    fontSize: "2.5vw",
    lineHeight: "42px",
    color: "#19B7E6",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: "5vh",
    fontFamily: "Roboto",
    fontWweight: "normal",
    fontSize: "1vw",
    lineHeight: "19px",
    color: "#4F4F4F",
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#EB5757",
    borderRadius: "4px",
    color: "white",
    width: "20vw",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#973737",
    }
  },
  input: {
    width: "20vw",
    height: "7vh",
  },
});

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#037fff",
      contrastText: "#fff",
      main: "#8FDFF4",
      dark: '#10121b'
    }
  },
});

const inputProps = {
  step: 0.5,
  min: 0
};

const Order = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const { form, onChange, resetForm } = useForm({
    requester: '',
    grantor: '',
    orderPrice: '',
    description: ''
  });

  const submitForm = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = async () => {
    const body = {
      requester: form.requester,
      grantor: form.grantor,
      order_price: form.orderPrice,
      description: form.description
    };
    axios
      .post(Endpoints.orders, body)
      .then(res => {
        console.log(res);
        resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={MyTheme}>
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
          <form>
            <section className="container-input">
              <article>
                <p className="title-input">De</p>
                <p className="subtitle-input">
                  Insira o email de quem <b>pediu</b> o serviço
                </p>
                <TextField
                  required
                  placeholder="Nome da pessoa"
                  variant="filled"
                  className={classes.input}
                />
              </article>
              <img id="arrow" src={Arrow} alt="Arrow icon" />
              <article>
                <p className="title-input">Para</p>
                <p className="subtitle-input">
                  Email de quem <b>pediu</b> o serviço
                </p>
                <TextField
                  required
                  placeholder="E-mail de destino"
                  variant="filled"
                  className={classes.input}
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
                />
              </article>
              <article>
                <img src={Swap} className="icone-troca" alt="Swap icon" />
                <span className="title-input">O que foi trocado</span>
                <p className="subtitle-input">Que serviço, produto ou ajuda</p>
                <TextField
                  required
                  placeholder="Nome da pessoa"
                  variant="filled"
                  className={classes.input}
                />
              </article>
            </section>
          </form>
        </CardContent>
        <CardActions>
          <ButtonM className={classes.button}>SOLICITAR</ButtonM>
        </CardActions>
      </Card>
    </ThemeProvider>
    // <Card style={{ height: '75vh' }}>
    //   <p id="title-form">Transação de Horas</p>
    //   <p id="subtitle-form">Realizou uma troca pelo Banco do Tempo? Faça aqui sua transferência de créditos.</p>
    //   <Form
    //     onSubmit={submitForm}
    //     style={{ textAlign: 'left' }}
    //   >
    //     <Form.Row style={{ alignItems: 'center' }}>
    //       <Form.Group as={Col} controlId="requester">
    //         <Form.Label><b>De</b></Form.Label>
    //         <Form.Text>Insira o email de quem <b>pediu</b> o serviço</Form.Text>
    //         <AsyncTypeahead
    //           id="requester"
    //           placeholder="Nome do requisitante"
    //           isLoading={isLoading}
    //           labelKey={option => `${option.first_name} ${option.last_name}`}
    //           onSearch={(query) => {
    //             setIsLoading(true);
    //             fetch(Endpoints.users + query)
    //               .then(resp => resp.json())
    //               .then(json => {
    //                 setOptions(json);
    //                 setIsLoading(false);
    //               });
    //           }
    //           }
    //           options={options}
    //           onChange={(evt) => { form.requester = evt.length && evt[0].id; } }
    //         />
    //       </Form.Group>

    //       <img id='arrow' src={Arrow} alt='Arrow icon'/>

    //       <Form.Group as={Col} controlId="grantor">
    //         <Form.Label><b>Para</b></Form.Label>
    //         <Form.Text>Insira o email de quem <b>realizou</b> o serviço</Form.Text>
    //         <AsyncTypeahead
    //           id="grantor"
    //           placeholder="Nome do concedente"
    //           isLoading={isLoading}
    //           labelKey={option => `${option.first_name} ${option.last_name}`}
    //           onSearch={(query) => {
    //             setIsLoading(true);
    //             fetch(Endpoints.users + query)
    //               .then(resp => resp.json())
    //               .then(json => {
    //                 setOptions(json);
    //                 setIsLoading(false);
    //               });
    //           }
    //           }
    //           options={options}
    //           onChange={(evt) => { form.grantor = evt.length && evt[0].id; } }
    //         />
    //       </Form.Group>
    //     </Form.Row>
    //     <br />
    //     <hr />
    //     <br />
    //     <Form.Row>
    //       <Form.Group as={Col} controlId="orderPrice">
    //         <Form.Label>
    //           <img src={Clock} className='icone-troca' alt="Clock icon" />
    //           <b>Horas</b>
    //         </Form.Label>
    //         <Form.Text>Quantas horas em divisão de 0.5</Form.Text>
    //         <Form.Control
    //           name="orderPrice"
    //           type="number"
    //           step="0.5"
    //           min="0"
    //           placeholder="0.0"
    //           onChange={handleChange}
    //           value={form.orderPrice}
    //         />
    //       </Form.Group>
    //       <Form.Group as={Col} controlId="description">
    //         <Form.Label>
    //           <img src={Swap} className='icone-troca' alt="Swap icon" />
    //           <b>O que foi trocado</b>
    //         </Form.Label>
    //         <Form.Text>Que serviço, produto ou ajuda</Form.Text>
    //         <Form.Control
    //           name="description"
    //           type="text"
    //           onChange={handleChange}
    //           value={form.description}
    //         />
    //       </Form.Group>
    //     </Form.Row>

    //     <Form.Row style={{ justifyContent: 'center' }} >
    //       <Button onClick={handleSubmit} variant="danger">
    //         Solicitar
    //       </Button>
    //     </Form.Row>
    //     <br />
    //   </Form>
    // </Card>
  );
};

export default Order;
