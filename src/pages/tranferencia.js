import React from "react";
import "./Pages.css";
import styled from "styled-components";

import BackgroundImage from "../img/background.png";
import HourGlass from "../img/hourglass.png"

import Rodape from '../components/Rodape';
import Transaction from '../components/Transaction';

const Container = styled.div`
    height: 88vh;
    background-image: url("${BackgroundImage}");
    background-color: #000000;
    background-size: cover;
    background-repeat: no-repeat;
    display:grid;
    grid-template-rows: 1fr 9fr;
    grid-template-columns: 23% 54% 23%;
`
const Transferencia = () =>{

    return(
        <section id="tela-toda">
            <Container>
                <div className="title">
                    <img src={HourGlass}
                        alt="Hourglass emoji"
                        style={{ height: "2em", width: "2em" }}
                    /> &nbsp;&nbsp;
                    <p><b>Banco de Tempo</b> Florianópolis</p>
                </div>
                <section id="form"><Transaction/></section>
            </Container>
            <Rodape />
        </section>
    )
}

export default Transferencia