import React from 'react';
import './Components.css';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Clock from 'img/clock.svg';
import Swap from 'img/repeat.svg';
import Arrow from 'img/arrow.png';

import useForm from 'hooks/Form';

const transactionEndpoint = process.env.REACT_APP_BACKEND_URL + '/api/v0/orders/';

const Transaction = () => {
  const { form, onChange, resetForm } = useForm({
    formFrom: '',
    formTo: '',
    formHours: '',
    formWhat: ''
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
      requester: form.formFrom,
      grantor: form.formTo,
      order_price: form.formHours,
      description: form.formWhat
    };
    axios
      .post(transactionEndpoint, body)
      .then(res => {
        console.log(res);
        resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Card style={{ height: '75vh' }}>
      <p id="title-form">Transação de Horas</p>
      <p id="subtitle-form">Realizou uma troca pelo Banco do Tempo? Faça aqui sua transferência de créditos.</p>
      <Form
        onSubmit={submitForm}
        style={{ textAlign: 'left' }}
      >
        <Form.Row style={{ alignItems: 'center' }}>
          <Form.Group as={Col} controlId="formFrom">
            <Form.Label><b>De</b></Form.Label>
            <Form.Text>Insira o email de quem <b>pediu</b> o serviço</Form.Text>
            <Form.Control
              required
              name="formFrom"
              type="email"
              placeholder="Email de origem"
              onChange={handleChange}
              value={form.formFrom}
            />
          </Form.Group>

          <img id='arrow' src={Arrow} alt='Arrow icon'/>

          <Form.Group as={Col} controlId="formTo">
            <Form.Label><b>Para</b></Form.Label>
            <Form.Text>Insira o email de quem <b>realizou</b> o serviço</Form.Text>
            <Form.Control
              name="formTo"
              type="email"
              placeholder="Email de destino"
              onChange={handleChange}
              value={form.formTo}
            />
          </Form.Group>
        </Form.Row>
        <br />
        <hr />
        <br />
        <Form.Row>
          <Form.Group as={Col} controlId="formHours">
            <Form.Label>
              <img src={Clock} className='icone-troca' alt="Clock icon" />
              <b>Horas</b>
            </Form.Label>
            <Form.Text>Quantas horas em divisão de 0.5</Form.Text>
            <Form.Control
              name="formHours"
              type="number"
              step="0.5"
              min="0"
              placeholder="0.0"
              onChange={handleChange}
              value={form.formHours}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formWhat">
            <Form.Label>
              <img src={Swap} className='icone-troca' alt="Swap icon" />
              <b>O que foi trocado</b>
            </Form.Label>
            <Form.Text>Que serviço, produto ou ajuda</Form.Text>
            <Form.Control
              name="formWhat"
              type="text"
              onChange={handleChange}
              value={form.formWhat}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row style={{ justifyContent: 'center' }} >
          <Button onClick={handleSubmit} variant="danger">
            Solicitar
          </Button>
        </Form.Row>
        <br />
      </Form>
    </Card>
  );
};

export default Transaction;
