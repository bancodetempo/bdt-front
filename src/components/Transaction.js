import React from 'react';
import './Transaction.css';

import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import useForm from './../hooks/Formulario';

const Transaction = () =>{

  const { form, onChange, resetForm } = useForm({
    formFrom: '',
    formTo: '',
    formHours: '',
    formWhat: '',
  });

  const submitForm = event => {
    event.preventDefault()
  }

  
  const handleChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = async() =>{
    const body = {
      formFrom: form.formFrom,
      formTo: form.formTo,
      formHours: form.formHours,
      formWhat: form.formWhat
    }
    axios
      .post('http://localhost:8000/api/v0/transaction', body)
      .then(res =>{
        console.log(res)
        resetForm()
      })
      .catch(err => {
        console.log(err);
      });
  }

  return(
    <Card>
      <Form
        onSubmit={submitForm}
        style={{ textAlign: "left" }}
      >
        <Form.Row>
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

          <Form.Group as={Col} controlId="formTo">
            <Form.Label><b>Para</b></Form.Label>
            <Form.Text>Insira o email de quem <b>realizou</b> o serviço</Form.Text>
            <Form.Control 
              name="formTo" 
              type="email" 
              placeholder="Email de destino"
              onChange={handleChange} 
              value={form.formTo}
        console.log(res)
            />
          </Form.Group>
        </Form.Row>
        <br />
        <hr />
        <br />
        <Form.Row>
          <Form.Group as={Col} controlId="formHours">
            <Form.Label>
              <img src={process.env.PUBLIC_URL + '/hourglass.png'}
                alt="Hourglass emoji"
                style={{ height: "2em", width: "2em" }}
              />
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
              <img src={process.env.PUBLIC_URL + '/shaka.png'}
                alt="Shaka emoji"
                style={{ height: "2em", width: "2em" }}
              />
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

        <Form.Row style={{ justifyContent: "center" }} >
          <Button onClick={handleSubmit} variant="danger">
            Solicitar
            </Button>
        </Form.Row>
        <br />
      </Form>
    </Card>
  )
}

export default Transaction;