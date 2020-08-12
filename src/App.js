import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Transaction from './forms/Transaction';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="title">
              <img src={process.env.PUBLIC_URL + '/hourglass.png'}
                    alt="Hourglass emoji"
                    style={{height: "2em", width: "2em"}}
              /> &nbsp;&nbsp;
              <b>Banco de Tempo</b> Florianópolis
            </div>
          </Col>
        </Row>
        <Row>
          <Col/>
          <Col xs={7}><Transaction/></Col>
          <Col/>
        </Row>
        <Row><Col/></Row>
      </Container>
    );
  }
}

export default App;
