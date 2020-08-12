import React from 'react';
import './Transaction.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Transaction extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    for (let name in this.state) {
      formData.append(name, this.state[name]);
    }

    await fetch('http://localhost:8000/api/v0/transaction', {
      method: 'POST',
      body: formData
    });
  }

  render() {
    return (
      <Card>
        <Form
          onSubmit={this.handleSubmit}
          style={{textAlign: "left"}}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="formFrom">
              <Form.Label><b>De</b></Form.Label>
              <Form.Text>Insira o email de quem <b>pediu</b> o serviço</Form.Text>
              <Form.Control name="formFrom" type="email" placeholder="Email de origem"
                onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formTo">
              <Form.Label><b>Para</b></Form.Label>
              <Form.Text>Insira o email de quem <b>realizou</b> o serviço</Form.Text>
              <Form.Control name="formTo" type="email" placeholder="Email de destino"
                onChange={this.handleChange}/>
            </Form.Group>
          </Form.Row>
          <br/>
          <hr/>
          <br/>
          <Form.Row>
            <Form.Group as={Col} controlId="formHours">
              <Form.Label>
                <img src={process.env.PUBLIC_URL + '/hourglass.png'}
                  alt="Hourglass emoji"
                  style={{height: "2em", width: "2em"}}
                />
                <b>Horas</b>
              </Form.Label>
              <Form.Text>Quantas horas em divisão de 0.5</Form.Text>
              <Form.Control name="formHours" type="number" step="0.5" min="0" placeholder="0.0"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formWhat">
              <Form.Label>
                <img src={process.env.PUBLIC_URL + '/shaka.png'}
                  alt="Shaka emoji"
                  style={{height: "2em", width: "2em"}}
                />
                <b>O que foi trocado</b>
              </Form.Label>
              <Form.Text>Que serviço, produto ou ajuda</Form.Text>
              <Form.Control name="formWhat" type="text"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row style={{justifyContent: "center"}} >
            <Button variant="danger" type="submit">
              Solicitar
            </Button>
          </Form.Row>
          <br/>
        </Form>
      </Card>
    );
  }
}

export default Transaction;